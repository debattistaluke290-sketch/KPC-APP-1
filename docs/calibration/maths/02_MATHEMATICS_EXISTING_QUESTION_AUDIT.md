# Mathematics Existing-Question Audit (current `functions/_maths.js`)

40 questions, 10 topics. Every answer **independently recomputed** — all arithmetically correct. The bank is sound content-wise but **not syllabus-foci-aligned**: it omits Graphs, Constructions/Loci, Transformations, over-splits Number (3 topics) and Algebra (2 topics), and merges Statistics with Probability. Reorganisation into the 10 Foci needs ~18 new questions and demotes ~8 good current questions to "surplus" (retained as optional/stretch, not deleted).

Action codes as before. "Surplus" = correct question with no slot in the new 10×4 structure → moved to an optional pool, **not removed from history**.

## Per-question verdicts → new topic

| # | Current topic | Ans ✓ | New topic | Action |
|--:|---|:--:|---|---|
|1|Number&SF|19 ✓|T1 Number System|REVISE_MINOR (order of ops → could be T1) |
|2|Number&SF|32000 ✓|T1|KEEP→REVISE_MINOR (std form) |
|3|Number&SF|3.9 ✓|T1|REVISE_MINOR (rounding) |
|4|Number&SF|1000000 ✓|T1|REVISE_MINOR (std form ×) → T1-U |
|5|Fractions/Dec/%|0.25 ✓|T2 Numerical Calc|REVISE_MINOR |
|6|Fractions/Dec/%|20 ✓|T2|KEEP (25% of 80) → T2-F |
|7|Fractions/Dec/%|120 ✓|T2 or surplus|SURPLUS (3/5 of 200) |
|8|Fractions/Dec/%|69 ✓|T2|REVISE_MINOR (increase 15%) |
|9|Money&%|36 ✓|T2|SURPLUS/KEEP (sale price) |
|10|Money&%|25 ✓|T2|REVISE_MINOR (% profit) → T2-A |
|11|Money&%|60 ✓|T2 surplus|SURPLUS (simple interest) |
|12|Money&%|9720 ✓|T2|REVISE_MINOR (compound deprec.) → T2-U |
|13|Ratio&Prop|30 ✓|T2|REVISE_MINOR (ratio share) → T2-S |
|14|Ratio&Prop|300 ✓|T2 surplus|SURPLUS (recipe) |
|15|Ratio&Prop|15 ✓|T2 surplus|SURPLUS (unit cost) |
|16|Ratio&Prop|20 ✓|T2 surplus|SURPLUS (inverse prop) |
|17|Algebra|17 ✓|T3 Algebra|REVISE_MINOR (substitute) → T3-F |
|18|Algebra|(x+2)(x+3) ✓|T3|REVISE_MINOR (factorise MCQ) |
|19|Algebra|4 ✓|T3|REVISE_MINOR (solve linear) → T3-S |
|20|Algebra|-3 ✓|T3|REVISE_MINOR (quadratic root) |
|21|Equations&Seq|19 ✓|T3 surplus|SURPLUS (sequence next term) |
|22|Equations&Seq|39 ✓|T3|REVISE_MINOR (nth term) → T3-U |
|23|Equations&Seq|7 ✓|T3|REVISE_MINOR (simultaneous) → T3-A |
|24|Equations&Seq|27 ✓|T3 surplus|SURPLUS (n²+2) |
|25|Area/Perim/Vol|40 ✓|T5 Measurement|REVISE_MINOR → T5-F |
|26|Area/Perim/Vol|30 ✓|T5|REVISE_MINOR (triangle) → T5-S |
|27|Area/Perim/Vol|64 ✓|T5|REVISE_MINOR (cube vol) → T5-A |
|28|Area/Perim/Vol|154 ✓|T5|REVISE_MINOR (circle area) → T5-U |
|29|Pythagoras/Trig|5 ✓|T6 Lines/Angles/Shapes|REVISE_MINOR |
|30|Pythagoras/Trig|12 ✓|T6|REVISE_MINOR (Pythagoras) → T6-A |
|31|Pythagoras/Trig|30 ✓|T6|REVISE_MINOR (trig) → T6-U |
|32|Pythagoras/Trig|8 ✓|T6 surplus|SURPLUS (ladder) |
|33|Angles&Geometry|70 ✓|T6|REVISE_MINOR (triangle angle) → T6-F |
|34|Angles&Geometry|65 ✓|T6 surplus|SURPLUS (angles on line) |
|35|Angles&Geometry|90 ✓|T6|REVISE_MINOR (semicircle) → T6-S |
|36|Angles&Geometry|120 ✓|T6 surplus|SURPLUS (hexagon interior) |
|37|Statistics&Prob|7 ✓|T9 Statistics|REVISE_MINOR (mean) → T9-F |
|38|Statistics&Prob|5 ✓|T9|REVISE_MINOR (median) → T9-S |
|39|Statistics&Prob|0.375 ✓|T10 Probability|REVISE_MAJOR (fraction-parse risk — see below) → T10-F |
|40|Statistics&Prob|11 ✓|T9|REVISE_MINOR (missing value from mean) → T9-A |

## New questions required (no current source)
- **T4 Graphs** ×4 (coordinates, gradient, real-life graph, y=mx+c).
- **T7 Constructions & Loci** ×4 (locus MCQ, bearing, construction MCQ, back-bearing).
- **T8 Transformations** ×4 (reflection, translation, describe MCQ, enlargement).
- **T9 Statistics** +1 (need 4; have 3 → add mean-from-frequency-table for U).
- **T10 Probability** +3 (have 1 → add "not" event, expected frequency, two independent events).
Total new ≈ **18**.

## Key defect flagged
- **Q39 (probability 0.375):** with the current engine, a student typing the exact-correct fraction **`3/8` is mis-marked wrong** (parser → 38). The upgraded parser fixes this; candidate T10-F will accept `0.375` **and** `3/8` and `375/1000`-type equivalents.

## Topic-set analysis
- **Coverage:** current bank misses 3 of 10 syllabus Foci — the largest defect. Fixed by the new structure.
- **Over-numeric:** 38/40 `work`, only 2 MCQ. New structure adds MCQ where it improves markability (graph-matching, describe-transformation, locus).
- **Redundancy:** three separate Number topics test overlapping % skills; consolidated into T2 with the strongest four.
- **Fragile marking:** the fraction question (fixed) and any exact-value answer — the parser upgrade addresses these.
- **Surplus (8 sound questions):** retained in an optional pool (`stretch`/extra), not deleted — preserves good content and history.
