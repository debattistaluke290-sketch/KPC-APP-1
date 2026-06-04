/* TEMPORARY diagnostic endpoint - safe to delete.
   GET /api/diag  -> reports whether the Klaviyo env vars reach the function
   and whether the API key is accepted by Klaviyo. Never returns the key. */
export const onRequestGet = async ({ env }) => {
  const hasKey = !!(env && env.KLAVIYO_API_KEY);
  const hasList = !!(env && env.KLAVIYO_LIST_ID);
  let keyCheck = "skipped (no key)";
  if (hasKey) {
    try {
      const r = await fetch("https://a.klaviyo.com/api/accounts/", {
        headers: {
          "Authorization": `Klaviyo-API-Key ${env.KLAVIYO_API_KEY}`,
          "revision": "2024-10-15",
          "accept": "application/json"
        }
      });
      keyCheck = "klaviyo status " + r.status;
    } catch (e) {
      keyCheck = "fetch error: " + (e && e.message ? e.message : String(e));
    }
  }
  return new Response(JSON.stringify({
    hasKey,
    hasList,
    listId: hasList ? env.KLAVIYO_LIST_ID : null,
    keyCheck
  }), { headers: { "content-type": "application/json", "cache-control": "no-store" } });
};
