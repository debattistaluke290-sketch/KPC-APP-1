# Current Maths & Physics System Audit

Snapshot of the live system before calibration. Evidence tags: **[C]** confirmed from code · **[P]** potential issue.

## Topic structures (current)
- **Physics** (`functions/_bank.js`): 9 topics × 4 = **36 questions**. Types: 25 `work`, 11 `mcq`, 0 `text`. [C]
- **Mathematics** (`functions/_maths.js`): 10 topics × 4 = **40 questions**. Types: 38 `work`, 2 `mcq`, 0 `text`. [C]

## Question object (current schema) [C]
Fields actually used: `topic, ref, product, difficulty, type, q, data, dia, opts, correct, accept, unit, steps`. Identity is **array position** (no `id`). `difficulty` (foundation/standard/hard) is **authored but never read by the engine**. `unit` is display-only (grading strips it). No `marks`, no per-question `tolerance`, no `subtopic`/`syllabusReference`/`cognitiveSkill`.

## Grading engine (`functions/_grade.js`) [C]
- **MCQ:** `Number(given) === q.correct` (index compare); blank if empty.
- **Numeric (`work`):** `parseNum` strips spaces/commas, converts `×10^/x10^/*10^`→`e`, then strips everything except `[0-9.\-e+]`; `checkWork` accepts within `max(0.15, |a|·0.03)` (**±3% or ±0.15, whichever larger — a single global tolerance**).
- **Text:** normalise + Levenshtein + single-word token match; optional Cloudflare Workers-AI fallback judge.
- **Bands:** `levelFor` green ≥0.75, amber ≥0.5, else red.
- **Scoring:** `score = round(totalCorrect/totalQ·100)`; `weakTopics` = all non-green (amber+red), red first.
- **Recommendations:** weak topics → `{topic, ref, product, why}`. Frontend shows `ref`+`why`; `product` unused; shop CTA is a single generic collection URL.

## Answer-key protection [C]
`publicQuestions()` strips `correct/accept/steps/ref/product/difficulty`. `/api/questions` = public only; `/api/preview` = teaser (no solutions); `/api/submit` = full report incl. `steps`. Correct-answer *values* are never sent to the browser (only worked-solution prose after submit). Verified earlier by test + live check.

## Sensitivity — how much one wrong answer moves things
| Metric | Physics (36 Q, 4/topic) | Mathematics (40 Q, 4/topic) |
|---|---|---|
| Total score, 1 wrong | 100 → **97** (each item ≈ 2.78%) | 100 → **98** (each item = 2.5%) |
| Topic score, 1 wrong | **−25 pp** of that topic | −25 pp |
| Band change on the **1st** wrong (4→3) | green → **green** (no change) | green → green |
| Band change on the **2nd** wrong (3→2) | green → **amber** | green → amber |
| Band change on the **3rd** wrong (2→1) | amber → **red** | amber → red |

**Implication [P]:** with only 4 items/topic, a single ambiguous or mis-marked item can flip a whole topic's band (the 2nd/3rd wrong). Topic labels are therefore **low-reliability** and must be worded cautiously (addressed in the scoring model).

## Specific risks (confirmed) 
1. **Positional identity / no stable IDs [C/P]** — reordering or inserting shifts every downstream index; answers map by position. No way to reference a question stably.
2. **Global numeric tolerance [C/P]** — `max(0.15,|a|·0.03)` applies to every numeric question; cannot tighten/loosen per item (e.g. "give to 2 dp" vs "nearest whole number").
3. **Ignored difficulty labels [C]** — `difficulty` has zero effect on scoring; all questions equally weighted (no `marks`).
4. **Fraction parsing bug [C/P]** — `parseNum("3/8")` → strips `/` → `"38"` → **38**, not 0.375. Any fraction answer is mis-parsed. Directly affects the Maths probability question and any exact-fraction answer.
5. **Scientific notation [C]** — handled for `×10^ / x10^ / *10^` and bare `10^`; a plain `3e8` also parses. But `3·10^8` (middot) or `3 x 10⁸` with a **superscript unicode 8** would NOT parse (superscripts are stripped as non-`[0-9.\-e+]`). [P]
6. **Algebraically-equivalent answers [P]** — no support: `1/2` vs `0.5` vs `2/4` all fail except the exact accepted numeric; `x<3` vs `x < 3` fine numerically but the engine can't judge algebraic forms. Core questions must therefore avoid free algebraic answers.
7. **Units [C/P]** — `unit` is cosmetic; the parser *strips* units, so a dimensionally wrong unit (e.g. answering "5 kg" to a force question) is silently accepted as "5". No dimensional checking.
8. **Answer-key leakage [C]** — none found; public/preview payloads are clean.
9. **Text false positives [P]** — short-word edit distance (e.g. "read"→"lead") over-credits; not relevant to Physics/Maths today (no text items) but relevant if added.

## Statistical limitations [C]
No stored responses, no facility/discrimination data, no adaptivity, no confidence intervals. 4 items/topic → topic diagnosis is indicative only. Overall score is a reasonable *directional* estimate, not a validated predictor.

## Implications for this calibration
The engine needs **backward-compatible** additions: stable `id`, per-question `marks` + `tolerance`, `acceptedUnits`, safe **fraction/sci-notation parsing**, difficulty consumed for a weighted exam estimate, cautious topic labels, and recommendation tiers — all without breaking Biology/Chemistry (which will rely on defaults). Detailed in `09_IMPLEMENTATION_PLAN.md`.
