/* =========================================================================
   KPC Diagnostic — Question Bank + Grading (SERVER SIDE ONLY)
   -------------------------------------------------------------------------
   This file lives in /functions and is imported by the API functions.
   It is NEVER served to the browser, so correct answers, accepted values
   and worked solutions stay private. The browser only ever receives the
   stripped "public" version (see publicQuestions()).

   TO ADD REAL CONTENT: edit the QUESTIONS array below. Each entry maps a
   topic + subtopic to a KPC Notes reference and (later) a Shopify product.
   ========================================================================= */

export const SUBJECT = "Physics";

export const TOPIC_ORDER = [
  "Forces & Motion", "Energy", "Waves", "Electricity", "Magnetism", "Particle Model"
];

/* Each question:
   topic     - must match a TOPIC_ORDER entry
   ref       - KPC Notes reference shown in the study plan
   product   - Shopify product handle / URL for this topic (placeholder)
   type      - "mcq" | "work"
   q         - question text
   data      - extra instruction line (optional)
   dia       - diagram key the FRONTEND renders (optional)  [SVG lives in frontend]
   opts      - MCQ options (mcq only)
   correct   - index of correct option (mcq only)           [PRIVATE]
   accept    - array of accepted numeric answers (work only) [PRIVATE]
   unit      - expected unit label (work only)
   steps     - worked solution HTML                          [PRIVATE]
*/
export const QUESTIONS = [
  { topic:"Forces & Motion", ref:"KPC Physics — Topic 1: Forces & Motion, Sect. 1.3",
    product:"physics-forces-motion", type:"work",
    q:"A car accelerates uniformly from rest to 24 m/s in 6 seconds. Calculate its acceleration.",
    data:"Give your answer in m/s².", accept:[4], unit:"m/s²",
    steps:`a = change in velocity ÷ time<br>a = (24 − 0) ÷ 6<br><span class="final">a = 4 m/s²</span>` },

  { topic:"Forces & Motion", ref:"KPC Physics — Topic 1: Forces & Motion, Sect. 1.2",
    product:"physics-forces-motion", type:"work", dia:"resultant",
    q:"The diagram shows two horizontal forces acting on a box. Calculate the resultant (net) force on the box.",
    data:"Give the size in newtons and state the direction.", accept:[7], unit:"N",
    steps:`Forces act in opposite directions, so subtract:<br>12 N (right) − 5 N (left) = 7 N<br><span class="final">Resultant = 7 N to the right</span>` },

  { topic:"Forces & Motion", ref:"KPC Physics — Topic 1: Forces & Motion, Sect. 1.1",
    product:"physics-forces-motion", type:"mcq",
    q:"Which of the following is a vector quantity?",
    opts:["Speed","Mass","Velocity","Energy"], correct:2,
    steps:`A vector has both size and direction. Velocity is speed in a given direction.<br><span class="final">Answer: Velocity</span>` },

  { topic:"Forces & Motion", ref:"KPC Physics — Topic 1: Forces & Motion, Sect. 1.5",
    product:"physics-forces-motion", type:"work", dia:"moments",
    q:"The beam shown is balanced on a pivot. A 20 N weight sits 3 m to the left of the pivot. Calculate the downward force F needed 2 m to the right of the pivot to keep the beam balanced.",
    data:"Give your answer in newtons (N).", accept:[30], unit:"N",
    steps:`Principle of moments: clockwise moment = anticlockwise moment.<br>20 N × 3 m = F × 2 m<br>60 = 2F → F = 60 ÷ 2<br><span class="final">F = 30 N</span>` },

  { topic:"Energy", ref:"KPC Physics — Topic 2: Energy Stores & Transfers, Sect. 2.4",
    product:"physics-energy", type:"work",
    q:"A 0.5 kg ball is dropped from a height of 8 m. Taking g = 10 N/kg and ignoring air resistance, calculate its speed just before it hits the ground.",
    data:"Give your answer in m/s (1 decimal place).", accept:[12.6,12.65,12.5,13,12], unit:"m/s",
    steps:`Energy is conserved: gravitational PE → kinetic energy.<br>½mv² = mgh → v = √(2gh)<br>v = √(2 × 10 × 8) = √160<br><span class="final">v ≈ 12.6 m/s</span>` },

  { topic:"Energy", ref:"KPC Physics — Topic 2: Energy Stores & Transfers, Sect. 2.2",
    product:"physics-energy", type:"mcq",
    q:"Efficiency of a device is calculated as…",
    opts:["useful output energy ÷ total input energy","total input ÷ useful output","power × time","force × distance"], correct:0,
    steps:`Efficiency = useful energy out ÷ total energy in (often ×100 for a %).<br><span class="final">Answer: useful output ÷ total input</span>` },

  { topic:"Waves", ref:"KPC Physics — Topic 3: Waves, Sect. 3.4",
    product:"physics-waves", type:"work",
    q:"A sound wave travels at 340 m/s with a frequency of 170 Hz. Calculate its wavelength.",
    data:"Give your answer in metres.", accept:[2], unit:"m",
    steps:`Wave equation: v = f × λ → λ = v ÷ f<br>λ = 340 ÷ 170<br><span class="final">λ = 2 m</span>` },

  { topic:"Waves", ref:"KPC Physics — Topic 3: Waves, Sect. 3.2",
    product:"physics-waves", type:"mcq", dia:"wave",
    q:"The diagram shows a wave. Which labelled distance represents the wavelength?",
    opts:["Distance X","Distance Y","Neither","Both X and Y"], correct:1,
    steps:`Wavelength is the distance of one full cycle (e.g. crest to crest) — distance Y. Distance X is the amplitude.<br><span class="final">Answer: Distance Y</span>` },

  { topic:"Electricity", ref:"KPC Physics — Topic 4: Electricity, Sect. 4.3",
    product:"physics-electricity", type:"work", dia:"circuit",
    q:"The circuit shows a 6 Ω and a 3 Ω resistor connected in series across a 9 V supply. Calculate the current flowing in the circuit.",
    data:"Give your answer in amperes (A).", accept:[1], unit:"A",
    steps:`Series resistors add: R = 6 + 3 = 9 Ω<br>Ohm's law: I = V ÷ R = 9 ÷ 9<br><span class="final">I = 1 A</span>` },

  { topic:"Electricity", ref:"KPC Physics — Topic 4: Electricity, Sect. 4.1",
    product:"physics-electricity", type:"mcq",
    q:"The unit of electrical resistance is the…",
    opts:["Volt","Watt","Ohm","Ampere"], correct:2,
    steps:`Resistance is measured in ohms (Ω).<br><span class="final">Answer: Ohm</span>` },

  { topic:"Magnetism", ref:"KPC Physics — Topic 5: Magnetism & Electromagnetism, Sect. 5.1",
    product:"physics-magnetism", type:"mcq",
    q:"When two like magnetic poles are brought together, they…",
    opts:["Attract","Repel","Have no effect","Lose their magnetism"], correct:1,
    steps:`Like poles (N–N or S–S) push apart; opposite poles attract.<br><span class="final">Answer: Repel</span>` },

  { topic:"Particle Model", ref:"KPC Physics — Topic 6: Particle Model of Matter, Sect. 6.2",
    product:"physics-particle-model", type:"work",
    q:"A block of metal has a mass of 200 g and a volume of 25 cm³. Calculate its density.",
    data:"Give your answer in g/cm³.", accept:[8], unit:"g/cm³",
    steps:`Density = mass ÷ volume<br>ρ = 200 ÷ 25<br><span class="final">ρ = 8 g/cm³</span>` },
];

/* Short "why" line per topic, used in the study plan. */
const WHY = {
  "Forces & Motion":"Revise resultant forces, moments, acceleration and vectors.",
  "Energy":"Tighten up energy transfers, efficiency and resource types.",
  "Waves":"Focus on the wave equation and identifying wavelength vs amplitude.",
  "Electricity":"Practise Ohm's law and series/parallel circuits.",
  "Magnetism":"Start with magnetic fields, poles and electromagnets.",
  "Particle Model":"Review density, states of matter and gas behaviour."
};

const LABEL = { green:"Strong", amber:"Okay", red:"Needs work" };

/* -------- PUBLIC payload: everything the browser needs, no answers -------- */
export function publicQuestions() {
  return {
    subject: SUBJECT,
    topicOrder: TOPIC_ORDER,
    questions: QUESTIONS.map(q => ({
      topic: q.topic,
      type: q.type,
      q: q.q,
      data: q.data || null,
      dia: q.dia || null,
      opts: q.type === "mcq" ? q.opts : null,
      unit: q.unit || null
      // NOTE: correct, accept, steps, ref, product are intentionally omitted.
    }))
  };
}

/* -------- Grading helpers -------- */
function checkWork(item, val) {
  const num = parseFloat(String(val).replace(/[^0-9.\-]/g, ""));
  if (isNaN(num)) return false;
  return item.accept.some(a => Math.abs(num - a) <= Math.max(0.15, Math.abs(a) * 0.03));
}
function levelFor(correct, total) {
  const r = total ? correct / total : 0;
  if (r >= 0.8) return "green";
  if (r >= 0.5) return "amber";
  return "red";
}

/* -------- Grade a set of answers and build the full report -------- *
   answers: array aligned to QUESTIONS index. Each item is one of:
     { given: <number> }   (mcq: chosen option index, or null)
     { given: <string> }   (work: typed answer, or null/"")
*/
export function gradeAndReport(name, answers = []) {
  const tally = {};
  TOPIC_ORDER.forEach(t => (tally[t] = { c: 0, n: 0 }));

  const solutions = QUESTIONS.map((q, i) => {
    const a = answers[i] || {};
    const given = a.given;
    let answered = false, correct = false, givenDisplay = "—";

    if (q.type === "mcq") {
      if (given !== null && given !== undefined && given !== "") {
        answered = true;
        correct = Number(given) === q.correct;
        givenDisplay = q.opts[Number(given)] ?? "—";
      }
    } else {
      const s = (given == null) ? "" : String(given).trim();
      if (s.length > 0) {
        answered = true;
        correct = checkWork(q, s);
        givenDisplay = s;
      }
    }

    tally[q.topic].n++;
    if (correct) tally[q.topic].c++;

    return {
      n: i + 1,
      q: q.q,
      dia: q.dia || null,
      mark: answered ? (correct ? "right" : "wrong") : "blank",
      markText: answered ? (correct ? "Correct" : "Incorrect") : "Not attempted",
      given: givenDisplay,
      steps: q.steps
    };
  });

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
    return {
      topic: w.topic,
      level: w.level,
      label: LABEL[w.level],
      ref: src.ref,
      product: src.product,
      why: WHY[w.topic] || ""
    };
  });

  const summary =
    pct >= 80 ? "Excellent work — you're strong across nearly every topic. A little polish on any amber areas and you're set."
    : pct >= 50 ? "A solid base, but a few topics are pulling your mark down. Your priority plan below shows exactly where to focus."
    : "There's real room to grow here — and that's good news, because the plan below tells you precisely what to study to climb fast.";

  return {
    name: (name || "").trim(),
    subject: SUBJECT,
    score: pct,
    totalCorrect,
    totalQ,
    summary,
    topics,
    solutions,
    recs,
    weakTopics: weak.map(w => w.topic)
  };
}
