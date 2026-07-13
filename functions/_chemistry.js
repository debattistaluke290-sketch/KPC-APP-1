import { publicQuestions as pub, gradeAndReport as grade } from "./_grade.js";

/* =========================================================================
   KPC Diagnostic — CHEMISTRY candidate bank (CALIBRATED, SERVER-SIDE ONLY)
   SEC 06 (2026) syllabus-aligned. 10 topics × 4 = 40 core questions.
   Composition per topic: 1 foundation, 2 standard_exam (1 application), 1 upper_exam.
   status:"candidate" — awaiting teacher review + student pilot (NOT empirically validated).
   syllabusReference cites real MATSEC criterion codes (N.L.x = LO · Level · strand);
   humanReviewStatus:"pending" flags them as provisional until teacher-verified.
   All wording/values/contexts independently authored; no MATSEC material reproduced.
   The 2026 exam PROVIDES a Periodic Table (Ar values), Reactivity Series and constants
   (c water = 4.2 J/g°C), so numeric tolerances stay lenient — no app-imposed sig-figs.
   Every numeric answer independently recomputed (see chemistry blind-solve report).
   ========================================================================= */
export const SUBJECT = "Chemistry";

export const TOPIC_ORDER = [
  "Atomic Structure & Periodic Table",
  "Bonding & Structure",
  "The Mole & Stoichiometry",
  "Acids, Bases & Salts",
  "Rates of Reaction",
  "Energetics",
  "Redox & Electrolysis",
  "Metals & Reactivity",
  "Organic Chemistry",
  "Air, Water, Earth & Analysis"
];

const M = (o) => ({ status:"candidate", version:1, originalityStatus:"independently_drafted",
  humanReviewStatus:"pending", pilotStatus:"not_piloted", marks:1, unit:"", ...o });

export const QUESTIONS = [
  /* ===== T1 Atomic Structure & Periodic Table (LO2 atomic / LO6 groups) ===== */
  M({ id:"chem-t1-f", topic:"Atomic Structure & Periodic Table", subtopic:"Mass number", syllabusReference:"LO2 (2.1d)", difficulty:"foundation", cognitiveSkill:"recall", type:"work", marks:1, expectedTimeSeconds:45,
    q:"An atom has 11 protons and 12 neutrons. What is its mass number?", data:"Give a whole number.", accept:[23], tolerance:0,
    commonMisconception:"Giving only the protons (atomic number 11) instead of protons + neutrons.",
    steps:`Mass number = protons + neutrons = 11 + 12<br><span class="final">= 23</span>`, ref:"KPC Chemistry — Atomic Structure & Periodic Table", product:"chemistry-atomic" }),
  M({ id:"chem-t1-s", topic:"Atomic Structure & Periodic Table", subtopic:"Groups & outer electrons", syllabusReference:"LO6 (6.2a)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"Elements in the same GROUP of the Periodic Table have the same number of…",
    opts:["protons","electrons in their outer shell","neutrons","occupied shells"], correct:1,
    commonMisconception:"Thinking a group shares the number of shells (that is a period) or of neutrons.",
    steps:`Elements in the same group have the same number of <b>outer-shell electrons</b>, which is why they react similarly. (The period number gives the number of shells.)<br><span class="final">Answer: electrons in their outer shell</span>`, ref:"KPC Chemistry — Atomic Structure & Periodic Table", product:"chemistry-atomic" }),
  M({ id:"chem-t1-a", topic:"Atomic Structure & Periodic Table", subtopic:"Electron configuration", syllabusReference:"LO2 (2.2e)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:60,
    q:"A sodium atom has 11 electrons, arranged 2, 8, 1. How many electrons are in its outer shell?", data:"Give a whole number.", accept:[1], tolerance:0,
    commonMisconception:"Giving the total number of electrons (11) or the number of shells (3).",
    steps:`The arrangement is 2, 8, <b>1</b> — the outer (third) shell holds 1 electron, so sodium is in Group 1.<br><span class="final">= 1</span>`, ref:"KPC Chemistry — Atomic Structure & Periodic Table", product:"chemistry-atomic" }),
  M({ id:"chem-t1-u", topic:"Atomic Structure & Periodic Table", subtopic:"Relative atomic mass from isotopes", syllabusReference:"LO2 (2.3d)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"Chlorine has two isotopes: 75% of atoms are chlorine-35 and 25% are chlorine-37. Calculate the relative atomic mass (Ar) of chlorine.", data:"Give a number (to 1 decimal place if needed).", accept:[35.5], tolerance:0.05,
    commonMisconception:"Taking the plain average (35 + 37) ÷ 2 = 36 instead of weighting by the percentages.",
    steps:`Ar = (75 × 35 + 25 × 37) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100<br><span class="final">Ar = 35.5</span>`, ref:"KPC Chemistry — Atomic Structure & Periodic Table", product:"chemistry-atomic" }),

  /* ===== T2 Bonding & Structure (covalent LO2 / ionic LO3 / giant covalent LO8) ===== */
  M({ id:"chem-t2-f", topic:"Bonding & Structure", subtopic:"Covalent bonding", syllabusReference:"LO2 (2.3g)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:45,
    q:"A chemical bond formed by SHARING pairs of electrons between non-metal atoms is called a…",
    opts:["ionic bond","covalent bond","metallic bond","nuclear bond"], correct:1,
    commonMisconception:"Confusing sharing electrons (covalent) with transferring them (ionic).",
    steps:`Sharing electrons between non-metals is <b>covalent</b> bonding. Transferring electrons (metal → non-metal) is ionic bonding.<br><span class="final">Answer: covalent bond</span>`, ref:"KPC Chemistry — Bonding & Structure", product:"chemistry-bonding" }),
  M({ id:"chem-t2-s", topic:"Bonding & Structure", subtopic:"Giant ionic lattice", syllabusReference:"LO3 (3.3f)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"Sodium chloride has a very high melting point. This is mainly because…",
    opts:["it is a simple molecule","there are strong forces in a giant ionic lattice","it contains weak hydrogen bonds","it is a metal"], correct:1,
    commonMisconception:"Treating an ionic solid as a simple molecule with weak forces.",
    steps:`Sodium chloride is a <b>giant ionic lattice</b>: many strong electrostatic forces between oppositely charged ions must be broken, so the melting point is high.<br><span class="final">Answer: strong forces in a giant ionic lattice</span>`, ref:"KPC Chemistry — Bonding & Structure", product:"chemistry-bonding" }),
  M({ id:"chem-t2-a", topic:"Bonding & Structure", subtopic:"Metallic bonding", syllabusReference:"LO8 (metallic bonding)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"What type of bonding holds the particles together in a metal? (one word)", data:"Type your answer (a word).", accept:["metallic","metallic bonding"],
    commonMisconception:"Answering ionic or covalent — metals are neither.",
    steps:`Metals are held by <b>metallic</b> bonding: a lattice of positive ions in a sea of delocalised (free) electrons.<br><span class="final">Answer: Metallic</span>`, ref:"KPC Chemistry — Bonding & Structure", product:"chemistry-bonding" }),
  M({ id:"chem-t2-u", topic:"Bonding & Structure", subtopic:"Structure explains conductivity", syllabusReference:"LO8 (8.3n)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:90,
    q:"Graphite conducts electricity but diamond does not, even though both are made only of carbon. Why?",
    opts:["Graphite contains metal atoms","Graphite has free (delocalised) electrons; diamond has none","Diamond is a liquid","Graphite is an ionic compound"], correct:1,
    commonMisconception:"Assuming conduction needs a metal, rather than mobile (delocalised) electrons.",
    steps:`In graphite each carbon bonds to only three others, leaving one <b>delocalised electron</b> per atom that carries charge. In diamond every outer electron is used in bonding, so it cannot conduct.<br><span class="final">Answer: Graphite has free electrons; diamond has none</span>`, ref:"KPC Chemistry — Bonding & Structure", product:"chemistry-bonding" }),

  /* ===== T3 The Mole & Stoichiometry (LO10) ===== */
  M({ id:"chem-t3-f", topic:"The Mole & Stoichiometry", subtopic:"Relative formula mass", syllabusReference:"LO10 (10.2a)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"Calculate the relative formula mass (Mr) of water, H₂O. (Ar: H = 1, O = 16)", data:"Give a number.", accept:[18], tolerance:0,
    commonMisconception:"Forgetting there are TWO hydrogen atoms (using 1 + 16 = 17).",
    steps:`Mr = (2 × 1) + 16 = 2 + 16<br><span class="final">Mr = 18</span>`, ref:"KPC Chemistry — The Mole & Stoichiometry", product:"chemistry-mole" }),
  M({ id:"chem-t3-s", topic:"The Mole & Stoichiometry", subtopic:"Relative formula mass", syllabusReference:"LO10 (10.2a)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Calculate the relative formula mass (Mr) of calcium carbonate, CaCO₃. (Ar: Ca = 40, C = 12, O = 16)", data:"Give a number.", accept:[100], tolerance:0,
    commonMisconception:"Forgetting to multiply the three oxygens (3 × 16).",
    steps:`Mr = 40 + 12 + (3 × 16) = 40 + 12 + 48<br><span class="final">Mr = 100</span>`, ref:"KPC Chemistry — The Mole & Stoichiometry", product:"chemistry-mole" }),
  M({ id:"chem-t3-a", topic:"The Mole & Stoichiometry", subtopic:"Moles = mass ÷ Mr", syllabusReference:"LO10 (10.2b)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"How many moles are there in 80 g of sodium hydroxide, NaOH? (Mr of NaOH = 40)", data:"Give your answer in moles (mol).", accept:[2], acceptedUnits:["mol"], unit:"mol", tolerance:0.02,
    commonMisconception:"Multiplying mass × Mr instead of dividing.",
    steps:`moles = mass ÷ Mr = 80 ÷ 40<br><span class="final">= 2 mol</span>`, ref:"KPC Chemistry — The Mole & Stoichiometry", product:"chemistry-mole" }),
  M({ id:"chem-t3-u", topic:"The Mole & Stoichiometry", subtopic:"Reacting masses", syllabusReference:"LO10 (10.3d)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"On heating, calcium carbonate decomposes: CaCO₃ → CaO + CO₂. Calculate the mass of calcium oxide (CaO) formed from 50 g of calcium carbonate. (Mr: CaCO₃ = 100, CaO = 56)", data:"Give your answer in grams (g).", accept:[28], acceptedUnits:["g"], unit:"g", tolerance:0.5,
    commonMisconception:"Using the mass directly without converting to moles, or using the wrong mole ratio.",
    steps:`moles CaCO₃ = 50 ÷ 100 = 0.5 mol. Ratio CaCO₃ : CaO is 1 : 1, so moles CaO = 0.5 mol. mass = moles × Mr = 0.5 × 56<br><span class="final">= 28 g</span>`, ref:"KPC Chemistry — The Mole & Stoichiometry", product:"chemistry-mole" }),

  /* ===== T4 Acids, Bases & Salts (LO4 / titration LO7) ===== */
  M({ id:"chem-t4-f", topic:"Acids, Bases & Salts", subtopic:"The pH scale", syllabusReference:"LO4 (4.1a)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"Which pH value shows a strongly ACIDIC solution?",
    opts:["pH 1","pH 7","pH 9","pH 14"], correct:0,
    commonMisconception:"Thinking a high pH number means a strong acid.",
    steps:`Acids have a low pH; the lower the number, the stronger the acid. pH 7 is neutral, above 7 is alkaline.<br><span class="final">Answer: pH 1</span>`, ref:"KPC Chemistry — Acids, Bases & Salts", product:"chemistry-acids" }),
  M({ id:"chem-t4-s", topic:"Acids, Bases & Salts", subtopic:"Metal + acid", syllabusReference:"LO4 (4.2b)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"Name the gas produced when a reactive metal such as magnesium reacts with hydrochloric acid. (one word)", data:"Type your answer (a word).", accept:["hydrogen"],
    commonMisconception:"Naming oxygen or carbon dioxide instead of hydrogen.",
    steps:`metal + acid → salt + <b>hydrogen</b>. The hydrogen gives a squeaky pop with a lit splint.<br><span class="final">Answer: Hydrogen</span>`, ref:"KPC Chemistry — Acids, Bases & Salts", product:"chemistry-acids" }),
  M({ id:"chem-t4-a", topic:"Acids, Bases & Salts", subtopic:"Neutralisation", syllabusReference:"LO4 (4.2d)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"Which type of substance neutralises an acid to form a salt and water?",
    opts:["another acid","a base (alkali)","a salt","a fuel"], correct:1,
    commonMisconception:"Thinking a salt or another acid neutralises an acid.",
    steps:`A <b>base</b> (a soluble base is an alkali) neutralises an acid: acid + base → salt + water.<br><span class="final">Answer: a base (alkali)</span>`, ref:"KPC Chemistry — Acids, Bases & Salts", product:"chemistry-acids" }),
  M({ id:"chem-t4-u", topic:"Acids, Bases & Salts", subtopic:"Titration calculation", syllabusReference:"LO7 (7.3i)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:170,
    q:"In a titration, 25.0 cm³ of sodium hydroxide is exactly neutralised by 20.0 cm³ of 0.10 mol/dm³ hydrochloric acid. The reaction is 1 : 1. Calculate the concentration of the sodium hydroxide.", data:"Give your answer in mol/dm³.", accept:[0.08], acceptedUnits:["mol/dm³","mol/dm3","M"], unit:"mol/dm³", tolerance:0.002,
    commonMisconception:"Forgetting to convert cm³ to dm³ (÷ 1000), or dividing by the wrong volume.",
    steps:`moles HCl = conc × volume = 0.10 × (20.0 ÷ 1000) = 0.002 mol. Ratio 1 : 1, so moles NaOH = 0.002 mol. concentration = moles ÷ volume = 0.002 ÷ (25.0 ÷ 1000) = 0.002 ÷ 0.025<br><span class="final">= 0.08 mol/dm³</span>`, ref:"KPC Chemistry — Acids, Bases & Salts", product:"chemistry-acids" }),

  /* ===== T5 Rates of Reaction (LO11) ===== */
  M({ id:"chem-t5-f", topic:"Rates of Reaction", subtopic:"Effect of temperature", syllabusReference:"LO11 (11.1c)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"Increasing the temperature of a reaction usually does what to the rate of reaction?",
    opts:["increases it","decreases it","stops it","has no effect"], correct:0,
    commonMisconception:"Thinking temperature has no effect, or slows the reaction.",
    steps:`Higher temperature gives particles more energy, so they collide more often and harder. The rate <b>increases</b>.<br><span class="final">Answer: increases it</span>`, ref:"KPC Chemistry — Rates of Reaction", product:"chemistry-rates" }),
  M({ id:"chem-t5-s", topic:"Rates of Reaction", subtopic:"Surface area", syllabusReference:"LO11 (11.2d)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"Which change would make marble chips react FASTER with hydrochloric acid?",
    opts:["using larger lumps of marble","grinding the marble into a powder","cooling the acid","using more dilute acid"], correct:1,
    commonMisconception:"Thinking larger lumps react faster.",
    steps:`Powdering the marble gives a much larger <b>surface area</b>, so collisions are more frequent and the rate rises.<br><span class="final">Answer: grinding the marble into a powder</span>`, ref:"KPC Chemistry — Rates of Reaction", product:"chemistry-rates" }),
  M({ id:"chem-t5-a", topic:"Rates of Reaction", subtopic:"Catalysts", syllabusReference:"LO11 (11.2f)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"A catalyst speeds up a reaction. What happens to the catalyst by the end of the reaction?",
    opts:["It is used up","It is unchanged and can be reused","It turns into a gas","It becomes the product"], correct:1,
    commonMisconception:"Thinking a catalyst is used up during the reaction.",
    steps:`A catalyst lowers the activation energy but is <b>not used up</b>, so it can be reused.<br><span class="final">Answer: It is unchanged and can be reused</span>`, ref:"KPC Chemistry — Rates of Reaction", product:"chemistry-rates" }),
  M({ id:"chem-t5-u", topic:"Rates of Reaction", subtopic:"Rate from experimental data", syllabusReference:"LO11 (11.3g)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:140,
    q:"A reaction produces a gas. 24 cm³ of gas is collected in the first 20 seconds; by 60 seconds a total of 36 cm³ has been collected. Calculate the average rate of reaction during the FIRST 20 seconds.", data:"Give your answer in cm³/s.", accept:[1.2], acceptedUnits:["cm³/s","cm3/s","cm^3/s"], unit:"cm³/s", tolerance:0.05,
    commonMisconception:"Using the whole 36 cm³ over 60 s (= 0.6) instead of the first interval, 24 cm³ over 20 s.",
    steps:`Average rate = volume of gas ÷ time = 24 ÷ 20<br><span class="final">= 1.2 cm³/s</span> (the reaction slows later as reactant is used up).`, ref:"KPC Chemistry — Rates of Reaction", product:"chemistry-rates" }),

  /* ===== T6 Energetics (LO15) ===== */
  M({ id:"chem-t6-f", topic:"Energetics", subtopic:"Exothermic reactions", syllabusReference:"LO15 (15.1a)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"A reaction that releases heat to the surroundings (the temperature rises) is described as…",
    opts:["exothermic","endothermic","neutral","catalytic"], correct:0,
    commonMisconception:"Swapping exothermic (heat out) and endothermic (heat in).",
    steps:`Releasing heat (temperature rises) is <b>exothermic</b>. Taking in heat (temperature falls) is endothermic.<br><span class="final">Answer: exothermic</span>`, ref:"KPC Chemistry — Energetics", product:"chemistry-energetics" }),
  M({ id:"chem-t6-s", topic:"Energetics", subtopic:"Endothermic reactions", syllabusReference:"LO15 (15.2b)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"During an ENDOthermic reaction, what happens to the temperature of the surroundings?",
    opts:["it rises","it falls","it stays the same","it doubles"], correct:1,
    commonMisconception:"Thinking endothermic reactions warm the surroundings.",
    steps:`An endothermic reaction takes in heat from the surroundings, so the surroundings <b>cool down</b> (temperature falls).<br><span class="final">Answer: it falls</span>`, ref:"KPC Chemistry — Energetics", product:"chemistry-energetics" }),
  M({ id:"chem-t6-a", topic:"Energetics", subtopic:"Calorimetry (Q = mcΔθ)", syllabusReference:"LO15 (15.3c)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"In a calorimetry experiment, burning a fuel raises the temperature of 100 g of water by 20 °C. Calculate the heat energy gained by the water. (specific heat capacity of water = 4.2 J/g°C)", data:"Give your answer in joules (J).", accept:[8400], acceptedUnits:["J"], unit:"J", tolerance:50,
    commonMisconception:"Forgetting to multiply by the temperature change, or by c.",
    steps:`Q = m × c × Δθ = 100 × 4.2 × 20<br><span class="final">= 8400 J</span>`, ref:"KPC Chemistry — Energetics", product:"chemistry-energetics" }),
  M({ id:"chem-t6-u", topic:"Energetics", subtopic:"Energy change from bond energies", syllabusReference:"LO15 (15.3e)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:170,
    q:"For the reaction H₂ + Cl₂ → 2HCl, use the bond energies to calculate the overall energy change. Bond energies (kJ/mol): H–H = 436, Cl–Cl = 242, H–Cl = 431.", data:"Give your answer in kJ/mol (include a minus sign if energy is released).", accept:[-184], acceptedUnits:["kJ/mol","kJ mol-1","kJ"], unit:"kJ/mol", tolerance:1,
    commonMisconception:"Forgetting there are TWO H–Cl bonds made (2 × 431), or getting the sign the wrong way round.",
    steps:`Energy IN (bonds broken) = 436 + 242 = 678. Energy OUT (bonds made) = 2 × 431 = 862. Energy change = broken − made = 678 − 862<br><span class="final">= −184 kJ/mol (exothermic)</span>`, ref:"KPC Chemistry — Energetics", product:"chemistry-energetics" }),

  /* ===== T7 Redox & Electrolysis (LO5) ===== */
  M({ id:"chem-t7-f", topic:"Redox & Electrolysis", subtopic:"Oxidation (OIL RIG)", syllabusReference:"LO5 (5.1b)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"Oxidation can be defined as the…",
    opts:["loss of electrons","gain of electrons","gain of protons","loss of neutrons"], correct:0,
    commonMisconception:"Reversing OIL RIG — thinking oxidation is a gain of electrons.",
    steps:`OIL RIG: Oxidation Is Loss of electrons, Reduction Is Gain of electrons.<br><span class="final">Answer: loss of electrons</span>`, ref:"KPC Chemistry — Redox & Electrolysis", product:"chemistry-redox" }),
  M({ id:"chem-t7-s", topic:"Redox & Electrolysis", subtopic:"Electrolysis product at cathode", syllabusReference:"LO5 (5.2c)", difficulty:"standard_exam", cognitiveSkill:"application", type:"text", marks:2, expectedTimeSeconds:60,
    q:"When molten lead bromide is electrolysed, name the metal formed at the negative electrode (cathode). (one word)", data:"Type your answer (a word).", accept:["lead"],
    commonMisconception:"Naming bromine — that forms at the positive electrode (anode).",
    steps:`Positive metal ions (Pb²⁺) are attracted to the negative electrode, where they gain electrons to form <b>lead</b> metal.<br><span class="final">Answer: Lead</span>`, ref:"KPC Chemistry — Redox & Electrolysis", product:"chemistry-redox" }),
  M({ id:"chem-t7-a", topic:"Redox & Electrolysis", subtopic:"Ion migration", syllabusReference:"LO5 (5.2b)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"In electrolysis, towards which electrode do the positive ions (cations) move?",
    opts:["the positive electrode (anode)","the negative electrode (cathode)","neither electrode","both equally"], correct:1,
    commonMisconception:"Thinking positive ions move to the positive electrode.",
    steps:`Opposite charges attract, so positive cations move to the <b>negative electrode (cathode)</b>.<br><span class="final">Answer: the negative electrode (cathode)</span>`, ref:"KPC Chemistry — Redox & Electrolysis", product:"chemistry-redox" }),
  M({ id:"chem-t7-u", topic:"Redox & Electrolysis", subtopic:"Electrolysis of brine", syllabusReference:"LO5 (5.3e)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:100,
    q:"When concentrated aqueous sodium chloride (brine) is electrolysed, which gas is given off at the positive electrode (anode)?",
    opts:["hydrogen","oxygen","chlorine","sodium"], correct:2,
    commonMisconception:"Expecting oxygen; in CONCENTRATED brine the chloride ion is discharged instead.",
    steps:`At the anode in concentrated brine, chloride ions are discharged to give <b>chlorine</b> gas (hydrogen forms at the cathode). Dilute solutions would give oxygen instead.<br><span class="final">Answer: chlorine</span>`, ref:"KPC Chemistry — Redox & Electrolysis", product:"chemistry-redox" }),

  /* ===== T8 Metals & Reactivity (LO8 / LO6) ===== */
  M({ id:"chem-t8-f", topic:"Metals & Reactivity", subtopic:"Reactivity series", syllabusReference:"LO8 (8.1d)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"Which of these metals is the MOST reactive?",
    opts:["potassium","iron","copper","gold"], correct:0,
    commonMisconception:"Confusing reactivity with how common or familiar a metal is.",
    steps:`In the reactivity series potassium is near the top (very reactive); gold is at the bottom (very unreactive).<br><span class="final">Answer: potassium</span>`, ref:"KPC Chemistry — Metals & Reactivity", product:"chemistry-metals" }),
  M({ id:"chem-t8-s", topic:"Metals & Reactivity", subtopic:"Displacement", syllabusReference:"LO8 (8.2k)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"A more reactive metal displaces a less reactive metal from its salt solution. Which mixture will react?",
    opts:["copper added to magnesium sulfate solution","magnesium added to copper sulfate solution","gold added to iron sulfate solution","copper added to iron sulfate solution"], correct:1,
    commonMisconception:"Thinking a less reactive metal can displace a more reactive one.",
    steps:`Magnesium is more reactive than copper, so it displaces copper from copper sulfate solution (blue fades, copper is deposited).<br><span class="final">Answer: magnesium added to copper sulfate solution</span>`, ref:"KPC Chemistry — Metals & Reactivity", product:"chemistry-metals" }),
  M({ id:"chem-t8-a", topic:"Metals & Reactivity", subtopic:"Rusting", syllabusReference:"LO8 (8.2h)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"Iron rusts when it is exposed to which TWO substances?",
    opts:["oxygen and water","nitrogen and oil","carbon dioxide and salt","hydrogen and water"], correct:0,
    commonMisconception:"Thinking rusting needs carbon dioxide, or is prevented by water alone.",
    steps:`Rusting needs both <b>oxygen and water</b>. Keeping either away (oiling, painting, galvanising) prevents rust.<br><span class="final">Answer: oxygen and water</span>`, ref:"KPC Chemistry — Metals & Reactivity", product:"chemistry-metals" }),
  M({ id:"chem-t8-u", topic:"Metals & Reactivity", subtopic:"Reactivity decides extraction", syllabusReference:"LO8 (8.3l)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"Iron can be extracted by heating its ore with carbon, but aluminium must be extracted by electrolysis. Why can aluminium NOT be extracted using carbon?",
    opts:["Aluminium is more reactive than carbon, so carbon cannot displace it","Aluminium is a non-metal","Aluminium has no ore","Carbon is cheaper than electricity"], correct:0,
    commonMisconception:"Thinking cost, not reactivity, decides the method of extraction.",
    steps:`A metal is only displaced from its ore by something MORE reactive. Carbon is above iron in the reactivity series, so it reduces iron oxide — but aluminium is ABOVE carbon, so carbon cannot reduce it, and electrolysis is used instead.<br><span class="final">Answer: Aluminium is more reactive than carbon</span>`, ref:"KPC Chemistry — Metals & Reactivity", product:"chemistry-metals" }),

  /* ===== T9 Organic Chemistry (LO13 fuels / LO14 homologous series) ===== */
  M({ id:"chem-t9-f", topic:"Organic Chemistry", subtopic:"Hydrocarbons", syllabusReference:"LO14 (14.1a)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"Compounds that contain only the elements hydrogen and carbon are called…",
    opts:["carbohydrates","hydrocarbons","alcohols","salts"], correct:1,
    commonMisconception:"Thinking hydrocarbons contain oxygen (like carbohydrates or alcohols).",
    steps:`Compounds of only hydrogen and carbon are <b>hydrocarbons</b> (e.g. the alkanes and alkenes).<br><span class="final">Answer: hydrocarbons</span>`, ref:"KPC Chemistry — Organic Chemistry", product:"chemistry-organic" }),
  M({ id:"chem-t9-s", topic:"Organic Chemistry", subtopic:"Alkane general formula", syllabusReference:"LO14 (14.2c)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Alkanes have the general formula CₙH₍₂ₙ₊₂₎. How many hydrogen atoms are in the alkane with 3 carbon atoms (propane)?", data:"Give a whole number.", accept:[8], tolerance:0,
    commonMisconception:"Using 2n (giving 6) instead of 2n + 2.",
    steps:`H atoms = 2n + 2 = (2 × 3) + 2 = 6 + 2<br><span class="final">= 8 (propane is C₃H₈)</span>`, ref:"KPC Chemistry — Organic Chemistry", product:"chemistry-organic" }),
  M({ id:"chem-t9-a", topic:"Organic Chemistry", subtopic:"Testing for unsaturation", syllabusReference:"LO14 (14.2k)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"How can you tell an alkene apart from an alkane using bromine water? The alkene…",
    opts:["turns bromine water blue","decolourises bromine water (orange to colourless)","has no effect on bromine water","sets bromine water on fire"], correct:1,
    commonMisconception:"Thinking the alkane reacts, or that the colour turns blue.",
    steps:`Alkenes are unsaturated (C=C double bond), so they <b>decolourise</b> bromine water from orange to colourless. Alkanes do not.<br><span class="final">Answer: decolourises bromine water</span>`, ref:"KPC Chemistry — Organic Chemistry", product:"chemistry-organic" }),
  M({ id:"chem-t9-u", topic:"Organic Chemistry", subtopic:"Structural isomers", syllabusReference:"LO14 (14.3d)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"How many structural isomers have the molecular formula C₅H₁₂?", data:"Give a whole number.", accept:[3], tolerance:0,
    commonMisconception:"Finding only the straight chain and one branch, and missing the fully branched isomer.",
    steps:`C₅H₁₂ has three arrangements: pentane (straight chain), 2-methylbutane (one branch) and 2,2-dimethylpropane (two branches).<br><span class="final">= 3 isomers</span>`, ref:"KPC Chemistry — Organic Chemistry", product:"chemistry-organic" }),

  /* ===== T10 Air, Water, Earth & Analysis (LO2 air / LO3 water / LO7 tests) ===== */
  M({ id:"chem-t10-f", topic:"Air, Water, Earth & Analysis", subtopic:"Composition of air", syllabusReference:"LO2 (2.1a)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:40,
    q:"Approximately what percentage of clean, dry air is nitrogen?",
    opts:["about 21%","about 78%","about 0.04%","about 50%"], correct:1,
    commonMisconception:"Swapping nitrogen (78%) with oxygen (21%).",
    steps:`Air is roughly <b>78% nitrogen</b> and about 21% oxygen, with small amounts of other gases (incl. 0.04% carbon dioxide).<br><span class="final">Answer: about 78%</span>`, ref:"KPC Chemistry — Air, Water, Earth & Analysis", product:"chemistry-environment" }),
  M({ id:"chem-t10-s", topic:"Air, Water, Earth & Analysis", subtopic:"Water treatment (Malta)", syllabusReference:"LO3 (3.2e)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"In Malta, much drinking water is produced by removing the salt from sea water. What is this process called?",
    opts:["desalination (reverse osmosis)","chlorination only","simple filtration","fermentation"], correct:0,
    commonMisconception:"Confusing desalination with simple filtration or chlorination.",
    steps:`Removing salt from sea water to make fresh water is <b>desalination</b>, usually by reverse osmosis — a major source of Malta's drinking water.<br><span class="final">Answer: desalination (reverse osmosis)</span>`, ref:"KPC Chemistry — Air, Water, Earth & Analysis", product:"chemistry-environment" }),
  M({ id:"chem-t10-a", topic:"Air, Water, Earth & Analysis", subtopic:"Test for carbon dioxide", syllabusReference:"LO7 (7.2f)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"A colourless gas turns limewater milky (cloudy). Name this gas. (two words)", data:"Type your answer (two words).", accept:["carbon dioxide","co2"],
    commonMisconception:"Naming oxygen or hydrogen instead of carbon dioxide.",
    steps:`The gas that turns limewater milky is <b>carbon dioxide</b> — the standard test for CO₂.<br><span class="final">Answer: Carbon dioxide</span>`, ref:"KPC Chemistry — Air, Water, Earth & Analysis", product:"chemistry-environment" }),
  M({ id:"chem-t10-u", topic:"Air, Water, Earth & Analysis", subtopic:"Identifying an anion", syllabusReference:"LO7 (7.3c)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"A solution gives a WHITE precipitate when acidified barium chloride is added, but gives NO precipitate with acidified silver nitrate. Which ion is present?",
    opts:["Chloride (Cl⁻)","Sulfate (SO₄²⁻)","Carbonate (CO₃²⁻)","Nitrate (NO₃⁻)"], correct:1,
    commonMisconception:"Seeing 'white precipitate' and guessing chloride, without using the negative silver-nitrate result.",
    steps:`Acidified barium chloride gives a white precipitate with <b>sulfate</b> ions (barium sulfate). Silver nitrate gives a white precipitate with chloride — but there is none here, ruling chloride out. So the ion is sulfate.<br><span class="final">Answer: Sulfate (SO₄²⁻)</span>`, ref:"KPC Chemistry — Air, Water, Earth & Analysis", product:"chemistry-environment" }),
];

export const WHY = {
  "Atomic Structure & Periodic Table":"Revise protons/neutrons/electrons, electron shells, group trends and relative atomic mass from isotopes.",
  "Bonding & Structure":"Review ionic, covalent and metallic bonding and how structure explains properties (e.g. graphite vs diamond).",
  "The Mole & Stoichiometry":"Practise relative formula mass, moles = mass ÷ Mr and reacting-mass calculations.",
  "Acids, Bases & Salts":"Revise pH and indicators, neutralisation, salt preparation and titration calculations.",
  "Rates of Reaction":"Review the factors affecting rate, collision theory and reading rate from reaction data.",
  "Energetics":"Practise exothermic vs endothermic, Q = mcΔθ and energy changes from bond energies.",
  "Redox & Electrolysis":"Revise oxidation and reduction (OIL RIG) and the products of electrolysis (incl. brine).",
  "Metals & Reactivity":"Review the reactivity series, displacement, rusting and how reactivity decides the extraction method.",
  "Organic Chemistry":"Revise hydrocarbons, alkanes/alkenes, the bromine-water test, isomers and polymerisation.",
  "Air, Water, Earth & Analysis":"Review the composition of air, water treatment, and the chemical tests for gases and ions."
};

/* -------- wire into the shared grading engine -------- */
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
