# Maths & Physics Calibration — Summary

One-page index of the calibration work. Full detail in the per-stage files.

## Outcome
Both subjects rebuilt to **40 syllabus-aligned questions** (10 topics × 4: 1 foundation / 2 standard_exam / 1 upper_exam), independently solved (40/40 confidence 5 each) and adversarially reviewed, on a backward-compatible engine with dual scoring and a fairer numeric parser. **Candidate = safe for teacher review + pilot; not production-ready** (no empirical facility data).

## Topic structures
- **Physics (10):** Motion & Forces · Forces, Moments & Pressure · Energy, Work & Power · Thermal Physics · Waves & Sound · **Light & Optics (new)** · Electricity & Circuits · Magnetism & Electromagnetism · Radioactivity · Earth & Space.
- **Maths (10 = syllabus Foci):** Number System · Numerical Calculations · Fundamentals of Algebra · **Graphs (new)** · Measurement · Lines, Angles & Shapes · **Constructions & Loci (new)** · **Transformations (new)** · Statistics · Probability.

## What changed in the engine
Fraction/scientific/negative parsing (fixes `3/8`→38 bug) · per-question tolerance + marks · **raw / estimated-exam / secure-readiness** scores · cautious topic language · Essential/Recommended/Optional/Not-needed recommendation tiers · strand-weighted exam estimate (Maths) · validation module. Biology/Chemistry unchanged (defaults).

## Document map
| File | Purpose |
|---|---|
| `00_REFERENCE_MATERIAL_INVENTORY.md` | official reference set (private) |
| `01_REFERENCE_VALIDATION_ADDENDUM.md` | what was used + limitations |
| `02_CURRENT_MATHS_PHYSICS_SYSTEM_AUDIT.md` | pre-calibration system audit |
| `03_MATHS_PHYSICS_DIFFICULTY_RUBRIC.md` | difficulty categories |
| `08_SCORING_MODEL.md` / `09_IMPLEMENTATION_PLAN.md` | scoring + build plan |
| `physics/` & `maths/` `01…07` | blueprint, existing audit, proposed bank, originality, blind-solve, adversarial, final validation (per subject) |
| root `CHANGE_REPORT / SCORING_FORMULA / QUESTION_EDITING_GUIDE / DEPLOYMENT_CHECKLIST / REGRESSION_TEST_REPORT` | operational docs |
| `MORNING_REVIEW.md` | **read first** |

## Honesty statement
Difficulty labels are **expert judgement, not empirical**. Four questions per topic is a limited sample; topic labels are worded cautiously and raw correct/total stays visible. No question is claimed "perfect". Teacher review + student pilot are required before treating any of this as validated.

## Key limitations to resolve next
1. No pilot/facility data (biggest).
2. Physics has no new-format (2025) marking scheme (mark allocations inferred).
3. Maths Constructions & Loci assessed via proxies, not drawing.
4. Pre-existing app issues (email promise, generic product links) are out of scope here — see the app audit.
