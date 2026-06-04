/* =========================================================================
   Klaviyo integration (SERVER SIDE)
   -------------------------------------------------------------------------
   Best-effort: if KLAVIYO_API_KEY is not set, this no-ops so the app still
   works during development. When the key is present it:
     1. Creates/updates a Klaviyo profile for the email (with custom props)
     2. Records a "Completed Physics Diagnostic" event

   Build ONE flow in Klaviyo triggered by that event to send the results
   email (worked solutions + study plan + Shopify discount link).

   Set the key in Cloudflare Pages:
     Settings → Environment variables → KLAVIYO_API_KEY (Encrypted)
   ========================================================================= */

const KLAVIYO_REVISION = "2024-10-15";
const METRIC_NAME = "Completed Physics Diagnostic";

export async function syncKlaviyo(env, body, report) {
  const key = env && env.KLAVIYO_API_KEY;
  if (!key) {
    console.log("[klaviyo] no KLAVIYO_API_KEY set — skipping sync (dev mode).");
    return { skipped: true };
  }
  if (!body.email) return { skipped: true, reason: "no email" };

  const headers = {
    "Authorization": `Klaviyo-API-Key ${key}`,
    "revision": KLAVIYO_REVISION,
    "content-type": "application/json",
    "accept": "application/json"
  };

  const profileAttributes = {
    email: body.email,
    first_name: report.name || body.name || "",
    properties: {
      last_diagnostic_subject: report.subject,
      diagnostic_score: report.score,
      weak_topics: report.weakTopics,
      date_taken: new Date().toISOString()
    }
  };

  // 1) Upsert the profile (so segments/props are reliable even if the event lags)
  try {
    await fetch("https://a.klaviyo.com/api/profile-import", {
      method: "POST",
      headers,
      body: JSON.stringify({ data: { type: "profile", attributes: profileAttributes } })
    });
  } catch (e) {
    console.log("[klaviyo] profile upsert error:", e);
  }

  // 2) Record the event the flow triggers on
  try {
    const res = await fetch("https://a.klaviyo.com/api/events", {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            properties: {
              subject: report.subject,
              score: report.score,
              correct: report.totalCorrect,
              total: report.totalQ,
              weak_topics: report.weakTopics
            },
            metric: { data: { type: "metric", attributes: { name: METRIC_NAME } } },
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
