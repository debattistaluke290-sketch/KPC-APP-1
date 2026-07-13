/* GET /api/questions?subject=physics|biology|chemistry|maths
   Returns the PUBLIC question set for the requested subject (no answers).
   Defaults to physics. */
import { publicQuestions as physicsPublic } from "../_bank.js";
import { publicQuestions as biologyPublic } from "../_biology.js";
import { publicQuestions as chemistryPublic } from "../_chemistry.js";
import { publicQuestions as mathsPublic } from "../_maths.js";
import { publicQuestions as maths6Public } from "../_maths6.js";
import { publicQuestions as maths7Public } from "../_maths7.js";
import { publicQuestions as maths8Public } from "../_maths8.js";

const PUBLIC = {
  physics: physicsPublic,
  biology: biologyPublic,
  chemistry: chemistryPublic,
  maths: mathsPublic,
  "year 6 maths": maths6Public,
  "year 7 maths": maths7Public,
  "year 8 maths": maths8Public
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
