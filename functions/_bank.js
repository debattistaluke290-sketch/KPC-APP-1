/* =========================================================================
   KPC Diagnostic - Question Bank + Grading (SERVER SIDE ONLY)
   -------------------------------------------------------------------------
   Never served to the browser. Correct answers, accepted values and worked
   solutions stay private. The browser only receives publicQuestions().

   SEC / MATSEC O-Level Physics. 9 topics x 4 questions = 36.
   Per topic: 1 foundation, 2 standard, 1 hard (so 100% is rare).
   All questions ORIGINAL (written in SEC style; no MATSEC text reproduced).

   TO EDIT CONTENT: edit the QUESTIONS array. The "ref" (KPC note) and
   "product" (Shopify) fields are placeholders to be filled with real values.
   ========================================================================= */

export const SUBJECT = "Physics";

export const TOPIC_ORDER = [
  "Motion & Forces",
  "Moments, Density & Pressure",
  "Energy, Work & Power",
  "Thermal Physics",
  "Waves, Light & Sound",
  "Electricity & Circuits",
  "Magnetism & Electromagnetism",
  "Radioactivity",
  "Earth & Space"
];

/* Question fields:
   topic, ref, product, difficulty (foundation|standard|hard),
   type ("mcq"|"work"), q, data, dia (frontend SVG key),
   opts + correct (mcq)  [PRIVATE: correct]
   accept + unit (work)  [PRIVATE: accept]
   steps (worked solution HTML)  [PRIVATE]
*/
export const QUESTIONS = [
  /* ===================== TOPIC 1 - MOTION & FORCES ===================== */
  { topic:"Motion & Forces", ref:"KPC Physics - Motion & Forces", product:"physics-motion-forces",
    difficulty:"foundation", type:"work", dia:"vtgraph",
    q:"The velocity–time graph shows a bus pulling away from a stop along the Sliema seafront. Use the graph to calculate the acceleration of the bus during the first 8 seconds.",
    data:"Give your answer in m/s².", accept:[2], unit:"m/s²",
    steps:`On a velocity–time graph, acceleration is the <b>gradient</b> of the line.<br>a = change in velocity ÷ time = (16 − 0) ÷ 8<br><span class="final">a = 2 m/s²</span><br><br>✓ <b>Tip:</b> a straight slanted line means constant acceleration.<br>✗ <b>Common mistake:</b> reading off a single velocity (16) instead of the change over time.` },

  { topic:"Motion & Forces", ref:"KPC Physics - Motion & Forces", product:"physics-motion-forces",
    difficulty:"standard", type:"work", dia:"resultant",
    q:"A delivery van has a total mass of 1500 kg. Its engine provides a forward driving force of 3500 N, while air resistance and friction together produce 1100 N of resistive force. Calculate the acceleration of the van.",
    data:"Give your answer in m/s².", accept:[1.6], unit:"m/s²",
    steps:`First find the resultant (net) force: 3500 − 1100 = <b>2400 N</b> forwards.<br>Then use F = m × a, rearranged: a = F ÷ m = 2400 ÷ 1500<br><span class="final">a = 1.6 m/s²</span><br><br>✓ <b>Tip:</b> always find the resultant force before using F = ma.<br>✗ <b>Common mistake:</b> using 3500 N and forgetting to subtract the resistance.` },

  { topic:"Motion & Forces", ref:"KPC Physics - Motion & Forces", product:"physics-motion-forces",
    difficulty:"standard", type:"mcq",
    q:"Modern cars are built with a “crumple zone” at the front that folds in a crash. How does a crumple zone help reduce injury to the people inside?",
    opts:[
      "It increases the force on the passengers.",
      "It increases the time the car takes to stop, which reduces the force on the passengers.",
      "It increases the mass of the car so it stops more quickly.",
      "It reduces the car's momentum to zero instantly."
    ], correct:1,
    steps:`In a crash the car's momentum must fall to zero. A crumple zone makes the car take <b>longer</b> to stop.<br>Since force = change in momentum ÷ time, a longer time gives a <b>smaller force</b> on the passengers.<br><span class="final">Answer: B - more stopping time means less force.</span><br><br>✗ <b>Why the others fail:</b> A is the opposite; C confuses mass with safety; D “instantly” would mean a huge force.` },

  { topic:"Motion & Forces", ref:"KPC Physics - Motion & Forces", product:"physics-motion-forces",
    difficulty:"hard", type:"work",
    q:"A car of mass 1100 kg is travelling at 54 km/h when the driver brakes sharply, bringing it to rest in 3.0 s. Calculate the size of the braking force.",
    data:"Give your answer in newtons (N). Tip: convert the speed to m/s first.", accept:[5500], unit:"N",
    steps:`Convert the speed: 54 km/h ÷ 3.6 = <b>15 m/s</b>.<br>Acceleration: a = (v − u) ÷ t = (0 − 15) ÷ 3.0 = <b>−5 m/s²</b> (the minus sign shows it is slowing down).<br>Force: F = m × a = 1100 × (−5) = −5500 N<br><span class="final">Size of braking force = 5500 N</span> (acting backwards).<br><br>✗ <b>Common mistake:</b> forgetting to convert km/h (÷3.6), or dropping the negative sign that shows the force opposes the motion.` },

  /* ============ TOPIC 2 - MOMENTS, DENSITY & PRESSURE ============ */
  { topic:"Moments, Density & Pressure", ref:"KPC Physics - Moments, Density & Pressure", product:"physics-moments-density-pressure",
    difficulty:"foundation", type:"work",
    q:"A small metal block has a mass of 240 g and a volume of 30 cm³. Calculate its density.",
    data:"Give your answer in g/cm³.", accept:[8], unit:"g/cm³",
    steps:`Density = mass ÷ volume<br>ρ = 240 ÷ 30<br><span class="final">ρ = 8 g/cm³</span><br><br>✓ <b>Tip:</b> if density is greater than the surrounding liquid, the object sinks.` },

  { topic:"Moments, Density & Pressure", ref:"KPC Physics - Moments, Density & Pressure", product:"physics-moments-density-pressure",
    difficulty:"standard", type:"work", dia:"moments",
    q:"A uniform beam is balanced on a pivot. A 12 N weight hangs 0.5 m to the left of the pivot. Calculate the force needed 0.3 m to the right of the pivot to keep the beam balanced.",
    data:"Give your answer in newtons (N).", accept:[20], unit:"N",
    steps:`Principle of moments: clockwise moment = anticlockwise moment.<br>Anticlockwise moment = 12 × 0.5 = <b>6 Nm</b><br>So: F × 0.3 = 6 → F = 6 ÷ 0.3<br><span class="final">F = 20 N</span><br><br>✓ <b>Tip:</b> moment = force × perpendicular distance from the pivot.` },

  { topic:"Moments, Density & Pressure", ref:"KPC Physics - Moments, Density & Pressure", product:"physics-moments-density-pressure",
    difficulty:"standard", type:"work",
    q:"A diver is swimming 8 m below the surface of the sea. The density of sea water is 1030 kg/m³ and g = 10 N/kg. Calculate the pressure on the diver caused by the water above them.",
    data:"Give your answer in pascals (Pa).", accept:[82400, 82000], unit:"Pa",
    steps:`Pressure from a liquid: P = h × ρ × g<br>P = 8 × 1030 × 10<br><span class="final">P = 82 400 Pa</span> (about 82 kPa)<br><br>✓ <b>Tip:</b> this is the pressure due to the water only - the real total also includes atmospheric pressure.` },

  { topic:"Moments, Density & Pressure", ref:"KPC Physics - Moments, Density & Pressure", product:"physics-moments-density-pressure",
    difficulty:"hard", type:"work",
    q:"A rectangular metal block measures 20 cm × 10 cm × 5 cm and has a mass of 8 kg. Calculate its density in kg/m³.",
    data:"Give your answer in kg/m³.", accept:[8000], unit:"kg/m³",
    steps:`First convert the volume to m³.<br>Volume = 0.20 × 0.10 × 0.05 = <b>0.001 m³</b><br>Density = mass ÷ volume = 8 ÷ 0.001<br><span class="final">ρ = 8000 kg/m³</span><br><br>✗ <b>Common mistake:</b> leaving the sides in cm. 20×10×5 = 1000 cm³, which is 0.001 m³ (divide cm³ by 1 000 000).` },

  /* ============ TOPIC 3 - ENERGY, WORK & POWER ============ */
  { topic:"Energy, Work & Power", ref:"KPC Physics - Energy, Work & Power", product:"physics-energy",
    difficulty:"foundation", type:"work",
    q:"A 3 kg box is lifted straight up onto a shelf 2 m high. Taking g = 10 N/kg, calculate the gravitational potential energy it gains.",
    data:"Give your answer in joules (J).", accept:[60], unit:"J",
    steps:`Gravitational PE gained = m × g × h<br>= 3 × 10 × 2<br><span class="final">= 60 J</span>` },

  { topic:"Energy, Work & Power", ref:"KPC Physics - Energy, Work & Power", product:"physics-energy",
    difficulty:"standard", type:"work",
    q:"A 0.2 kg ball is dropped from a height of 5 m. Taking g = 10 N/kg and ignoring air resistance, calculate its speed just before it hits the ground.",
    data:"Give your answer in m/s.", accept:[10], unit:"m/s",
    steps:`Energy is conserved: gravitational PE → kinetic energy.<br>½mv² = mgh, so v = √(2gh)<br>v = √(2 × 10 × 5) = √100<br><span class="final">v = 10 m/s</span><br><br>✓ <b>Tip:</b> the mass cancels out - all objects reach the same speed when air resistance is ignored.` },

  { topic:"Energy, Work & Power", ref:"KPC Physics - Energy, Work & Power", product:"physics-energy",
    difficulty:"standard", type:"work",
    q:"An electric motor lifts a 50 kg load through a height of 4 m in 10 seconds. Taking g = 10 N/kg, calculate the useful power output of the motor.",
    data:"Give your answer in watts (W).", accept:[200], unit:"W",
    steps:`Work done (energy transferred) = m × g × h = 50 × 10 × 4 = <b>2000 J</b><br>Power = energy ÷ time = 2000 ÷ 10<br><span class="final">P = 200 W</span><br><br>✓ <b>Tip:</b> power is how fast energy is transferred - 1 watt = 1 joule per second.` },

  { topic:"Energy, Work & Power", ref:"KPC Physics - Energy, Work & Power", product:"physics-energy",
    difficulty:"hard", type:"work",
    q:"A crane motor has a useful power output of 2.0 kW and is 80% efficient. If it runs for 30 seconds, calculate the total electrical energy it consumes.",
    data:"Give your answer in joules (J).", accept:[75000], unit:"J",
    steps:`Useful energy output = power × time = 2000 × 30 = <b>60 000 J</b><br>Efficiency = useful ÷ total, so total input = useful ÷ efficiency = 60 000 ÷ 0.80<br><span class="final">= 75 000 J</span><br><br>✗ <b>Common mistake:</b> forgetting that 2.0 kW = 2000 W, or dividing by 80 instead of 0.80.` },

  /* ============ TOPIC 4 - THERMAL PHYSICS ============ */
  { topic:"Thermal Physics", ref:"KPC Physics - Thermal Physics", product:"physics-thermal",
    difficulty:"foundation", type:"mcq",
    q:"Heat from the Sun reaches the Earth through the vacuum of space. Which method of heat transfer is this?",
    opts:["Conduction","Convection","Radiation","Evaporation"], correct:2,
    steps:`Conduction and convection both need particles (a medium). Space is a vacuum, so heat can only travel as <b>infrared radiation</b>.<br><span class="final">Answer: Radiation</span>` },

  { topic:"Thermal Physics", ref:"KPC Physics - Thermal Physics", product:"physics-thermal",
    difficulty:"standard", type:"work",
    q:"Calculate the energy needed to heat 2 kg of water from 20 °C to 70 °C. The specific heat capacity of water is 4200 J/kg°C.",
    data:"Give your answer in joules (J).", accept:[420000], unit:"J",
    steps:`Energy: Q = m × c × Δθ<br>Temperature change Δθ = 70 − 20 = <b>50 °C</b><br>Q = 2 × 4200 × 50<br><span class="final">Q = 420 000 J</span><br><br>✓ <b>Tip:</b> Δθ is the change in temperature, not the final temperature.` },

  { topic:"Thermal Physics", ref:"KPC Physics - Thermal Physics", product:"physics-thermal",
    difficulty:"standard", type:"mcq",
    q:"Four identical metal cans are filled with hot water. Which surface will cool down the fastest, because it is the best emitter of infrared radiation?",
    opts:["Shiny silver","Matt black","Shiny white","Polished gold"], correct:1,
    steps:`Dull, dark surfaces are the best <b>emitters</b> (and absorbers) of infrared radiation; shiny, light surfaces are poor emitters.<br><span class="final">Answer: Matt black</span><br><br>✓ <b>Tip:</b> the same rule explains why radiators and cooling fins are often painted matt black.` },

  { topic:"Thermal Physics", ref:"KPC Physics - Thermal Physics", product:"physics-thermal",
    difficulty:"hard", type:"work",
    q:"A 2000 W electric kettle is used to heat 1.5 kg of water. Assuming no energy is lost to the surroundings, calculate the time taken to raise the water temperature by 60 °C. The specific heat capacity of water is 4200 J/kg°C.",
    data:"Give your answer in seconds (s).", accept:[189], unit:"s",
    steps:`Energy needed: Q = m × c × Δθ = 1.5 × 4200 × 60 = <b>378 000 J</b><br>Time = energy ÷ power = 378 000 ÷ 2000<br><span class="final">t = 189 s</span> (about 3 minutes)<br><br>✗ <b>Common mistake:</b> mixing up which value is the power (2000 W) and which is the energy.` },

  /* ============ TOPIC 5 - WAVES, LIGHT & SOUND ============ */
  { topic:"Waves, Light & Sound", ref:"KPC Physics - Waves, Light & Sound", product:"physics-waves",
    difficulty:"foundation", type:"work",
    q:"A water wave has a frequency of 8 Hz and a wavelength of 0.5 m. Calculate its speed.",
    data:"Give your answer in m/s.", accept:[4], unit:"m/s",
    steps:`Wave equation: v = f × λ<br>v = 8 × 0.5<br><span class="final">v = 4 m/s</span>` },

  { topic:"Waves, Light & Sound", ref:"KPC Physics - Waves, Light & Sound", product:"physics-waves",
    difficulty:"standard", type:"mcq", dia:"wave",
    q:"The diagram shows a transverse wave. Which labelled distance represents the amplitude of the wave?",
    opts:["Distance X","Distance Y","Both X and Y","Neither"], correct:0,
    steps:`The <b>amplitude</b> is the maximum distance from the rest (middle) position to a crest or trough - that is distance X. Distance Y, from one crest to the next, is the <b>wavelength</b>.<br><span class="final">Answer: Distance X</span>` },

  { topic:"Waves, Light & Sound", ref:"KPC Physics - Waves, Light & Sound", product:"physics-waves",
    difficulty:"standard", type:"work",
    q:"A sound wave travels through air at 340 m/s with a frequency of 500 Hz. Calculate its wavelength.",
    data:"Give your answer in metres (m).", accept:[0.68], unit:"m",
    steps:`Rearrange the wave equation: λ = v ÷ f<br>λ = 340 ÷ 500<br><span class="final">λ = 0.68 m</span><br><br>✓ <b>Tip:</b> sound is a longitudinal wave, but the equation v = fλ still applies.` },

  { topic:"Waves, Light & Sound", ref:"KPC Physics - Waves, Light & Sound", product:"physics-waves",
    difficulty:"hard", type:"work",
    q:"A radio station broadcasts at a frequency of 100 MHz. Radio waves travel at 3 × 10⁸ m/s. Calculate the wavelength of these radio waves.",
    data:"Give your answer in metres (m). (1 MHz = 1 × 10⁶ Hz.)", accept:[3], unit:"m",
    steps:`Convert the frequency: 100 MHz = 100 × 10⁶ = <b>1 × 10⁸ Hz</b>.<br>λ = v ÷ f = (3 × 10⁸) ÷ (1 × 10⁸)<br><span class="final">λ = 3 m</span><br><br>✗ <b>Common mistake:</b> forgetting that “M” (mega) means × 10⁶, which leaves the powers of ten wrong.` },

  /* ============ TOPIC 6 - ELECTRICITY & CIRCUITS ============ */
  { topic:"Electricity & Circuits", ref:"KPC Physics - Electricity & Circuits", product:"physics-electricity",
    difficulty:"foundation", type:"work",
    q:"A 12 V battery is connected across a 4 Ω resistor. Calculate the current flowing through the resistor.",
    data:"Give your answer in amperes (A).", accept:[3], unit:"A",
    steps:`Ohm's law: V = I × R, rearranged I = V ÷ R<br>I = 12 ÷ 4<br><span class="final">I = 3 A</span>` },

  { topic:"Electricity & Circuits", ref:"KPC Physics - Electricity & Circuits", product:"physics-electricity",
    difficulty:"standard", type:"work", dia:"circuit",
    q:"The circuit shows a 6 Ω resistor and a 3 Ω resistor connected in series across a 9 V supply. Calculate the current flowing in the circuit.",
    data:"Give your answer in amperes (A).", accept:[1], unit:"A",
    steps:`In series, resistances add: R = 6 + 3 = <b>9 Ω</b><br>Ohm's law: I = V ÷ R = 9 ÷ 9<br><span class="final">I = 1 A</span><br><br>✓ <b>Tip:</b> in a series circuit the current is the same everywhere.` },

  { topic:"Electricity & Circuits", ref:"KPC Physics - Electricity & Circuits", product:"physics-electricity",
    difficulty:"standard", type:"mcq",
    q:"An electric heater is rated at 2300 W and runs from the 230 V mains. Fuses are available in 3 A, 5 A and 13 A. Which fuse should be fitted?",
    opts:["3 A","5 A","13 A","No fuse is needed"], correct:2,
    steps:`Find the normal current: I = P ÷ V = 2300 ÷ 230 = <b>10 A</b>.<br>The fuse must be just above the normal current, so the 13 A fuse is correct (a 3 A or 5 A fuse would blow immediately).<br><span class="final">Answer: 13 A</span>` },

  { topic:"Electricity & Circuits", ref:"KPC Physics - Electricity & Circuits", product:"physics-electricity",
    difficulty:"hard", type:"work",
    q:"A 6 Ω resistor and a 3 Ω resistor are connected in parallel across a 12 V supply. Calculate the total current drawn from the supply.",
    data:"Give your answer in amperes (A).", accept:[6], unit:"A",
    steps:`In parallel, each resistor has the full 12 V across it. Find each branch current:<br>Through 6 Ω: I = 12 ÷ 6 = 2 A<br>Through 3 Ω: I = 12 ÷ 3 = 4 A<br>Total current = 2 + 4<br><span class="final">I = 6 A</span><br><br>✗ <b>Common mistake:</b> adding parallel resistances like series. In parallel the total resistance is actually smaller (here 2 Ω), so the current is larger.` },

  /* ============ TOPIC 7 - MAGNETISM & ELECTROMAGNETISM ============ */
  { topic:"Magnetism & Electromagnetism", ref:"KPC Physics - Magnetism & Electromagnetism", product:"physics-magnetism",
    difficulty:"foundation", type:"mcq",
    q:"Two bar magnets are brought together so that their north poles face each other. What happens?",
    opts:["They attract","They repel","Nothing happens","They lose their magnetism"], correct:1,
    steps:`Like poles (N–N or S–S) repel; opposite poles (N–S) attract.<br><span class="final">Answer: They repel</span>` },

  { topic:"Magnetism & Electromagnetism", ref:"KPC Physics - Magnetism & Electromagnetism", product:"physics-magnetism",
    difficulty:"standard", type:"mcq",
    q:"A transformer has fewer turns on its secondary coil than on its primary coil. What does this transformer do to the voltage?",
    opts:["Increases it (step-up)","Decreases it (step-down)","Leaves it unchanged","Turns it off"], correct:1,
    steps:`In a transformer the voltage ratio matches the turns ratio. Fewer secondary turns means a lower output voltage - a <b>step-down</b> transformer.<br><span class="final">Answer: Decreases it (step-down)</span>` },

  { topic:"Magnetism & Electromagnetism", ref:"KPC Physics - Magnetism & Electromagnetism", product:"physics-magnetism",
    difficulty:"standard", type:"work",
    q:"A transformer has 2000 turns on its primary coil and 100 turns on its secondary coil. The primary coil is connected to a 230 V supply. Calculate the secondary (output) voltage.",
    data:"Give your answer in volts (V).", accept:[11.5], unit:"V",
    steps:`Turns ratio rule: Vs ÷ Vp = Ns ÷ Np<br>Vs = Vp × (Ns ÷ Np) = 230 × (100 ÷ 2000)<br><span class="final">Vs = 11.5 V</span>` },

  { topic:"Magnetism & Electromagnetism", ref:"KPC Physics - Magnetism & Electromagnetism", product:"physics-magnetism",
    difficulty:"hard", type:"work",
    q:"An ideal (100% efficient) step-down transformer reduces 230 V to 23 V. The output (secondary) current is 5 A. Calculate the input (primary) current.",
    data:"Give your answer in amperes (A).", accept:[0.5], unit:"A",
    steps:`For an ideal transformer, power in = power out: Vp × Ip = Vs × Is<br>Ip = (Vs × Is) ÷ Vp = (23 × 5) ÷ 230 = 115 ÷ 230<br><span class="final">Ip = 0.5 A</span><br><br>✗ <b>Common mistake:</b> assuming the current stays the same. A step-down transformer lowers voltage but <i>raises</i> current - so the primary current is smaller than the secondary.` },

  /* ============ TOPIC 8 - RADIOACTIVITY ============ */
  { topic:"Radioactivity", ref:"KPC Physics - Radioactivity", product:"physics-radioactivity",
    difficulty:"foundation", type:"mcq",
    q:"Which type of nuclear radiation is the least penetrating and can be stopped by a single sheet of paper?",
    opts:["Alpha","Beta","Gamma","X-rays"], correct:0,
    steps:`Alpha is the least penetrating (stopped by paper or a few cm of air). Beta is stopped by thin aluminium; gamma is the most penetrating (needs thick lead/concrete).<br><span class="final">Answer: Alpha</span>` },

  { topic:"Radioactivity", ref:"KPC Physics - Radioactivity", product:"physics-radioactivity",
    difficulty:"standard", type:"work",
    q:"A radioactive sample has an activity of 800 Bq. The half-life of the sample is 2 hours. Calculate its activity after 6 hours.",
    data:"Give your answer in becquerels (Bq).", accept:[100], unit:"Bq",
    steps:`Number of half-lives in 6 hours = 6 ÷ 2 = <b>3</b>.<br>Halve the activity three times: 800 → 400 → 200 → 100.<br><span class="final">Activity = 100 Bq</span>` },

  { topic:"Radioactivity", ref:"KPC Physics - Radioactivity", product:"physics-radioactivity",
    difficulty:"standard", type:"mcq",
    q:"Two atoms are isotopes of the same element. This means they have…",
    opts:[
      "the same number of protons but a different number of neutrons",
      "the same number of neutrons but a different number of protons",
      "a different number of protons and electrons",
      "exactly the same mass"
    ], correct:0,
    steps:`Isotopes are atoms of the <b>same element</b>, so they have the same number of protons (same atomic number), but a different number of neutrons (so a different mass number).<br><span class="final">Answer: same protons, different neutrons</span>` },

  { topic:"Radioactivity", ref:"KPC Physics - Radioactivity", product:"physics-radioactivity",
    difficulty:"hard", type:"work",
    q:"The activity of a radioactive source falls from 6400 Bq to 200 Bq. The half-life of the source is 15 minutes. Calculate how long this decrease took.",
    data:"Give your answer in minutes.", accept:[75], unit:"min",
    steps:`Count the halvings from 6400 down to 200:<br>6400 → 3200 → 1600 → 800 → 400 → 200 = <b>5 half-lives</b>.<br>Time = 5 × 15<br><span class="final">= 75 minutes</span><br><br>✓ <b>Tip:</b> 6400 ÷ 200 = 32 = 2⁵, confirming 5 half-lives.` },

  /* ============ TOPIC 9 - EARTH & SPACE ============ */
  { topic:"Earth & Space", ref:"KPC Physics - Earth & Space", product:"physics-earth-space",
    difficulty:"foundation", type:"mcq",
    q:"In astronomy, a “light-year” is a unit of…",
    opts:["time","distance","speed","mass"], correct:1,
    steps:`A light-year is the <b>distance</b> that light travels in one year. Despite the word “year”, it measures distance, not time.<br><span class="final">Answer: distance</span>` },

  { topic:"Earth & Space", ref:"KPC Physics - Earth & Space", product:"physics-earth-space",
    difficulty:"standard", type:"work",
    q:"Light from the Sun takes about 500 seconds to reach the Earth. Light travels at 3 × 10⁸ m/s. Calculate the distance from the Sun to the Earth.",
    data:"Give your answer in metres (m), in standard form.", accept:[1.5e11], unit:"m",
    steps:`Distance = speed × time<br>d = (3 × 10⁸) × 500<br><span class="final">d = 1.5 × 10¹¹ m</span> (150 billion metres)` },

  { topic:"Earth & Space", ref:"KPC Physics - Earth & Space", product:"physics-earth-space",
    difficulty:"standard", type:"mcq",
    q:"Order these from smallest to largest: star, galaxy, planet, solar system. Which is the LARGEST?",
    opts:["Planet","Star","Solar system","Galaxy"], correct:3,
    steps:`From smallest to largest: planet → star → solar system → galaxy. A galaxy contains billions of stars and their solar systems.<br><span class="final">Answer: Galaxy</span>` },

  { topic:"Earth & Space", ref:"KPC Physics - Earth & Space", product:"physics-earth-space",
    difficulty:"hard", type:"work",
    q:"Calculate the distance, in metres, that light travels in one year. Use a speed of light of 3 × 10⁸ m/s and take 1 year to be 3.15 × 10⁷ seconds.",
    data:"Give your answer in metres (m), in standard form.", accept:[9.45e15], unit:"m",
    steps:`Distance = speed × time<br>d = (3 × 10⁸) × (3.15 × 10⁷)<br>Multiply the numbers: 3 × 3.15 = 9.45. Add the powers: 10⁸ × 10⁷ = 10¹⁵.<br><span class="final">d = 9.45 × 10¹⁵ m</span><br><br>✓ <b>Tip:</b> this huge number is exactly one light-year - which is why astronomers use light-years instead of metres.` },
];

/* Short "why" line per topic, used in the study plan. */
const WHY = {
  "Motion & Forces":"Revise velocity-time graphs, resultant forces, F = ma and momentum.",
  "Moments, Density & Pressure":"Practise the principle of moments, density and liquid pressure (watch unit conversions).",
  "Energy, Work & Power":"Tighten up GPE/KE, conservation of energy, power and efficiency.",
  "Thermal Physics":"Review Q = mcΔθ, the methods of heat transfer and good/poor emitters.",
  "Waves, Light & Sound":"Focus on v = fλ, amplitude vs wavelength, and the wave equation in standard form.",
  "Electricity & Circuits":"Practise Ohm's law, series vs parallel circuits and mains fuse ratings.",
  "Magnetism & Electromagnetism":"Revise poles and fields, and transformer voltage/current calculations.",
  "Radioactivity":"Work on half-life calculations, isotopes and the penetrating power of radiation.",
  "Earth & Space":"Review the light-year, distance = speed × time, and the scale of the Universe."
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
      // correct, accept, steps, ref, product, difficulty are intentionally omitted.
    }))
  };
}

/* -------- Numeric parsing (handles plain + scientific notation) -------- */
function parseNum(val) {
  if (val == null) return null;
  let s = String(val).toLowerCase().trim();
  s = s.replace(/\s+/g, "");
  s = s.replace(/,/g, "");
  // 9.45x10^15 / 9.45*10^15 / 9.45×10^15  ->  9.45e15
  s = s.replace(/(×|x|\*)10\^?/g, "e");
  // a bare "10^15" -> "1e15"
  s = s.replace(/(^|[^0-9.])10\^/g, "$11e");
  s = s.replace(/[^0-9.\-e+]/g, "");
  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}

/* -------- Grading helpers -------- */
function checkWork(item, val) {
  const num = parseNum(val);
  if (num === null) return false;
  return item.accept.some(a => Math.abs(num - a) <= Math.max(0.15, Math.abs(a) * 0.03));
}
function levelFor(correct, total) {
  const r = total ? correct / total : 0;
  if (r >= 0.75) return "green";   // 3-4 of 4
  if (r >= 0.5) return "amber";    // 2 of 4
  return "red";                    // 0-1 of 4
}

/* -------- Grade answers and build the full report -------- */
export function gradeAndReport(name, answers = []) {
  const tally = {};
  TOPIC_ORDER.forEach(t => (tally[t] = { c: 0, n: 0 }));

  const solutions = QUESTIONS.map((q, i) => {
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
      topic: w.topic, level: w.level, label: LABEL[w.level],
      ref: src.ref, product: src.product, why: WHY[w.topic] || ""
    };
  });

  const summary =
    pct >= 80 ? "Excellent work - you're strong across nearly every topic. A little polish on any amber areas and you're set."
    : pct >= 50 ? "A solid base, but a few topics are pulling your mark down. Your priority plan below shows exactly where to focus."
    : "There's real room to grow here - and that's good news, because the plan below tells you precisely what to study to climb fast.";

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
