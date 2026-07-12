# Mathematics Final Bank Validation

Programmatic + manual validation of `03_MATHEMATICS_PROPOSED_BANK.js`.

## Programmatic checks (all PASS)
| Check | Result |
|---|---|
| Exactly 40 active core questions | ✓ 40 |
| Exactly 10 coherent topics (= 10 syllabus Foci) | ✓ 10 |
| Exactly four questions per topic | ✓ all 4 |
| Unique IDs | ✓ 40 unique |
| One foundation / two standard_exam / one upper_exam per topic | ✓ (10/20/10) |
| Valid topics / types | ✓ |
| Valid MCQ correct indices | ✓ |
| `work` items have `accept` | ✓ |
| Every item has a worked solution | ✓ |
| Positive marks | ✓ (F=1,S=2,U=3) |
| Strand map covers all topics | ✓ (Number/Algebra/SSM/Data) |

## Manual checks (all PASS, with one documented limitation)
- **Syllabus coverage:** all 10 Foci / LO1–LO10 represented, including the previously-missing Graphs (LO4), Constructions & Loci (LO7), Transformations (LO8). ✓
- **No major redundant skills:** consolidated the three old Number topics into T2; no duplicate skills across topics. ✓
- **Recall/application/analysis mix:** balanced; mostly application, appropriate for maths. ✓
- **Completion time:** ≈ 40–45 min exam-equivalent. ✓
- **No unmarkable core questions:** 34 numeric (incl. fractions/negatives/standard form) + 6 MCQ; zero free-text/symbolic-equivalence marking. ✓ **Depends on the upgraded parser** (fractions/negatives/standard form) — validated by tests in `test.mjs`.
- **All solutions independently verified:** blind-solve 40/40 confidence 5. ✓
- **Copyright:** no unresolved concern. ✓
- **Documented limitation (not a defect):** Constructions & Loci (T7) assesses knowledge/numeric proxies, not compass-and-straightedge drawing — recorded for teacher review.

## Verdict
**Bank is internally valid and safe for private teacher review + student pilot**, **conditional on the numeric-parser upgrade being live** (otherwise the fraction/negative/standard-form answers grade unfairly). Not empirically validated. Recommended: teacher confirmation of the T7 proxy approach + a pilot.
