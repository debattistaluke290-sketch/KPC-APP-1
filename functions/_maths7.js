import { publicQuestions as pub, gradeAndReport as grade } from "./_grade.js";

/* =========================================================================
   KPC Diagnostic — YEAR 7 MATHEMATICS candidate bank (CALIBRATED, SERVER-SIDE).
   Maltese lower-secondary Year 7 (~age 11–12). NO MATSEC syllabus at this level;
   difficulty is calibrated to the KPC Year 7 Maths Workbook (Scholastic 2026/7),
   expert-judged "representative of the year, and a bit harder" — the uppers reach
   the workbook's genuine ceiling (nested cube roots, reverse fractions, mixed
   fraction/percentage problems, the exterior-angle theorem, solving equations
   with the unknown on both sides).
   10 topics grouped from the 29 workbook sections. 10×4 = 40.
   Composition per topic: 1 foundation, 2 standard_exam (1 application), 1 upper_exam.
   status:"candidate" — teacher-review + student-pilot pending (NOT empirically validated).
   All wording/values/contexts INDEPENDENTLY authored; no workbook text/numbers reproduced.
   Every answer independently recomputed + blind-solved + graded through the real engine.
   STRANDS/STRAND_WEIGHTS: Number/Algebra/Geometry/Measurement/Data (Year 7 is still
   number-heavy, with algebra emerging).
   ========================================================================= */
export const SUBJECT = "Year 7 Maths";

export const TOPIC_ORDER = [
  "Number & Place Value",
  "Factors, Multiples, Primes & Powers",
  "Fractions",
  "Decimals, Percentages & FDP",
  "Angles",
  "Symmetry, Polygons & Shapes",
  "Algebra",
  "Coordinate Geometry & The Circle",
  "Measurement, Area & Volume",
  "Ratio, Statistics & Probability"
];

export const STRANDS = {
  "Number & Place Value":"Number", "Factors, Multiples, Primes & Powers":"Number",
  "Fractions":"Number", "Decimals, Percentages & FDP":"Number",
  "Angles":"Geometry", "Symmetry, Polygons & Shapes":"Geometry",
  "Algebra":"Algebra",
  "Coordinate Geometry & The Circle":"Geometry",
  "Measurement, Area & Volume":"Measurement",
  "Ratio, Statistics & Probability":"Data"
};
export const STRAND_WEIGHTS = { Number:0.35, Geometry:0.25, Algebra:0.15, Measurement:0.15, Data:0.10 };

const M = (o) => ({ status:"candidate", version:1, originalityStatus:"independently_drafted",
  humanReviewStatus:"pending", pilotStatus:"not_piloted", marks:1, unit:"", ...o });

export const QUESTIONS = [
  /* ===== T1 Number & Place Value (Number) ===== */
  M({ id:"y7-t1-f", topic:"Number & Place Value", subtopic:"Rounding to the nearest thousand", syllabusReference:"Y7 WB: Rounding Numbers (pp.6–7)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Round 48,271 to the nearest thousand.", data:"Give a number.", accept:[48000], tolerance:0,
    commonMisconception:"Rounding up to 49,000 by looking at the wrong digit.",
    steps:`The hundreds digit is 2 (less than 5), so round down. 48,271 → 48,000.<br><span class="final">= 48,000</span>`, ref:"KPC Year 7 Maths — Number & Place Value", product:"year7-maths" }),
  M({ id:"y7-t1-s", topic:"Number & Place Value", subtopic:"Long multiplication", syllabusReference:"Y7 WB: Long Multiplication (pp.27–28)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"Work out 214 × 32.", data:"Give a number.", accept:[6848], tolerance:0,
    commonMisconception:"Forgetting the place-holder zero on the second row of long multiplication.",
    steps:`214 × 32 = (214 × 30) + (214 × 2) = 6,420 + 428.<br><span class="final">= 6,848</span>`, ref:"KPC Year 7 Maths — Number & Place Value", product:"year7-maths" }),
  M({ id:"y7-t1-a", topic:"Number & Place Value", subtopic:"Long division with remainder (context)", syllabusReference:"Y7 WB: Long Division (pp.29–30)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:110,
    q:"A factory packs 4,850 bottles into crates of 24. How many crates are completely filled?", data:"Give a whole number.", accept:[202], tolerance:0,
    commonMisconception:"Rounding up to 203 — a part-full crate is not a full crate.",
    steps:`4,850 ÷ 24 = 202 remainder 2. Only complete crates count, so ignore the remainder.<br><span class="final">= 202 crates</span>`, ref:"KPC Year 7 Maths — Number & Place Value", product:"year7-maths" }),
  M({ id:"y7-t1-u", topic:"Number & Place Value", subtopic:"Directed numbers with order of operations", syllabusReference:"Y7 WB: Directed Numbers / BIDMAS (pp.31–32, 72–73)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:120,
    q:"Work out −6 + 4 × (−3).", data:"Give a number.", accept:[-18], tolerance:0,
    commonMisconception:"Working left to right (−6 + 4 = −2, then ×−3) instead of doing the multiplication first.",
    steps:`Multiplication before addition: 4 × (−3) = −12. Then −6 + (−12).<br><span class="final">= −18</span>`, ref:"KPC Year 7 Maths — Number & Place Value", product:"year7-maths" }),

  /* ===== T2 Factors, Multiples, Primes & Powers (Number) ===== */
  M({ id:"y7-t2-f", topic:"Factors, Multiples, Primes & Powers", subtopic:"Square of a number", syllabusReference:"Y7 WB: Square Numbers (pp.12–15)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:40,
    q:"Work out 7² (7 squared).", data:"Give a number.", accept:[49], tolerance:0,
    commonMisconception:"Working 7 × 2 = 14 instead of 7 × 7.",
    steps:`7² = 7 × 7.<br><span class="final">= 49</span>`, ref:"KPC Year 7 Maths — Factors, Multiples, Primes & Powers", product:"year7-maths" }),
  M({ id:"y7-t2-s", topic:"Factors, Multiples, Primes & Powers", subtopic:"Highest Common Factor", syllabusReference:"Y7 WB: HCF (pp.21–22)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Find the Highest Common Factor (HCF) of 18 and 24.", data:"Give a number.", accept:[6], tolerance:0,
    commonMisconception:"Giving the lowest common multiple (72) instead of the HCF.",
    steps:`Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Highest shared factor = 6.<br><span class="final">= 6</span>`, ref:"KPC Year 7 Maths — Factors, Multiples, Primes & Powers", product:"year7-maths" }),
  M({ id:"y7-t2-a", topic:"Factors, Multiples, Primes & Powers", subtopic:"Lowest Common Multiple", syllabusReference:"Y7 WB: LCM (pp.25–26)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Find the Lowest Common Multiple (LCM) of 6 and 9.", data:"Give a number.", accept:[18], tolerance:0,
    commonMisconception:"Multiplying 6 × 9 = 54 instead of finding the lowest common multiple.",
    steps:`Multiples of 6: 6, 12, 18… Multiples of 9: 9, 18… The first shared value is 18.<br><span class="final">= 18</span>`, ref:"KPC Year 7 Maths — Factors, Multiples, Primes & Powers", product:"year7-maths" }),
  M({ id:"y7-t2-u", topic:"Factors, Multiples, Primes & Powers", subtopic:"Nested cube root", syllabusReference:"Y7 WB: Cube Root (pp.13–16)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"Work out the cube root of (3² + 4² + 10²).", data:"Give a number.", accept:[5], tolerance:0,
    commonMisconception:"Forgetting to take the cube root at the end, or mishandling the squares.",
    steps:`Inside first: 3² + 4² + 10² = 9 + 16 + 100 = 125. Then ∛125 (since 5 × 5 × 5 = 125).<br><span class="final">= 5</span>`, ref:"KPC Year 7 Maths — Factors, Multiples, Primes & Powers", product:"year7-maths" }),

  /* ===== T3 Fractions (Number) ===== */
  M({ id:"y7-t3-f", topic:"Fractions", subtopic:"Fraction of a quantity", syllabusReference:"Y7 WB: Fractions of a Quantity (pp.37–38)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Work out 2/5 of 45.", data:"Give a number.", accept:[18], tolerance:0,
    commonMisconception:"Dividing by 5 only (giving 9) and forgetting to multiply by 2.",
    steps:`Divide by the denominator, multiply by the numerator: 45 ÷ 5 = 9, then 9 × 2.<br><span class="final">= 18</span>`, ref:"KPC Year 7 Maths — Fractions", product:"year7-maths" }),
  M({ id:"y7-t3-s", topic:"Fractions", subtopic:"Adding unlike fractions", syllabusReference:"Y7 WB: Adding & Subtracting Fractions (pp.39–41)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"Work out 1/2 + 1/3. Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 5/6) or a decimal.", accept:[0.833333], tolerance:0.002,
    commonMisconception:"Adding numerators and denominators straight across (giving 2/5).",
    steps:`Common denominator 6: 1/2 = 3/6 and 1/3 = 2/6. Add: 3/6 + 2/6 = 5/6.<br><span class="final">= 5/6 ≈ 0.833</span>`, ref:"KPC Year 7 Maths — Fractions", product:"year7-maths" }),
  M({ id:"y7-t3-a", topic:"Fractions", subtopic:"Fraction of a quantity (context)", syllabusReference:"Y7 WB: Fractions of a Quantity (pp.37–38)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A recipe uses 3/4 of a 200 g bag of sugar. How many grams of sugar is that?", data:"Give your answer in grams.", accept:[150], acceptedUnits:["g","grams"], unit:"g", tolerance:0,
    commonMisconception:"Working 200 ÷ 4 = 50 and forgetting to multiply by 3.",
    steps:`3/4 of 200 = (200 ÷ 4) × 3 = 50 × 3.<br><span class="final">= 150 g</span>`, ref:"KPC Year 7 Maths — Fractions", product:"year7-maths" }),
  M({ id:"y7-t3-u", topic:"Fractions", subtopic:"Reverse fraction (part to whole)", syllabusReference:"Y7 WB: Fractions of a Quantity (pp.37–38)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"In a class, 3/7 of the pupils walk to school. 12 pupils walk to school. How many pupils are in the class altogether?", data:"Give a number.", accept:[28], tolerance:0,
    commonMisconception:"Working 3/7 of 12, instead of realising 12 is the value of the 3 parts.",
    steps:`3 parts (out of 7) = 12 pupils, so 1 part = 12 ÷ 3 = 4. The whole class is 7 parts = 7 × 4.<br><span class="final">= 28 pupils</span>`, ref:"KPC Year 7 Maths — Fractions", product:"year7-maths" }),

  /* ===== T4 Decimals, Percentages & FDP (Number) ===== */
  M({ id:"y7-t4-f", topic:"Decimals, Percentages & FDP", subtopic:"Fraction to decimal", syllabusReference:"Y7 WB: Changing Fractions to Decimals (pp.42–44)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:40,
    q:"Write 3/4 as a decimal.", data:"Give a decimal.", accept:[0.75], tolerance:0.001,
    commonMisconception:"Writing 0.34 or 3.4 instead of dividing 3 by 4.",
    steps:`3/4 means 3 ÷ 4.<br><span class="final">= 0.75</span>`, ref:"KPC Year 7 Maths — Decimals, Percentages & FDP", product:"year7-maths" }),
  M({ id:"y7-t4-s", topic:"Decimals, Percentages & FDP", subtopic:"Percentage of a quantity", syllabusReference:"Y7 WB: Percentage of a Quantity (pp.48–49)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Work out 15% of 60.", data:"Give a number.", accept:[9], tolerance:0,
    commonMisconception:"Confusing 15% with 15, or dividing by 15.",
    steps:`15% = 15/100, so 15% of 60 = 0.15 × 60.<br><span class="final">= 9</span>`, ref:"KPC Year 7 Maths — Decimals, Percentages & FDP", product:"year7-maths" }),
  M({ id:"y7-t4-a", topic:"Decimals, Percentages & FDP", subtopic:"Percentage increase (price)", syllabusReference:"Y7 WB: Percentage of a Quantity (pp.48–49)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A game costs €50. Its price is increased by 10%. What is the new price?", data:"Give your answer in euro.", accept:[55], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Adding €10 instead of 10%, or giving the €5 increase as the answer.",
    steps:`10% of 50 = €5 increase. New price = 50 + 5.<br><span class="final">= €55</span>`, ref:"KPC Year 7 Maths — Decimals, Percentages & FDP", product:"year7-maths" }),
  M({ id:"y7-t4-u", topic:"Decimals, Percentages & FDP", subtopic:"Mixed fractions and percentages", syllabusReference:"Y7 WB: Converting F/D/% (pp.45–47)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"In a bottle of juice, 30% is orange and 1/4 is apple. The rest is mango. What percentage is mango?", data:"Give your answer as a percentage.", accept:[45], acceptedUnits:["%"], unit:"%", tolerance:0,
    commonMisconception:"Not converting 1/4 to 25% before combining, or forgetting to subtract from 100%.",
    steps:`1/4 = 25%. Orange + apple = 30% + 25% = 55%. Mango = 100% − 55%.<br><span class="final">= 45%</span>`, ref:"KPC Year 7 Maths — Decimals, Percentages & FDP", product:"year7-maths" }),

  /* ===== T5 Angles (Geometry) ===== */
  M({ id:"y7-t5-f", topic:"Angles", subtopic:"Angles on a straight line", syllabusReference:"Y7 WB: Angles on a Straight Line (pp.50–52)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Two angles sit on a straight line. One of them is 110°. What is the size of the other angle?", data:"Give your answer in degrees.", accept:[70], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using 360° instead of 180° for a straight line.",
    steps:`Angles on a straight line add up to 180°. Other angle = 180 − 110.<br><span class="final">= 70°</span>`, ref:"KPC Year 7 Maths — Angles", product:"year7-maths" }),
  M({ id:"y7-t5-s", topic:"Angles", subtopic:"Angles in a triangle", syllabusReference:"Y7 WB: Angles in a Triangle (pp.56–57)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Two angles of a triangle are 43° and 68°. What is the third angle?", data:"Give your answer in degrees.", accept:[69], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using 360° instead of 180° for the angle sum of a triangle.",
    steps:`Angles in a triangle add up to 180°. Third angle = 180 − 43 − 68.<br><span class="final">= 69°</span>`, ref:"KPC Year 7 Maths — Angles", product:"year7-maths" }),
  M({ id:"y7-t5-a", topic:"Angles", subtopic:"Co-interior angles", syllabusReference:"Y7 WB: Interior (Co-interior) Angles (pp.66–67)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A straight line crosses two parallel lines. One angle is 72°. What is the size of the co-interior (allied) angle on the same side?", data:"Give your answer in degrees.", accept:[108], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Thinking co-interior angles are equal (72°) instead of adding to 180°.",
    steps:`Co-interior (allied) angles between parallel lines add up to 180°. Angle = 180 − 72.<br><span class="final">= 108°</span>`, ref:"KPC Year 7 Maths — Angles", product:"year7-maths" }),
  M({ id:"y7-t5-u", topic:"Angles", subtopic:"Exterior angle of a triangle", syllabusReference:"Y7 WB: Exterior Angles in a Triangle (pp.60–61)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:140,
    q:"One exterior angle of a triangle is 115°. One of the two interior angles opposite to it is 40°. What is the other opposite interior angle?", data:"Give your answer in degrees.", accept:[75], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using the angle-sum 180° with the exterior angle, instead of the exterior-angle theorem.",
    steps:`The exterior angle equals the sum of the two opposite interior angles: 115 = 40 + x, so x = 115 − 40.<br><span class="final">= 75°</span>`, ref:"KPC Year 7 Maths — Angles", product:"year7-maths" }),

  /* ===== T6 Symmetry, Polygons & Shapes (Geometry) ===== */
  M({ id:"y7-t6-f", topic:"Symmetry, Polygons & Shapes", subtopic:"Order of rotational symmetry", syllabusReference:"Y7 WB: Rotational Symmetry (pp.70–71)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"What is the order of rotational symmetry of a square?", data:"Give a number.", accept:[4], tolerance:0,
    commonMisconception:"Confusing rotational symmetry with lines of symmetry, or giving 2.",
    steps:`A square looks the same 4 times in one full turn (every 90°).<br><span class="final">= 4</span>`, ref:"KPC Year 7 Maths — Symmetry, Polygons & Shapes", product:"year7-maths" }),
  M({ id:"y7-t6-s", topic:"Symmetry, Polygons & Shapes", subtopic:"Angles in a quadrilateral", syllabusReference:"Y7 WB: Quadrilaterals (pp.87–88)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Three angles of a quadrilateral are 100°, 85° and 95°. What is the fourth angle?", data:"Give your answer in degrees.", accept:[80], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using 180° or 360° incorrectly — the four angles of a quadrilateral add up to 360°.",
    steps:`Angles in a quadrilateral add up to 360°. Fourth angle = 360 − 100 − 85 − 95 = 360 − 280.<br><span class="final">= 80°</span>`, ref:"KPC Year 7 Maths — Symmetry, Polygons & Shapes", product:"year7-maths" }),
  M({ id:"y7-t6-a", topic:"Symmetry, Polygons & Shapes", subtopic:"Interior angle sum of a polygon", syllabusReference:"Y7 WB: Polygons (pp.84–86)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"Work out the sum of the interior angles of a pentagon (5 sides). Use sum = (n − 2) × 180°.", data:"Give your answer in degrees.", accept:[540], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using n = 5 as the whole answer, or forgetting the − 2.",
    steps:`Sum = (n − 2) × 180 = (5 − 2) × 180 = 3 × 180.<br><span class="final">= 540°</span>`, ref:"KPC Year 7 Maths — Symmetry, Polygons & Shapes", product:"year7-maths" }),
  M({ id:"y7-t6-u", topic:"Symmetry, Polygons & Shapes", subtopic:"Interior angle of a regular polygon", syllabusReference:"Y7 WB: Polygons (pp.84–86)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"Work out the size of ONE interior angle of a regular hexagon (6 equal sides). Use interior angle = (n − 2) × 180 ÷ n.", data:"Give your answer in degrees.", accept:[120], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Finding the total (720°) but forgetting to divide by the number of sides.",
    steps:`(n − 2) × 180 ÷ n = (6 − 2) × 180 ÷ 6 = 720 ÷ 6.<br><span class="final">= 120°</span>`, ref:"KPC Year 7 Maths — Symmetry, Polygons & Shapes", product:"year7-maths" }),

  /* ===== T7 Algebra (Algebra) ===== */
  M({ id:"y7-t7-f", topic:"Algebra", subtopic:"Collecting like terms", syllabusReference:"Y7 WB: Collecting Like Terms (pp.74–75)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:45,
    q:"Simplify 4x + 5x − x.",
    opts:["8x","10x","9x","8"], correct:0,
    commonMisconception:"Adding all three terms (giving 10x) and not subtracting the x.",
    steps:`Collect like terms: (4 + 5 − 1)x.<br><span class="final">= 8x</span>`, ref:"KPC Year 7 Maths — Algebra", product:"year7-maths" }),
  M({ id:"y7-t7-s", topic:"Algebra", subtopic:"Expanding a bracket", syllabusReference:"Y7 WB: Expanding Brackets (pp.76–78)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:60,
    q:"Expand 4(x + 3).",
    opts:["4x + 12","4x + 3","4x + 7","x + 12"], correct:0,
    commonMisconception:"Multiplying only the first term, giving 4x + 3.",
    steps:`Multiply each term inside by 4: 4 × x = 4x and 4 × 3 = 12.<br><span class="final">= 4x + 12</span>`, ref:"KPC Year 7 Maths — Algebra", product:"year7-maths" }),
  M({ id:"y7-t7-a", topic:"Algebra", subtopic:"Substitution", syllabusReference:"Y7 WB: Collecting Like Terms / substitution (pp.74–75)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"If a = 5 and b = 2, work out the value of 3a − 2b.", data:"Give a number.", accept:[11], tolerance:0,
    commonMisconception:"Working 3 × 5 − 2 × 2 in the wrong order, or subtracting before multiplying.",
    steps:`3a = 3 × 5 = 15 and 2b = 2 × 2 = 4. Then 15 − 4.<br><span class="final">= 11</span>`, ref:"KPC Year 7 Maths — Algebra", product:"year7-maths" }),
  M({ id:"y7-t7-u", topic:"Algebra", subtopic:"Equation with the unknown on both sides", syllabusReference:"Y7 WB: Solving Equations (pp.79–83)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"Solve 4x − 3 = x + 9. What is the value of x?", data:"Give a number.", accept:[4], tolerance:0,
    commonMisconception:"Not moving the x-terms to one side first before solving.",
    steps:`Subtract x from both sides: 3x − 3 = 9. Add 3: 3x = 12. Divide by 3: x = 12 ÷ 3.<br><span class="final">x = 4</span>`, ref:"KPC Year 7 Maths — Algebra", product:"year7-maths" }),

  /* ===== T8 Coordinate Geometry & The Circle (Geometry) ===== */
  M({ id:"y7-t8-f", topic:"Coordinate Geometry & The Circle", subtopic:"Reading a coordinate", syllabusReference:"Y7 WB: Coordinate Geometry (pp.91–95)", difficulty:"foundation", cognitiveSkill:"recall", type:"work", marks:1, expectedTimeSeconds:40,
    q:"A point has coordinates (6, −2). What is its x-coordinate?", data:"Give a number.", accept:[6], tolerance:0,
    commonMisconception:"Giving the y-coordinate (−2) instead of the x-coordinate.",
    steps:`Coordinates are written (x, y). The x-coordinate is the first number.<br><span class="final">= 6</span>`, ref:"KPC Year 7 Maths — Coordinate Geometry & The Circle", product:"year7-maths" }),
  M({ id:"y7-t8-s", topic:"Coordinate Geometry & The Circle", subtopic:"Circumference of a circle", syllabusReference:"Y7 WB: The Circle (pp.89–90)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A circle has a diameter of 8 cm. Work out its circumference. Use π = 3.14.", data:"Give your answer in cm.", accept:[25.12], acceptedUnits:["cm"], unit:"cm", tolerance:0.1,
    commonMisconception:"Multiplying by the radius instead of the diameter.",
    steps:`Circumference = π × diameter = 3.14 × 8.<br><span class="final">= 25.12 cm</span>`, ref:"KPC Year 7 Maths — Coordinate Geometry & The Circle", product:"year7-maths" }),
  M({ id:"y7-t8-a", topic:"Coordinate Geometry & The Circle", subtopic:"Area of a circle", syllabusReference:"Y7 WB: The Circle (pp.89–90)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A circle has a radius of 5 cm. Work out its area. Use π = 3.14.", data:"Give your answer in cm².", accept:[78.5], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0.5,
    commonMisconception:"Using π × r (not squaring the radius), or using the diameter.",
    steps:`Area = π × r² = 3.14 × 5² = 3.14 × 25.<br><span class="final">= 78.5 cm²</span>`, ref:"KPC Year 7 Maths — Coordinate Geometry & The Circle", product:"year7-maths" }),
  M({ id:"y7-t8-u", topic:"Coordinate Geometry & The Circle", subtopic:"Missing corner of a square", syllabusReference:"Y7 WB: Coordinate Geometry (pp.91–95)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A(1, 2), B(5, 2) and C(5, 6) are three corners of a square ABCD. What is the y-coordinate of the fourth corner, D?", data:"Give a number.", accept:[6], tolerance:0,
    commonMisconception:"Guessing without sketching — D lines up horizontally with A and vertically with C.",
    steps:`Plot the three points: D must be directly above A and level with C, so D = (1, 6).<br><span class="final">y-coordinate = 6</span>`, ref:"KPC Year 7 Maths — Coordinate Geometry & The Circle", product:"year7-maths" }),

  /* ===== T9 Measurement, Area & Volume (Measurement) ===== */
  M({ id:"y7-t9-f", topic:"Measurement, Area & Volume", subtopic:"Unit conversion (cm to mm)", syllabusReference:"Y7 WB: Units of Measurement & Conversion (pp.96–102)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:40,
    q:"How many millimetres are there in 4.5 cm?", data:"Give your answer in millimetres.", accept:[45], acceptedUnits:["mm"], unit:"mm", tolerance:0,
    commonMisconception:"Multiplying by 100 (giving 450) instead of 10.",
    steps:`1 cm = 10 mm, so multiply by 10: 4.5 × 10.<br><span class="final">= 45 mm</span>`, ref:"KPC Year 7 Maths — Measurement, Area & Volume", product:"year7-maths" }),
  M({ id:"y7-t9-s", topic:"Measurement, Area & Volume", subtopic:"Area of a parallelogram", syllabusReference:"Y7 WB: Area of a Parallelogram (pp.109–111)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A parallelogram has a base of 9 cm and a perpendicular height of 6 cm. Work out its area.", data:"Give your answer in cm².", accept:[54], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Using ½ × base × height (that is for a triangle), giving 27.",
    steps:`Area of a parallelogram = base × perpendicular height = 9 × 6.<br><span class="final">= 54 cm²</span>`, ref:"KPC Year 7 Maths — Measurement, Area & Volume", product:"year7-maths" }),
  M({ id:"y7-t9-a", topic:"Measurement, Area & Volume", subtopic:"Area of a triangle", syllabusReference:"Y7 WB: Area of a Triangle (pp.107–108)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A triangle has a base of 12 cm and a height of 7 cm. Work out its area.", data:"Give your answer in cm².", accept:[42], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Forgetting the ½ (giving 84).",
    steps:`Area = ½ × base × height = ½ × 12 × 7.<br><span class="final">= 42 cm²</span>`, ref:"KPC Year 7 Maths — Measurement, Area & Volume", product:"year7-maths" }),
  M({ id:"y7-t9-u", topic:"Measurement, Area & Volume", subtopic:"Volume of a triangular prism", syllabusReference:"Y7 WB: Volume of Mixed Prisms (pp.120–122)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"A triangular prism has a triangular cross-section with a base of 6 cm and a height of 4 cm. The prism is 10 cm long. Work out its volume.", data:"Give your answer in cm³.", accept:[120], acceptedUnits:["cm^3","cm3"], unit:"cm³", tolerance:0,
    commonMisconception:"Multiplying 6 × 4 × 10 = 240 and forgetting the ½ for the triangular cross-section.",
    steps:`Cross-section area = ½ × 6 × 4 = 12 cm². Volume = cross-section × length = 12 × 10.<br><span class="final">= 120 cm³</span>`, ref:"KPC Year 7 Maths — Measurement, Area & Volume", product:"year7-maths" }),

  /* ===== T10 Ratio, Statistics & Probability (Data) ===== */
  M({ id:"y7-t10-f", topic:"Ratio, Statistics & Probability", subtopic:"Simplifying a ratio", syllabusReference:"Y7 WB: Ratios (pp.123–126)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:50,
    q:"Written in its simplest form, the ratio 10 : 15 is…",
    opts:["2 : 3","3 : 2","5 : 10","2 : 5"], correct:0,
    commonMisconception:"Not dividing both parts by the highest common factor (5).",
    steps:`Divide both parts by 5: 10 ÷ 5 = 2 and 15 ÷ 5 = 3.<br><span class="final">= 2 : 3</span>`, ref:"KPC Year 7 Maths — Ratio, Statistics & Probability", product:"year7-maths" }),
  M({ id:"y7-t10-s", topic:"Ratio, Statistics & Probability", subtopic:"Mean", syllabusReference:"Y7 WB: Mean, Median, Mode and Range (pp.148–149)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Find the mean (average) of 7, 11, 8 and 14.", data:"Give a number.", accept:[10], tolerance:0,
    commonMisconception:"Forgetting to divide by how many numbers there are (4).",
    steps:`Mean = total ÷ how many = (7 + 11 + 8 + 14) ÷ 4 = 40 ÷ 4.<br><span class="final">= 10</span>`, ref:"KPC Year 7 Maths — Ratio, Statistics & Probability", product:"year7-maths" }),
  M({ id:"y7-t10-a", topic:"Ratio, Statistics & Probability", subtopic:"Sharing in a ratio", syllabusReference:"Y7 WB: Ratios (pp.123–126)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"€48 is shared between two people in the ratio 5 : 3. How much does the person with the LARGER share receive?", data:"Give your answer in euro.", accept:[30], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Dividing by 5 or 3 instead of by the total number of parts (8), or giving the smaller share.",
    steps:`Total parts = 5 + 3 = 8, so one part = 48 ÷ 8 = €6. Larger share = 5 × 6.<br><span class="final">= €30</span>`, ref:"KPC Year 7 Maths — Ratio, Statistics & Probability", product:"year7-maths" }),
  M({ id:"y7-t10-u", topic:"Ratio, Statistics & Probability", subtopic:"Pie chart to frequency", syllabusReference:"Y7 WB: Graphs — Pie Charts (pp.150–154)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"In a pie chart showing the favourite sport of 200 people, the 'football' sector has an angle of 90°. How many people chose football?", data:"Give a number.", accept:[50], tolerance:0,
    commonMisconception:"Reading the 90° as the number of people, instead of working out the fraction of 360°.",
    steps:`Football is 90° out of 360°, i.e. 90/360 = 1/4 of the people. 1/4 of 200 = 200 ÷ 4.<br><span class="final">= 50 people</span>`, ref:"KPC Year 7 Maths — Ratio, Statistics & Probability", product:"year7-maths" }),
];

export const WHY = {
  "Number & Place Value":"Revise place value, rounding, long multiplication and division, and directed numbers with order of operations.",
  "Factors, Multiples, Primes & Powers":"Practise squares, cubes and roots, prime factors, HCF and LCM.",
  "Fractions":"Focus on fractions of a quantity, adding/subtracting unlike fractions, and reverse (part-to-whole) problems.",
  "Decimals, Percentages & FDP":"Revise converting between fractions, decimals and percentages, and percentage-of-a-quantity problems.",
  "Angles":"Practise angle facts — straight line, triangle, parallel-line (co-interior) and the exterior-angle theorem.",
  "Symmetry, Polygons & Shapes":"Review rotational symmetry, angles in quadrilaterals, and interior angles of polygons.",
  "Algebra":"Revise collecting like terms, expanding brackets, substitution, and solving equations with the unknown on both sides.",
  "Coordinate Geometry & The Circle":"Practise coordinates, circumference and area of circles, and coordinate reasoning.",
  "Measurement, Area & Volume":"Review unit conversions, area of triangles and parallelograms, and volume of prisms.",
  "Ratio, Statistics & Probability":"Practise simplifying and sharing ratios, the mean, and reading pie charts."
};

/* -------- wire into the shared grading engine -------- */
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY, STRANDS, STRAND_WEIGHTS };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
