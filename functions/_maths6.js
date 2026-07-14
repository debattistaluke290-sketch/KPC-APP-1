import { publicQuestions as pub, gradeAndReport as grade } from "./_grade.js";

/* =========================================================================
   KPC Diagnostic - YEAR 6 MATHEMATICS candidate bank (CALIBRATED, SERVER-SIDE).
   Maltese primary Year 6 (~age 10). There is NO MATSEC syllabus at this level;
   difficulty is calibrated to the KPC Year 6 Maths Workbook itself (Scholastic
   2026/7), expert-judged to be "representative of the year's work, and a bit
   harder". 10 topics = 10 workbook strands. 10×4 = 40.
   Composition per topic: 1 foundation, 2 standard_exam (1 application), 1 upper_exam.
   status:"candidate" - teacher-review + student-pilot pending (NOT empirically validated).
   All wording/values/contexts INDEPENDENTLY authored; no workbook text/numbers reproduced.
   Numeric answers use the shared parser (fractions a/b, decimals, negatives).
   Every answer independently recomputed + blind-solved + graded through the real engine.
   STRANDS/STRAND_WEIGHTS drive the strand-weighted "estimated" score (Number-heavy,
   reflecting the primary-maths content balance - no formal exam blueprint exists).
   ========================================================================= */
export const SUBJECT = "Year 6 Maths";

export const TOPIC_ORDER = [
  "Place Value & Rounding",
  "Addition & Subtraction",
  "Multiplication & Division",
  "Fractions",
  "Ratio & Proportion",
  "Measures: Length, Weight & Capacity",
  "Perimeter & Area",
  "Time & Calendar",
  "Shape & Angles",
  "Statistics & Averages"
];

// Content strand of each topic + content-share weightings (primary maths is number-heavy).
export const STRANDS = {
  "Place Value & Rounding":"Number", "Addition & Subtraction":"Number",
  "Multiplication & Division":"Number", "Fractions":"Number", "Ratio & Proportion":"Number",
  "Measures: Length, Weight & Capacity":"Measurement", "Perimeter & Area":"Measurement",
  "Time & Calendar":"Measurement",
  "Shape & Angles":"Geometry",
  "Statistics & Averages":"Data"
};
export const STRAND_WEIGHTS = { Number:0.50, Measurement:0.30, Geometry:0.10, Data:0.10 };

const M = (o) => ({ status:"candidate", version:1, originalityStatus:"independently_drafted",
  humanReviewStatus:"pending", pilotStatus:"not_piloted", marks:1, unit:"", ...o });

export const QUESTIONS = [
  /* ===== T1 Place Value & Rounding ===== */
  M({ id:"y6-t1-f", topic:"Place Value & Rounding", subtopic:"Value of a digit", syllabusReference:"Y6 WB: Place Value (pp.4–22)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"In the number 5,428, what is the value of the digit 4?", data:"Give a number.", accept:[400], tolerance:0,
    commonMisconception:"Giving the digit itself (4) instead of its place value.",
    steps:`In 5,428 the 4 is in the hundreds place, so its value is 4 × 100.<br><span class="final">= 400</span>`, ref:"KPC Year 6 Maths - Place Value & Rounding", product:"year6-maths" }),
  M({ id:"y6-t1-s", topic:"Place Value & Rounding", subtopic:"Rounding to the nearest hundred", syllabusReference:"Y6 WB: Rounding (pp.13–16)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Round 6,473 to the nearest hundred.", data:"Give a number.", accept:[6500], tolerance:0,
    commonMisconception:"Rounding down to 6,400 by looking at the hundreds digit instead of the tens digit.",
    steps:`Look at the tens digit: 7 (which is 5 or more), so round the hundreds up. 6,4|73 → 6,500.<br><span class="final">= 6,500</span>`, ref:"KPC Year 6 Maths - Place Value & Rounding", product:"year6-maths" }),
  M({ id:"y6-t1-a", topic:"Place Value & Rounding", subtopic:"Estimating by rounding", syllabusReference:"Y6 WB: Estimating (pp.13–16)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"Estimate 3,847 + 2,968 by first rounding each number to the nearest thousand.", data:"Give a number.", accept:[7000], tolerance:0,
    commonMisconception:"Working out the exact total instead of rounding first, or rounding to the wrong place.",
    steps:`3,847 rounds to 4,000 and 2,968 rounds to 3,000. Estimate = 4,000 + 3,000.<br><span class="final">= 7,000</span>`, ref:"KPC Year 6 Maths - Place Value & Rounding", product:"year6-maths" }),
  M({ id:"y6-t1-u", topic:"Place Value & Rounding", subtopic:"Inverse square reasoning", syllabusReference:"Y6 WB: Square & Cube Numbers (pp.20–22)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:130,
    q:"I think of a number. I square it, then subtract 11. My answer is 70. What number did I think of?", data:"Give a number.", accept:[9], tolerance:0,
    commonMisconception:"Stopping at 81 (the square) instead of taking the square root; or working forwards.",
    steps:`Undo the steps backwards. Add 11 back: 70 + 11 = 81. The number squared gives 81, so the number is √81.<br><span class="final">= 9</span>`, ref:"KPC Year 6 Maths - Place Value & Rounding", product:"year6-maths" }),

  /* ===== T2 Addition & Subtraction ===== */
  M({ id:"y6-t2-f", topic:"Addition & Subtraction", subtopic:"4-digit addition", syllabusReference:"Y6 WB: Adding Numbers (pp.23–27)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"Work out 2,640 + 1,375.", data:"Give a number.", accept:[4015], tolerance:0,
    commonMisconception:"Forgetting to carry when a column adds to 10 or more.",
    steps:`Add in columns, carrying where needed: 2,640 + 1,375.<br><span class="final">= 4,015</span>`, ref:"KPC Year 6 Maths - Addition & Subtraction", product:"year6-maths" }),
  M({ id:"y6-t2-s", topic:"Addition & Subtraction", subtopic:"4-digit subtraction with borrowing", syllabusReference:"Y6 WB: Subtracting Numbers (pp.28–32)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Work out 6,204 − 2,857.", data:"Give a number.", accept:[3347], tolerance:0,
    commonMisconception:"Subtracting the smaller digit from the larger in each column instead of borrowing.",
    steps:`Subtract in columns, borrowing across the zero: 6,204 − 2,857.<br><span class="final">= 3,347</span>`, ref:"KPC Year 6 Maths - Addition & Subtraction", product:"year6-maths" }),
  M({ id:"y6-t2-a", topic:"Addition & Subtraction", subtopic:"Money change (two purchases)", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"Ryan has €50. He buys a book for €18.75 and a pen for €3.60. How much money does he have left?", data:"Give your answer in euro.", accept:[27.65], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Subtracting only one item, or lining up the decimals incorrectly.",
    steps:`Total spent = 18.75 + 3.60 = €22.35. Change = 50 − 22.35.<br><span class="final">= €27.65</span>`, ref:"KPC Year 6 Maths - Addition & Subtraction", product:"year6-maths" }),
  M({ id:"y6-t2-u", topic:"Addition & Subtraction", subtopic:"Two-step money subtraction", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A shop's till holds €420.50. The shopkeeper pays out €135.80 and then pays out €67.45 more. How much money is left in the till?", data:"Give your answer in euro.", accept:[217.25], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Only subtracting one payment, or adding the two payments to the till instead of taking them away.",
    steps:`Total paid out = 135.80 + 67.45 = €203.25. Left = 420.50 − 203.25.<br><span class="final">= €217.25</span>`, ref:"KPC Year 6 Maths - Addition & Subtraction", product:"year6-maths" }),

  /* ===== T3 Multiplication & Division ===== */
  M({ id:"y6-t3-f", topic:"Multiplication & Division", subtopic:"2-digit × 1-digit", syllabusReference:"Y6 WB: Multiplying (pp.43–47)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"Work out 34 × 6.", data:"Give a number.", accept:[204], tolerance:0,
    commonMisconception:"Multiplying only the tens (30 × 6) and forgetting the ones.",
    steps:`34 × 6 = (30 × 6) + (4 × 6) = 180 + 24.<br><span class="final">= 204</span>`, ref:"KPC Year 6 Maths - Multiplication & Division", product:"year6-maths" }),
  M({ id:"y6-t3-s", topic:"Multiplication & Division", subtopic:"2-digit × 2-digit", syllabusReference:"Y6 WB: Multiplying by 2-digits (pp.48–51)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"Work out 38 × 24.", data:"Give a number.", accept:[912], tolerance:0,
    commonMisconception:"Forgetting to add a zero (place-holder) on the second row of long multiplication.",
    steps:`38 × 24 = (38 × 20) + (38 × 4) = 760 + 152.<br><span class="final">= 912</span>`, ref:"KPC Year 6 Maths - Multiplication & Division", product:"year6-maths" }),
  M({ id:"y6-t3-a", topic:"Multiplication & Division", subtopic:"Division with remainder in context", syllabusReference:"Y6 WB: Division (pp.56–59)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A baker puts 8 cupcakes in each box. She has 250 cupcakes. How many boxes can she fill completely?", data:"Give a whole number.", accept:[31], tolerance:0,
    commonMisconception:"Rounding up to 32 (a part-full box is not a full box), or giving 31.25.",
    steps:`250 ÷ 8 = 31 remainder 2. Only complete boxes count, so ignore the remainder.<br><span class="final">= 31 boxes</span>`, ref:"KPC Year 6 Maths - Multiplication & Division", product:"year6-maths" }),
  M({ id:"y6-t3-u", topic:"Multiplication & Division", subtopic:"4-digit ÷ 2-digit (long division)", syllabusReference:"Y6 WB: Long Division (pp.64–68)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"Work out 4,050 ÷ 18.", data:"Give a number.", accept:[225], tolerance:0,
    commonMisconception:"Losing a place value in the quotient (e.g. getting 25 or 205 instead of 225).",
    steps:`Long division: 40 ÷ 18 = 2 r4; bring down 5 → 45 ÷ 18 = 2 r9; bring down 0 → 90 ÷ 18 = 5. Quotient 225.<br><span class="final">= 225</span>`, ref:"KPC Year 6 Maths - Multiplication & Division", product:"year6-maths" }),

  /* ===== T4 Fractions ===== */
  M({ id:"y6-t4-f", topic:"Fractions", subtopic:"Fraction of a quantity", syllabusReference:"Y6 WB: Fractions of a Quantity (pp.75–77)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"Work out 3/4 of 32.", data:"Give a number.", accept:[24], tolerance:0,
    commonMisconception:"Dividing by 3 or multiplying by 4 instead of ÷4 then ×3.",
    steps:`Divide by the denominator, then multiply by the numerator: 32 ÷ 4 = 8, then 8 × 3.<br><span class="final">= 24</span>`, ref:"KPC Year 6 Maths - Fractions", product:"year6-maths" }),
  M({ id:"y6-t4-s", topic:"Fractions", subtopic:"Fraction of a quantity (find the rest)", syllabusReference:"Y6 WB: Fractions of a Quantity (pp.75–77)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"In a class of 30 pupils, 3/5 of them walk to school. How many pupils do NOT walk to school?", data:"Give a number.", accept:[12], tolerance:0,
    commonMisconception:"Giving the number who DO walk (18) instead of the number who do not.",
    steps:`Walkers = 3/5 of 30 = 18. Not walking = 30 − 18.<br><span class="final">= 12 pupils</span>`, ref:"KPC Year 6 Maths - Fractions", product:"year6-maths" }),
  M({ id:"y6-t4-a", topic:"Fractions", subtopic:"Fraction to decimal", syllabusReference:"Y6 WB: Fractions & Decimals (pp.96–99)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Write 7/8 as a decimal.", data:"Give a decimal.", accept:[0.875], tolerance:0.0005,
    commonMisconception:"Dividing the wrong way (8 ÷ 7) or guessing 0.78.",
    steps:`A fraction means numerator ÷ denominator: 7 ÷ 8.<br><span class="final">= 0.875</span>`, ref:"KPC Year 6 Maths - Fractions", product:"year6-maths" }),
  M({ id:"y6-t4-u", topic:"Fractions", subtopic:"Ordering unlike fractions", syllabusReference:"Y6 WB: Ordering Fractions (pp.88–91)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"mcq", marks:3, expectedTimeSeconds:160,
    q:"Put these four fractions in order from SMALLEST to largest: 3/5, 2/3, 5/6, 7/10.",
    opts:["3/5, 2/3, 7/10, 5/6","3/5, 7/10, 2/3, 5/6","5/6, 7/10, 2/3, 3/5","2/3, 3/5, 7/10, 5/6"], correct:0,
    commonMisconception:"Ordering by the size of the numbers in the fractions instead of their actual value.",
    steps:`As decimals: 3/5 = 0.6, 2/3 ≈ 0.67, 7/10 = 0.7, 5/6 ≈ 0.83. Smallest → largest: 3/5, 2/3, 7/10, 5/6.<br><span class="final">Answer: 3/5, 2/3, 7/10, 5/6</span>`, ref:"KPC Year 6 Maths - Fractions", product:"year6-maths" }),

  /* ===== T5 Ratio & Proportion ===== */
  M({ id:"y6-t5-f", topic:"Ratio & Proportion", subtopic:"Simplifying a ratio", syllabusReference:"Y6 WB: Ratios (pp.100–102)", difficulty:"foundation", cognitiveSkill:"understanding", type:"mcq", marks:1, expectedTimeSeconds:50,
    q:"Written in its simplest form, the ratio 6 : 9 is…",
    opts:["2 : 3","3 : 2","6 : 9","1 : 3"], correct:0,
    commonMisconception:"Not dividing both parts by the same number, or swapping the order.",
    steps:`Divide both parts by their highest common factor, 3: 6 ÷ 3 = 2 and 9 ÷ 3 = 3.<br><span class="final">= 2 : 3</span>`, ref:"KPC Year 6 Maths - Ratio & Proportion", product:"year6-maths" }),
  M({ id:"y6-t5-s", topic:"Ratio & Proportion", subtopic:"Sharing in a ratio", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"€40 is shared between two children in the ratio 3 : 5. How much does the child with the SMALLER share receive?", data:"Give your answer in euro.", accept:[15], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0,
    commonMisconception:"Dividing by 3 or 5 instead of by the total number of parts (8), or giving the larger share.",
    steps:`Total parts = 3 + 5 = 8, so one part = 40 ÷ 8 = €5. Smaller share = 3 × 5.<br><span class="final">= €15</span>`, ref:"KPC Year 6 Maths - Ratio & Proportion", product:"year6-maths" }),
  M({ id:"y6-t5-a", topic:"Ratio & Proportion", subtopic:"Unitary proportion", syllabusReference:"Y6 WB: Proportion (pp.103–106)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"5 identical pens cost €4.50. How much do 8 of the same pens cost?", data:"Give your answer in euro.", accept:[7.20], acceptedUnits:["€","EUR","euro"], unit:"€", tolerance:0.005,
    commonMisconception:"Adding €3 for '3 more pens', instead of finding the cost of one pen first.",
    steps:`One pen = 4.50 ÷ 5 = €0.90. Eight pens = 0.90 × 8.<br><span class="final">= €7.20</span>`, ref:"KPC Year 6 Maths - Ratio & Proportion", product:"year6-maths" }),
  M({ id:"y6-t5-u", topic:"Ratio & Proportion", subtopic:"Finding the whole from one part", syllabusReference:"Y6 WB: Proportion (pp.103–106)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"In a car park the ratio of red cars to blue cars is 2 : 7. There are 14 red cars. How many cars are there altogether?", data:"Give a number.", accept:[63], tolerance:0,
    commonMisconception:"Giving only the number of blue cars (49) instead of the total.",
    steps:`2 parts = 14 red, so 1 part = 7 cars. Blue = 7 × 7 = 49. Total = 14 + 49.<br><span class="final">= 63 cars</span>`, ref:"KPC Year 6 Maths - Ratio & Proportion", product:"year6-maths" }),

  /* ===== T6 Measures: Length, Weight & Capacity ===== */
  M({ id:"y6-t6-f", topic:"Measures: Length, Weight & Capacity", subtopic:"Metres to centimetres", syllabusReference:"Y6 WB: Length (pp.107–111)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"How many centimetres are there in 3.5 metres?", data:"Give your answer in centimetres.", accept:[350], acceptedUnits:["cm"], unit:"cm", tolerance:0,
    commonMisconception:"Multiplying by 10 instead of 100, giving 35.",
    steps:`1 metre = 100 cm, so multiply by 100: 3.5 × 100.<br><span class="final">= 350 cm</span>`, ref:"KPC Year 6 Maths - Measures: Length, Weight & Capacity", product:"year6-maths" }),
  M({ id:"y6-t6-s", topic:"Measures: Length, Weight & Capacity", subtopic:"Subtracting lengths (mixed units)", syllabusReference:"Y6 WB: Length (pp.107–111)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A ribbon is 2 metres long. Sara cuts off 65 cm. How many centimetres of ribbon are left?", data:"Give your answer in centimetres.", accept:[135], acceptedUnits:["cm"], unit:"cm", tolerance:0,
    commonMisconception:"Not converting the 2 m to 200 cm before subtracting.",
    steps:`2 m = 200 cm. Left = 200 − 65.<br><span class="final">= 135 cm</span>`, ref:"KPC Year 6 Maths - Measures: Length, Weight & Capacity", product:"year6-maths" }),
  M({ id:"y6-t6-a", topic:"Measures: Length, Weight & Capacity", subtopic:"Total weight", syllabusReference:"Y6 WB: Weight (pp.112–116)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"6 identical tins each weigh 450 g. What is their total weight in grams?", data:"Give your answer in grams.", accept:[2700], acceptedUnits:["g","grams"], unit:"g", tolerance:0,
    commonMisconception:"Adding instead of multiplying, or a place-value slip in 450 × 6.",
    steps:`Total = 450 × 6.<br><span class="final">= 2,700 g</span>`, ref:"KPC Year 6 Maths - Measures: Length, Weight & Capacity", product:"year6-maths" }),
  M({ id:"y6-t6-u", topic:"Measures: Length, Weight & Capacity", subtopic:"Multi-step unit conversion", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"A shelf is 1 metre 80 centimetres wide. Each book is 30 mm thick. How many books fit side by side on the shelf?", data:"Give a number.", accept:[60], tolerance:0,
    commonMisconception:"Not converting everything to the same unit before dividing (e.g. doing 180 ÷ 30 = 6).",
    steps:`1 m 80 cm = 180 cm = 1,800 mm. Number of books = 1,800 ÷ 30.<br><span class="final">= 60 books</span>`, ref:"KPC Year 6 Maths - Measures: Length, Weight & Capacity", product:"year6-maths" }),

  /* ===== T7 Perimeter & Area ===== */
  M({ id:"y6-t7-f", topic:"Perimeter & Area", subtopic:"Area of a rectangle", syllabusReference:"Y6 WB: Area (pp.126–129)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:45,
    q:"A rectangle is 7 cm long and 5 cm wide. What is its area?", data:"Give your answer in cm².", accept:[35], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Adding the sides (perimeter) instead of multiplying (area).",
    steps:`Area = length × width = 7 × 5.<br><span class="final">= 35 cm²</span>`, ref:"KPC Year 6 Maths - Perimeter & Area", product:"year6-maths" }),
  M({ id:"y6-t7-s", topic:"Perimeter & Area", subtopic:"Area of a right-angled triangle", syllabusReference:"Y6 WB: Area of a Right-Angled Triangle (pp.130–132)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"A right-angled triangle has a base of 10 cm and a height of 6 cm. What is its area?", data:"Give your answer in cm².", accept:[30], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Forgetting the ½ and giving 60.",
    steps:`Area = ½ × base × height = ½ × 10 × 6.<br><span class="final">= 30 cm²</span>`, ref:"KPC Year 6 Maths - Perimeter & Area", product:"year6-maths" }),
  M({ id:"y6-t7-a", topic:"Perimeter & Area", subtopic:"Area left over (compound)", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:100,
    q:"A rectangular garden is 8 m long and 5 m wide. A square flower bed of side 2 m is dug into one corner. What area of the garden is left as grass?", data:"Give your answer in m².", accept:[36], acceptedUnits:["m^2","m2"], unit:"m²", tolerance:0,
    commonMisconception:"Subtracting the side (2) rather than the flower-bed's area (4), or subtracting a length from an area.",
    steps:`Garden area = 8 × 5 = 40 m². Flower bed = 2 × 2 = 4 m². Grass = 40 − 4.<br><span class="final">= 36 m²</span>`, ref:"KPC Year 6 Maths - Perimeter & Area", product:"year6-maths" }),
  M({ id:"y6-t7-u", topic:"Perimeter & Area", subtopic:"Perimeter → side → area (inverse)", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A square has a perimeter of 32 cm. What is its area?", data:"Give your answer in cm².", accept:[64], acceptedUnits:["cm^2","cm2"], unit:"cm²", tolerance:0,
    commonMisconception:"Using 32 as the side length, or confusing perimeter with area.",
    steps:`A square has 4 equal sides, so side = 32 ÷ 4 = 8 cm. Area = 8 × 8.<br><span class="final">= 64 cm²</span>`, ref:"KPC Year 6 Maths - Perimeter & Area", product:"year6-maths" }),

  /* ===== T8 Time & Calendar ===== */
  M({ id:"y6-t8-f", topic:"Time & Calendar", subtopic:"Hours and minutes to minutes", syllabusReference:"Y6 WB: Time (pp.137–142)", difficulty:"foundation", cognitiveSkill:"understanding", type:"work", marks:1, expectedTimeSeconds:45,
    q:"How many minutes are there in 2 hours and 15 minutes?", data:"Give your answer in minutes.", accept:[135], acceptedUnits:["min","minutes"], unit:"min", tolerance:0,
    commonMisconception:"Writing 215, or using 100 minutes in an hour.",
    steps:`2 hours = 120 minutes, plus 15 minutes = 120 + 15.<br><span class="final">= 135 minutes</span>`, ref:"KPC Year 6 Maths - Time & Calendar", product:"year6-maths" }),
  M({ id:"y6-t8-s", topic:"Time & Calendar", subtopic:"Elapsed time (minutes)", syllabusReference:"Y6 WB: Time (pp.137–142)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A film starts at 3:20 pm and ends at 5:05 pm. How long is the film, in minutes?", data:"Give your answer in minutes.", accept:[105], acceptedUnits:["min","minutes"], unit:"min", tolerance:0,
    commonMisconception:"Subtracting the digits (5:05 − 3:20) as if minutes go up to 100.",
    steps:`3:20 → 5:20 is 2 hours, but we only need to 5:05, which is 15 min less: 120 − 15 = 105. (Or 3:20→4:20→5:05 = 60 + 45.)<br><span class="final">= 105 minutes</span>`, ref:"KPC Year 6 Maths - Time & Calendar", product:"year6-maths" }),
  M({ id:"y6-t8-a", topic:"Time & Calendar", subtopic:"Calendar reasoning", syllabusReference:"Y6 WB: Calendar (pp.133–136)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"A school trip is on the 28th of March. Pupils must pay a deposit exactly 3 weeks before the trip. On what date in March is the deposit due?", data:"Give the day of the month (a number).", accept:[7], tolerance:0,
    commonMisconception:"Subtracting 3 days instead of 3 weeks (21 days).",
    steps:`3 weeks = 21 days. 28 − 21 = 7, so the deposit is due on 7 March.<br><span class="final">= the 7th</span>`, ref:"KPC Year 6 Maths - Time & Calendar", product:"year6-maths" }),
  M({ id:"y6-t8-u", topic:"Time & Calendar", subtopic:"Elapsed time across noon", syllabusReference:"Y6 WB: Problems (pp.196–218)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"A coach journey begins at 10:50 am and ends at 1:25 pm on the same day. How long does the journey take, in minutes?", data:"Give your answer in minutes.", accept:[155], acceptedUnits:["min","minutes"], unit:"min", tolerance:0,
    commonMisconception:"Not carrying the time correctly past 12 noon (e.g. treating 1:25 as earlier than 10:50).",
    steps:`10:50 am → 12:50 pm is 2 hours (120 min). 12:50 → 1:25 is 35 min more. Total = 120 + 35.<br><span class="final">= 155 minutes</span>`, ref:"KPC Year 6 Maths - Time & Calendar", product:"year6-maths" }),

  /* ===== T9 Shape & Angles ===== */
  M({ id:"y6-t9-f", topic:"Shape & Angles", subtopic:"Angles in a triangle", syllabusReference:"Y6 WB: Angles in a Triangle (pp.166–168)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"Two angles of a triangle are 40° and 75°. What is the size of the third angle?", data:"Give your answer in degrees.", accept:[65], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Using 360° instead of 180° for the angles in a triangle.",
    steps:`Angles in a triangle add to 180°. Third angle = 180 − 40 − 75.<br><span class="final">= 65°</span>`, ref:"KPC Year 6 Maths - Shape & Angles", product:"year6-maths" }),
  M({ id:"y6-t9-s", topic:"Shape & Angles", subtopic:"Vertically opposite angles", syllabusReference:"Y6 WB: Vertically Opposite Angles (pp.163–165)", difficulty:"standard_exam", cognitiveSkill:"understanding", type:"work", marks:2, expectedTimeSeconds:70,
    q:"Two straight lines cross each other. One of the angles formed is 110°. What is the size of the angle vertically opposite to it?", data:"Give your answer in degrees.", accept:[110], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Thinking vertically opposite angles add to 180° (giving 70°) instead of being equal.",
    steps:`Vertically opposite angles are equal, so the opposite angle is also 110°.<br><span class="final">= 110°</span>`, ref:"KPC Year 6 Maths - Shape & Angles", product:"year6-maths" }),
  M({ id:"y6-t9-a", topic:"Shape & Angles", subtopic:"Isosceles triangle angles", syllabusReference:"Y6 WB: Triangles (pp.149–151)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:90,
    q:"An isosceles triangle has a top angle of 40°. The other two angles are equal. What is the size of each of these two equal angles?", data:"Give your answer in degrees.", accept:[70], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Forgetting to share the remaining angle between the two equal angles (giving 140°).",
    steps:`The two equal angles share what is left: 180 − 40 = 140°, then 140 ÷ 2.<br><span class="final">= 70°</span>`, ref:"KPC Year 6 Maths - Shape & Angles", product:"year6-maths" }),
  M({ id:"y6-t9-u", topic:"Shape & Angles", subtopic:"Missing angle from a ratio/relationship", syllabusReference:"Y6 WB: Finding the Missing Angles (pp.169–171)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:160,
    q:"In a triangle, the second angle is twice the size of the first angle, and the third angle is 30°. What is the size of the first angle?", data:"Give your answer in degrees.", accept:[50], acceptedUnits:["°","deg","degrees"], unit:"°", tolerance:0,
    commonMisconception:"Answering 30° (the given third angle), or not accounting for the '2 lots' of the first angle when sharing out 150°.",
    steps:`First = x, second = 2x, third = 30. So x + 2x + 30 = 180 → 3x = 150 → x = 50.<br><span class="final">= 50°</span>`, ref:"KPC Year 6 Maths - Shape & Angles", product:"year6-maths" }),

  /* ===== T10 Statistics & Averages ===== */
  M({ id:"y6-t10-f", topic:"Statistics & Averages", subtopic:"Mean of a small set", syllabusReference:"Y6 WB: Average (Mean) (pp.191–193)", difficulty:"foundation", cognitiveSkill:"application", type:"work", marks:1, expectedTimeSeconds:50,
    q:"Find the mean (average) of 4, 8 and 9.", data:"Give a number.", accept:[7], tolerance:0,
    commonMisconception:"Adding the numbers but forgetting to divide by how many there are.",
    steps:`Mean = total ÷ how many = (4 + 8 + 9) ÷ 3 = 21 ÷ 3.<br><span class="final">= 7</span>`, ref:"KPC Year 6 Maths - Statistics & Averages", product:"year6-maths" }),
  M({ id:"y6-t10-s", topic:"Statistics & Averages", subtopic:"Median", syllabusReference:"Y6 WB: Average (Mean) (pp.191–193)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"Find the median of these numbers: 12, 5, 9, 3, 8. (Put them in order first.)", data:"Give a number.", accept:[8], tolerance:0,
    commonMisconception:"Taking the middle of the list without ordering it first (giving 9).",
    steps:`In order: 3, 5, 8, 9, 12. The middle value is 8.<br><span class="final">= 8</span>`, ref:"KPC Year 6 Maths - Statistics & Averages", product:"year6-maths" }),
  M({ id:"y6-t10-a", topic:"Statistics & Averages", subtopic:"Reading a bar chart", syllabusReference:"Y6 WB: Graphs (pp.185–190)", difficulty:"standard_exam", cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:70,
    q:"A bar chart shows that 12 pupils like football, 8 like tennis and 5 like swimming. How many MORE pupils like football than swimming?", data:"Give a number.", accept:[7], tolerance:0,
    commonMisconception:"Comparing football with tennis, or adding the two bars instead of subtracting.",
    steps:`Difference = football − swimming = 12 − 5.<br><span class="final">= 7 pupils</span>`, ref:"KPC Year 6 Maths - Statistics & Averages", product:"year6-maths" }),
  M({ id:"y6-t10-u", topic:"Statistics & Averages", subtopic:"Reverse mean (missing value)", syllabusReference:"Y6 WB: Average (Mean) (pp.191–193)", difficulty:"upper_exam", cognitiveSkill:"analysis", type:"work", marks:3, expectedTimeSeconds:150,
    q:"The mean of four numbers is 9. Three of the numbers are 6, 8 and 10. What is the fourth number?", data:"Give a number.", accept:[12], tolerance:0,
    commonMisconception:"Averaging the three known numbers (giving 8) instead of using the total.",
    steps:`Total of all four = mean × how many = 9 × 4 = 36. The three known add to 6 + 8 + 10 = 24. Fourth = 36 − 24.<br><span class="final">= 12</span>`, ref:"KPC Year 6 Maths - Statistics & Averages", product:"year6-maths" }),
];

export const WHY = {
  "Place Value & Rounding":"Revise the value of digits, rounding to the nearest 10/100/1000 and to decimal places, and estimating.",
  "Addition & Subtraction":"Practise column addition and subtraction (including borrowing across zeros) and money problems.",
  "Multiplication & Division":"Revise short and long multiplication, division with remainders, and 4-digit ÷ 2-digit long division.",
  "Fractions":"Focus on fractions of a quantity, simplifying, comparing/ordering unlike fractions, and fraction–decimal links.",
  "Ratio & Proportion":"Practise simplifying ratios, sharing in a ratio, and unitary-method proportion problems.",
  "Measures: Length, Weight & Capacity":"Review converting between units (km/m/cm/mm, kg/g, L/ml) and multi-step measure problems.",
  "Perimeter & Area":"Revise area of rectangles and right-angled triangles, compound shapes, and working back from a perimeter.",
  "Time & Calendar":"Practise time conversions, elapsed time (including across noon), timetables and calendar reasoning.",
  "Shape & Angles":"Review angle facts - triangles, isosceles, vertically-opposite and missing angles.",
  "Statistics & Averages":"Practise the mean and median, reading charts and graphs, and working backwards from a given mean."
};

/* -------- wire into the shared grading engine -------- */
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY, STRANDS, STRAND_WEIGHTS };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
