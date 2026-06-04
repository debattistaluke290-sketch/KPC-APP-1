/* Smoke tests for the grading + report logic.
   Run with:  npm test   (or:  node test.mjs)
   No dependencies. Exits non-zero if any assertion fails. */
import { publicQuestions, gradeAndReport, QUESTIONS } from "./functions/_bank.js";

let failed = 0;
function assert(name, cond) {
  console.log((cond ? "PASS  " : "FAIL  ") + name);
  if (!cond) failed++;
}

// 1) Public payload must not leak answers
const pub = publicQuestions();
assert("public payload hides correct/accept/steps",
  !/correct|accept|steps/i.test(JSON.stringify(pub)));
assert("public payload has all questions", pub.questions.length === QUESTIONS.length);

// 2) All-correct → 100%, no weak topics
const allCorrect = QUESTIONS.map(q => q.type === "mcq" ? { given: q.correct } : { given: String(q.accept[0]) });
const r1 = gradeAndReport("Sarah", allCorrect);
assert("all-correct scores 100%", r1.score === 100);
assert("all-correct has zero weak topics", r1.weakTopics.length === 0);

// 3) Mixed → Waves + Magnetism wrong, flagged and prioritised
const mixed = QUESTIONS.map(q =>
  ["Magnetism", "Waves"].includes(q.topic)
    ? { given: q.type === "mcq" ? (q.correct + 1) % q.opts.length : "0" }
    : (q.type === "mcq" ? { given: q.correct } : { given: String(q.accept[0]) })
);
const r2 = gradeAndReport("Luke", mixed);
assert("mixed flags Waves + Magnetism weak",
  r2.weakTopics.includes("Waves") && r2.weakTopics.includes("Magnetism"));

// 4) Blank → 0%, every question 'not attempted'
const r3 = gradeAndReport("", QUESTIONS.map(() => ({ given: null })));
assert("blank scores 0%", r3.score === 0);
assert("blank marks all not-attempted", r3.solutions.every(s => s.mark === "blank"));

// 5) Numeric tolerance accepts a units suffix
const eIdx = QUESTIONS.findIndex(q => q.topic === "Energy" && q.type === "work");
const tol = QUESTIONS.map((q, i) => i === eIdx ? { given: "12.65 m/s" } : { given: null });
assert("tolerance accepts '12.65 m/s'", gradeAndReport("", tol).solutions[eIdx].mark === "right");

console.log(failed ? `\n${failed} test(s) failed.` : "\nAll tests passed.");
process.exit(failed ? 1 : 0);
