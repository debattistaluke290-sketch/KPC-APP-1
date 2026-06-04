/* =========================================================================
   KPC Diagnostic - BIOLOGY Question Bank + Grading (SERVER SIDE ONLY)
   -------------------------------------------------------------------------
   SEC / MATSEC O-Level Biology. 10 topics x 4 questions = 40.
   Per topic: 1 foundation, 2 standard, 1 hard.
   Mix of multiple-choice, two numeric questions, and typed short-answer
   questions that are marked LENIENTLY (typos + synonyms via edit-distance,
   with a Cloudflare Workers AI fallback judge for unusual phrasings).
   All ORIGINAL (SEC style; no MATSEC text). publicQuestions() hides answers.
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

/* Question types:
   "mcq"  -> opts + correct
   "work" -> numeric accept[] (tolerance)
   "text" -> typed short answer, accept[] (lenient: typos/synonyms + AI judge) */
export const QUESTIONS = [
  /* ===== TOPIC 1 - CELLS & TRANSPORT ===== */
  { topic:"Cells & Transport", ref:"KPC Biology - Cells & Transport", product:"biology-cells",
    difficulty:"foundation", type:"text",
    q:"Name the structure that is found in a plant cell but NOT in an animal cell.",
    data:"Type your answer (a word or short phrase).", accept:["cell wall"],
    steps:`Plant cells have a rigid <b>cell wall</b> (made of cellulose) outside the membrane; animal cells do not.<br><span class="final">Answer: Cell wall</span>` },

  { topic:"Cells & Transport", ref:"KPC Biology - Cells & Transport", product:"biology-cells",
    difficulty:"standard", type:"mcq",
    q:"A red blood cell is placed in pure (distilled) water. What is most likely to happen to it?",
    opts:["It shrinks (crenates)","It swells and may burst","Nothing changes","It starts to divide"], correct:1,
    steps:`Water moves into the cell by <b>osmosis</b> (from a high water concentration outside to a lower one inside). Animal cells have no cell wall, so the cell swells and may burst (haemolysis).<br><span class="final">Answer: It swells and may burst</span>` },

  { topic:"Cells & Transport", ref:"KPC Biology - Cells & Transport", product:"biology-cells",
    difficulty:"standard", type:"work", dia:"savcube",
    q:"A cube-shaped cell has sides of 2 cm. Calculate its surface-area-to-volume ratio (surface area divided by volume).",
    data:"Give your answer as a single number.", accept:[3], unit:"",
    steps:`Surface area = 6 x (2 x 2) = <b>24 cm&#178;</b><br>Volume = 2 x 2 x 2 = <b>8 cm&#179;</b><br>Ratio = 24 / 8<br><span class="final">SA:V = 3</span><br><br>Tip: smaller cells have a larger surface-area-to-volume ratio, which is why exchange surfaces are made of many small/thin units.` },

  { topic:"Cells & Transport", ref:"KPC Biology - Cells & Transport", product:"biology-cells",
    difficulty:"hard", type:"mcq",
    q:"A root hair cell absorbs mineral ions from the soil, even though the ions are at a higher concentration inside the cell than in the soil. Which process is responsible?",
    opts:["Diffusion","Osmosis","Active transport","Evaporation"], correct:2,
    steps:`Moving ions <b>against</b> their concentration gradient (low to high) needs energy from respiration. That process is <b>active transport</b>. Diffusion and osmosis only move substances down a gradient and need no energy.<br><span class="final">Answer: Active transport</span>` },

  /* ===== TOPIC 2 - NUTRITION, MOLECULES & ENZYMES ===== */
  { topic:"Nutrition, Molecules & Enzymes", ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition",
    difficulty:"foundation", type:"mcq",
    q:"Which food test uses Benedict's solution and gives a brick-red colour when the result is positive?",
    opts:["Starch","Protein","Reducing sugar","Fat"], correct:2,
    steps:`Benedict's solution is heated with the sample; a <b>reducing sugar</b> (such as glucose) turns it from blue to brick-red. Starch uses iodine (blue-black), protein uses Biuret (purple), fat uses the emulsion test.<br><span class="final">Answer: Reducing sugar</span>` },

  { topic:"Nutrition, Molecules & Enzymes", ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition",
    difficulty:"standard", type:"mcq",
    q:"Enzymes are biological catalysts. What happens to most human enzymes if the temperature rises well above body temperature (for example to 70 degrees C)?",
    opts:["They work faster and faster","They denature and stop working","They turn into sugars","They become vitamins"], correct:1,
    steps:`High temperatures change the shape of an enzyme's active site so the substrate no longer fits. The enzyme is <b>denatured</b> and can no longer catalyse the reaction. This change is permanent.<br><span class="final">Answer: They denature and stop working</span>` },

  { topic:"Nutrition, Molecules & Enzymes", ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition",
    difficulty:"standard", type:"text",
    q:"Name the organ where most digested food is absorbed into the bloodstream.",
    data:"Type your answer (a word or short phrase).", accept:["small intestine","ileum"],
    steps:`The <b>small intestine</b> (ileum) is lined with villi that give a huge surface area for absorbing digested food into the blood.<br><span class="final">Answer: Small intestine (ileum)</span>` },

  { topic:"Nutrition, Molecules & Enzymes", ref:"KPC Biology - Nutrition, Molecules & Enzymes", product:"biology-nutrition",
    difficulty:"hard", type:"mcq",
    q:"A person eats a meal that is very high in protein. Protease enzymes break this protein down into which smaller molecules?",
    opts:["Glucose","Amino acids","Fatty acids and glycerol","Starch"], correct:1,
    steps:`Proteins are made of <b>amino acids</b>, so proteases digest them into amino acids. Carbohydrases give glucose; lipases give fatty acids and glycerol.<br><span class="final">Answer: Amino acids</span>` },

  /* ===== TOPIC 3 - PHOTOSYNTHESIS & PLANT TRANSPORT ===== */
  { topic:"Photosynthesis & Plant Transport", ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants",
    difficulty:"foundation", type:"mcq",
    q:"Photosynthesis uses carbon dioxide and water, together with light energy, to produce oxygen and which other substance?",
    opts:["Protein","Glucose","Starch directly","Carbon dioxide"], correct:1,
    steps:`The word equation is: carbon dioxide + water -> <b>glucose</b> + oxygen (using light energy trapped by chlorophyll). The glucose can later be stored as starch.<br><span class="final">Answer: Glucose</span>` },

  { topic:"Photosynthesis & Plant Transport", ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants",
    difficulty:"standard", type:"text",
    q:"Name the small pores in a leaf through which most water vapour is lost during transpiration.",
    data:"Type your answer (a word or short phrase).", accept:["stomata","stoma"],
    steps:`Water vapour leaves the leaf through the <b>stomata</b> (mostly on the lower surface). Guard cells open and close them.<br><span class="final">Answer: Stomata</span>` },

  { topic:"Photosynthesis & Plant Transport", ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants",
    difficulty:"standard", type:"text",
    q:"Name the plant tissue that transports water and dissolved minerals upwards from the roots to the leaves.",
    data:"Type your answer (a word).", accept:["xylem","xylem vessels","xylem tissue"],
    steps:`<b>Xylem</b> carries water and minerals up from the roots. Phloem carries dissolved sugars around the plant.<br><span class="final">Answer: Xylem</span>` },

  { topic:"Photosynthesis & Plant Transport", ref:"KPC Biology - Photosynthesis & Plant Transport", product:"biology-plants",
    difficulty:"hard", type:"mcq",
    q:"A plant is left in complete darkness for two days. A leaf is then removed and tested with iodine solution. What is the most likely result?",
    opts:["Blue-black, because lots of starch is present","Stays orange-brown, because no starch is present","Turns red, showing sugar","Turns purple, showing protein"], correct:1,
    steps:`Without light the plant cannot photosynthesise, so it makes no glucose and stores no starch (and uses up existing stores). Iodine therefore stays <b>orange-brown</b> (a negative result).<br><span class="final">Answer: Stays orange-brown (no starch)</span>` },

  /* ===== TOPIC 4 - RESPIRATION & GAS EXCHANGE ===== */
  { topic:"Respiration & Gas Exchange", ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration",
    difficulty:"foundation", type:"text",
    q:"Name the gas that is needed for aerobic respiration.",
    data:"Type your answer (a word).", accept:["oxygen"],
    steps:`Aerobic respiration: glucose + <b>oxygen</b> -> carbon dioxide + water (+ energy). It needs oxygen, unlike anaerobic respiration.<br><span class="final">Answer: Oxygen</span>` },

  { topic:"Respiration & Gas Exchange", ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration",
    difficulty:"standard", type:"mcq",
    q:"During hard exercise, muscle cells may respire anaerobically. What substance builds up in the muscles as a result?",
    opts:["Ethanol","Lactic acid","Glucose","Oxygen"], correct:1,
    steps:`In human muscle, anaerobic respiration produces <b>lactic acid</b> (which causes fatigue and an oxygen debt). In yeast, anaerobic respiration instead produces ethanol and carbon dioxide.<br><span class="final">Answer: Lactic acid</span>` },

  { topic:"Respiration & Gas Exchange", ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration",
    difficulty:"standard", type:"text",
    q:"Name the tiny air sacs in the lungs where gas exchange takes place between the air and the blood.",
    data:"Type your answer (a word).", accept:["alveoli","alveolus","air sacs"],
    steps:`The <b>alveoli</b> are the site of gas exchange: oxygen diffuses into the blood and carbon dioxide diffuses out.<br><span class="final">Answer: Alveoli</span>` },

  { topic:"Respiration & Gas Exchange", ref:"KPC Biology - Respiration & Gas Exchange", product:"biology-respiration",
    difficulty:"hard", type:"mcq",
    q:"Which combination of features makes alveoli especially good at gas exchange?",
    opts:["Thick walls and a small surface area","A large surface area, thin walls and a rich blood supply","A waterproof, dry lining","A thick layer of muscle"], correct:1,
    steps:`Efficient exchange surfaces have a <b>large surface area</b>, a <b>short diffusion distance</b> (thin walls, one cell thick) and a <b>good blood supply</b> to maintain a steep concentration gradient. Alveoli have all three.<br><span class="final">Answer: Large surface area, thin walls and a rich blood supply</span>` },

  /* ===== TOPIC 5 - CIRCULATION IN ANIMALS ===== */
  { topic:"Circulation in Animals", ref:"KPC Biology - Circulation in Animals", product:"biology-circulation",
    difficulty:"foundation", type:"text",
    q:"Name the type of blood vessel that carries blood AWAY from the heart.",
    data:"Type your answer (a word).", accept:["artery","arteries"],
    steps:`<b>Arteries</b> carry blood away from the heart, usually at high pressure, so they have thick muscular walls. Veins carry blood back to the heart.<br><span class="final">Answer: Artery</span>` },

  { topic:"Circulation in Animals", ref:"KPC Biology - Circulation in Animals", product:"biology-circulation",
    difficulty:"standard", type:"mcq",
    q:"Which component of the blood contains haemoglobin and carries oxygen around the body?",
    opts:["White blood cells","Platelets","Red blood cells","Plasma"], correct:2,
    steps:`<b>Red blood cells</b> contain haemoglobin, which binds oxygen to form oxyhaemoglobin. White cells fight disease and platelets help clotting.<br><span class="final">Answer: Red blood cells</span>` },

  { topic:"Circulation in Animals", ref:"KPC Biology - Circulation in Animals", product:"biology-circulation",
    difficulty:"standard", type:"mcq",
    q:"Which side of the human heart pumps oxygenated blood out to the rest of the body?",
    opts:["The left side","The right side","Both sides equally","Neither - veins do this"], correct:0,
    steps:`The <b>left side</b> receives oxygenated blood from the lungs and pumps it to the whole body, so its wall (the left ventricle) is the most muscular. The right side pumps deoxygenated blood to the lungs.<br><span class="final">Answer: The left side</span>` },

  { topic:"Circulation in Animals", ref:"KPC Biology - Circulation in Animals", product:"biology-circulation",
    difficulty:"hard", type:"mcq",
    q:"Veins and the heart contain valves. What is their main function?",
    opts:["To speed the blood up","To prevent the blood flowing backwards","To add oxygen to the blood","To make new blood cells"], correct:1,
    steps:`Valves keep blood moving in <b>one direction only</b> by closing if blood tries to flow backwards. This matters in veins, where blood is at low pressure.<br><span class="final">Answer: To prevent the blood flowing backwards</span>` },

  /* ===== TOPIC 6 - HOMEOSTASIS & COORDINATION ===== */
  { topic:"Homeostasis & Coordination", ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis",
    difficulty:"foundation", type:"text",
    q:"Name the organ that filters the blood to remove urea and produce urine.",
    data:"Type your answer (a word).", accept:["kidney","kidneys"],
    steps:`The <b>kidneys</b> filter the blood, removing urea and excess water and salts as urine. The bladder only stores urine.<br><span class="final">Answer: Kidney</span>` },

  { topic:"Homeostasis & Coordination", ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis",
    difficulty:"standard", type:"text",
    q:"What is the name for keeping a constant internal environment in the body (such as temperature and water content)?",
    data:"Type your answer (a word).", accept:["homeostasis"],
    steps:`<b>Homeostasis</b> keeps internal conditions (temperature, blood glucose, water and ion balance) steady, so cells and enzymes can work properly.<br><span class="final">Answer: Homeostasis</span>` },

  { topic:"Homeostasis & Coordination", ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis",
    difficulty:"standard", type:"mcq",
    q:"What is the correct order of structures in a simple reflex arc?",
    opts:["Receptor -> sensory neurone -> relay neurone -> motor neurone -> effector","Effector -> motor neurone -> relay neurone -> sensory neurone -> receptor","Receptor -> motor neurone -> sensory neurone -> effector","Sensory neurone -> receptor -> effector -> motor neurone"], correct:0,
    steps:`A reflex travels: <b>receptor -> sensory neurone -> relay neurone (in the CNS) -> motor neurone -> effector</b>. This pathway is fast and automatic, which protects the body.<br><span class="final">Answer: Receptor -> sensory -> relay -> motor -> effector</span>` },

  { topic:"Homeostasis & Coordination", ref:"KPC Biology - Homeostasis & Coordination", product:"biology-homeostasis",
    difficulty:"hard", type:"mcq",
    q:"On a very hot day, which set of responses helps to cool the body down?",
    opts:["Shivering and narrowing of skin blood vessels","Sweating and widening of skin blood vessels (vasodilation)","Goose bumps and shivering","Producing more urine only"], correct:1,
    steps:`To lose heat the body <b>sweats</b> (evaporation cools the skin) and <b>widens the skin blood vessels</b> (vasodilation) so more warm blood flows near the surface to radiate heat. Shivering and vasoconstriction are warming responses.<br><span class="final">Answer: Sweating and vasodilation</span>` },

  /* ===== TOPIC 7 - REPRODUCTION ===== */
  { topic:"Reproduction", ref:"KPC Biology - Reproduction", product:"biology-reproduction",
    difficulty:"foundation", type:"text",
    q:"In a flowering plant, name the part that produces pollen.",
    data:"Type your answer (a word).", accept:["anther","anthers"],
    steps:`The <b>anther</b> (part of the stamen, the male part) produces pollen grains. The stigma receives pollen; the ovary contains ovules.<br><span class="final">Answer: Anther</span>` },

  { topic:"Reproduction", ref:"KPC Biology - Reproduction", product:"biology-reproduction",
    difficulty:"standard", type:"mcq",
    q:"In humans, where does fertilisation of the egg normally take place?",
    opts:["In the uterus (womb)","In the oviduct (fallopian tube)","In the ovary","In the vagina"], correct:1,
    steps:`A sperm normally fertilises the egg in the <b>oviduct</b> (fallopian tube). The fertilised egg then travels to the uterus, where it implants.<br><span class="final">Answer: In the oviduct</span>` },

  { topic:"Reproduction", ref:"KPC Biology - Reproduction", product:"biology-reproduction",
    difficulty:"standard", type:"mcq",
    q:"Which type of cell division produces gametes (sex cells) and halves the chromosome number?",
    opts:["Mitosis","Meiosis","Fertilisation","Pollination"], correct:1,
    steps:`<b>Meiosis</b> produces gametes with half the normal chromosome number (haploid), so that when two gametes join at fertilisation the full number is restored. Mitosis makes identical body cells.<br><span class="final">Answer: Meiosis</span>` },

  { topic:"Reproduction", ref:"KPC Biology - Reproduction", product:"biology-reproduction",
    difficulty:"hard", type:"mcq",
    q:"In a regular 28-day menstrual cycle, around which day does ovulation (release of an egg) usually happen?",
    opts:["Around day 1","Around day 14","Around day 28","Around day 5"], correct:1,
    steps:`Ovulation usually occurs near the <b>middle</b> of the cycle, about <b>day 14</b>. The lining of the uterus thickens before this, ready to receive a fertilised egg.<br><span class="final">Answer: Around day 14</span>` },

  /* ===== TOPIC 8 - GENETICS & INHERITANCE ===== */
  { topic:"Genetics & Inheritance", ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics",
    difficulty:"foundation", type:"text",
    q:"Name the molecule that carries the genetic information in the chromosomes of a cell.",
    data:"Type your answer (a word or its full name).", accept:["dna","deoxyribonucleic acid"],
    steps:`<b>DNA</b> (deoxyribonucleic acid) carries the genetic code. A gene is a section of DNA that codes for a particular characteristic.<br><span class="final">Answer: DNA</span>` },

  { topic:"Genetics & Inheritance", ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics",
    difficulty:"standard", type:"mcq",
    q:"An allele that is always shown in an organism whenever it is present is described as what?",
    opts:["Recessive","Dominant","Codominant","Mutated"], correct:1,
    steps:`A <b>dominant</b> allele is expressed even if only one copy is present. A recessive allele is only expressed when two copies are present (no dominant allele to mask it).<br><span class="final">Answer: Dominant</span>` },

  { topic:"Genetics & Inheritance", ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics",
    difficulty:"standard", type:"work", dia:"punnett",
    q:"In pea plants, tall (T) is dominant to short (t). Two heterozygous tall plants (Tt) are crossed. What percentage of the offspring are expected to be short?",
    data:"Give your answer as a percentage.", accept:[25], unit:"%",
    steps:`Cross Tt x Tt. The offspring are: TT, Tt, Tt, tt (a 3:1 ratio of tall to short).<br>Only <b>tt</b> is short, which is 1 out of 4.<br><span class="final">Answer: 25%</span>` },

  { topic:"Genetics & Inheritance", ref:"KPC Biology - Genetics & Inheritance", product:"biology-genetics",
    difficulty:"hard", type:"mcq",
    q:"In humans, females are XX and males are XY. Which sex chromosome must a father pass on to every one of his sons?",
    opts:["The X chromosome","The Y chromosome","Two X chromosomes","No sex chromosome"], correct:1,
    steps:`A son is XY. He gets one X from his mother (who is XX), so the chromosome that makes him male, the <b>Y</b>, must come from his father. So every son receives the father's Y chromosome.<br><span class="final">Answer: The Y chromosome</span>` },

  /* ===== TOPIC 9 - ECOLOGY & HUMAN IMPACT ===== */
  { topic:"Ecology & Human Impact", ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology",
    difficulty:"foundation", type:"mcq", dia:"foodchain",
    q:"In the food chain shown (grass -> grasshopper -> lizard -> kestrel), what is the grasshopper?",
    opts:["A producer","A primary consumer","A secondary consumer","A decomposer"], correct:1,
    steps:`The grass is the producer. The grasshopper eats the producer, so it is the <b>primary consumer</b> (a herbivore). The lizard is a secondary consumer.<br><span class="final">Answer: A primary consumer</span>` },

  { topic:"Ecology & Human Impact", ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology",
    difficulty:"standard", type:"mcq", dia:"pyramid",
    q:"Why is there less energy available at each higher level of a food chain (as shown by a pyramid of energy)?",
    opts:["Energy is destroyed by the animals","Energy is lost to the surroundings, mainly as heat from respiration","Energy is turned into new species","Higher animals do not need energy"], correct:1,
    steps:`At each level, organisms use most of the energy for life processes and lose it to the surroundings (mainly as <b>heat from respiration</b>, plus movement and undigested waste). So less energy passes to the next level, which is why food chains are usually short.<br><span class="final">Answer: Energy is lost, mainly as heat from respiration</span>` },

  { topic:"Ecology & Human Impact", ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology",
    difficulty:"standard", type:"text",
    q:"Excess fertiliser washes into a pond, algae grow rapidly, then later many fish die from lack of oxygen. Name this process.",
    data:"Type your answer (a word).", accept:["eutrophication"],
    steps:`This is <b>eutrophication</b>. Extra nutrients cause an algal bloom; when the algae die, bacteria decompose them and use up the dissolved oxygen, so fish and other animals suffocate.<br><span class="final">Answer: Eutrophication</span>` },

  { topic:"Ecology & Human Impact", ref:"KPC Biology - Ecology & Human Impact", product:"biology-ecology",
    difficulty:"hard", type:"mcq",
    q:"Clearing large areas of forest (deforestation) tends to increase the amount of carbon dioxide in the atmosphere. What is the main reason?",
    opts:["Trees release carbon dioxide while they are alive","Fewer trees remain to remove carbon dioxide by photosynthesis","Soil produces oxygen instead","Deforestation has no effect on carbon dioxide"], correct:1,
    steps:`Living trees <b>remove</b> carbon dioxide by photosynthesis. Removing them means less CO2 is taken out of the air (and burning or rotting the wood releases stored carbon), so atmospheric CO2 rises, adding to the greenhouse effect.<br><span class="final">Answer: Fewer trees remain to remove CO2 by photosynthesis</span>` },

  /* ===== TOPIC 10 - CLASSIFICATION, VARIATION & EVOLUTION ===== */
  { topic:"Classification, Variation & Evolution", ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification",
    difficulty:"foundation", type:"mcq",
    q:"Living organisms are classified into groups. Which of these is the LARGEST group?",
    opts:["Species","Genus","Family","Kingdom"], correct:3,
    steps:`From largest to smallest the main groups are: <b>kingdom</b> -> phylum -> class -> order -> family -> genus -> species. So kingdom is the largest.<br><span class="final">Answer: Kingdom</span>` },

  { topic:"Classification, Variation & Evolution", ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification",
    difficulty:"standard", type:"text",
    q:"What is the name of the system that gives each species a two-part Latin name, such as Homo sapiens?",
    data:"Type your answer (one or two words).", accept:["binomial","binomial system","binomial naming","binomial nomenclature"],
    steps:`The <b>binomial system</b> gives every species a two-part name: the genus (capital letter) followed by the species. It is used worldwide so scientists agree on which organism is meant.<br><span class="final">Answer: The binomial system</span>` },

  { topic:"Classification, Variation & Evolution", ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification",
    difficulty:"standard", type:"text",
    q:"What is the name for the differences that exist between individuals of the same species (such as height in humans)?",
    data:"Type your answer (a word).", accept:["variation"],
    steps:`<b>Variation</b> describes the differences between individuals of the same species. It can be inherited (genetic) or caused by the environment, and it is the raw material for natural selection.<br><span class="final">Answer: Variation</span>` },

  { topic:"Classification, Variation & Evolution", ref:"KPC Biology - Classification, Variation & Evolution", product:"biology-classification",
    difficulty:"hard", type:"mcq",
    q:"A few bacteria survive treatment with an antibiotic because they carry a resistance allele. They reproduce, and over time the whole population becomes resistant. This is an example of what?",
    opts:["Artificial selection","Natural selection (evolution)","Homeostasis","Photosynthesis"], correct:1,
    steps:`The antibiotic is the selection pressure. The resistant bacteria are best suited to survive, so they live, reproduce and pass on the resistance allele. Over generations the population changes - this is <b>natural selection</b>, the mechanism of evolution.<br><span class="final">Answer: Natural selection (evolution)</span>` },
];

const WHY = {
  "Cells & Transport":"Revise cell structure, surface-area-to-volume ratio and diffusion, osmosis and active transport.",
  "Nutrition, Molecules & Enzymes":"Review the food tests, enzyme action and where digestion and absorption happen.",
  "Photosynthesis & Plant Transport":"Focus on the photosynthesis equation, limiting factors, transpiration and xylem vs phloem.",
  "Respiration & Gas Exchange":"Practise aerobic vs anaerobic respiration and how alveoli are adapted for gas exchange.",
  "Circulation in Animals":"Revise blood vessels, blood components and the structure and action of the heart.",
  "Homeostasis & Coordination":"Review the kidney, temperature control, the reflex arc and the nervous system.",
  "Reproduction":"Focus on flower and human reproduction, gametes, fertilisation and the menstrual cycle.",
  "Genetics & Inheritance":"Practise DNA and genes, dominant vs recessive alleles, genetic crosses and sex determination.",
  "Ecology & Human Impact":"Revise food chains and webs, energy loss, eutrophication and human effects on the environment.",
  "Classification, Variation & Evolution":"Review classification, the binomial system, variation and natural selection."
};

const LABEL = { green:"Strong", amber:"Okay", red:"Needs work" };

/* -------- PUBLIC payload (no answers) -------- */
export function publicQuestions() {
  return {
    subject: SUBJECT,
    topicOrder: TOPIC_ORDER,
    questions: QUESTIONS.map(q => ({
      topic: q.topic, type: q.type, q: q.q,
      data: q.data || null, dia: q.dia || null,
      opts: q.type === "mcq" ? q.opts : null,
      unit: q.unit || null
    }))
  };
}

/* -------- Numeric parsing (plain + scientific notation) -------- */
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

/* -------- Lenient text matching (typos + synonyms) -------- */
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

async function checkText(item, val, env) {
  const n = normText(val);
  if (!n) return false;
  const ns = n.replace(/ /g, ""); // space-stripped (handles "D.N.A" -> "dna")
  const accepts = (item.accept || []).map(normText).filter(Boolean);
  for (const a of accepts) {
    const as = a.replace(/ /g, "");
    if (ns === as) return true;
    if (levenshtein(ns, as) <= tolFor(as)) return true;
    if (n === a) return true;
    if (levenshtein(n, a) <= tolFor(a)) return true;
    // single-word accepted answer: allow it to appear (typo-tolerant) as a token
    if (!a.includes(" ")) {
      for (const tok of n.split(" ")) {
        if (tok === a || levenshtein(tok, a) <= tolFor(a)) return true;
      }
    }
  }
  // Fallback: ask Cloudflare Workers AI to judge (only if the AI binding exists)
  if (env && env.AI) {
    try {
      const prompt =
        "You are marking a short-answer O-Level Biology question for a 15-16 year old. " +
        "Decide if the student's answer is essentially correct, allowing spelling mistakes, " +
        "synonyms and extra words. Reply with ONLY one word: YES or NO.\n" +
        "Question: " + item.q + "\n" +
        "Accepted correct answer(s): " + (item.accept || []).join(" / ") + "\n" +
        "Student's answer: " + val;
      const out = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
        messages: [{ role: "user", content: prompt }],
        max_tokens: 4
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

/* gradeAndReport is ASYNC because text answers may use an AI judge. */
export async function gradeAndReport(name, answers = [], env) {
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
        correct = q.type === "text" ? await checkText(q, s, env) : checkWork(q, s);
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
