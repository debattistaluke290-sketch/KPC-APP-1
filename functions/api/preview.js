/* POST /api/preview
   Body: { subject, answers: [{given}, ...] }
   Grades server-side and returns ONLY teaser data: score, totals and the
   weakest topic. No worked solutions, no recommendations, no email, no
   Klaviyo. Used to show a results teaser BEFORE the email gate, so the
   solutions stay locked until the student opts in.
*/
import { gradeAndReport as gradePhysics } from "../_bank.js";
import { gradeAndReport as gradeBiology } from "../_biology.js";
import { gradeAndReport as gradeChemistry } from "../_chemistry.js";
import { gradeAndReport as gradeMaths } from "../_maths.js";

const GRADERS = {
  physics: gradePhysics,
  biology: gradeBiology,
  chemistry: gradeChemistry,
  maths: gradeMaths
};

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

  const subject = (body.subject || "physics").toLowerCase();
  const grade = GRADERS[subject] || gradePhysics;
  const answers = Array.isArray(body.answers) ? body.answers : [];

  const rep = await grade("", answers, env);

  // Weakest topic: first red/amber (already priority-sorted in weakTopics),
  // otherwise the lowest correct-ratio topic.
  let weakest = (rep.weakTopics && rep.weakTopics[0]) || null;
  if (!weakest && rep.topics && rep.topics.length) {
    weakest = rep.topics.slice().sort((a, b) => (a.c / a.n) - (b.c / b.n))[0].name;
  }

  const reds = rep.topics.filter(t => t.level === "red").length;
  const ambers = rep.topics.filter(t => t.level === "amber").length;
  const greens = rep.topics.filter(t => t.level === "green").length;

  return json({
    subject: rep.subject,
    score: rep.score,
    totalCorrect: rep.totalCorrect,
    totalQ: rep.totalQ,
    weakest,
    reds,
    ambers,
    greens,
    topicCount: rep.topics.length
  });
};
