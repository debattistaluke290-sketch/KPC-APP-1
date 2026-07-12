/* Smoke tests for the grading + report logic across every subject.
   Run with:  npm test   (or:  node test.mjs)
   No dependencies. Exits non-zero if any assertion fails.

   These tests are DATA-DRIVEN: they derive topics, answers and indices from
   each bank at runtime, so they keep passing after you edit the questions.
   (They do assume every topic has at least one question and that "work"
   questions carry an `accept` array + `unit`, which the engine requires.) */
import * as physics from "./functions/_bank.js";
import * as biology from "./functions/_biology.js";
import * as chemistry from "./functions/_chemistry.js";
import * as maths from "./functions/_maths.js";

const SUBJECTS = [
  ["Physics", physics],
  ["Biology", biology],
  ["Chemistry", chemistry],
  ["Maths", maths]
];

let failed = 0;
function assert(name, cond) {
  console.log((cond ? "PASS  " : "FAIL  ") + name);
  if (!cond) failed++;
}

/* A correct answer for any question type. */
function correctAnswer(q) {
  if (q.type === "mcq") return { given: q.correct };
  if (q.type === "work") return { given: String(q.accept[0]) };
  return { given: q.accept[0] }; // text
}

/* A definitely-wrong answer for any question type. */
function wrongAnswer(q) {
  if (q.type === "mcq") return { given: (q.correct + 1) % q.opts.length };
  if (q.type === "work") return { given: String(Number(q.accept[0]) * 1000 + 12345) };
  return { given: "zzz-not-a-real-answer" }; // text (no env.AI here, so this stays wrong)
}

for (const [label, mod] of SUBJECTS) {
  const { publicQuestions, gradeAndReport, QUESTIONS, TOPIC_ORDER } = mod;

  // 1) The public payload must never leak the answer key.
  const pub = publicQuestions();
  assert(`${label}: public payload hides answer key`,
    !/"(correct|accept|steps|ref|product|difficulty)":/.test(JSON.stringify(pub)));
  assert(`${label}: public payload has every question`,
    pub.questions.length === QUESTIONS.length);

  // 2) All-correct -> 100%, no weak topics.
  const r1 = await gradeAndReport("Sarah", QUESTIONS.map(correctAnswer));
  assert(`${label}: all-correct scores 100%`, r1.score === 100);
  assert(`${label}: all-correct has zero weak topics`, r1.weakTopics.length === 0);

  // 3) Blank -> 0%, every question 'not attempted'.
  const r2 = await gradeAndReport("", QUESTIONS.map(() => ({ given: null })));
  assert(`${label}: blank scores 0%`, r2.score === 0);
  assert(`${label}: blank marks all not-attempted`,
    r2.solutions.every(s => s.mark === "blank"));

  // 4) Getting one whole topic wrong flags exactly that topic as weak.
  const weakTopic = TOPIC_ORDER[0];
  const targeted = QUESTIONS.map(q => q.topic === weakTopic ? wrongAnswer(q) : correctAnswer(q));
  const r3 = await gradeAndReport("Luke", targeted);
  assert(`${label}: flags "${weakTopic}" as a weak topic`,
    r3.weakTopics.includes(weakTopic));
  assert(`${label}: healthy topics are not flagged weak`,
    r3.weakTopics.length === 1);

  // 5) Numeric grading tolerates a units suffix (e.g. "1.6 m/s").
  const wIdx = QUESTIONS.findIndex(q => q.type === "work" && q.unit);
  if (wIdx >= 0) {
    const q = QUESTIONS[wIdx];
    const answers = QUESTIONS.map((_, i) =>
      i === wIdx ? { given: `${q.accept[0]} ${q.unit}` } : { given: null });
    const r4 = await gradeAndReport("", answers);
    assert(`${label}: numeric answer accepts a "${q.unit}" suffix`,
      r4.solutions[wIdx].mark === "right");
  }
}

console.log(failed ? `\n${failed} test(s) failed.` : "\nAll tests passed.");
process.exit(failed ? 1 : 0);
