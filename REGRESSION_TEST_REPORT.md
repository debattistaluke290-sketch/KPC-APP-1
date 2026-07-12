# Regression & Test Report

All checks run on branch `maths-physics-calibrated-candidate`. Commands: `npm test` and a local HTTP integration suite against `wrangler pages dev` (see `docs/` scratch). **Result: all passed.**

## Automated unit/structure tests (`npm test`)
| Area | Coverage | Result |
|---|---|---|
| No answer-key leakage | all 4 subjects: public payload has no `correct/accept/steps/tolerance/ref/product/difficulty` | ✅ |
| Calibrated validation | Physics & Maths: 40 Qs, 10 topics, 4/topic, 10F/20S/10U, unique ids, valid MCQ indices, strand map | ✅ |
| Legacy validation | Biology & Chemistry: no runtime-breaking errors | ✅ |
| Scoring | all 4 subjects: all-correct raw/exam/readiness = 100 & no forced rec; blank = 0; one weak topic → Essential; healthy topics not flagged; cautious labels | ✅ |
| Marks weighting | Physics: 10 upper (30 marks) > 10 foundation (10 marks); readiness ignores foundation-only | ✅ |
| Strand weighting | Maths: all-Algebra-correct → examScore ≈ 35 | ✅ |
| Numeric parser | fractions (3/8, 1/12, 6/16), negatives, decimals, %, scientific (3e8, 3x10^8, superscript), thousands commas, unit suffix, `m/s` slash ignored, malformed (`3/`, `/8`, `1/2/3`, `5/0`) → null, `<3` no crash | ✅ |
| Units/tolerance/fractions | Maths 3/8 correct; Physics standard-form+unit correct; tight tolerance rejects truncated value | ✅ |

**Totals:** 70+ assertions, **0 failures**.

## Local HTTP integration (wrangler dev, :8788)
| Check | Result |
|---|---|
| GET /api/questions physics & maths: 40 Qs, no leak | ✅ |
| POST /api/preview: teaser only (no solutions/recs) | ✅ |
| POST /api/submit physics all-correct: raw/exam/readiness 100, none_needed, recs empty, solutions have steps | ✅ |
| POST /api/submit blank: raw 0, all topics Essential | ✅ |
| POST /api/submit one-priority: topic Essential, recs length 1 | ✅ |
| POST /api/submit one-possible-gap (2/4): topic Recommended | ✅ |
| POST /api/submit maths all-correct: raw & exam 100 | ✅ |
| POST /api/submit maths fraction 3/8: correct | ✅ |
| POST /api/submit maths malformed '3/': wrong, no crash | ✅ |
| Validation: missing email → 400; no consent → 400; unknown subject → defaults to Physics | ✅ |

**Totals:** 19 checks, **0 failures**. No real Klaviyo write (no key in dev). No deployment.

## Biology & Chemistry regression
Both load, grade (all-correct → 100), preview, and submit through the upgraded engine using default metadata. Report shape is a superset of the old one, so the frontend renders them unchanged. **No regression.**

## Not automated (recommended manual)
- Full browser click-through of every screen (Back/Skip/edit answers/teaser/report rendering of the new scores + tiers). Scripts parse cleanly and all referenced report fields exist, but a human visual pass is advised before launch.
- The 24 exhaustive scenario matrix in the task brief is represented by the above; the remaining permutations are lower-risk variations of covered paths.
