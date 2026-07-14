import { publicQuestions as pub, gradeAndReport as grade } from "./_grade.js";

/* =========================================================================
   KPC Diagnostic - BIOLOGY candidate bank (CALIBRATED, SERVER-SIDE ONLY)
   SEC 04 (2026) syllabus-aligned. 10 topics × 4 = 40 core questions.
   Composition per topic: 1 foundation, 2 standard_exam (1 application), 1 upper_exam.
   status:"candidate" - awaiting teacher review + student pilot (NOT empirically validated).
   syllabusReference cites real MATSEC criterion codes ({LO}.{Level}{letter});
   humanReviewStatus:"pending" flags them as provisional until teacher-verified.
   All wording/values/contexts independently authored; no MATSEC material reproduced.
   Biology's Level 3 (upper) is application/analysis - data, genetic crosses, reasoning -
   not calculation. Typed answers are marked LENIENTLY (edit-distance + synonyms, with a
   Cloudflare Workers AI fallback judge). The disease/immunity block (LO4) is folded into
   "Homeostasis & Coordination". Every numeric answer independently recomputed.
   ========================================================================= */
export const SUBJECT = "Biology";

export const TOPIC_ORDER = [
  "Cells & Transport",
  "Nutrition, Molecules & Enzymes",
  "Photosynthesis & Plant Transport",
  "Respiration & Gas Exchange",
  "Circulation in Animals",
  "Homeostasis & Coordination",
  "Reproduction",
  "Genetics & Inheritance",
  "Ecology & Human Impact",
  "Classification, Variation & Evolution"
];

const M = (o) => ({ status:"candidate", version:1, originalityStatus:"independently_drafted",
  humanReviewStatus:"pending", pilotStatus:"not_piloted", marks:1, unit:"", ...o });

export const QUESTIONS = [
  /* ===== T1 Cells & Transport (LO1) ===== */
  M({ id:"bio-t1-f", topic:"Cells & Transport", subtopic:"Plant vs animal cells", syllabusReference:"LO1 (1.1c)", difficulty:"foundation", cognitiveSkill:"recall", type:"text", marks:1, expectedTimeSeconds:45,
    q:"Name the structure that is found in a plant cell but NOT in an animal cell.", data:"Type your answer (a word or short phrase).", accept:["cell wall"],
    commonMisconception:"Naming a structure that animal cells also have (nucleus, membrane, mitochondria).",
    steps:`Plant cells have a rigid <b>cell wall</b> (cellulose) outside the membrane; animal cells do not.<br><span class="final">Answer: Cell wall</span>`, ref:"KPC Biology - Cells & Transport", product:"biology-cells" }),
  M({ id:"bio-t1-s", topic:"Cells & Transport", subtopic:"Osmosis in animal cells", syllabusReference:"LO1 (1.3x)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"A red blood cell is placed in pure (distilled) water. What is most likely to happen to it?",
    opts:["It shrinks (crenates)","It swells and may burst","Nothing changes","It starts to divide"], correct:1,
    commonMisconception:"Forgetting animal cells have no wall to resist swelling - thinking it shrinks or stays the same.",
    steps:`Water enters the cell by <b>osmosis</b> (from high water concentration outside to lower inside). With no cell wall, the cell swells and may burst (haemolysis).<br><span class="final">Answer: It swells and may burst</span>`, ref:"KPC Biology - Cells & Transport", product:"biology-cells" }),
  M({ id:"bio-t1-a", topic:"Cells & Transport", subtopic:"Surface-area-to-volume ratio", syllabusReference:"LO3 (3.1o)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100, dia:"savcube",
    q:"A cube-shaped cell has sides of 2 cm. Calculate its surface-area-to-volume ratio (surface area ÷ volume).", data:"Give your answer as a single number.", accept:[3], tolerance:0,
    commonMisconception:"Dividing volume by surface area, or forgetting surface area = 6 × one face.",
    steps:`Surface area = 6 × (2 × 2) = 24 cm². Volume = 2 × 2 × 2 = 8 cm³. Ratio = 24 ÷ 8<br><span class="final">SA:V = 3</span> (smaller cells have a larger ratio - better for exchange).`, ref:"KPC Biology - Cells & Transport", product:"biology-cells" }),
  M({ id:"bio-t1-u", topic:"Cells & Transport", subtopic:"Active transport", syllabusReference:"LO1 (1.3aa)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"A root hair cell absorbs mineral ions from the soil, even though the ions are already at a HIGHER concentration inside the cell than in the soil. Which process is responsible?",
    opts:["Diffusion","Osmosis","Active transport","Evaporation"], correct:2,
    commonMisconception:"Choosing diffusion or osmosis - but these only move substances DOWN a gradient and need no energy.",
    steps:`Moving ions <b>against</b> their concentration gradient (low → high) needs energy from respiration - this is <b>active transport</b>. Diffusion and osmosis only go down a gradient.<br><span class="final">Answer: Active transport</span>`, ref:"KPC Biology - Cells & Transport", product:"biology-cells" }),

  /* ===== T2 Nutrition, Molecules & Enzymes (LO1 molecules/enzymes / LO2 digestion) ===== */
  M({ id:"bio-t2-f", topic:"Nutrition, Molecules & Enzymes", subtopic:"Food tests", syllabusReference:"LO1 (1.2i)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:45,
    q:"Which food test uses Benedict's solution and gives a brick-red colour when the result is positive?",
    opts:["Starch","Protein","Reducing sugar","Fat"], correct:2,
    commonMisconception:"Confusing Benedict's (sugar) with iodine (starch), Biuret (protein) or the emulsion test (fat).",
    steps:`Benedict's solution heated with a <b>reducing sugar</b> (e.g. glucose) turns from blue to brick-red. Starch uses iodine, protein uses Biuret, fat uses the emulsion test.<br><span class="final">Answer: Reducing sugar</span>`, ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition" }),
  M({ id:"bio-t2-s", topic:"Nutrition, Molecules & Enzymes", subtopic:"Enzymes & temperature", syllabusReference:"LO1 (1.3u)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"Enzymes are biological catalysts. What happens to most human enzymes if the temperature rises well above body temperature (for example to 70 °C)?",
    opts:["They work faster and faster","They denature and stop working","They turn into sugars","They become vitamins"], correct:1,
    commonMisconception:"Thinking higher temperature always speeds enzymes up, or that denaturing is reversible.",
    steps:`High temperature changes the shape of the active site so the substrate no longer fits - the enzyme is <b>denatured</b> and stops working. This change is permanent.<br><span class="final">Answer: They denature and stop working</span>`, ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition" }),
  M({ id:"bio-t2-a", topic:"Nutrition, Molecules & Enzymes", subtopic:"Absorption of digested food", syllabusReference:"LO2 (2.2i)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"Name the organ where most digested food is absorbed into the bloodstream.", data:"Type your answer (a word or short phrase).", accept:["small intestine","ileum"],
    commonMisconception:"Naming the stomach or the large intestine (which mainly absorbs water).",
    steps:`The <b>small intestine</b> (ileum) is lined with villi giving a huge surface area for absorbing digested food into the blood.<br><span class="final">Answer: Small intestine (ileum)</span>`, ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition" }),
  M({ id:"bio-t2-u", topic:"Nutrition, Molecules & Enzymes", subtopic:"Applying an enzyme's optimum pH", syllabusReference:"LO1 (1.3u)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"A digestive enzyme works fastest at pH 2 and stops working at pH 7. In which part of the digestive system is this enzyme most likely to act?",
    opts:["The mouth","The stomach","The small intestine","The large intestine"], correct:1,
    commonMisconception:"Choosing the mouth or small intestine, which are close to neutral (pH ~7), not strongly acidic.",
    steps:`An enzyme working best at pH 2 needs very acidic conditions. Only the <b>stomach</b> (hydrochloric acid, pH ~2) provides this - so this protease (pepsin) acts there.<br><span class="final">Answer: The stomach</span>`, ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition" }),

  /* ===== T3 Photosynthesis & Plant Transport (LO2 / LO3) ===== */
  M({ id:"bio-t3-f", topic:"Photosynthesis & Plant Transport", subtopic:"Products of photosynthesis", syllabusReference:"LO2 (2.1a)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:45,
    q:"Photosynthesis uses carbon dioxide and water, with light energy, to produce oxygen and which other substance?",
    opts:["Protein","Glucose","Starch directly","Carbon dioxide"], correct:1,
    commonMisconception:"Confusing the immediate product glucose with starch (the storage form made later).",
    steps:`carbon dioxide + water → <b>glucose</b> + oxygen (using light trapped by chlorophyll). Glucose can later be stored as starch.<br><span class="final">Answer: Glucose</span>`, ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants" }),
  M({ id:"bio-t3-s", topic:"Photosynthesis & Plant Transport", subtopic:"Transpiration & stomata", syllabusReference:"LO3 (3.2k)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"Name the small pores in a leaf through which most water vapour is lost during transpiration.", data:"Type your answer (a word or short phrase).", accept:["stomata","stoma"],
    commonMisconception:"Naming the xylem or 'veins' instead of the pores themselves.",
    steps:`Water vapour leaves through the <b>stomata</b> (mostly on the lower surface); guard cells open and close them.<br><span class="final">Answer: Stomata</span>`, ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants" }),
  M({ id:"bio-t3-a", topic:"Photosynthesis & Plant Transport", subtopic:"Xylem vs phloem", syllabusReference:"LO3 (3.1i)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"Name the plant tissue that transports water and dissolved minerals upwards from the roots to the leaves.", data:"Type your answer (a word).", accept:["xylem","xylem vessels","xylem tissue"],
    commonMisconception:"Naming phloem, which carries dissolved sugars, not water.",
    steps:`<b>Xylem</b> carries water and minerals up from the roots. Phloem carries dissolved sugars around the plant.<br><span class="final">Answer: Xylem</span>`, ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants" }),
  M({ id:"bio-t3-u", topic:"Photosynthesis & Plant Transport", subtopic:"Interpreting a starch test", syllabusReference:"LO2 (2.3c)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"A plant is left in complete darkness for two days. A leaf is then removed and tested with iodine solution. What is the most likely result?",
    opts:["Blue-black, because lots of starch is present","Stays orange-brown, because no starch is present","Turns red, showing sugar","Turns purple, showing protein"], correct:1,
    commonMisconception:"Assuming a leaf always contains starch, regardless of whether it has had light.",
    steps:`Without light the plant cannot photosynthesise, so it makes no glucose and stores no starch (and uses existing stores). Iodine therefore stays <b>orange-brown</b> (a negative result).<br><span class="final">Answer: Stays orange-brown (no starch)</span>`, ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants" }),

  /* ===== T4 Respiration & Gas Exchange (LO2 respiration / LO3 gas exchange) ===== */
  M({ id:"bio-t4-f", topic:"Respiration & Gas Exchange", subtopic:"Aerobic respiration", syllabusReference:"LO2 (2.1j)", difficulty:"foundation", cognitiveSkill:"recall", type:"text", marks:1, expectedTimeSeconds:45,
    q:"Name the gas that is needed for aerobic respiration.", data:"Type your answer (a word).", accept:["oxygen"],
    commonMisconception:"Naming carbon dioxide (a product) instead of oxygen (a reactant).",
    steps:`Aerobic respiration: glucose + <b>oxygen</b> → carbon dioxide + water (+ energy). It needs oxygen, unlike anaerobic respiration.<br><span class="final">Answer: Oxygen</span>`, ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration" }),
  M({ id:"bio-t4-s", topic:"Respiration & Gas Exchange", subtopic:"Anaerobic respiration in muscle", syllabusReference:"LO2 (2.3l)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"During hard exercise, muscle cells may respire anaerobically. What substance builds up in the muscles as a result?",
    opts:["Ethanol","Lactic acid","Glucose","Oxygen"], correct:1,
    commonMisconception:"Giving ethanol - that is anaerobic respiration in yeast/plants, not human muscle.",
    steps:`In human muscle, anaerobic respiration produces <b>lactic acid</b> (causing fatigue and an oxygen debt). Yeast instead produces ethanol and carbon dioxide.<br><span class="final">Answer: Lactic acid</span>`, ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration" }),
  M({ id:"bio-t4-a", topic:"Respiration & Gas Exchange", subtopic:"Site of gas exchange", syllabusReference:"LO3 (3.2a)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"Name the tiny air sacs in the lungs where gas exchange takes place between the air and the blood.", data:"Type your answer (a word).", accept:["alveoli","alveolus","air sacs"],
    commonMisconception:"Naming the bronchi or trachea (airways that carry air, not exchange surfaces).",
    steps:`The <b>alveoli</b> are the site of gas exchange: oxygen diffuses into the blood, carbon dioxide diffuses out.<br><span class="final">Answer: Alveoli</span>`, ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration" }),
  M({ id:"bio-t4-u", topic:"Respiration & Gas Exchange", subtopic:"Surface area & gas exchange", syllabusReference:"LO3 (3.3b)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"In the lung disease emphysema, many alveoli are destroyed, so the total surface area for gas exchange becomes much smaller. What is the most likely effect on the patient?",
    opts:["Oxygen diffuses into the blood more slowly","More oxygen enters the blood","Carbon dioxide is produced faster","Breathing stops completely"], correct:0,
    commonMisconception:"Thinking a smaller exchange surface speeds up exchange, or has no effect on it.",
    steps:`Gas exchange depends on a large surface area. If alveolar surface area falls, oxygen <b>diffuses into the blood more slowly</b>, so less oxygen reaches the body and the patient tires easily.<br><span class="final">Answer: Oxygen diffuses into the blood more slowly</span>`, ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration" }),

  /* ===== T5 Circulation in Animals (LO3) ===== */
  M({ id:"bio-t5-f", topic:"Circulation in Animals", subtopic:"Blood vessels", syllabusReference:"LO3 (3.1s)", difficulty:"foundation", cognitiveSkill:"recall", type:"text", marks:1, expectedTimeSeconds:45,
    q:"Name the type of blood vessel that carries blood AWAY from the heart.", data:"Type your answer (a word).", accept:["artery","arteries"],
    commonMisconception:"Naming a vein, which carries blood back TO the heart.",
    steps:`<b>Arteries</b> carry blood away from the heart at high pressure, so they have thick muscular walls. Veins return blood to the heart.<br><span class="final">Answer: Artery</span>`, ref:"KPC Biology - Circulation in Animals", product:"biology-circulation" }),
  M({ id:"bio-t5-s", topic:"Circulation in Animals", subtopic:"Blood components", syllabusReference:"LO3 (3.1q)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"Which component of the blood contains haemoglobin and carries oxygen around the body?",
    opts:["White blood cells","Platelets","Red blood cells","Plasma"], correct:2,
    commonMisconception:"Choosing white cells (defence) or plasma (mostly water and dissolved substances).",
    steps:`<b>Red blood cells</b> contain haemoglobin, which binds oxygen to form oxyhaemoglobin. White cells fight disease; platelets help clotting.<br><span class="final">Answer: Red blood cells</span>`, ref:"KPC Biology - Circulation in Animals", product:"biology-circulation" }),
  M({ id:"bio-t5-a", topic:"Circulation in Animals", subtopic:"The heart", syllabusReference:"LO3 (3.2r)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"Which side of the human heart pumps oxygenated blood out to the rest of the body?",
    opts:["The left side","The right side","Both sides equally","Neither - veins do this"], correct:0,
    commonMisconception:"Choosing the right side, which actually pumps deoxygenated blood to the lungs.",
    steps:`The <b>left side</b> receives oxygenated blood from the lungs and pumps it to the whole body, so the left ventricle is the most muscular. The right side pumps deoxygenated blood to the lungs.<br><span class="final">Answer: The left side</span>`, ref:"KPC Biology - Circulation in Animals", product:"biology-circulation" }),
  M({ id:"bio-t5-u", topic:"Circulation in Animals", subtopic:"Structure related to function", syllabusReference:"LO3 (3.3r)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"The muscular wall of the LEFT ventricle is much thicker than that of the right ventricle. What is the best explanation?",
    opts:["It pumps blood at high pressure all the way around the body","It pumps blood only to the nearby lungs","It stores more blood than the right side","It makes new red blood cells"], correct:0,
    commonMisconception:"Assuming both ventricles do equal work, or that the left side serves only the lungs.",
    steps:`The left ventricle pumps oxygenated blood to the WHOLE body against high resistance, so it needs a thick, muscular wall to create high pressure. The right ventricle only pumps to the nearby lungs, at lower pressure, so its wall is thinner.<br><span class="final">Answer: It pumps blood at high pressure all around the body</span>`, ref:"KPC Biology - Circulation in Animals", product:"biology-circulation" }),

  /* ===== T6 Homeostasis & Coordination (LO4, incl. folded immunity block) ===== */
  M({ id:"bio-t6-f", topic:"Homeostasis & Coordination", subtopic:"The kidney", syllabusReference:"LO4 (4.2p)", difficulty:"foundation", cognitiveSkill:"recall", type:"text", marks:1, expectedTimeSeconds:45,
    q:"Name the organ that filters the blood to remove urea and produce urine.", data:"Type your answer (a word).", accept:["kidney","kidneys"],
    commonMisconception:"Naming the bladder (which only stores urine) or the liver.",
    steps:`The <b>kidneys</b> filter the blood, removing urea and excess water and salts as urine.<br><span class="final">Answer: Kidney</span>`, ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis" }),
  M({ id:"bio-t6-s", topic:"Homeostasis & Coordination", subtopic:"Homeostasis", syllabusReference:"LO4 (4.1a)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:60,
    q:"What is the name for keeping a constant internal environment in the body (such as temperature and water content)?", data:"Type your answer (a word).", accept:["homeostasis"],
    commonMisconception:"Confusing homeostasis with excretion or with 'metabolism'.",
    steps:`<b>Homeostasis</b> keeps internal conditions (temperature, blood glucose, water and ion balance) steady so cells and enzymes work properly.<br><span class="final">Answer: Homeostasis</span>`, ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis" }),
  M({ id:"bio-t6-a", topic:"Homeostasis & Coordination", subtopic:"The reflex arc", syllabusReference:"LO4 (4.2f)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:80,
    q:"What is the correct order of structures in a simple reflex arc?",
    opts:["Receptor → sensory neurone → relay neurone → motor neurone → effector","Effector → motor neurone → relay neurone → sensory neurone → receptor","Receptor → motor neurone → sensory neurone → effector","Sensory neurone → receptor → effector → motor neurone"], correct:0,
    commonMisconception:"Reversing the order, or leaving out the relay neurone in the CNS.",
    steps:`A reflex travels: <b>receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector</b>. It is fast and automatic, which protects the body.<br><span class="final">Answer: Receptor → sensory → relay → motor → effector</span>`, ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis" }),
  M({ id:"bio-t6-u", topic:"Homeostasis & Coordination", subtopic:"Immunity & the secondary response", syllabusReference:"LO4 (4.3aa)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:120,
    q:"A person catches chickenpox once and recovers. Years later they are exposed again but do NOT become ill. What is the best explanation?",
    opts:["White blood cells 'remember' the pathogen and respond faster and stronger","The pathogen has died out everywhere","Antibiotics from the first illness stay in the blood forever","Their skin has become waterproof to the virus"], correct:0,
    commonMisconception:"Thinking immunity is due to leftover antibiotics, or that the pathogen simply disappeared.",
    steps:`After the first infection, <b>memory lymphocytes</b> remain. On re-exposure they recognise the antigen and produce the correct antibodies much faster and in greater amounts, destroying the pathogen before symptoms develop - this is immunity.<br><span class="final">Answer: White blood cells 'remember' the pathogen and respond faster</span>`, ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis" }),

  /* ===== T7 Reproduction (LO5) ===== */
  M({ id:"bio-t7-f", topic:"Reproduction", subtopic:"Flower structure", syllabusReference:"LO5 (5.1b)", difficulty:"foundation", cognitiveSkill:"recall", type:"text", marks:1, expectedTimeSeconds:45,
    q:"In a flowering plant, name the part that produces pollen.", data:"Type your answer (a word).", accept:["anther","anthers"],
    commonMisconception:"Naming the stigma (which receives pollen) or the ovary.",
    steps:`The <b>anther</b> (part of the stamen, the male part) produces pollen grains. The stigma receives pollen; the ovary contains ovules.<br><span class="final">Answer: Anther</span>`, ref:"KPC Biology - Reproduction", product:"biology-reproduction" }),
  M({ id:"bio-t7-s", topic:"Reproduction", subtopic:"Human fertilisation", syllabusReference:"LO5 (5.2h)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"In humans, where does fertilisation of the egg normally take place?",
    opts:["In the uterus (womb)","In the oviduct (fallopian tube)","In the ovary","In the vagina"], correct:1,
    commonMisconception:"Choosing the uterus (where the embryo implants) instead of the oviduct.",
    steps:`A sperm normally fertilises the egg in the <b>oviduct</b> (fallopian tube). The fertilised egg then travels to the uterus to implant.<br><span class="final">Answer: In the oviduct</span>`, ref:"KPC Biology - Reproduction", product:"biology-reproduction" }),
  M({ id:"bio-t7-a", topic:"Reproduction", subtopic:"Meiosis & gametes", syllabusReference:"LO5 (5.2r)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"Which type of cell division produces gametes (sex cells) and halves the chromosome number?",
    opts:["Mitosis","Meiosis","Fertilisation","Pollination"], correct:1,
    commonMisconception:"Choosing mitosis, which makes identical body cells with the full chromosome number.",
    steps:`<b>Meiosis</b> produces gametes with half the chromosome number (haploid); fertilisation then restores the full number. Mitosis makes identical body cells.<br><span class="final">Answer: Meiosis</span>`, ref:"KPC Biology - Reproduction", product:"biology-reproduction" }),
  M({ id:"bio-t7-u", topic:"Reproduction", subtopic:"The menstrual cycle", syllabusReference:"LO5 (5.2j)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:110,
    q:"An egg is released at ovulation but is NOT fertilised. What happens next in the menstrual cycle?",
    opts:["The thickened uterus lining breaks down and is lost (a period)","The egg implants in the uterus anyway","Ovulation immediately happens again","Pregnancy begins"], correct:0,
    commonMisconception:"Thinking the lining is only lost during pregnancy, or that ovulation repeats at once.",
    steps:`If the egg is not fertilised, the thickened uterus lining is no longer needed. It breaks down and is lost as a period (menstruation), and the cycle begins again.<br><span class="final">Answer: The uterus lining breaks down (a period)</span>`, ref:"KPC Biology - Reproduction", product:"biology-reproduction" }),

  /* ===== T8 Genetics & Inheritance (LO5) ===== */
  M({ id:"bio-t8-f", topic:"Genetics & Inheritance", subtopic:"DNA", syllabusReference:"LO5 (5.1l)", difficulty:"foundation", cognitiveSkill:"recall", type:"text", marks:1, expectedTimeSeconds:45,
    q:"Name the molecule that carries the genetic information in the chromosomes of a cell.", data:"Type your answer (a word or its full name).", accept:["dna","deoxyribonucleic acid"],
    commonMisconception:"Naming RNA or protein instead of DNA.",
    steps:`<b>DNA</b> (deoxyribonucleic acid) carries the genetic code. A gene is a section of DNA coding for a characteristic.<br><span class="final">Answer: DNA</span>`, ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics" }),
  M({ id:"bio-t8-s", topic:"Genetics & Inheritance", subtopic:"Dominant & recessive alleles", syllabusReference:"LO5 (5.2t)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"An allele that is always shown in an organism whenever it is present is described as what?",
    opts:["Recessive","Dominant","Codominant","Mutated"], correct:1,
    commonMisconception:"Confusing dominant with recessive (only shown when two copies are present).",
    steps:`A <b>dominant</b> allele is expressed even if only one copy is present. A recessive allele shows only when two copies are present.<br><span class="final">Answer: Dominant</span>`, ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics" }),
  M({ id:"bio-t8-a", topic:"Genetics & Inheritance", subtopic:"Monohybrid cross (Tt × Tt)", syllabusReference:"LO5 (5.2u)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100, dia:"punnett",
    q:"In pea plants, tall (T) is dominant to short (t). Two heterozygous tall plants (Tt) are crossed. What percentage of the offspring are expected to be SHORT?", data:"Give your answer as a percentage.", accept:[25], acceptedUnits:["%"], unit:"%", tolerance:0,
    commonMisconception:"Giving 75% (the tall proportion), or forgetting only tt (1 in 4) is short.",
    steps:`Cross Tt × Tt → offspring TT, Tt, Tt, tt (3 : 1 tall : short). Only <b>tt</b> is short = 1 in 4<br><span class="final">= 25%</span>`, ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics" }),
  M({ id:"bio-t8-u", topic:"Genetics & Inheritance", subtopic:"Test cross (Tt × tt)", syllabusReference:"LO5 (5.3u)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"In pea plants, tall (T) is dominant to short (t). A heterozygous tall plant (Tt) is crossed with a short plant (tt). What percentage of the offspring are expected to be TALL?", data:"Give your answer as a percentage.", accept:[50], acceptedUnits:["%"], unit:"%", tolerance:0,
    commonMisconception:"Assuming a 3:1 ratio (that is Tt × Tt) and giving 75% or 25%.",
    steps:`Cross Tt × tt → offspring Tt, Tt, tt, tt (a 1 : 1 ratio). Tall (Tt) = 2 in 4<br><span class="final">= 50%</span>`, ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics" }),

  /* ===== T9 Ecology & Human Impact (LO6) ===== */
  M({ id:"bio-t9-f", topic:"Ecology & Human Impact", subtopic:"Trophic levels", syllabusReference:"LO6 (6.1j)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:50, dia:"foodchain",
    q:"In the food chain shown (grass → grasshopper → lizard → kestrel), what is the grasshopper?",
    opts:["A producer","A primary consumer","A secondary consumer","A decomposer"], correct:1,
    commonMisconception:"Calling the first animal a producer, or a secondary consumer.",
    steps:`The grass is the producer. The grasshopper eats the producer, so it is the <b>primary consumer</b> (a herbivore). The lizard is a secondary consumer.<br><span class="final">Answer: A primary consumer</span>`, ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology" }),
  M({ id:"bio-t9-s", topic:"Ecology & Human Impact", subtopic:"Energy loss along a chain", syllabusReference:"LO6 (6.3n)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:75, dia:"pyramid",
    q:"Why is there less energy available at each higher level of a food chain (as shown by a pyramid of energy)?",
    opts:["Energy is destroyed by the animals","Energy is lost to the surroundings, mainly as heat from respiration","Energy is turned into new species","Higher animals do not need energy"], correct:1,
    commonMisconception:"Thinking energy is destroyed, rather than transferred and lost as heat.",
    steps:`At each level most energy is used for life processes and lost to the surroundings (mainly <b>heat from respiration</b>, plus movement and waste). So less passes on - which is why food chains are short.<br><span class="final">Answer: Energy is lost, mainly as heat from respiration</span>`, ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology" }),
  M({ id:"bio-t9-a", topic:"Ecology & Human Impact", subtopic:"Eutrophication", syllabusReference:"LO6 (6.3)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:80,
    q:"Excess fertiliser washes into a pond, algae grow rapidly, then later many fish die from lack of oxygen. Name this process.", data:"Type your answer (a word).", accept:["eutrophication"],
    commonMisconception:"Describing the process without naming it, or just calling it 'pollution'.",
    steps:`This is <b>eutrophication</b>. Extra nutrients cause an algal bloom; when the algae die, bacteria decompose them and use up the dissolved oxygen, so fish suffocate.<br><span class="final">Answer: Eutrophication</span>`, ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology" }),
  M({ id:"bio-t9-u", topic:"Ecology & Human Impact", subtopic:"Percentage energy transfer", syllabusReference:"LO6 (6.3n)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"A crop of plants captures 40 000 kJ of light energy. The cows that eat the plants store 4000 kJ of this energy in their bodies. Calculate the percentage of energy transferred from the plants to the cows.", data:"Give your answer as a percentage.", accept:[10], acceptedUnits:["%"], unit:"%", tolerance:0.5,
    commonMisconception:"Dividing the wrong way round (40 000 ÷ 4000), or forgetting to multiply by 100.",
    steps:`% transferred = (energy in cows ÷ energy in plants) × 100 = (4000 ÷ 40 000) × 100 = 0.1 × 100<br><span class="final">= 10%</span> (about 90% is lost, mainly as heat).`, ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology" }),

  /* ===== T10 Classification, Variation & Evolution (LO7) ===== */
  M({ id:"bio-t10-f", topic:"Classification, Variation & Evolution", subtopic:"Classification groups", syllabusReference:"LO7 (7.2)", difficulty:"foundation", cognitiveSkill:"recall", type:"mcq", marks:1, expectedTimeSeconds:45,
    q:"Living organisms are classified into groups. Which of these is the LARGEST group?",
    opts:["Species","Genus","Family","Kingdom"], correct:3,
    commonMisconception:"Choosing species (the smallest group) or genus.",
    steps:`Largest to smallest: <b>kingdom</b> → phylum → class → order → family → genus → species.<br><span class="final">Answer: Kingdom</span>`, ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification" }),
  M({ id:"bio-t10-s", topic:"Classification, Variation & Evolution", subtopic:"The binomial system", syllabusReference:"LO7 (7.2)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:70,
    q:"What is the name of the system that gives each species a two-part Latin name, such as Homo sapiens?", data:"Type your answer (one or two words).", accept:["binomial","binomial system","binomial naming","binomial nomenclature"],
    commonMisconception:"Answering 'Latin names' or 'scientific names' without the term binomial.",
    steps:`The <b>binomial system</b> gives each species a two-part name (genus + species), used worldwide so scientists agree which organism is meant.<br><span class="final">Answer: The binomial system</span>`, ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification" }),
  M({ id:"bio-t10-a", topic:"Classification, Variation & Evolution", subtopic:"Variation", syllabusReference:"LO5 (5.2t)", difficulty:"standard_exam", cognitiveSkill:"recall", type:"text", marks:2, expectedTimeSeconds:70,
    q:"What is the name for the differences that exist between individuals of the same species (such as height in humans)?", data:"Type your answer (a word).", accept:["variation"],
    commonMisconception:"Confusing variation with adaptation or with evolution.",
    steps:`<b>Variation</b> describes the differences between individuals of the same species. It may be inherited or environmental, and is the raw material for natural selection.<br><span class="final">Answer: Variation</span>`, ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification" }),
  M({ id:"bio-t10-u", topic:"Classification, Variation & Evolution", subtopic:"Natural selection", syllabusReference:"LO7 (7.3a)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:120,
    q:"A few bacteria survive treatment with an antibiotic because they carry a resistance allele. They reproduce, and over time the whole population becomes resistant. This is an example of what?",
    opts:["Artificial selection","Natural selection (evolution)","Homeostasis","Photosynthesis"], correct:1,
    commonMisconception:"Calling it artificial selection, or thinking the bacteria 'chose' to become resistant.",
    steps:`The antibiotic is the selection pressure. Resistant bacteria survive, reproduce and pass on the resistance allele, so over generations the population changes - this is <b>natural selection</b>, the mechanism of evolution.<br><span class="final">Answer: Natural selection (evolution)</span>`, ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification" }),
];

export const WHY = {
  "Cells & Transport":"Revise cell structure, surface-area-to-volume ratio, and diffusion, osmosis and active transport.",
  "Nutrition, Molecules & Enzymes":"Review the food tests, enzyme action (temperature and pH) and where digestion and absorption happen.",
  "Photosynthesis & Plant Transport":"Focus on the photosynthesis equation, the starch test, transpiration and xylem vs phloem.",
  "Respiration & Gas Exchange":"Practise aerobic vs anaerobic respiration and how the alveoli are adapted for gas exchange.",
  "Circulation in Animals":"Revise blood vessels, blood components and how the heart's structure suits its function.",
  "Homeostasis & Coordination":"Review the kidney, homeostasis, the reflex arc and the body's defences against disease (immunity and vaccines).",
  "Reproduction":"Focus on flower and human reproduction, gametes, fertilisation and the menstrual cycle.",
  "Genetics & Inheritance":"Practise DNA and genes, dominant vs recessive alleles and genetic crosses (including test crosses).",
  "Ecology & Human Impact":"Revise food chains, energy transfer and its efficiency, eutrophication and human impact.",
  "Classification, Variation & Evolution":"Review classification, the binomial system, variation and natural selection."
};

/* -------- wire into the shared grading engine -------- */
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
