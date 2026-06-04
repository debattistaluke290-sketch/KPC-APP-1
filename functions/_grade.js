/* =========================================================================
   Shared grading engine for subject banks (server side only).
   A subject module supplies a config { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY }
   and calls publicQuestions(cfg) / gradeAndReport(cfg, name, answers, env).
   Supports question types: "mcq", "work" (numeric), "text" (lenient + AI).
   ========================================================================= */

const LABEL = { green: "Strong", amber: "Okay", red: "Needs work" };

export function publicQuestions(cfg) {
  return {
    subject: cfg.SUBJECT,
    topicOrder: cfg.TOPIC_ORDER,
    questions: cfg.QUESTIONS.map(q => ({
      topic: q.topic, type: q.type, q: q.q,
      data: q.data || null, dia: q.dia || null,
      opts: q.type === "mcq" ? q.opts : null,
      unit: q.unit || null
    }))
  };
}

/* -------- numeric -------- */
function parseNum(val) {
  if (val == null) return null;
  let s = String(val).toLowerCase().trim().replace(/\s+/g, "").replace(/,/g, "");
  s = s.replace(/(×|x|\*)10\^?/g, "e").replace(/(^|[^0-9.])10\^/g, "$11e");
  s = s.replace(/[^0-9.\-e+]/g, "");
  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}
function checkWork(item, val) {
  const num = parseNum(val);
  if (num === null) return false;
  return item.accept.some(a => Math.abs(num - a) <= Math.max(0.15, Math.abs(a) * 0.03));
}

/* -------- lenient text -------- */
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

function levelFor(correct, total) {
  const r = total ? correct / total : 0;
  if (r >= 0.75) return "green";
  if (r >= 0.5) return "amber";
  return "red";
}

export async function gradeAndReport(cfg, name, answers = [], env) {
  const { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY } = cfg;
  const tally = {};
  TOPIC_ORDER.forEach(t => (tally[t] = { c: 0, n: 0 }));

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

    tally[q.topic].n++;
    if (correct) tally[q.topic].c++;
    solutions.push({
      n: i + 1, q: q.q, dia: q.dia || null,
      mark: answered ? (correct ? "right" : "wrong") : "blank",
      markText: answered ? (correct ? "Correct" : "Incorrect") : "Not attempted",
      given: givenDisplay, steps: q.steps
    });
  }

  const totalQ = QUESTIONS.length;
  const totalCorrect = solutions.filter(s => s.mark === "right").length;
  const pct = Math.round((totalCorrect / totalQ) * 100);

  const topics = [];
  const weak = [];
  TOPIC_ORDER.forEach(t => {
    const { c, n } = tally[t];
    const lvl = levelFor(c, n);
    topics.push({ name: t, c, n, level: lvl, label: LABEL[lvl] });
    if (lvl !== "green") weak.push({ topic: t, level: lvl });
  });

  weak.sort((a, b) => (a.level === "red" ? 0 : 1) - (b.level === "red" ? 0 : 1));
  const recs = weak.map(w => {
    const src = QUESTIONS.find(q => q.topic === w.topic);
    return { topic: w.topic, level: w.level, label: LABEL[w.level], ref: src.ref, product: src.product, why: WHY[w.topic] || "" };
  });

  const summary =
    pct >= 80 ? "Excellent work - you're strong across nearly every topic. A little polish on any amber areas and you're set."
    : pct >= 50 ? "A solid base, but a few topics are pulling your mark down. Your priority plan below shows exactly where to focus."
    : "There's real room to grow here - and that's good news, because the plan below tells you precisely what to study to climb fast.";

  return { name: (name || "").trim(), subject: SUBJECT, score: pct, totalCorrect, totalQ, summary, topics, solutions, recs, weakTopics: weak.map(w => w.topic) };
}
