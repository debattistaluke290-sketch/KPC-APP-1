/* GET /api/questions?subject=physics|biology|chemistry|maths
   Returns the PUBLIC question set for the requested subject (no answers).
   Defaults to physics. */
import { publicQuestions as physicsPublic } from "../_bank.js";
import { publicQuestions as biologyPublic } from "../_biology.js";
import { publicQuestions as chemistryPublic } from "../_chemistry.js";
import { publicQuestions as mathsPublic } from "../_maths.js";

const PUBLIC = {
  physics: physicsPublic,
  biology: biologyPublic,
  chemistry: chemistryPublic,
  maths: mathsPublic
};

export const onRequestGet = ({ request }) => {
  const url = new URL(request.url);
  const subject = (url.searchParams.get("subject") || "physics").toLowerCase();
  const fn = PUBLIC[subject] || physicsPublic;
  return new Response(JSON.stringify(fn()), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=300"
    }
  });
};
