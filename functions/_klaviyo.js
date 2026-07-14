/* =========================================================================
   Klaviyo integration (SERVER SIDE) - lead capture + results-email trigger.
   -------------------------------------------------------------------------
   Best-effort: if KLAVIYO_API_KEY is not set, this no-ops so the app still
   works during development. When the key is present it:
     1. Creates/updates a Klaviyo profile, tagged with the subject + score
     2. Subscribes the lead to a DEDICATED list (KLAVIYO_LIST_ID) with consent,
        keeping evaluation-test leads separate from the main store list
     3. Records a SINGLE consolidated event ("Completed Evaluation Test", same
        name for every subject) carrying the full topic breakdown + priority
        plan (with KPC notes page refs) as event properties, so ONE Klaviyo
        Flow (trigger: this metric) can send the results email for every
        subject. Deliberately excludes the 40 individual worked solutions —
        those stay on-screen right after submitting; keeps the event payload
        small and the Flow template simple/reliable.

   Cloudflare Pages -> Settings -> Variables and Secrets:
     KLAVIYO_API_KEY  (Secret)   - your Klaviyo private API key (pk_...)
     KLAVIYO_LIST_ID  (Plain)    - the ID of the "KPC Evaluation Test Leads" list
   ========================================================================= */
import { pagesFor, collectionFor } from "./_notes.js";

const KLAVIYO_REVISION = "2024-10-15";
const RESULTS_METRIC = "Completed Evaluation Test";

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

  const profileAttributes = {
    email: body.email,
    first_name: report.name || body.name || "",
    properties: {
      lead_source: "Evaluation Test App",
      last_evaluation_subject: report.subject,
      evaluation_score: report.score,
      weak_topics: report.weakTopics,
      date_taken: new Date().toISOString()
    }
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

  // 3) Record ONE consolidated event (same metric name for every subject) carrying
  // everything the results-email Flow needs to render: score, topic breakdown
  // (each with its KPC notes page range) and the priority study plan.
  const exam = (report.examScore != null) ? report.examScore : report.score;
  const ready = (report.readinessScore != null) ? report.readinessScore : null;
  const topics = (report.topics || []).map(t => ({
    name: t.name, correct: t.c, total: t.n, level: t.level, label: t.label,
    pages: pagesFor(report.subject, t.name)
  }));
  const recs = (report.recs || []).map(w => ({
    topic: w.topic, tier: w.tier || "Recommended", why: w.why || "",
    pages: pagesFor(report.subject, w.topic)
  }));

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
              name: report.name || body.name || "",
              score: report.score,
              exam_score: exam,
              readiness_score: ready,
              correct: report.totalCorrect,
              total: report.totalQ,
              summary: report.summary || "",
              collection_url: collectionFor(report.subject),
              weak_topics: report.weakTopics,
              has_priority_gaps: !!(report.recs && report.recs.length),
              topics,
              recs
            },
            metric: { data: { type: "metric", attributes: { name: RESULTS_METRIC } } },
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
