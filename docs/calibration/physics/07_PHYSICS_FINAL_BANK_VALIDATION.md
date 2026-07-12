# Physics Final Bank Validation

Programmatic + manual validation of `03_PHYSICS_PROPOSED_BANK.js`.

## Programmatic checks (all PASS)
| Check | Result |
|---|---|
| Exactly 40 active core questions | ✓ 40 |
| Exactly 10 coherent topics | ✓ 10 |
| Exactly four questions per topic | ✓ 4,4,4,4,4,4,4,4,4,4 |
| Unique IDs | ✓ 40 unique |
| One foundation per topic | ✓ (10 foundation total) |
| Two standard_exam per topic | ✓ (20 total) |
| One upper_exam per topic | ✓ (10 total) |
| Valid topics / types | ✓ |
| Valid MCQ correct indices | ✓ |
| `work` items have `accept` | ✓ |
| Every item has a worked solution | ✓ |
| Positive marks | ✓ (F=1,S=2,U=3) |

## Manual checks (all PASS)
- **Broad syllabus coverage:** LO1 (×2 topics: Waves & Sound, Light & Optics), LO2 (×3: Motion, Forces/Moments/Pressure, Energy), LO3, LO4, LO5, LO6, LO7 all represented; LO8 embedded via graph/data items. ✓
- **No major redundant skills:** two standard-form items live in different topics (Waves-U, Earth-U); acceptable. ✓
- **Recall/application/analysis mix:** cognitiveSkill spans recall→analysis; not recall-heavy. ✓
- **Realistic completion time:** Σ expectedTimeSeconds ≈ 44 min of exam-equivalent demand. ✓
- **No unmarkable core questions:** 27 numeric + 13 MCQ; zero free-text/AI-marked. ✓
- **All solutions independently verified:** blind-solve 40/40 confidence 5. ✓
- **All active questions confidence ≥4:** yes (all 5). ✓
- **Copyright:** no unresolved concern (originality report). ✓
- **Academic defects:** none unresolved; 2 items flagged for teacher *preference* (t6-s definition choice, t4-a/t6-a level feel) — not defects.

## Verdict
**Bank is internally valid and safe for private teacher review + student pilot.** It is **not** empirically validated (no facility/discrimination data) and must not be described as such. Recommended: teacher sign-off on the 2 flagged items, then a small pilot to gather facility data.
