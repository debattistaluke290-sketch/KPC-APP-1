import { publicQuestions as pub, gradeAndReport as grade } from "./_grade.js";

/* =========================================================================
   KPC Diagnostic - MATHEMATICS candidate bank (CALIBRATED, SERVER-SIDE ONLY)
   SEC 23 (2026) syllabus. 10 topics = the 10 official Subject Foci. 10×4 = 40.
   Composition per topic: 1 foundation, 2 standard_exam (1 application), 1 upper_exam.
   status:"candidate" - awaiting teacher review + student pilot (NOT empirically validated).
   All wording/values/contexts independently authored; no MATSEC material reproduced.
   Numeric answers rely on the UPGRADED parser (fractions a/b, decimals, negatives,
   standard form). Every answer independently recomputed (see blind-solve report).
   STRANDS/STRAND_WEIGHTS drive the strand-weighted estimated-examination score.
   ========================================================================= */
export const SUBJECT = "Mathematics";

export const TOPIC_ORDER = [
  "The Number System",
  "Numerical Calculations",
  "Fundamentals of Algebra",
  "Graphs",
  "Measurement",
  "Lines, Angles & Shapes",
  "Constructions & Loci",
  "Transformations",
  "Statistics",
  "Probability"
];

// Exam strand of each topic + syllabus strand weightings (Level 2-3 tier).
export const STRANDS = {
  "The Number System":"Number", "Numerical Calculations":"Number",
  "Fundamentals of Algebra":"Algebra", "Graphs":"Algebra",
  "Measurement":"SSM", "Lines, Angles & Shapes":"SSM",
  "Constructions & Loci":"SSM", "Transformations":"SSM",
  "Statistics":"Data", "Probability":"Data"
};
export const STRAND_WEIGHTS = { Number:0.20, Algebra:0.35, SSM:0.30, Data:0.15 };

const M = (o) => ({ status:"candidate", version:1, originalityStatus:"independently_drafted",
  humanReviewStatus:"pending", pilotStatus:"not_piloted", marks:1, unit:"", ...o });

export const QUESTIONS = [
  /* ===== T1 The Number System (LO1) ===== */
  M({ id:"mat-t1-f", topic:"The Number System", subtopic:"Standard form → ordinary", syllabusReference:"LO1", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Write the number 4.5 × 10⁴ as an ordinary number.", data:"Give a whole number.", accept:[45000], tolerance:0,
    commonMisconception:"Miscounting the number of places to move the point.",
    steps:`4.5 × 10⁴ = 4.5 × 10000<br><span class="final">= 45 000</span>`, ref:"KPC Maths - The Number System", product:"maths-number" }),
  M({ id:"mat-t1-s", topic:"The Number System", subtopic:"Rounding to decimal places", syllabusReference:"LO1", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Round 27.348 to 2 decimal places.", data:"Give a number.", accept:[27.35], tolerance:0.001,
    commonMisconception:"Rounding the wrong digit or truncating instead of rounding.",
    steps:`The 3rd decimal digit is 8 (≥5), so round the 2nd decimal up: 27.34 → <b>27.35</b>.<br><span class="final">= 27.35</span>`, ref:"KPC Maths - The Number System", product:"maths-number" }),
  M({ id:"mat-t1-a", topic:"The Number System", subtopic:"HCF", syllabusReference:"LO1", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"Find the highest common factor (HCF) of 24 and 36.", data:"Give a whole number.", accept:[12], tolerance:0,
    commonMisconception:"Giving the lowest common multiple (72) instead of the HCF.",
    steps:`24 = 2³ × 3, 36 = 2² × 3². Common factors: 2² × 3<br><span class="final">HCF = 12</span>`, ref:"KPC Maths - The Number System", product:"maths-number" }),
  M({ id:"mat-t1-u", topic:"The Number System", subtopic:"Dividing in standard form (negative indices)", syllabusReference:"LO1", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:140,
    q:"Work out (9 × 10⁻³) ÷ (1.5 × 10⁻⁵). Give your answer in standard form.", data:"Give your answer in standard form (e.g. 5 × 10³) or as an ordinary number.", accept:[600], tolerance:0.5,
    commonMisconception:"Mishandling the negative powers when dividing - e.g. getting 10⁻⁸ instead of 10².",
    steps:`Divide the numbers: 9 ÷ 1.5 = 6. Subtract the powers: 10⁻³ ÷ 10⁻⁵ = 10^(−3 − (−5)) = 10². So 6 × 10² = <b>600</b>.<br><span class="final">= 6 × 10² = 600</span>`, ref:"KPC Maths - The Number System", product:"maths-number" }),

  /* ===== T2 Numerical Calculations (LO2) ===== */
  M({ id:"mat-t2-f", topic:"Numerical Calculations", subtopic:"Percentage of an amount", syllabusReference:"LO2", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Work out 25% of 80.", data:"Give a number.", accept:[20], tolerance:0,
    commonMisconception:"Confusing 25% with dividing by 25.",
    steps:`25% = 1/4, so 80 ÷ 4<br><span class="final">= 20</span>`, ref:"KPC Maths - Numerical Calculations", product:"maths-fractions" }),
  M({ id:"mat-t2-s", topic:"Numerical Calculations", subtopic:"Sharing in a ratio", syllabusReference:"LO2", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"€60 is shared between two people in the ratio 3 : 2. How much does the person with the LARGER share receive?", data:"Give your answer in euro.", accept:[36], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Dividing by 2 or 3 instead of by the total number of parts (5).",
    steps:`Total parts = 3 + 2 = 5, so one part = 60 ÷ 5 = €12. Larger share = 3 × 12<br><span class="final">= €36</span>`, ref:"KPC Maths - Numerical Calculations", product:"maths-money" }),
  M({ id:"mat-t2-a", topic:"Numerical Calculations", subtopic:"Percentage profit", syllabusReference:"LO2", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"A shop buys a jacket for €40 and sells it for €50. Calculate the percentage profit.", data:"Give your answer as a percentage.", accept:[25], acceptedUnits:["%"], unit:"%", tolerance:0.1,
    commonMisconception:"Dividing the profit by the selling price instead of the cost price.",
    steps:`Profit = 50 − 40 = €10. % profit = (profit ÷ cost) × 100 = (10 ÷ 40) × 100<br><span class="final">= 25%</span>`, ref:"KPC Maths - Numerical Calculations", product:"maths-money" }),
  M({ id:"mat-t2-u", topic:"Numerical Calculations", subtopic:"Compound depreciation", syllabusReference:"LO2", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:140,
    q:"A car worth €15 000 loses 20% of its value each year (compound depreciation). What is it worth after 2 years?", data:"Give your answer in euro.", accept:[9600], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:1,
    commonMisconception:"Taking 40% off once instead of 20% off each year.",
    steps:`Each year multiply by 0.80. After 1 year: 15 000 × 0.8 = 12 000. After 2 years: 12 000 × 0.8<br><span class="final">= €9600</span>`, ref:"KPC Maths - Numerical Calculations", product:"maths-money" }),

  /* ===== T3 Fundamentals of Algebra (LO3) ===== */
  M({ id:"mat-t3-f", topic:"Fundamentals of Algebra", subtopic:"Substitution", syllabusReference:"LO3", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"If x = 4, work out the value of 5x − 3.", data:"Give a number.", accept:[17], tolerance:0,
    commonMisconception:"Working 5 + x or forgetting the −3.",
    steps:`5x − 3 = (5 × 4) − 3 = 20 − 3<br><span class="final">= 17</span>`, ref:"KPC Maths - Fundamentals of Algebra", product:"maths-algebra" }),
  M({ id:"mat-t3-s", topic:"Fundamentals of Algebra", subtopic:"Solving a linear equation (fraction answer)", syllabusReference:"LO3", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"Solve 4x − 1 = 2. Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 3/4) or a decimal.", accept:[0.75], tolerance:0.001,
    commonMisconception:"Stopping at 4x = 3 without dividing, or rounding 0.75 wrongly.",
    steps:`4x − 1 = 2 → 4x = 3 → x = 3 ÷ 4<br><span class="final">x = 3/4 = 0.75</span>`, ref:"KPC Maths - Fundamentals of Algebra", product:"maths-algebra" }),
  M({ id:"mat-t3-a", topic:"Fundamentals of Algebra", subtopic:"Form and solve", syllabusReference:"LO3", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"I think of a number, multiply it by 3, then add 5. The result is 26. What is the number?", data:"Give a number.", accept:[7], tolerance:0,
    commonMisconception:"Subtracting before/after dividing in the wrong order.",
    steps:`3n + 5 = 26 → 3n = 21 → n = 21 ÷ 3<br><span class="final">n = 7</span>`, ref:"KPC Maths - Fundamentals of Algebra", product:"maths-algebra" }),
  M({ id:"mat-t3-u", topic:"Fundamentals of Algebra", subtopic:"Simultaneous equations (elimination with scaling)", syllabusReference:"LO3", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:170,
    q:"Solve the simultaneous equations 2x + 3y = 16 and 3x − y = 13. What is the value of x?", data:"Give a number (the value of x).", accept:[5], tolerance:0,
    commonMisconception:"Adding the equations without first scaling one so a variable cancels; or solving for y.",
    steps:`Multiply the 2nd equation by 3: 9x − 3y = 39. Add to the 1st (2x + 3y = 16): 11x = 55 → x = 5. (Then y = 2.)<br><span class="final">x = 5</span>`, ref:"KPC Maths - Fundamentals of Algebra", product:"maths-algebra" }),

  /* ===== T4 Graphs (LO4) - NEW ===== */
  M({ id:"mat-t4-f", topic:"Graphs", subtopic:"Coordinates", syllabusReference:"LO4", difficulty:"foundation", cognitiveSkill:"recall", type:"work", marks:1, expectedTimeSeconds:40,
    q:"A point has coordinates (3, −2). What is its y-coordinate?", data:"Give a number.", accept:[-2], tolerance:0,
    commonMisconception:"Giving the x-coordinate (3) instead of the y-coordinate.",
    steps:`Coordinates are written (x, y). The y-coordinate is the second number.<br><span class="final">= −2</span>`, ref:"KPC Maths - Graphs", product:"maths-algebra" }),
  M({ id:"mat-t4-s", topic:"Graphs", subtopic:"Gradient from two points", syllabusReference:"LO4", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"A straight line passes through the points (1, 2) and (4, 11). Calculate the gradient of the line.", data:"Give a number.", accept:[3], tolerance:0.05,
    commonMisconception:"Dividing the change in x by the change in y (upside-down).",
    steps:`gradient = change in y ÷ change in x = (11 − 2) ÷ (4 − 1) = 9 ÷ 3<br><span class="final">= 3</span>`, ref:"KPC Maths - Graphs", product:"maths-algebra" }),
  M({ id:"mat-t4-a", topic:"Graphs", subtopic:"Interpreting a distance–time graph", syllabusReference:"LO4", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"mcq", marks:2, expectedTimeSeconds:75,
    q:"A car travels at a steady speed, then stops at traffic lights, then drives on. On a distance–time graph, the part where the car is stopped appears as…",
    opts:["a horizontal (flat) line","a steep straight line going up","a line going down","a curve"], correct:0,
    commonMisconception:"Thinking 'stopped' means the line goes down.",
    steps:`Stopped means distance does not change while time passes → a <b>horizontal line</b>. (A downward line would mean returning towards the start.)<br><span class="final">Answer: a horizontal (flat) line</span>`, ref:"KPC Maths - Graphs", product:"maths-algebra" }),
  M({ id:"mat-t4-u", topic:"Graphs", subtopic:"Equation of a line from two points", syllabusReference:"LO4", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"A straight line passes through the points (2, 5) and (6, 17). Work out the value of y on the line when x = 10.", data:"Give a number.", accept:[29], tolerance:0,
    commonMisconception:"Finding the gradient but assuming the intercept c = 0 (giving 30).",
    steps:`Gradient m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Find c: 5 = 3×2 + c → c = −1, so y = 3x − 1. At x = 10: y = 3×10 − 1<br><span class="final">y = 29</span>`, ref:"KPC Maths - Graphs", product:"maths-algebra" }),

  /* ===== T5 Measurement (LO5) ===== */
  M({ id:"mat-t5-f", topic:"Measurement", subtopic:"Area of a rectangle", syllabusReference:"LO5", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"A rectangle is 9 cm long and 4 cm wide. Calculate its area.", data:"Give your answer in cm².", accept:[36], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Adding the sides (perimeter) instead of multiplying (area).",
    steps:`Area = length × width = 9 × 4<br><span class="final">= 36 cm²</span>`, ref:"KPC Maths - Measurement", product:"maths-mensuration" }),
  M({ id:"mat-t5-s", topic:"Measurement", subtopic:"Area of a triangle", syllabusReference:"LO5", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"A triangle has a base of 12 cm and a height of 5 cm. Calculate its area.", data:"Give your answer in cm².", accept:[30], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Forgetting the factor of ½.",
    steps:`Area = ½ × base × height = ½ × 12 × 5<br><span class="final">= 30 cm²</span>`, ref:"KPC Maths - Measurement", product:"maths-mensuration" }),
  M({ id:"mat-t5-a", topic:"Measurement", subtopic:"Volume of a cube", syllabusReference:"LO5", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A cube has sides of 5 cm. Calculate its volume.", data:"Give your answer in cm³.", accept:[125], acceptedUnits:["cm^3","cm3"], unit:"cm³", tolerance:0,
    commonMisconception:"Working 5 × 3 or 5 × 5 instead of 5³.",
    steps:`Volume = side³ = 5 × 5 × 5<br><span class="final">= 125 cm³</span>`, ref:"KPC Maths - Measurement", product:"maths-mensuration" }),
  M({ id:"mat-t5-u", topic:"Measurement", subtopic:"Area of a sector", syllabusReference:"LO5", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"A sector of a circle has a radius of 8 cm and an angle of 90° at the centre. Calculate the area of the sector. Use π = 3.14.", data:"Give your answer in cm².", accept:[50.24], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0.5,
    commonMisconception:"Working the whole circle's area (πr²) and forgetting the 90/360 fraction.",
    steps:`Sector area = (angle ÷ 360) × π r² = (90 ÷ 360) × 3.14 × 8² = ¼ × 3.14 × 64<br><span class="final">= 50.24 cm²</span>`, ref:"KPC Maths - Measurement", product:"maths-mensuration" }),

  /* ===== T6 Lines, Angles & Shapes (LO6) ===== */
  M({ id:"mat-t6-f", topic:"Lines, Angles & Shapes", subtopic:"Angles in a triangle", syllabusReference:"LO6", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Two angles of a triangle are 55° and 65°. Calculate the third angle.", data:"Give your answer in degrees.", accept:[60], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using 360° instead of 180° for a triangle.",
    steps:`Angles in a triangle add to 180°. Third angle = 180 − 55 − 65<br><span class="final">= 60°</span>`, ref:"KPC Maths - Lines, Angles & Shapes", product:"maths-geometry" }),
  M({ id:"mat-t6-s", topic:"Lines, Angles & Shapes", subtopic:"Interior angle of a polygon", syllabusReference:"LO6", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"Calculate the size of each interior angle of a regular pentagon. Use interior angle = (n − 2) × 180 ÷ n.", data:"Give your answer in degrees.", accept:[108], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0.1,
    commonMisconception:"Forgetting to divide by n, or using n = 4.",
    steps:`(n − 2) × 180 ÷ n = (5 − 2) × 180 ÷ 5 = 540 ÷ 5<br><span class="final">= 108°</span>`, ref:"KPC Maths - Lines, Angles & Shapes", product:"maths-geometry" }),
  M({ id:"mat-t6-a", topic:"Lines, Angles & Shapes", subtopic:"Pythagoras' theorem", syllabusReference:"LO6", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"A right-angled triangle has its two shorter sides 6 cm and 8 cm. Calculate the length of the hypotenuse.", data:"Give your answer in cm.", accept:[10], acceptedUnits:["cm"], unit:"cm", tolerance:0.05,
    commonMisconception:"Adding the sides (6 + 8) instead of using a² + b².",
    steps:`hypotenuse² = 6² + 8² = 36 + 64 = 100, so hypotenuse = √100<br><span class="final">= 10 cm</span>`, ref:"KPC Maths - Lines, Angles & Shapes", product:"maths-trig" }),
  M({ id:"mat-t6-u", topic:"Lines, Angles & Shapes", subtopic:"Trigonometry (sine)", syllabusReference:"LO6", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"In a right-angled triangle, the side opposite an angle is 5 cm and the hypotenuse is 10 cm. Calculate the size of the angle, using sine.", data:"Give your answer in degrees.", accept:[30], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0.5,
    commonMisconception:"Using cos or tan, or forgetting the inverse (sin⁻¹).",
    steps:`sin(angle) = opposite ÷ hypotenuse = 5 ÷ 10 = 0.5. angle = sin⁻¹(0.5)<br><span class="final">= 30°</span>`, ref:"KPC Maths - Lines, Angles & Shapes", product:"maths-trig" }),

  /* ===== T7 Constructions & Loci (LO7) - NEW ===== */
  M({ id:"mat-t7-f", topic:"Constructions & Loci", subtopic:"Locus equidistant from two points", syllabusReference:"LO7", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:50,
    q:"The locus of all points that are the same distance from two fixed points A and B is…",
    opts:["the perpendicular bisector of AB","a circle centred on A","the straight line through A and B","the midpoint of AB only"], correct:0,
    commonMisconception:"Choosing only the midpoint instead of the whole perpendicular bisector.",
    steps:`Every point equidistant from A and B lies on the <b>perpendicular bisector</b> of AB.<br><span class="final">Answer: the perpendicular bisector of AB</span>`, ref:"KPC Maths - Constructions & Loci", product:"maths-geometry" }),
  M({ id:"mat-t7-s", topic:"Constructions & Loci", subtopic:"Back bearing", syllabusReference:"LO7", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"The bearing of B from A is 065°. Calculate the back bearing (the bearing of A from B).", data:"Give your answer as a three-figure bearing in degrees.", accept:[245], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0.5,
    commonMisconception:"Subtracting 180° when the bearing is under 180° (should add).",
    steps:`For a bearing under 180°, add 180°: 065 + 180<br><span class="final">= 245°</span>`, ref:"KPC Maths - Constructions & Loci", product:"maths-geometry" }),
  M({ id:"mat-t7-a", topic:"Constructions & Loci", subtopic:"Locus a fixed distance from a point", syllabusReference:"LO7", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"To show all the points that are exactly 3 cm from a fixed point P, you would draw…",
    opts:["a circle of radius 3 cm centred on P","a straight line 3 cm long","the perpendicular bisector of P","an angle bisector at P"], correct:0,
    commonMisconception:"Thinking a fixed distance from a point gives a straight line.",
    steps:`All points a fixed distance from one point form a <b>circle</b> of that radius around the point.<br><span class="final">Answer: a circle of radius 3 cm centred on P</span>`, ref:"KPC Maths - Constructions & Loci", product:"maths-geometry" }),
  M({ id:"mat-t7-u", topic:"Constructions & Loci", subtopic:"Bearing with wrap-around", syllabusReference:"LO7", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"A plane is flying on a bearing of 300°. It then turns clockwise through 90°. What is its new bearing?", data:"Give your answer as a three-figure bearing in degrees.", accept:[30], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0.5,
    commonMisconception:"Giving 390° instead of subtracting 360°.",
    steps:`300 + 90 = 390°. Bearings are 0–360°, so subtract 360: 390 − 360<br><span class="final">= 030°</span>`, ref:"KPC Maths - Constructions & Loci", product:"maths-geometry" }),

  /* ===== T8 Transformations (LO8) - NEW ===== */
  M({ id:"mat-t8-f", topic:"Transformations", subtopic:"Reflection in the x-axis", syllabusReference:"LO8", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:55,
    q:"The point (3, 5) is reflected in the x-axis. What is the y-coordinate of the image?", data:"Give a number.", accept:[-5], tolerance:0,
    commonMisconception:"Changing the x-coordinate instead of the y-coordinate.",
    steps:`Reflecting in the x-axis keeps x and changes the sign of y: (3, 5) → (3, −5).<br><span class="final">y-coordinate = −5</span>`, ref:"KPC Maths - Transformations", product:"maths-geometry" }),
  M({ id:"mat-t8-s", topic:"Transformations", subtopic:"Translation", syllabusReference:"LO8", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"The point (2, 7) is translated 3 units to the right and 5 units down. What is the y-coordinate of the image?", data:"Give a number.", accept:[2], tolerance:0,
    commonMisconception:"Adding 5 (up) instead of subtracting 5 (down).",
    steps:`Down 5 means subtract 5 from y: 7 − 5<br><span class="final">y-coordinate = 2</span> (the image is (5, 2))`, ref:"KPC Maths - Transformations", product:"maths-geometry" }),
  M({ id:"mat-t8-a", topic:"Transformations", subtopic:"Rotation about the origin", syllabusReference:"LO8", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:90,
    q:"The point (4, 0) is rotated 90° anticlockwise about the origin. What are the coordinates of the image?",
    opts:["(0, 4)","(0, −4)","(−4, 0)","(4, 0)"], correct:0,
    commonMisconception:"Rotating the wrong way (clockwise) or confusing the axes.",
    steps:`A 90° anticlockwise rotation about the origin sends (4, 0) up onto the positive y-axis → <b>(0, 4)</b>.<br><span class="final">Answer: (0, 4)</span>`, ref:"KPC Maths - Transformations", product:"maths-geometry" }),
  M({ id:"mat-t8-u", topic:"Transformations", subtopic:"Enlargement with a negative scale factor", syllabusReference:"LO8", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"A shape is enlarged by scale factor −2, centre the origin. One of its points is at (3, 4). What is the y-coordinate of the image of that point?", data:"Give a number.", accept:[-8], tolerance:0,
    commonMisconception:"Ignoring the negative sign (giving 8 instead of −8).",
    steps:`A negative scale factor multiplies both coordinates by −2 and puts the image on the opposite side of the centre: y = 4 × (−2)<br><span class="final">= −8</span> (image (−6, −8))`, ref:"KPC Maths - Transformations", product:"maths-geometry" }),

  /* ===== T9 Statistics (LO9) ===== */
  M({ id:"mat-t9-f", topic:"Statistics", subtopic:"Mean", syllabusReference:"LO9", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"Find the mean (average) of these numbers: 5, 7, 9, 11.", data:"Give a number.", accept:[8], tolerance:0,
    commonMisconception:"Forgetting to divide by how many numbers there are.",
    steps:`mean = total ÷ how many = (5 + 7 + 9 + 11) ÷ 4 = 32 ÷ 4<br><span class="final">= 8</span>`, ref:"KPC Maths - Statistics", product:"maths-statistics" }),
  M({ id:"mat-t9-s", topic:"Statistics", subtopic:"Median", syllabusReference:"LO9", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Find the median of these numbers: 8, 3, 11, 6, 9. (Put them in order first.)", data:"Give a number.", accept:[8], tolerance:0,
    commonMisconception:"Taking the middle of the unsorted list.",
    steps:`In order: 3, 6, 8, 9, 11. The middle value is<br><span class="final">8</span>`, ref:"KPC Maths - Statistics", product:"maths-statistics" }),
  M({ id:"mat-t9-a", topic:"Statistics", subtopic:"Missing value from the mean", syllabusReference:"LO9", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:110,
    q:"The mean of four numbers is 12. Three of the numbers are 10, 13 and 15. Find the fourth number.", data:"Give a number.", accept:[10], tolerance:0,
    commonMisconception:"Averaging the three known numbers instead of using the total.",
    steps:`Total of the four = mean × how many = 12 × 4 = 48. Known three add to 10 + 13 + 15 = 38. Fourth = 48 − 38<br><span class="final">= 10</span>`, ref:"KPC Maths - Statistics", product:"maths-statistics" }),
  M({ id:"mat-t9-u", topic:"Statistics", subtopic:"Mean from a frequency table", syllabusReference:"LO9", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A frequency table shows the value 2 occurring 3 times, the value 5 occurring 2 times, and the value 8 occurring 5 times. Calculate the mean.", data:"Give a number (to 1 decimal place if needed).", accept:[5.6], tolerance:0.05,
    commonMisconception:"Dividing by the number of different values (3) instead of the total frequency (10).",
    steps:`Σfx = (2×3) + (5×2) + (8×5) = 6 + 10 + 40 = 56. Σf = 3 + 2 + 5 = 10. mean = 56 ÷ 10<br><span class="final">= 5.6</span>`, ref:"KPC Maths - Statistics", product:"maths-statistics" }),

  /* ===== T10 Probability (LO10) ===== */
  M({ id:"mat-t10-f", topic:"Probability", subtopic:"Single-event probability", syllabusReference:"LO10", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:55,
    q:"A bag holds 3 red balls and 5 blue balls. Calculate the probability of picking a red ball at random. Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 3/8) or a decimal.", accept:[0.375], tolerance:0.001,
    commonMisconception:"Using 3/5 (red to blue) instead of 3/8 (red to total).",
    steps:`P(red) = number of red ÷ total = 3 ÷ 8<br><span class="final">= 3/8 = 0.375</span>`, ref:"KPC Maths - Probability", product:"maths-statistics" }),
  M({ id:"mat-t10-s", topic:"Probability", subtopic:"Complementary events", syllabusReference:"LO10", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"The probability that it rains tomorrow is 0.3. What is the probability that it does NOT rain?", data:"Give a decimal.", accept:[0.7], tolerance:0.001,
    commonMisconception:"Thinking the two probabilities can both be 0.3.",
    steps:`P(not rain) = 1 − P(rain) = 1 − 0.3<br><span class="final">= 0.7</span>`, ref:"KPC Maths - Probability", product:"maths-statistics" }),
  M({ id:"mat-t10-a", topic:"Probability", subtopic:"Expected frequency", syllabusReference:"LO10", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A spinner lands on red with a probability of 0.2. If it is spun 50 times, how many times is it expected to land on red?", data:"Give a whole number.", accept:[10], tolerance:0,
    commonMisconception:"Adding 0.2 and 50 instead of multiplying.",
    steps:`Expected frequency = probability × number of trials = 0.2 × 50<br><span class="final">= 10</span>`, ref:"KPC Maths - Probability", product:"maths-statistics" }),
  M({ id:"mat-t10-u", topic:"Probability", subtopic:"Probability without replacement", syllabusReference:"LO10", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A bag contains 4 red counters and 6 blue counters. Two counters are taken at random, one after the other, without replacement. Calculate the probability that both counters are red. Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 3/10) or a decimal.", accept:[0.133333], tolerance:0.005,
    commonMisconception:"Not reducing after the first counter is removed - using 4/10 × 4/10 instead of 4/10 × 3/9.",
    steps:`First red: 4/10. After removing one red, 3 red remain of 9: 3/9. Multiply: 4/10 × 3/9 = 12/90 = 2/15<br><span class="final">= 2/15 ≈ 0.133</span>`, ref:"KPC Maths - Probability", product:"maths-statistics" }),
];

export const WHY = {
  "The Number System":"Revise standard form, rounding, factors/HCF and index laws.",
  "Numerical Calculations":"Practise percentages, ratio sharing and money problems (profit, interest, depreciation).",
  "Fundamentals of Algebra":"Revise substitution, solving equations (including fraction answers) and simultaneous equations.",
  "Graphs":"Focus on coordinates, gradient, reading real-life graphs and using y = mx + c.",
  "Measurement":"Review area, volume and circle calculations, watching units.",
  "Lines, Angles & Shapes":"Practise angle facts, polygon angles, Pythagoras and basic trigonometry.",
  "Constructions & Loci":"Revise loci (perpendicular bisector, circle) and bearings (back bearings, turning).",
  "Transformations":"Practise reflections, translations, rotations and enlargements using coordinates.",
  "Statistics":"Review mean, median and the mean from a frequency table.",
  "Probability":"Practise single/complementary events, expected frequency and combined events without replacement."
};

/* -------- wire into the shared grading engine -------- */
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY, STRANDS, STRAND_WEIGHTS };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
