/* =========================================================================
   Bank validation helpers (used by tests). Calibrated banks (Physics/Maths)
   must be defect-free; legacy banks (Biology/Chemistry) may emit warnings
   instead of errors, unless a defect would break runtime grading.
   ========================================================================= */
import { publicQuestions } from "./_grade.js";

const TYPES = ["mcq", "work", "text"];
const CAL_DIFFS = ["foundation", "standard_exam", "upper_exam", "stretch"];

export function validateBank(cfg, opts = {}) {
  const calibrated = !!opts.calibrated;
  const errors = [], warnings = [];
  const push = (cond, msg) => { if (cond) (calibrated ? errors : warnings).push(msg); };
  const err = (cond, msg) => { if (cond) errors.push(msg); };

  const Q = cfg.QUESTIONS || [], T = cfg.TOPIC_ORDER || [];

  // Structural (runtime-critical → always errors)
  err(!Array.isArray(Q) || Q.length === 0, "QUESTIONS missing/empty");
  err(!Array.isArray(T) || T.length === 0, "TOPIC_ORDER missing/empty");

  const ids = Q.map(q => q.id).filter(Boolean);
  const dupes = ids.filter((x, i) => ids.indexOf(x) !== i);
  push(ids.length !== Q.length, "some questions have no id");
  err(dupes.length > 0, "duplicate ids: " + [...new Set(dupes)].join(","));

  Q.forEach((q, i) => {
    const at = q.id || ("#" + (i + 1));
    err(!T.includes(q.topic), `[${at}] topic not in TOPIC_ORDER: ${q.topic}`);
    err(!TYPES.includes(q.type), `[${at}] invalid type: ${q.type}`);
    if (q.type === "mcq") {
      err(!Array.isArray(q.opts) || q.opts.length < 2, `[${at}] mcq needs opts`);
      err(!(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < (q.opts || []).length), `[${at}] bad mcq correct index`);
    } else {
      err(!(Array.isArray(q.accept) && q.accept.length), `[${at}] ${q.type} needs accept[]`);
    }
    push(!q.steps, `[${at}] missing worked solution (steps)`);
    if (q.marks != null) err(!(typeof q.marks === "number" && q.marks > 0), `[${at}] marks must be > 0`);
    if (q.tolerance != null) err(!(typeof q.tolerance === "number" && q.tolerance >= 0), `[${at}] tolerance must be >= 0`);
    if (calibrated) {
      err(!q.id, `[#${i + 1}] calibrated question missing id`);
      err(!CAL_DIFFS.includes(q.difficulty), `[${at}] invalid difficulty: ${q.difficulty}`);
      err(!q.syllabusReference, `[${at}] missing syllabusReference`);
    }
  });

  // Calibrated composition: 10 topics × 4 = 40, each 1 foundation / 2 standard_exam / 1 upper_exam
  if (calibrated) {
    err(T.length !== 10, `expected 10 topics, got ${T.length}`);
    err(Q.length !== 40, `expected 40 questions, got ${Q.length}`);
    T.forEach(t => {
      const g = Q.filter(q => q.topic === t);
      err(g.length !== 4, `topic "${t}" has ${g.length} questions (need 4)`);
      const f = g.filter(q => q.difficulty === "foundation").length;
      const s = g.filter(q => q.difficulty === "standard_exam").length;
      const u = g.filter(q => q.difficulty === "upper_exam").length;
      err(!(f === 1 && s === 2 && u === 1), `topic "${t}" composition ${f}F/${s}S/${u}U (need 1/2/1)`);
    });
    if (cfg.STRANDS) T.forEach(t => err(!cfg.STRANDS[t], `topic "${t}" missing strand mapping`));
  }

  // Answer-key secrecy: the public payload must not leak private fields.
  try {
    const pub = JSON.stringify(publicQuestions(cfg));
    err(/"(correct|accept|acceptedUnits|steps|tolerance|ref|product|difficulty)":/.test(pub),
      "public payload leaks a private answer-key field");
  } catch (e) {
    err(true, "publicQuestions threw: " + e.message);
  }

  return { errors, warnings, ok: errors.length === 0 };
}
