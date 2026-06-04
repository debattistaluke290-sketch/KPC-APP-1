/* TEMPORARY diagnostic endpoint - safe to delete.
   GET /api/diag  -> attempts the three Klaviyo write calls with a TEST profile
   and reports each HTTP status + error body, so we can see what fails.
   Uses a throwaway test email; never returns the API key. */
function json(o) {
  return new Response(JSON.stringify(o), {
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}

export const onRequestGet = async ({ env }) => {
  const key = env && env.KLAVIYO_API_KEY;
  const listId = (env && env.KLAVIYO_LIST_ID) || null;
  const out = { hasKey: !!key, hasList: !!listId, listId, steps: {} };
  if (!key) return json(out);

  const headers = {
    "Authorization": `Klaviyo-API-Key ${key}`,
    "revision": "2024-10-15",
    "content-type": "application/json",
    "accept": "application/json"
  };
  const testEmail = "kpc-diag-test@example.com";
  const profileAttributes = {
    email: testEmail,
    first_name: "Diag Test",
    properties: { lead_source: "Diagnostic App", last_diagnostic_subject: "Physics", diagnostic_score: 50 }
  };

  // 1) profile-import (write)
  try {
    const r = await fetch("https://a.klaviyo.com/api/profile-import", {
      method: "POST", headers,
      body: JSON.stringify({ data: { type: "profile", attributes: profileAttributes } })
    });
    out.steps.profileImport = { status: r.status, body: (await r.text()).slice(0, 500) };
  } catch (e) { out.steps.profileImport = { error: String(e) }; }

  // 2) subscribe to list (write)
  if (listId) {
    try {
      const r = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs", {
        method: "POST", headers,
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: { data: [{ type: "profile", attributes: { email: testEmail, subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } } } }] }
            },
            relationships: { list: { data: { type: "list", id: listId } } }
          }
        })
      });
      out.steps.subscribe = { status: r.status, body: (await r.text()).slice(0, 500) };
    } catch (e) { out.steps.subscribe = { error: String(e) }; }
  }

  // 3) event (write)
  try {
    const r = await fetch("https://a.klaviyo.com/api/events", {
      method: "POST", headers,
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            properties: { subject: "Physics", score: 50 },
            metric: { data: { type: "metric", attributes: { name: "Completed Physics Diagnostic" } } },
            profile: { data: { type: "profile", attributes: profileAttributes } }
          }
        }
      })
    });
    out.steps.event = { status: r.status, body: (await r.text()).slice(0, 500) };
  } catch (e) { out.steps.event = { error: String(e) }; }

  return json(out);
};
