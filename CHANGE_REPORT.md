# Change Report — Maths & Physics Calibration Candidate

Branch: `maths-physics-calibrated-candidate` (from `diagnostic-calibration`). Nothing pushed or deployed. Biology/Chemistry content unchanged.

## Production code changes
| File | What changed | Backward compatible? |
|---|---|---|
| `functions/_grade.js` | Upgraded numeric parser (fractions `a/b`, scientific notation, unicode superscripts, %, negatives, malformed→null); per-question `tolerance`; per-question `marks`; **dual scoring** (raw / estimated-exam / secure-readiness); cautious topic labels; recommendation tiers; strand-weighted exam score (Maths); public payload adds `id`, still strips all private fields. | **Yes** — legacy banks use defaults (marks 1, difficulty standard_exam, examScore=raw). Report is a strict superset. |
| `functions/_bank.js` | Replaced with the **40-question calibrated Physics bank** (10 topics incl. new Light & Optics; full metadata). | n/a (content) |
| `functions/_maths.js` | Replaced with the **40-question calibrated Maths bank** (10 syllabus Foci incl. Graphs, Constructions & Loci, Transformations; STRANDS + STRAND_WEIGHTS). | n/a |
| `functions/_validate.js` | **New** — bank validation used by tests (structure, composition, MCQ indices, no-leak). | additive |
| `public/index.html` | Report now shows estimated-exam + secure-readiness scores, recommendation tiers, and does not push a purchase on secure students. | reads new fields; degrades gracefully |
| `test.mjs` | Expanded: structure, validation, scoring, marks-weighting, strand weighting, parser edge cases, no-leak, Biology/Chemistry regression. | — |

## Behavioural changes visible to students
- Headline score is now **marks-weighted** (harder questions count more). For Biology/Chemistry this equals the old count-based score (no change).
- Topic labels reworded to cautious "on this sample" language; **2/4 is never called a confirmed weakness**.
- Two extra scores shown (estimated exam-level, secure-readiness) with clear caveats.
- Fraction / standard-form / negative answers are now graded fairly (the old `3/8`→38 bug is fixed).
- Secure students see "no notes needed right now" instead of a hard sell.

## Not changed
- Biology & Chemistry question banks (content). API routing. Klaviyo/Pixel wiring. Email/consent flow.

## Preserved history / rollback
- Old banks preserved in git history and via branch `pre-maths-physics-autonomous-calibration`.
- To roll back: `git switch diagnostic-calibration` (candidate branch untouched for later).
