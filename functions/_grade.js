/* =========================================================================
   Shared grading engine for subject banks (server side only).
   A subject module supplies a config:
     { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY, [STRANDS], [STRAND_WEIGHTS] }
   and calls publicQuestions(cfg) / gradeAndReport(cfg, name, answers, env).
   Supports question types: "mcq", "work" (numeric), "text" (lenient + AI).

   Calibrated banks (Physics/Maths) add per-question metadata:
     id, marks, tolerance, acceptedUnits, difficulty (foundation|standard_exam|
     upper_exam|stretch), and Maths adds STRANDS + STRAND_WEIGHTS for a
     strand-weighted estimated-examination score.
   Legacy banks (Biology/Chemistry) omit these and fall back to safe defaults,
   so their behaviour is unchanged. The report is a strict SUPERSET of the old
   shape, so the existing frontend keeps working.
   ========================================================================= */

/* Cautious topic language (4 items/topic is a limited sample, not a measurement). */
function sampleLabelFor(c, n) {
  if (n === 4) {
    if (c === 4) return "Secure on this sample";
    if (c === 3) return "Mostly secure on this sample";
    if (c === 2) return "Possible gap — limited evidence";
    return "Priority concern — limited evidence";
  }
  const r = n ? c / n : 0;               // legacy banks (n may not be 4)
  if (r >= 0.75) return "Secure on this sample";
  if (r >= 0.5) return "Mostly secure on this sample";
  if (r >= 0.25) return "Possible gap — limited evidence";
  return "Priority concern — limited evidence";
}
function tierFor(label) {
  if (label.startsWith("Priority")) return "Essential";
  if (label.startsWith("Possible")) return "Recommended";
  if (label.startsWith("Mostly")) return "Optional";
  return "Not currently needed";
}
function levelFor(correct, total) {           // green/amber/red kept for frontend colours
  const r = total ? correct / total : 0;
  if (r >= 0.75) return "green";
  if (r >= 0.5) return "amber";
  return "red";
}

export function publicQuestions(cfg) {
  return {
    subject: cfg.SUBJECT,
    topicOrder: cfg.TOPIC_ORDER,
    questions: cfg.QUESTIONS.map(q => ({
      id: q.id || null,
      topic: q.topic, type: q.type, q: q.q,
      data: q.data || null, dia: q.dia || null,
      opts: q.type === "mcq" ? q.opts : null,
      unit: q.unit || null
      // correct, accept, acceptedUnits, tolerance, steps, ref, product,
      // difficulty and all private metadata are intentionally omitted.
    }))
  };
}

/* -------- numeric parsing (deterministic; NO eval) --------
   Handles: integers, negatives, decimals, thousands commas, percent sign,
   unit suffixes, scientific notation (3e8 / 3x10^8 / 3*10^8 / 3×10^8 / 3·10^8),
   unicode superscripts (10⁸), and simple fractions a/b. Malformed → null. */
const SUP = { "⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","⁻":"-" };
function parseNumber(val) {
  if (val == null) return null;
  let s = String(val).toLowerCase().trim();
  if (!s) return null;
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, m => "^" + [...m].map(c => SUP[c]).join(""));
  s = s.replace(/\s+/g, "");
  s = s.replace(/(×|x|\*|·)10\^?/g, "e");     // 3×10^8 -> 3e8
  s = s.replace(/(^|[^0-9.])10\^/g, "$11e");  // bare 10^8 -> 1e8
  s = s.replace(/,/g, "");                     // thousands separators
  s = s.replace(/%/g, "");                     // percent sign (value as written)
  if (s.includes("/")) {                       // simple fraction a/b
    const fm = s.match(/^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/);
    if (fm) { const den = parseFloat(fm[2]); if (den === 0) return null; return parseFloat(fm[1]) / den; }
    // a slash touching a digit that is NOT a clean fraction (e.g. "3/", "/8", "1/2/3") = malformed
    if (/\d\//.test(s) || /\/\d/.test(s)) return null;
    // otherwise the slash is only inside a unit (e.g. "16m/s") — fall through and ignore it
  }
  s = s.replace(/[^0-9.\-e+]/g, "");
  if (s === "" || s === "-" || s === "." || s === "e" || s === "+") return null;
  const n = parseFloat(s);
  return isNaN(n) || !isFinite(n) ? null : n;
}
// Exposed for tests.
export const _parseNumber = parseNumber;

function checkWork(item, val) {
  const num = parseNumber(val);
  if (num === null) return false;
  const perQ = (typeof item.tolerance === "number") ? item.tolerance : null;
  return (item.accept || []).some(a => {
    const tol = perQ !== null ? perQ : Math.max(0.15, Math.abs(a) * 0.03);
    return Math.abs(num - a) <= tol;
  });
}

/* -------- lenient text (unchanged; used by Biology/Chemistry) -------- */
function normText(s) {
  return String(s || "").toLowerCase()
    .replace(/[.,;:!?'"()\[\]\-\/]/g, " ")
    .replace(/\b(the|a|an)\b/g, " ")
    .replace(/\s+/g, " ").trim();
}
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
    }
  }
  return d[m][n];
}
function tolFor(s) { return s.length <= 4 ? 1 : (s.length <= 8 ? 2 : 3); }

async function checkText(item, val, env, subject) {
  const n = normText(val);
  if (!n) return false;
  const ns = n.replace(/ /g, "");
  const accepts = (item.accept || []).map(normText).filter(Boolean);
  for (const a of accepts) {
    const as = a.replace(/ /g, "");
    if (ns === as) return true;
    if (levenshtein(ns, as) <= tolFor(as)) return true;
    if (n === a) return true;
    if (levenshtein(n, a) <= tolFor(a)) return true;
    if (!a.includes(" ")) {
      for (const tok of n.split(" ")) {
        if (tok === a || levenshtein(tok, a) <= tolFor(a)) return true;
      }
    }
  }
  if (env && env.AI) {
    try {
      const prompt =
        "You are marking a short-answer O-Level " + (subject || "Science") + " question for a 15-16 year old. " +
        "Decide if the student's answer is essentially correct, allowing spelling mistakes, synonyms and extra words. " +
        "Reply with ONLY one word: YES or NO.\n" +
        "Question: " + item.q + "\n" +
        "Accepted correct answer(s): " + (item.accept || []).join(" / ") + "\n" +
        "Student's answer: " + val;
      const out = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
        messages: [{ role: "user", content: prompt }], max_tokens: 4
      });
      const txt = ((out && (out.response || out.result || out.text)) || "") + "";
      return /\byes\b/i.test(txt);
    } catch (e) {
      console.log("[ai judge] error:", e);
      return false;
    }
  }
  return false;
}

const qMarks = (q) => (typeof q.marks === "number" && q.marks > 0) ? q.marks : 1;
const qDiff = (q) => q.difficulty || "standard_exam";
const isSecureTier = (q) => qDiff(q) !== "foundation"; // standard_exam/upper_exam count to readiness

export async function gradeAndReport(cfg, name, answers = [], env) {
  const { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY, STRANDS, STRAND_WEIGHTS } = cfg;

  const tally = {};                          // per topic: correct/total (count) + marks
  TOPIC_ORDER.forEach(t => (tally[t] = { c: 0, n: 0, mA: 0, mAvail: 0 }));

  let marksAchieved = 0, marksAvailable = 0;      // overall (marks-weighted)
  let suAchieved = 0, suAvailable = 0;            // standard+upper only (readiness)
  const strandAgg = {};                           // strand -> {a, avail}

  const solutions = [];
  for (let i = 0; i < QUESTIONS.length; i++) {
    const q = QUESTIONS[i];
    const a = answers[i] || {};
    const given = a.given;
    let answered = false, correct = false, givenDisplay = "-";

    if (q.type === "mcq") {
      if (given !== null && given !== undefined && given !== "") {
        answered = true;
        correct = Number(given) === q.correct;
        givenDisplay = q.opts[Number(given)] ?? "-";
      }
    } else {
      const s = (given == null) ? "" : String(given).trim();
      if (s.length > 0) {
        answered = true;
        givenDisplay = s;
        correct = q.type === "text" ? await checkText(q, s, env, SUBJECT) : checkWork(q, s);
      }
    }

    const marks = qMarks(q);
    const T = tally[q.topic];
    T.n++; T.mAvail += marks;
    marksAvailable += marks;
    if (correct) { T.c++; T.mA += marks; marksAchieved += marks; }
    if (isSecureTier(q)) { suAvailable += marks; if (correct) suAchieved += marks; }
    if (STRANDS && STRAND_WEIGHTS) {
      const st = STRANDS[q.topic];
      if (st) { (strandAgg[st] = strandAgg[st] || { a: 0, avail: 0 }).avail += marks; if (correct) strandAgg[st].a += marks; }
    }

    solutions.push({
      n: i + 1, q: q.q, dia: q.dia || null,
      mark: answered ? (correct ? "right" : "wrong") : "blank",
      markText: answered ? (correct ? "Correct" : "Incorrect") : "Not attempted",
      given: givenDisplay, steps: q.steps
    });
  }

  const totalQ = QUESTIONS.length;
  const totalCorrect = solutions.filter(s => s.mark === "right").length;

  const rawScore = marksAvailable ? Math.round((marksAchieved / marksAvailable) * 100) : 0;

  // Estimated examination score: strand-weighted for Maths, else raw.
  let examScore = rawScore;
  if (STRANDS && STRAND_WEIGHTS) {
    let wSum = 0, acc = 0;
    for (const st of Object.keys(STRAND_WEIGHTS)) {
      const agg = strandAgg[st];
      if (agg && agg.avail > 0) { wSum += STRAND_WEIGHTS[st]; acc += STRAND_WEIGHTS[st] * (agg.a / agg.avail); }
    }
    examScore = wSum > 0 ? Math.round((acc / wSum) * 100) : rawScore;
  }

  // Secure-readiness: mastery of standard+upper items only.
  const readinessScore = suAvailable ? Math.round((suAchieved / suAvailable) * 100) : rawScore;

  const topics = [];
  const weak = [];
  TOPIC_ORDER.forEach(t => {
    const { c, n } = tally[t];
    const lvl = levelFor(c, n);
    const sampleLabel = sampleLabelFor(c, n);
    const tier = tierFor(sampleLabel);
    topics.push({ name: t, c, n, level: lvl, label: sampleLabel, sampleLabel, tier });
    if (tier === "Essential" || tier === "Recommended") weak.push({ topic: t, level: lvl, tier });
  });

  // Essential (priority) first, then Recommended.
  weak.sort((a, b) => (a.tier === "Essential" ? 0 : 1) - (b.tier === "Essential" ? 0 : 1));
  const recs = weak.map(w => {
    const src = QUESTIONS.find(q => q.topic === w.topic);
    return {
      topic: w.topic, level: w.level, tier: w.tier,
      label: sampleLabelFor(tally[w.topic].c, tally[w.topic].n),
      ref: src ? src.ref : "", product: src ? src.product : "", why: WHY[w.topic] || ""
    };
  });
  const recommendationState = recs.length ? "targeted" : "none_needed";

  const summary =
    recommendationState === "none_needed"
      ? "You're in good shape across every topic on this sample — no priority gaps stand out. Keep practising past-paper questions to stay sharp."
    : rawScore >= 80 ? "A strong result — you're secure across most topics. Focus on the few areas in your plan below to tidy up the last marks."
    : rawScore >= 50 ? "A solid base, with a few topics to firm up. Your priority plan below shows where the evidence suggests focusing first."
    : "There's real room to grow, and the plan below points to exactly which topics to study first. Remember this is a short sample, not a final verdict.";

  return {
    name: (name || "").trim(),
    subject: SUBJECT,
    score: rawScore,               // headline (marks-weighted); kept as `score` for compatibility
    rawScore, examScore, readinessScore,
    totalCorrect, totalQ,
    marksAchieved, marksAvailable,
    summary,
    topics, solutions, recs,
    recommendationState,
    weakTopics: weak.map(w => w.topic)
  };
}
