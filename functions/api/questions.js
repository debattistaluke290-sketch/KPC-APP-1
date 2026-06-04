/* GET /api/questions
   Returns the PUBLIC question set (no correct answers, no worked solutions).
   Safe to cache briefly. */
import { publicQuestions } from "../_bank.js";

export const onRequestGet = () => {
  return new Response(JSON.stringify(publicQuestions()), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=300"
    }
  });
};
