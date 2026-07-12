# Mathematics Examination-Demand Blueprint (SEC 23, 2026)

Derived from the SEC 23 (2026) syllabus (4 strands, 10 Foci, LO1–LO10) + 2021–2025 papers/schemes/reports. Demand described **abstractly**; no official wording/values/scenarios reproduced.

## Recommended 10-topic structure = the 10 syllabus Subject Foci

The syllabus explicitly names **10 Foci**, so the diagnostic aligns 1:1. This **reorganises** the current bank (which omitted three whole syllabus areas and merged Statistics with Probability):

| # | Topic (= Focus) | LO | Maps from current bank | Change |
|---|---|---|---|---|
| 1 | The Number System | LO1 | Number & Standard Form | retained |
| 2 | Numerical Calculations | LO2 | Fractions/Dec/%, Money & %, Ratio & Proportion | **3 merged → 1** |
| 3 | Fundamentals of Algebra | LO3 | Algebra, Equations & Sequences | **2 merged → 1** |
| 4 | Graphs | LO4 | — | **NEW (syllabus gap filled)** |
| 5 | Measurement | LO5 | Area, Perimeter & Volume | retained |
| 6 | Lines, Angles & Shapes | LO6 | Angles & Geometry, Pythagoras & Trig | **2 merged → 1** |
| 7 | Constructions & Loci | LO7 | — | **NEW (syllabus gap filled)** |
| 8 | Transformations | LO8 | — | **NEW (syllabus gap filled)** |
| 9 | Statistics | LO9 | (Statistics & Probability) | **split** |
| 10 | Probability | LO10 | (Statistics & Probability) | **split** |

**Why reorganise (evidence):** the current bank has **no Graphs, no Constructions/Loci, no Transformations** — three of the ten official Foci (LO4, LO7, LO8) were entirely unassessed. A syllabus-aligned diagnostic must cover them. Merging the over-split Number/Algebra topics keeps the total at 10.

## Strand weighting vs topic count (important for the exam estimate)

Exam strand weighting (standard Level 2-3 tier): **Number 20% · Algebra 35% · Shape/Space/Measures 30% · Data 15%.** Equal 4-per-topic gives Number 20% (2 topics), Algebra 20% (2), SSM 40% (4), Data 20% (2) — which **over-weights SSM and under-weights Algebra** relative to the real exam. → The **estimated examination score applies strand weighting** (see `08_SCORING_MODEL.md`) so it stays representative, while per-topic diagnosis stays equal and transparent. Documented design choice.

## Markability note (auto-grading constraint)
Two new topics are drawing-heavy in the real exam:
- **Constructions & Loci:** assessed here via **MCQ (identify the locus / construction step)** and **numeric (bearings, geometry)**. Actual compass-and-straightedge skill is **not** directly assessed — a documented limitation.
- **Transformations:** assessed via **coordinate numeric (image points, scale factor)** and **MCQ (describe the transformation)** — genuinely markable.
No free-text/symbolic-equivalence marking in the core (engine can't do it reliably) → answers are integers, decimals, exact fractions, or MCQ.

## Per-topic demand + 4-question plan
Legend **F/S/A/U** as in the rubric. Numeric answers must be markable by the upgraded parser (integers, negatives, decimals, fractions `a/b`, percentages, standard form).

### 1. The Number System — LO1
Misconceptions: place value in standard form; rounding 5-up; index laws. 
**F** (work): write an ordinary number from standard form. **S** (work): round to given dp/sf. **A** (work): ordering / HCF or LCM in a context. **U** (work): multiply two standard-form numbers → ordinary or standard form.

### 2. Numerical Calculations — LO2
Misconceptions: % of vs % change; ratio share; reverse %. 
**F** (work): percentage of an amount. **S** (work): share in a ratio. **A** (work): profit/loss or simple-interest word problem (€). **U** (work): compound depreciation/interest over 2–3 years.

### 3. Fundamentals of Algebra — LO3
Misconceptions: like terms; sign errors; nth term; inequality direction. 
**F** (work): substitute a value into an expression. **S** (work): solve a two-step linear equation (answer may be integer or **fraction/negative**). **A** (work): form-and-solve from a worded statement. **U** (work): nth term of a sequence, or simultaneous equations (one variable's value).

### 4. Graphs — LO4 *(new)*
Misconceptions: gradient sign; y-intercept; reading scales. 
**F** (work): read a coordinate/value off a given straight-line graph (diagram). **S** (work): gradient from two points. **A** (MCQ): match a real-life scenario to a graph shape / interpret a distance–time section. **U** (work): find y at a given x for y = mx + c after finding m and c (multi-step).

### 5. Measurement — LO5
Misconceptions: area vs perimeter; unit powers (cm² vs m²); circle area vs circumference. 
**F** (work): area of a rectangle. **S** (work): area of a triangle or circle (π given). **A** (work): volume of a solid in a context. **U** (work): composite/compound area or a unit conversion (cm²↔m²).

### 6. Lines, Angles & Shapes — LO6
Misconceptions: angle sum; exterior/interior; Pythagoras vs trig; which ratio. 
**F** (work): missing angle in a triangle / on a line. **S** (work): interior angle of a regular polygon. **A** (work): Pythagoras to find a side in a described figure. **U** (work): trigonometry (find an angle or side) or a circle-theorem angle.

### 7. Constructions & Loci — LO7 *(new; MCQ/numeric proxies)*
Misconceptions: locus definitions; bearings measured clockwise from north; construction purpose. 
**F** (MCQ): identify the locus equidistant from two points (perpendicular bisector) / from a point (circle). **S** (work): a bearing calculation (clockwise from north). **A** (MCQ): which construction produces a given result (applied). **U** (work): back-bearing or a two-stage bearing/loci numeric.

### 8. Transformations — LO8 *(new)*
Misconceptions: reflection axis sign; rotation direction/centre; enlargement scale factor. 
**F** (work): image coordinate after reflection in an axis. **S** (work): image coordinate after a translation vector. **A** (MCQ): describe a given transformation fully (applied recognition). **U** (work): enlargement — image coordinate or length given scale factor and centre.

### 9. Statistics — LO9
Misconceptions: mean vs median; missing-value-from-mean; reading frequency. 
**F** (work): mean of a small list. **S** (work): median (ordering first). **A** (work): find a missing value given the mean. **U** (work): mean from a frequency table (Σfx/Σf).

### 10. Probability — LO10
Misconceptions: probability scale 0–1; combined events; expected frequency. 
**F** (work): single-event probability as a fraction/decimal. **S** (work): probability of "not" an event / complementary. **A** (work): expected frequency = P × n. **U** (work): two independent events (multiply) or simple combined probability.

## Final 40-question composition
10 topics × (F + S + A + U) = **40**: 10 foundation, 20 standard_exam (10 application), 10 upper_exam. Type mix ≈ 34 `work` + 6 `mcq`, 0 free-text. Fraction/decimal/standard-form answers require the upgraded numeric parser. Estimated demand ≈ **40–45 minutes** of exam-equivalent work.
