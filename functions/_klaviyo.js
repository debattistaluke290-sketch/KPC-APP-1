/* =========================================================================
   Klaviyo integration (SERVER SIDE)
   -------------------------------------------------------------------------
   Best-effort: if KLAVIYO_API_KEY is not set, this no-ops so the app still
   works during development. When the key is present it:
     1. Creates/updates a Klaviyo profile (tagged by subject + score)
     2. Subscribes the lead to a DEDICATED list (KLAVIYO_LIST_ID) with consent,
        keeping diagnostic leads separate from the main store list
     3. Records a per-subject event ("Completed <Subject> Diagnostic") carrying
        the full worked solutions + study plan, so a Klaviyo flow can email them

   Cloudflare Pages -> Settings -> Variables and Secrets:
     KLAVIYO_API_KEY  (Secret)   - your Klaviyo private API key (pk_...)
     KLAVIYO_LIST_ID  (Plain)    - the ID of the "KPC Diagnostic Leads" list
   ========================================================================= */

const KLAVIYO_REVISION = "2024-10-15";

/* Turn the worked-solution HTML into clean plain text with line breaks,
   so it renders reliably inside a Klaviyo email (white-space: pre-line). */
function toText(html) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function syncKlaviyo(env, body, report) {
  const key = env && env.KLAVIYO_API_KEY;
  if (!key) {
    console.log("[klaviyo] no KLAVIYO_API_KEY set - skipping sync (dev mode).");
    return { skipped: true };
  }
  if (!body.email) return { skipped: true, reason: "no email" };

  const headers = {
    "Authorization": `Klaviyo-API-Key ${key}`,
    "revision": KLAVIYO_REVISION,
    "content-type": "application/json",
    "accept": "application/json"
  };

  const listId = (env && env.KLAVIYO_LIST_ID) || "";
  const metricName = `Completed ${report.subject} Diagnostic`;

  const profileAttributes = {
    email: body.email,
    first_name: report.name || body.name || "",
    properties: {
      lead_source: "Diagnostic App",
      last_diagnostic_subject: report.subject,
      diagnostic_score: report.score,
      weak_topics: report.weakTopics,
      date_taken: new Date().toISOString()
    }
  };

  // Rich, email-ready content for the flow.
  const plan = (report.recs || []).map(w => ({
    topic: w.topic, level: w.label, ref: w.ref, why: w.why
  }));
  const solutions = (report.solutions || []).map(s => ({
    n: s.n, q: s.q, mark: s.markText, given: s.given, steps_text: toText(s.steps)
  }));

  const eventProperties = {
    subject: report.subject,
    score: report.score,
    correct: report.totalCorrect,
    total: report.totalQ,
    weak_topics: report.weakTopics,
    weak_topics_str: (report.weakTopics || []).join(", "),
    plan,
    solutions
  };

  // 1) Upsert the profile (custom properties for tagging / segmentation)
  try {
    await fetch("https://a.klaviyo.com/api/profile-import", {
      method: "POST",
      headers,
      body: JSON.stringify({ data: { type: "profile", attributes: profileAttributes } })
    });
  } catch (e) {
    console.log("[klaviyo] profile upsert error:", e);
  }

  // 2) Subscribe to the dedicated diagnostic list (with marketing consent).
  if (listId && body.consent) {
    try {
      const res = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs", {
        method: "POST",
        headers,
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: {
                data: [{
                  type: "profile",
                  attributes: {
                    email: body.email,
                    subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } }
                  }
                }]
              }
            },
            relationships: { list: { data: { type: "list", id: listId } } }
          }
        })
      });
      if (!res.ok) console.log("[klaviyo] subscribe status:", res.status, await res.text());
    } catch (e) {
      console.log("[klaviyo] subscribe error:", e);
    }
  }

  // 3) Record the per-subject event the flow triggers on
  try {
    const res = await fetch("https://a.klaviyo.com/api/events", {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            properties: eventProperties,
            metric: { data: { type: "metric", attributes: { name: metricName } } },
            profile: { data: { type: "profile", attributes: profileAttributes } }
          }
        }
      })
    });
    if (!res.ok) console.log("[klaviyo] event status:", res.status, await res.text());
  } catch (e) {
    console.log("[klaviyo] event error:", e);
  }

  return { ok: true };
}
