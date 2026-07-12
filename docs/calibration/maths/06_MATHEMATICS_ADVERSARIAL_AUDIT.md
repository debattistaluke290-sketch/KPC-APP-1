# Mathematics Adversarial Audit

Second pass attempting to reject each question. General checks as in the physics audit, plus Maths-specific: fractions, exact forms, rounding boundaries, alternative valid approaches, negatives, equivalent decimals, standard form.

## Findings & resolutions
- **Fractions / exact forms:** mat-t3-s (0.75), mat-t10-f (0.375), mat-t10-u (1/12) all accept the decimal **and**, via the upgraded parser, the exact fraction (`3/4`, `3/8`, `1/12`). Verified the parser plan handles these; tolerance on t10-u widened to 0.005 so both `1/12` (0.0833…) and a 2-dp `0.08` are fair. ✓
- **Rounding boundaries:** t1-s (27.348→27.35) tolerance 0.001 rejects 27.34 (truncation) but accepts 27.35. t5-u (314) tol 0.5 accepts 314 but not 315/324. t9-u (5.6) tol 0.05. ✓
- **Negatives:** t4-f (−2), t8-f (−5) require the parser to accept a leading minus — verified in the parser plan and tests. ✓
- **Alternative valid approaches:** t2-u compound depreciation — a student using ×0.8² directly gets 9600 (same); accepted. t6-u trig — sin only; a teacher may note cos/tan give different (wrong) values, so single answer holds. ✓
- **Ambiguity / missing data:** each geometry/bearing item fully specifies the situation in words (no diagram dependence for the new topics). t7 bearings state "three-figure bearing", "clockwise". t8 transformations name the axis/centre/vector explicitly. ✓
- **MCQ distractors:** t4-a, t7-f, t7-a, t8-a distractors each encode a real misconception; single defensible answer confirmed (e.g. t8-a: only (0,4) is the correct 90° ACW image of (4,0)). ✓
- **Reading load:** worded problems (t2, t3-a, t9-a) kept short and in plain English (Maltese € context where natural), so difficulty is mathematical not linguistic. ✓
- **Auto-grading:** 34 `work` clean numerics (incl. fractions/negatives/standard form), 6 `mcq`. No symbolic-equivalence marking required. ✓
- **Similarity to official material:** contexts/values independently chosen; no official wording/scenario reused. ✓

## Residual notes (teacher review)
- **Constructions & Loci (T7):** as documented, the four items assess *knowledge about* loci/bearings, not compass-and-straightedge skill. A teacher should confirm this proxy is acceptable for the diagnostic, or add an SBA-style practical note.
- **mat-t10-u** two-independent-events at "upper" — confirm the 1/12 answer's tolerance feels fair for students giving 0.08 vs 0.083.

**Verdict:** 40/40 survive; 0 require revision. T7 flagged as a *documented scope limitation* (not a defect); 1 tolerance flagged for teacher confirmation.
