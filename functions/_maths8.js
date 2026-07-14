import { publicQuestions as pub, gradeAndReport as grade } from "./_grade.js";

/* =========================================================================
   KPC Diagnostic - YEAR 8 MATHEMATICS candidate bank (CALIBRATED, SERVER-SIDE).
   Maltese lower-secondary Year 8 (~age 12–13). NO MATSEC syllabus at this level;
   difficulty is calibrated to the KPC Year 8 Maths Workbook (Scholastic 2026/7),
   expert-judged "representative of the year, and a bit harder" - the uppers reach
   the workbook's genuine ceiling (negative indices, reverse percentages, inverse
   proportion, reverse nth-term, parallel-line equations, independent events).
   10 topics grouped from the ~50 workbook sections. 10×4 = 40.
   Composition per topic: 1 foundation, 2 standard_exam (1 application), 1 upper_exam.
   status:"candidate" - teacher-review + student-pilot pending (NOT empirically validated).
   All wording/values/contexts INDEPENDENTLY authored; no workbook text/numbers reproduced.
   Every answer independently recomputed + blind-solved + graded through the real engine.
   STRANDS/STRAND_WEIGHTS: Number/Algebra/Geometry/Data, weighted for Year 8's strong
   algebra + graph content.
   ========================================================================= */
export const SUBJECT = "Year 8 Maths";

export const TOPIC_ORDER = [
  "Indices, Powers, Primes & Multiples",
  "Fractions, Decimals & Percentages",
  "Ratio & Proportion",
  "Sequences & the nth Term",
  "Algebra",
  "Straight-Line Graphs",
  "Circles & Angles",
  "Area, Surface Area & Nets",
  "Transformations",
  "Statistics & Probability"
];

export const STRANDS = {
  "Indices, Powers, Primes & Multiples":"Number", "Fractions, Decimals & Percentages":"Number",
  "Ratio & Proportion":"Number",
  "Sequences & the nth Term":"Algebra", "Algebra":"Algebra", "Straight-Line Graphs":"Algebra",
  "Circles & Angles":"Geometry", "Area, Surface Area & Nets":"Geometry", "Transformations":"Geometry",
  "Statistics & Probability":"Data"
};
export const STRAND_WEIGHTS = { Number:0.30, Algebra:0.30, Geometry:0.25, Data:0.15 };

const M = (o) => ({ status:"candidate", version:1, originalityStatus:"independently_drafted",
  humanReviewStatus:"pending", pilotStatus:"not_piloted", marks:1, unit:"", ...o });

export const QUESTIONS = [
  /* ===== T1 Indices, Powers, Primes & Multiples (Number) ===== */
  M({ id:"y8-t1-f", topic:"Indices, Powers, Primes & Multiples", subtopic:"Cube of a number", syllabusReference:"Y8 WB: Cube Numbers (pp.29–30)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Work out 4³ (4 cubed).", data:"Give a number.", accept:[64], tolerance:0,
    commonMisconception:"Working 4 × 3 = 12 instead of 4 × 4 × 4.",
    steps:`4³ = 4 × 4 × 4 = 16 × 4.<br><span class="final">= 64</span>`, ref:"KPC Year 8 Maths - Indices, Powers, Primes & Multiples", product:"year8-maths" }),
  M({ id:"y8-t1-s", topic:"Indices, Powers, Primes & Multiples", subtopic:"Lowest Common Multiple", syllabusReference:"Y8 WB: Least Common Multiple (pp.19–22)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Find the Lowest Common Multiple (LCM) of 8 and 12.", data:"Give a number.", accept:[24], tolerance:0,
    commonMisconception:"Multiplying the two numbers (giving 96) instead of finding the lowest common multiple.",
    steps:`Multiples of 8: 8, 16, 24… Multiples of 12: 12, 24… The first shared value is 24.<br><span class="final">= 24</span>`, ref:"KPC Year 8 Maths - Indices, Powers, Primes & Multiples", product:"year8-maths" }),
  M({ id:"y8-t1-a", topic:"Indices, Powers, Primes & Multiples", subtopic:"Highest Common Factor", syllabusReference:"Y8 WB: Prime Factorisation / HCF (pp.12–22)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"Find the Highest Common Factor (HCF) of 24 and 60.", data:"Give a number.", accept:[12], tolerance:0,
    commonMisconception:"Giving a common factor that is not the highest (e.g. 6), or giving the LCM.",
    steps:`24 = 2³ × 3 and 60 = 2² × 3 × 5. Common factors: 2² × 3 = 4 × 3.<br><span class="final">= 12</span>`, ref:"KPC Year 8 Maths - Indices, Powers, Primes & Multiples", product:"year8-maths" }),
  M({ id:"y8-t1-u", topic:"Indices, Powers, Primes & Multiples", subtopic:"Negative index of a fraction", syllabusReference:"Y8 WB: Indices (pp.4–9)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"Work out (1/2)⁻³.", data:"Give a number.", accept:[8], tolerance:0,
    commonMisconception:"Treating the negative index as a minus (giving −6 or 1/8) instead of a reciprocal.",
    steps:`A negative index means the reciprocal: (1/2)⁻³ = (2/1)³ = 2³ = 2 × 2 × 2.<br><span class="final">= 8</span>`, ref:"KPC Year 8 Maths - Indices, Powers, Primes & Multiples", product:"year8-maths" }),

  /* ===== T2 Fractions, Decimals & Percentages (Number) ===== */
  M({ id:"y8-t2-f", topic:"Fractions, Decimals & Percentages", subtopic:"Decimal to percentage", syllabusReference:"Y8 WB: Converting Fractions to Percentages (pp.42–44)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:40,
    q:"Write 0.35 as a percentage.", data:"Give your answer as a percentage.", accept:[35], acceptedUnits:["%"], unit:"%", tolerance:0,
    commonMisconception:"Moving the decimal point the wrong way (giving 3.5%) or leaving it as 0.35%.",
    steps:`To turn a decimal into a percentage, multiply by 100: 0.35 × 100.<br><span class="final">= 35%</span>`, ref:"KPC Year 8 Maths - Fractions, Decimals & Percentages", product:"year8-maths" }),
  M({ id:"y8-t2-s", topic:"Fractions, Decimals & Percentages", subtopic:"Adding unlike fractions", syllabusReference:"Y8 WB: Adding & Subtracting Fractions (pp.76–78)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"Work out 2/3 + 1/4. Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 11/12) or a decimal.", accept:[0.916667], tolerance:0.002,
    commonMisconception:"Adding numerators and denominators straight across (giving 3/7).",
    steps:`Common denominator 12: 2/3 = 8/12 and 1/4 = 3/12. Add: 8/12 + 3/12 = 11/12.<br><span class="final">= 11/12 ≈ 0.917</span>`, ref:"KPC Year 8 Maths - Fractions, Decimals & Percentages", product:"year8-maths" }),
  M({ id:"y8-t2-a", topic:"Fractions, Decimals & Percentages", subtopic:"Percentage decrease (sale price)", syllabusReference:"Y8 WB: Percentage Increase or Decrease (pp.94–102)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A jacket costs €80. In a sale it is reduced by 15%. What is the sale price?", data:"Give your answer in euro.", accept:[68], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Subtracting €15 instead of 15%, or giving the €12 discount as the answer.",
    steps:`15% of 80 = 0.15 × 80 = €12 off. Sale price = 80 − 12.<br><span class="final">= €68</span>`, ref:"KPC Year 8 Maths - Fractions, Decimals & Percentages", product:"year8-maths" }),
  M({ id:"y8-t2-u", topic:"Fractions, Decimals & Percentages", subtopic:"Reverse percentage", syllabusReference:"Y8 WB: Percentage Increase or Decrease (pp.94–102)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"After a 20% increase, a phone costs €300. What was its original price before the increase?", data:"Give your answer in euro.", accept:[250], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Taking 20% off the €300 (giving €240) instead of dividing by 1.20.",
    steps:`After a 20% rise the price is 120% of the original, so €300 = 1.20 × original. Original = 300 ÷ 1.20.<br><span class="final">= €250</span>`, ref:"KPC Year 8 Maths - Fractions, Decimals & Percentages", product:"year8-maths" }),

  /* ===== T3 Ratio & Proportion (Number) ===== */
  M({ id:"y8-t3-f", topic:"Ratio & Proportion", subtopic:"Simplifying a ratio", syllabusReference:"Y8 WB: Simplifying Ratios (pp.103–109)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:50,
    q:"Written in its simplest form, the ratio 12 : 18 is…",
    opts:["2 : 3","3 : 2","4 : 6","6 : 9"], correct:0,
    commonMisconception:"Not dividing both parts by the highest common factor (6).",
    steps:`Divide both parts by their HCF, 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3.<br><span class="final">= 2 : 3</span>`, ref:"KPC Year 8 Maths - Ratio & Proportion", product:"year8-maths" }),
  M({ id:"y8-t3-s", topic:"Ratio & Proportion", subtopic:"Direct proportion", syllabusReference:"Y8 WB: Direct Proportion (pp.117–119)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"3 identical books cost €18. How much do 7 of the same books cost?", data:"Give your answer in euro.", accept:[42], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Adding €4 for the extra books instead of finding the cost of one book first.",
    steps:`One book = 18 ÷ 3 = €6. Seven books = 6 × 7.<br><span class="final">= €42</span>`, ref:"KPC Year 8 Maths - Ratio & Proportion", product:"year8-maths" }),
  M({ id:"y8-t3-a", topic:"Ratio & Proportion", subtopic:"Sharing in a three-part ratio", syllabusReference:"Y8 WB: Division of a Quantity into a Ratio (pp.114–116)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"€90 is shared in the ratio 2 : 3 : 4. How much is the LARGEST share?", data:"Give your answer in euro.", accept:[40], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Dividing by the number of shares (3) instead of the total number of parts (9).",
    steps:`Total parts = 2 + 3 + 4 = 9, so one part = 90 ÷ 9 = €10. Largest share = 4 × 10.<br><span class="final">= €40</span>`, ref:"KPC Year 8 Maths - Ratio & Proportion", product:"year8-maths" }),
  M({ id:"y8-t3-u", topic:"Ratio & Proportion", subtopic:"Inverse proportion", syllabusReference:"Y8 WB: Inverse Proportion (pp.120–123)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"It takes 4 workers 6 hours to build a wall. Working at the same rate, how long would it take 3 workers?", data:"Give your answer in hours.", accept:[8], acceptedUnits:["h","hr","hrs","hours"], unit:"hours", tolerance:0,
    commonMisconception:"Using direct proportion (fewer workers → less time) instead of inverse proportion.",
    steps:`Total work = 4 × 6 = 24 worker-hours. With 3 workers: 24 ÷ 3.<br><span class="final">= 8 hours</span>`, ref:"KPC Year 8 Maths - Ratio & Proportion", product:"year8-maths" }),

  /* ===== T4 Sequences & the nth Term (Algebra) ===== */
  M({ id:"y8-t4-f", topic:"Sequences & the nth Term", subtopic:"Next term of a sequence", syllabusReference:"Y8 WB: Number Sequence (pp.139–142)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:40,
    q:"Here is a sequence: 5, 8, 11, 14, … What is the next term?", data:"Give a number.", accept:[17], tolerance:0,
    commonMisconception:"Using the wrong common difference (the terms go up by 3 each time).",
    steps:`The sequence goes up by 3 each time: 14 + 3.<br><span class="final">= 17</span>`, ref:"KPC Year 8 Maths - Sequences & the nth Term", product:"year8-maths" }),
  M({ id:"y8-t4-s", topic:"Sequences & the nth Term", subtopic:"Using an nth-term rule", syllabusReference:"Y8 WB: Finding the nth Term (pp.143–147)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"A sequence has nth-term rule 4n + 1. What is the 10th term?", data:"Give a number.", accept:[41], tolerance:0,
    commonMisconception:"Working 4 + 1 = 5, or forgetting the + 1.",
    steps:`Substitute n = 10: 4 × 10 + 1 = 40 + 1.<br><span class="final">= 41</span>`, ref:"KPC Year 8 Maths - Sequences & the nth Term", product:"year8-maths" }),
  M({ id:"y8-t4-a", topic:"Sequences & the nth Term", subtopic:"Find the rule, then a term", syllabusReference:"Y8 WB: Finding the nth Term (pp.143–147)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:110,
    q:"A sequence starts 3, 7, 11, 15, … Work out its nth-term rule and use it to find the 20th term.", data:"Give a number.", accept:[79], tolerance:0,
    commonMisconception:"Using 4n (giving 80) and forgetting the −1 in the rule 4n − 1.",
    steps:`The terms go up by 4, so the rule is 4n − 1 (check: 4×1 − 1 = 3). 20th term = 4 × 20 − 1 = 80 − 1.<br><span class="final">= 79</span>`, ref:"KPC Year 8 Maths - Sequences & the nth Term", product:"year8-maths" }),
  M({ id:"y8-t4-u", topic:"Sequences & the nth Term", subtopic:"Reverse nth term (which term)", syllabusReference:"Y8 WB: Finding the nth Term (pp.143–147)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A sequence has nth-term rule 4n + 3, so it goes 7, 11, 15, … Which term in the sequence is equal to 71?", data:"Give the term number (a number).", accept:[17], tolerance:0,
    commonMisconception:"Giving the value 71, or substituting instead of solving 4n + 3 = 71.",
    steps:`Solve 4n + 3 = 71 → 4n = 68 → n = 68 ÷ 4. So the 17th term equals 71.<br><span class="final">= 17th term</span>`, ref:"KPC Year 8 Maths - Sequences & the nth Term", product:"year8-maths" }),

  /* ===== T5 Algebra (Algebra) ===== */
  M({ id:"y8-t5-f", topic:"Algebra", subtopic:"Collecting like terms", syllabusReference:"Y8 WB: Simplifying Algebraic Expressions (pp.157–159)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:45,
    q:"Simplify 5a + 3a − 2a.",
    opts:["6a","10a","6","a"], correct:0,
    commonMisconception:"Adding all three terms (giving 10a) instead of subtracting the 2a.",
    steps:`Collect the like terms: 5a + 3a − 2a = (5 + 3 − 2)a.<br><span class="final">= 6a</span>`, ref:"KPC Year 8 Maths - Algebra", product:"year8-maths" }),
  M({ id:"y8-t5-s", topic:"Algebra", subtopic:"Expanding a bracket", syllabusReference:"Y8 WB: Expanding Brackets (pp.160–163)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:70,
    q:"Expand 3(2x + 5).",
    opts:["6x + 15","6x + 5","5x + 8","6x + 8"], correct:0,
    commonMisconception:"Multiplying only the first term, giving 6x + 5.",
    steps:`Multiply each term inside by 3: 3 × 2x = 6x and 3 × 5 = 15.<br><span class="final">= 6x + 15</span>`, ref:"KPC Year 8 Maths - Algebra", product:"year8-maths" }),
  M({ id:"y8-t5-a", topic:"Algebra", subtopic:"Substitution with a power", syllabusReference:"Y8 WB: Substitution (pp.167–170)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"If x = 4 and y = 3, work out the value of 2x² − y.", data:"Give a number.", accept:[29], tolerance:0,
    commonMisconception:"Working (2x)² = 64, instead of 2 × (x²). Square first, then multiply by 2.",
    steps:`x² = 4² = 16, so 2x² = 32. Then 2x² − y = 32 − 3.<br><span class="final">= 29</span>`, ref:"KPC Year 8 Maths - Algebra", product:"year8-maths" }),
  M({ id:"y8-t5-u", topic:"Algebra", subtopic:"Equation with the unknown on both sides", syllabusReference:"Y8 WB: Solving Linear Equations (pp.175–178)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"Solve 5x − 4 = 2x + 11. What is the value of x?", data:"Give a number.", accept:[5], tolerance:0,
    commonMisconception:"Not moving the variable to one side first (e.g. adding the x-terms wrongly).",
    steps:`Subtract 2x from both sides: 3x − 4 = 11. Add 4: 3x = 15. Divide by 3: x = 15 ÷ 3.<br><span class="final">x = 5</span>`, ref:"KPC Year 8 Maths - Algebra", product:"year8-maths" }),

  /* ===== T6 Straight-Line Graphs (Algebra) ===== */
  M({ id:"y8-t6-f", topic:"Straight-Line Graphs", subtopic:"Gradient from an equation", syllabusReference:"Y8 WB: Gradient (pp.196–198)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"What is the gradient of the line y = 4x − 1?", data:"Give a number.", accept:[4], tolerance:0,
    commonMisconception:"Giving the y-intercept (−1) instead of the gradient.",
    steps:`In y = mx + c, the gradient is m - the number multiplying x.<br><span class="final">= 4</span>`, ref:"KPC Year 8 Maths - Straight-Line Graphs", product:"year8-maths" }),
  M({ id:"y8-t6-s", topic:"Straight-Line Graphs", subtopic:"Gradient from two points", syllabusReference:"Y8 WB: Gradient (pp.196–198)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A straight line passes through the points (1, 3) and (4, 12). What is its gradient?", data:"Give a number.", accept:[3], tolerance:0.05,
    commonMisconception:"Dividing the change in x by the change in y (upside-down).",
    steps:`Gradient = change in y ÷ change in x = (12 − 3) ÷ (4 − 1) = 9 ÷ 3.<br><span class="final">= 3</span>`, ref:"KPC Year 8 Maths - Straight-Line Graphs", product:"year8-maths" }),
  M({ id:"y8-t6-a", topic:"Straight-Line Graphs", subtopic:"x-intercept", syllabusReference:"Y8 WB: X and Y Intercepts (pp.199–201)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"At what value of x does the line y = 2x − 8 cross the x-axis?", data:"Give a number.", accept:[4], tolerance:0,
    commonMisconception:"Reading off −8, or forgetting that y = 0 on the x-axis.",
    steps:`On the x-axis y = 0, so 0 = 2x − 8 → 2x = 8 → x = 8 ÷ 2.<br><span class="final">x = 4</span>`, ref:"KPC Year 8 Maths - Straight-Line Graphs", product:"year8-maths" }),
  M({ id:"y8-t6-u", topic:"Straight-Line Graphs", subtopic:"Equation of a parallel line", syllabusReference:"Y8 WB: Equations of Parallel Lines (pp.202–206)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:170,
    q:"A line is parallel to y = 3x + 1 and passes through the point (2, 11). Its equation is y = 3x + c. What is the value of c?", data:"Give a number.", accept:[5], tolerance:0,
    commonMisconception:"Changing the gradient, or taking c = 11 (the y-value of the point) directly.",
    steps:`Parallel lines share the gradient (3). Substitute (2, 11): 11 = 3 × 2 + c → 11 = 6 + c → c = 11 − 6.<br><span class="final">c = 5</span>`, ref:"KPC Year 8 Maths - Straight-Line Graphs", product:"year8-maths" }),

  /* ===== T7 Circles & Angles (Geometry) ===== */
  M({ id:"y8-t7-f", topic:"Circles & Angles", subtopic:"Circumference", syllabusReference:"Y8 WB: The Circle (pp.221–225)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"A circle has a diameter of 10 cm. Work out its circumference. Use π = 3.14.", data:"Give your answer in cm.", accept:[31.4], acceptedUnits:["cm"], unit:"cm", tolerance:0.1,
    commonMisconception:"Using the area formula, or multiplying by the radius instead of the diameter.",
    steps:`Circumference = π × diameter = 3.14 × 10.<br><span class="final">= 31.4 cm</span>`, ref:"KPC Year 8 Maths - Circles & Angles", product:"year8-maths" }),
  M({ id:"y8-t7-s", topic:"Circles & Angles", subtopic:"Area of a circle", syllabusReference:"Y8 WB: The Area of a Circle (pp.226–229)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A circle has a radius of 6 cm. Work out its area. Use π = 3.14.", data:"Give your answer in cm².", accept:[113.04], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0.5,
    commonMisconception:"Using π × r (not squaring r), or using the diameter instead of the radius.",
    steps:`Area = π × r² = 3.14 × 6² = 3.14 × 36.<br><span class="final">= 113.04 cm²</span>`, ref:"KPC Year 8 Maths - Circles & Angles", product:"year8-maths" }),
  M({ id:"y8-t7-a", topic:"Circles & Angles", subtopic:"Exterior angle of a triangle", syllabusReference:"Y8 WB: Exterior Angle of a Triangle (pp.230–234)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"The two interior angles at the base of a triangle are 50° and 60°. What is the exterior angle at the third vertex (the top)?", data:"Give your answer in degrees.", accept:[110], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Giving the interior third angle (70°) instead of the exterior angle.",
    steps:`The exterior angle equals the sum of the two opposite interior angles: 50 + 60.<br><span class="final">= 110°</span>`, ref:"KPC Year 8 Maths - Circles & Angles", product:"year8-maths" }),
  M({ id:"y8-t7-u", topic:"Circles & Angles", subtopic:"Perimeter of a semicircle", syllabusReference:"Y8 WB: The Circle (pp.221–225)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"A semicircle has a diameter of 12 cm. Work out its perimeter - the curved part PLUS the straight edge. Use π = 3.14.", data:"Give your answer in cm.", accept:[30.84], acceptedUnits:["cm"], unit:"cm", tolerance:0.3,
    commonMisconception:"Giving only the curved part (18.84 cm) and forgetting to add the straight diameter.",
    steps:`Curved part = half the circumference = ½ × 3.14 × 12 = 18.84 cm. Add the straight edge (the diameter, 12 cm): 18.84 + 12.<br><span class="final">= 30.84 cm</span>`, ref:"KPC Year 8 Maths - Circles & Angles", product:"year8-maths" }),

  /* ===== T8 Area, Surface Area & Nets (Geometry) ===== */
  M({ id:"y8-t8-f", topic:"Area, Surface Area & Nets", subtopic:"Area of a triangle", syllabusReference:"Y8 WB: Area of a Triangle (pp.251–253)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"A triangle has a base of 8 cm and a height of 5 cm. Work out its area.", data:"Give your answer in cm².", accept:[20], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Forgetting the ½ (giving 40).",
    steps:`Area = ½ × base × height = ½ × 8 × 5.<br><span class="final">= 20 cm²</span>`, ref:"KPC Year 8 Maths - Area, Surface Area & Nets", product:"year8-maths" }),
  M({ id:"y8-t8-s", topic:"Area, Surface Area & Nets", subtopic:"Area of a trapezium", syllabusReference:"Y8 WB: Area of a Trapezium (pp.258–259)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A trapezium has parallel sides of 6 cm and 10 cm, and a height of 4 cm. Work out its area. (Area = ½ × (a + b) × h.)", data:"Give your answer in cm².", accept:[32], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Forgetting the ½, or multiplying the two parallel sides together.",
    steps:`Area = ½ × (6 + 10) × 4 = ½ × 16 × 4.<br><span class="final">= 32 cm²</span>`, ref:"KPC Year 8 Maths - Area, Surface Area & Nets", product:"year8-maths" }),
  M({ id:"y8-t8-a", topic:"Area, Surface Area & Nets", subtopic:"Surface area of a cuboid", syllabusReference:"Y8 WB: Surface Area of Cube and Cuboids (pp.243–246)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:110,
    q:"A cuboid measures 5 cm by 3 cm by 2 cm. Work out its total surface area.", data:"Give your answer in cm².", accept:[62], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Working out the volume (30) instead of the surface area, or counting only three faces.",
    steps:`Opposite faces are equal: 2 × (5×3) + 2 × (5×2) + 2 × (3×2) = 2 × (15 + 10 + 6) = 2 × 31.<br><span class="final">= 62 cm²</span>`, ref:"KPC Year 8 Maths - Area, Surface Area & Nets", product:"year8-maths" }),
  M({ id:"y8-t8-u", topic:"Area, Surface Area & Nets", subtopic:"Reverse surface area of a cube", syllabusReference:"Y8 WB: Surface Area of Cube and Cuboids (pp.243–246)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"A cube has a total surface area of 96 cm². What is the length of one edge?", data:"Give your answer in cm.", accept:[4], acceptedUnits:["cm"], unit:"cm", tolerance:0,
    commonMisconception:"Stopping at 96 ÷ 6 = 16 without taking the square root.",
    steps:`A cube has 6 equal square faces, so one face = 96 ÷ 6 = 16 cm². Edge = √16.<br><span class="final">= 4 cm</span>`, ref:"KPC Year 8 Maths - Area, Surface Area & Nets", product:"year8-maths" }),

  /* ===== T9 Transformations (Geometry) ===== */
  M({ id:"y8-t9-f", topic:"Transformations", subtopic:"Reflection in the x-axis", syllabusReference:"Y8 WB: Reflections (pp.279–282)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"The point (3, 4) is reflected in the x-axis. What is the y-coordinate of the image?", data:"Give a number.", accept:[-4], tolerance:0,
    commonMisconception:"Changing the x-coordinate instead of the y-coordinate.",
    steps:`Reflecting in the x-axis keeps x and changes the sign of y: (3, 4) → (3, −4).<br><span class="final">y-coordinate = −4</span>`, ref:"KPC Year 8 Maths - Transformations", product:"year8-maths" }),
  M({ id:"y8-t9-s", topic:"Transformations", subtopic:"Translation", syllabusReference:"Y8 WB: Translations (pp.283–286)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"The point (5, 2) is translated 3 units left and 4 units up. What is the y-coordinate of the image?", data:"Give a number.", accept:[6], tolerance:0,
    commonMisconception:"Subtracting 4 (down) instead of adding 4 (up), or changing the wrong coordinate.",
    steps:`Up 4 means add 4 to the y-coordinate: 2 + 4. (The image is (2, 6).)<br><span class="final">y-coordinate = 6</span>`, ref:"KPC Year 8 Maths - Transformations", product:"year8-maths" }),
  M({ id:"y8-t9-a", topic:"Transformations", subtopic:"Rotation 90° anticlockwise", syllabusReference:"Y8 WB: Rotations (pp.287–292)", difficulty:"standard_exam", cognitiveSkill:"application", type:"mcq", marks:2, expectedTimeSeconds:90,
    q:"The point (4, 0) is rotated 90° anticlockwise about the origin. What are the coordinates of the image?",
    opts:["(0, 4)","(0, −4)","(−4, 0)","(4, 0)"], correct:0,
    commonMisconception:"Rotating the wrong way (clockwise) or confusing the axes.",
    steps:`A 90° anticlockwise turn about the origin sends the point on the positive x-axis up onto the positive y-axis: (4, 0) → (0, 4).<br><span class="final">Answer: (0, 4)</span>`, ref:"KPC Year 8 Maths - Transformations", product:"year8-maths" }),
  M({ id:"y8-t9-u", topic:"Transformations", subtopic:"Rotation 90° clockwise of a general point", syllabusReference:"Y8 WB: Rotations (pp.287–292)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"The point (1, 3) is rotated 90° clockwise about the origin. What is the y-coordinate of the image?", data:"Give a number.", accept:[-1], tolerance:0,
    commonMisconception:"Rotating anticlockwise instead of clockwise (which would give +1).",
    steps:`A 90° clockwise turn about the origin sends (x, y) → (y, −x). So (1, 3) → (3, −1).<br><span class="final">y-coordinate = −1</span>`, ref:"KPC Year 8 Maths - Transformations", product:"year8-maths" }),

  /* ===== T10 Statistics & Probability (Data) ===== */
  M({ id:"y8-t10-f", topic:"Statistics & Probability", subtopic:"Mode", syllabusReference:"Y8 WB: Mean, Median, Mode, Range (pp.293–298)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Find the mode of these numbers: 2, 4, 4, 4, 7, 9.", data:"Give a number.", accept:[4], tolerance:0,
    commonMisconception:"Confusing the mode (most common value) with the mean or median.",
    steps:`The mode is the value that appears most often. 4 appears three times.<br><span class="final">= 4</span>`, ref:"KPC Year 8 Maths - Statistics & Probability", product:"year8-maths" }),
  M({ id:"y8-t10-s", topic:"Statistics & Probability", subtopic:"Range", syllabusReference:"Y8 WB: Mean, Median, Mode, Range (pp.293–298)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Find the range of these values: 12, 5, 20, 8, 15.", data:"Give a number.", accept:[15], tolerance:0,
    commonMisconception:"Giving the largest value (20) instead of largest − smallest.",
    steps:`Range = largest − smallest = 20 − 5.<br><span class="final">= 15</span>`, ref:"KPC Year 8 Maths - Statistics & Probability", product:"year8-maths" }),
  M({ id:"y8-t10-a", topic:"Statistics & Probability", subtopic:"Single-event probability", syllabusReference:"Y8 WB: Probability (pp.314–318)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A bag holds 5 red, 3 blue and 2 green counters. What is the probability of picking a green counter at random? Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 2/10) or a decimal.", accept:[0.2], tolerance:0.001,
    commonMisconception:"Using 2/8 (green to the others) instead of 2/10 (green to the total).",
    steps:`Total counters = 5 + 3 + 2 = 10. P(green) = 2 ÷ 10.<br><span class="final">= 2/10 = 1/5 = 0.2</span>`, ref:"KPC Year 8 Maths - Statistics & Probability", product:"year8-maths" }),
  M({ id:"y8-t10-u", topic:"Statistics & Probability", subtopic:"Two independent events", syllabusReference:"Y8 WB: Two Independent Events (pp.322–323)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A fair coin is flipped and a fair six-sided dice is rolled. What is the probability of getting Heads AND a 6? Give your answer as a fraction or a decimal.", data:"Give a fraction (e.g. 1/12) or a decimal.", accept:[0.083333], tolerance:0.003,
    commonMisconception:"Adding the two probabilities (½ + 1/6) instead of multiplying them.",
    steps:`For independent events, multiply: P(Heads) × P(6) = 1/2 × 1/6 = 1/12.<br><span class="final">= 1/12 ≈ 0.083</span>`, ref:"KPC Year 8 Maths - Statistics & Probability", product:"year8-maths" }),
];

export const WHY = {
  "Indices, Powers, Primes & Multiples":"Revise index laws (including negative indices), prime factorisation, HCF and LCM.",
  "Fractions, Decimals & Percentages":"Practise fraction arithmetic, converting between forms, and percentage change (including reverse percentages).",
  "Ratio & Proportion":"Revise simplifying and sharing in a ratio, and direct and inverse proportion.",
  "Sequences & the nth Term":"Focus on continuing sequences, finding and using the nth-term rule, and working backwards from a term.",
  "Algebra":"Practise collecting like terms, expanding brackets, substitution, and solving equations with the unknown on both sides.",
  "Straight-Line Graphs":"Revise gradient, intercepts, and finding the equation of a line (including parallel lines).",
  "Circles & Angles":"Review circumference and area of circles, semicircle perimeters, and angle facts (including exterior angles).",
  "Area, Surface Area & Nets":"Practise area of triangles and trapezia, surface area of cuboids, and working back from a given area.",
  "Transformations":"Revise reflections, translations and rotations using coordinates.",
  "Statistics & Probability":"Review mean, median, mode and range, and probability (including combining independent events)."
};

/* -------- wire into the shared grading engine -------- */
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY, STRANDS, STRAND_WEIGHTS };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
