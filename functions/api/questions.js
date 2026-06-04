/* GET /api/questions?subject=physics|biology
   Returns the PUBLIC question set for the requested subject (no answers).
   Defaults to physics. */
import { publicQuestions as physicsPublic } from "../_bank.js";
import { publicQuestions as biologyPublic } from "../_biology.js";

export const onRequestGet = ({ request }) => {
  const url = new URL(request.url);
  const subject = (url.searchParams.get("subject") || "physics").toLowerCase();
  const data = subject === "biology" ? biologyPublic() : physicsPublic();
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=300"
    }
  });
};
