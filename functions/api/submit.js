/* POST /api/submit
   Body: { subject, name, email, consent, answers: [{given}, ...] }
   - Grades server-side against the hidden key for the chosen subject
   - Pushes the lead + event to Klaviyo (best-effort, no-ops without key)
   - Returns the full report JSON for the browser to render
*/
import { gradeAndReport as gradePhysics } from "../_bank.js";
import { gradeAndReport as gradeBiology } from "../_biology.js";
import { syncKlaviyo } from "../_klaviyo.js";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" }
  });

export const onRequestPost = async ({ request, env }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const email = (body.email || "").trim();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "A valid email is required." }, 400);
  }
  if (!body.consent) {
    return json({ error: "Consent is required to receive results." }, 400);
  }

  const subject = (body.subject || "physics").toLowerCase();
  const grade = subject === "biology" ? gradeBiology : gradePhysics;
  const report = grade(body.name, Array.isArray(body.answers) ? body.answers : []);

  // Fire lead capture to Klaviyo. Pass consent through so the list subscription
  // step runs. Do not let a Klaviyo hiccup break the user's result.
  try {
    await syncKlaviyo(env, { name: body.name, email, consent: !!body.consent }, report);
  } catch (e) {
    console.log("[submit] klaviyo sync failed:", e);
  }

  return json(report);
};
