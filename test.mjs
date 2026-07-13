/* Smoke + calibration tests for the grading engine and all four subject banks.
   Run:  npm test   (node test.mjs). No dependencies. Exits non-zero on failure.
   Data-driven so it survives question edits. */
import * as physics from "./functions/_bank.js";
import * as biology from "./functions/_biology.js";
import * as chemistry from "./functions/_chemistry.js";
import * as maths from "./functions/_maths.js";
import { validateBank } from "./functions/_validate.js";
import { _parseNumber as P } from "./functions/_grade.js";

let failed = 0;
function assert(name, cond) { console.log((cond ? "PASS  " : "FAIL  ") + name); if (!cond) failed++; }

const correct = (q) => q.type === "mcq" ? { given: q.correct }
  : q.type === "work" ? { given: String(q.accept[0]) } : { given: q.accept[0] };
const wrong = (q) => q.type === "mcq" ? { given: (q.correct + 1) % q.opts.length }
  : q.type === "work" ? { given: String(Number(q.accept[0]) * 1000 + 12345) } : { given: "zzz-not-real" };
const cfgOf = (m) => ({ SUBJECT: m.SUBJECT, TOPIC_ORDER: m.TOPIC_ORDER, QUESTIONS: m.QUESTIONS,
  WHY: m.WHY, STRANDS: m.STRANDS, STRAND_WEIGHTS: m.STRAND_WEIGHTS });

const CAL = [["Physics", physics], ["Mathematics", maths], ["Chemistry", chemistry]];
const LEGACY = [["Biology", biology]];
const ALL = [...CAL, ...LEGACY];

/* ===================== 1. Structure / no leakage (all subjects) ===================== */
for (const [label, m] of ALL) {
  const pub = m.publicQuestions();
  assert(`${label}: public payload hides answer key`,
    !/"(correct|accept|acceptedUnits|steps|tolerance|ref|product|difficulty)":/.test(JSON.stringify(pub)));
  assert(`${label}: public payload has every question`, pub.questions.length === m.QUESTIONS.length);
}

/* ===================== 2. Calibrated bank validation ===================== */
for (const [label, m] of CAL) {
  const v = validateBank(cfgOf(m), { calibrated: true });
  assert(`${label}: calibrated bank validates (0 errors)` + (v.ok ? "" : " -> " + v.errors.join("; ")), v.ok);
  assert(`${label}: 40 questions / 10 topics / 4 per topic`,
    m.QUESTIONS.length === 40 && m.TOPIC_ORDER.length === 10 &&
    m.TOPIC_ORDER.every(t => m.QUESTIONS.filter(q => q.topic === t).length === 4));
  const d = m.QUESTIONS.reduce((o, q) => (o[q.difficulty] = (o[q.difficulty] || 0) + 1, o), {});
  assert(`${label}: difficulty distribution 10F/20S/10U`,
    d.foundation === 10 && d.standard_exam === 20 && d.upper_exam === 10);
}
/* legacy banks: warnings allowed, must not have runtime-breaking errors */
for (const [label, m] of LEGACY) {
  const v = validateBank(cfgOf(m), { calibrated: false });
  assert(`${label}: legacy bank has no hard errors`, v.errors.length === 0);
}

/* ===================== 3. Scoring (all subjects) ===================== */
for (const [label, m] of ALL) {
  const r1 = await m.gradeAndReport("Sam", m.QUESTIONS.map(correct));
  assert(`${label}: all-correct rawScore 100`, r1.rawScore === 100);
  assert(`${label}: all-correct examScore 100`, r1.examScore === 100);
  assert(`${label}: all-correct readinessScore 100`, r1.readinessScore === 100);
  assert(`${label}: all-correct → no forced recommendation`, r1.recommendationState === "none_needed" && r1.recs.length === 0);

  const r0 = await m.gradeAndReport("", m.QUESTIONS.map(() => ({ given: null })));
  assert(`${label}: blank rawScore 0`, r0.rawScore === 0);
  assert(`${label}: blank marks all not-attempted`, r0.solutions.every(s => s.mark === "blank"));

  // one topic all wrong → exactly that topic flagged (Essential), cautious label present
  const weakTopic = m.TOPIC_ORDER[0];
  const r2 = await m.gradeAndReport("", m.QUESTIONS.map(q => q.topic === weakTopic ? wrong(q) : correct(q)));
  assert(`${label}: one weak topic → it is flagged`, r2.weakTopics.includes(weakTopic));
  assert(`${label}: weak topic tier is Essential (priority)`,
    (r2.recs.find(x => x.topic === weakTopic) || {}).tier === "Essential");
  assert(`${label}: healthy topics not flagged`, r2.weakTopics.length === 1);
  assert(`${label}: topic labels use cautious sample wording`,
    r2.topics.every(t => /sample|evidence/.test(t.label)));
}

/* ===================== 4. Marks weighting (calibrated) ===================== */
{
  // an upper (3-mark) correct is worth more than a foundation (1-mark) correct
  const onlyUpper = physics.QUESTIONS.map(q => q.difficulty === "upper_exam" ? correct(q) : { given: null });
  const onlyFound = physics.QUESTIONS.map(q => q.difficulty === "foundation" ? correct(q) : { given: null });
  const ru = await physics.gradeAndReport("", onlyUpper);
  const rf = await physics.gradeAndReport("", onlyFound);
  assert("Physics: 10 upper correct (30 marks) scores higher than 10 foundation (10 marks)",
    ru.rawScore > rf.rawScore && ru.rawScore === Math.round(30 / 80 * 100) && rf.rawScore === Math.round(10 / 80 * 100));
  // readiness ignores foundation: all-foundation-correct → readiness 0
  assert("Physics: readiness ignores foundation-only success", rf.readinessScore === 0);
}

/* ===================== 5. Maths strand-weighted exam score ===================== */
{
  // Get every Algebra-strand (weight 0.35) question right, everything else wrong.
  const alg = maths.QUESTIONS.map(q => maths.STRANDS[q.topic] === "Algebra" ? correct(q) : wrong(q));
  const r = await maths.gradeAndReport("", alg);
  // Algebra fully correct → its strand contributes 0.35; others 0 → examScore ≈ 35
  assert("Maths: strand-weighted examScore reflects Algebra weight (~35)", Math.abs(r.examScore - 35) <= 1);
}

/* ===================== 6. Numeric parser ===================== */
const approx = (a, b) => Math.abs(a - b) < 1e-6;
assert("parser: 3/8 = 0.375", approx(P("3/8"), 0.375));
assert("parser: 1/12 ≈ 0.0833", Math.abs(P("1/12") - 1 / 12) < 1e-9);
assert("parser: equivalent fraction 6/16 = 0.375", approx(P("6/16"), 0.375));
assert("parser: negative -3", P("-3") === -3);
assert("parser: decimal 0.75", P("0.75") === 0.75);
assert("parser: percentage 25% → 25", P("25%") === 25);
assert("parser: scientific 3x10^8", P("3x10^8") === 3e8);
assert("parser: scientific 3e8", P("3e8") === 3e8);
assert("parser: superscript 9.6 × 10¹⁵", P("9.6 × 10¹⁵") === 9.6e15);
assert("parser: thousands comma 1,000,000", P("1,000,000") === 1000000);
assert("parser: unit suffix '5500 N' → 5500", P("5500 N") === 5500);
assert("parser: speed unit '16 m/s' → 16 (slash ignored)", P("16 m/s") === 16);
assert("parser: malformed '3/' → null", P("3/") === null);
assert("parser: malformed '/8' → null", P("/8") === null);
assert("parser: malformed '1/2/3' → null", P("1/2/3") === null);
assert("parser: empty → null", P("") === null && P("   ") === null);
assert("parser: pure text → null", P("hello") === null);
assert("parser: div-by-zero 5/0 → null", P("5/0") === null);
assert("parser: answer with < > & does not crash", P("<3") === 3 || P("<3") === null); // whichever; must not throw
// unit-with-digits must NOT pollute the value (regression: dm³→3, m/s²→2, kg/m³→3 were appended)
assert("parser: '0.08 mol/dm³' → 0.08 (unit not appended)", P("0.08 mol/dm³") === 0.08);
assert("parser: '2 m/s²' → 2 (was polluted to 22)", P("2 m/s²") === 2);
assert("parser: '3000 kg/m³' → 3000 (was polluted to 30003)", P("3000 kg/m³") === 3000);
assert("parser: '1.2 cm³/s' → 1.2 (unit slash + exponent)", P("1.2 cm³/s") === 1.2);
assert("parser: '5 g/cm³' → 5", P("5 g/cm³") === 5);
assert("parser: currency '€36' → 36 (symbol prefix)", P("€36") === 36);
assert("parser: still rejects malformed '3/' with no unit", P("3/") === null);

/* ===================== 7. Physics units + tolerance + fraction fairness ===================== */
{
  // student writes unit suffix + scientific notation on the relevant items
  const idx = maths.QUESTIONS.findIndex(q => q.id === "mat-t10-f");
  const ans = maths.QUESTIONS.map((q, i) => i === idx ? { given: "3/8" } : { given: null });
  const r = await maths.gradeAndReport("", ans);
  assert("Maths: probability answered as fraction 3/8 marked correct", r.solutions[idx].mark === "right");

  const uIdx = physics.QUESTIONS.findIndex(q => q.id === "phy-t10-u");
  const pans = physics.QUESTIONS.map((q, i) => i === uIdx ? { given: "9.6 x 10^15 m" } : { given: null });
  const rp = await physics.gradeAndReport("", pans);
  assert("Physics: standard-form + unit answer marked correct", rp.solutions[uIdx].mark === "right");

  // per-question tolerance: mat-t1-s rounding, tolerance 0.001 rejects a wrong-method value
  const rIdx = maths.QUESTIONS.findIndex(q => q.id === "mat-t1-s");
  const rej = maths.QUESTIONS.map((q, i) => i === rIdx ? { given: "27.34" } : { given: null });
  const rr = await maths.gradeAndReport("", rej);
  assert("Maths: tight tolerance rejects truncated 27.34 (answer 27.35)", rr.solutions[rIdx].mark === "wrong");
}

console.log(failed ? `\n${failed} test(s) failed.` : "\nAll tests passed.");
process.exit(failed ? 1 : 0);
