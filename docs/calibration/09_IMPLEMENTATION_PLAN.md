# Implementation Plan (candidate branch only)

Smallest safe, backward-compatible changes. Biology & Chemistry question content is untouched; they keep working via defaults.

## Files changed
| File | Change |
|---|---|
| `functions/_grade.js` | upgrade parser (fractions/sci-notation/%); per-question `marks`+`tolerance`+`acceptedUnits`; dual scoring (raw/exam/readiness); cautious topic labels; recommendation tiers; strip new private fields in `publicQuestions`. **All additive with legacy defaults.** |
| `functions/_bank.js` | replace with 40-question Physics candidate bank (new 10-topic structure + metadata). |
| `functions/_maths.js` | replace with 40-question Mathematics candidate bank (10 syllabus foci + metadata). |
| `functions/_validate.js` | **new** — bank validation helpers (used by tests). |
| `functions/_biology.js`, `functions/_chemistry.js` | **content unchanged**; only benefit from engine defaults. |
| `functions/api/*.js` | unchanged (engine handles new fields); confirm no leakage. |
| `public/index.html` | render dual scores + cautious labels + recommendation tiers + "not currently needed"; keep it working for all four subjects. |
| `test.mjs` | expand (structure, scoring, parser, API-shape, regression). |

## New question schema (production field names)
Keeps existing engine fields, **adds** metadata. Private fields (never sent to browser): `correct, accept, acceptedUnits, tolerance, steps, ref, product, difficulty, subtopic, syllabusReference, cognitiveSkill, commonMisconception, marks, examDemand, status, version, originalityStatus, humanReviewStatus, pilotStatus`.
```
{ id, subject, topic, subtopic, syllabusReference, type,            // 'mcq'|'work'
  q, data, dia,
  opts, correct,                                                    // mcq
  accept, acceptedUnits, unit, tolerance,                           // work
  marks, difficulty,                                                // 'foundation'|'standard_exam'|'upper_exam'|'stretch'
  cognitiveSkill, expectedTimeSeconds, examDemand, commonMisconception,
  steps, ref, product,
  status, version, originalityStatus, humanReviewStatus, pilotStatus }
```
`publicQuestions()` emits ONLY: `id, subject, topic, type, q, data, dia, opts(if mcq), unit`.

## Parser upgrade (`parseNumber`, deterministic, no eval)
Accept and normalise: integers, negatives, decimals, **fractions `a/b` → a/b**, mixed spaces, thousands commas, **`%` suffix (value as-is)**, unit suffixes (stripped), scientific `3e8` / `3x10^8` / `3*10^8` / `3×10^8`, unicode superscript digits (`10⁸`→`10^8`). Reject malformed (`3/`, `/8`, `1/2/3`, empty) → `null` (wrong, never a crash). Division by zero → `null`.

## Per-question tolerance & units
`checkWork(item, val)`: `tol = item.tolerance ?? max(0.15, |a|·0.03)`; correct if any accepted `a` within `tol`. If `item.acceptedUnits` present and the student included a unit token, require it to be an accepted variant (else wrong) — otherwise ignore units (legacy behaviour).

## Scoring (see 08_SCORING_MODEL.md)
`gradeAndReport` computes `rawScore`, `examScore`, `readinessScore`, per-topic `{c,n,label}`, and `recs` with `tier`. Legacy banks: `marks→1`, `difficulty→'standard_exam'`, `examScore→rawScore`. Report remains a superset of the current shape (frontend stays compatible).

## Backward-compatible defaults
missing `marks`→1 · missing `difficulty`→`standard_exam` · missing `tolerance`→global · missing `id`→`<subject>-legacy-<index>` + validation warning · missing syllabus metadata→warning only · missing `expectedTimeSeconds`→null.

## Validation (`_validate.js`, run in tests)
Calibrated banks FAIL on: duplicate/missing id, invalid topic/type/difficulty, non-positive marks, bad MCQ index, missing accept (work) / options (mcq), missing steps, wrong topic count (≠10), wrong per-topic count (≠4), wrong difficulty composition. Legacy banks emit warnings (not failures) unless a defect breaks grading.

## Order of implementation
1. `_grade.js` parser + scoring + labels + tiers (with legacy defaults).
2. `_validate.js`.
3. Candidate `_bank.js`, `_maths.js`.
4. `test.mjs` expansion; run; fix.
5. `public/index.html` rendering.
6. Local integration (`wrangler pages dev`) + scenarios.
7. Regression: Biology/Chemistry load+grade+preview+submit.
Only proceed to each step when the prior passes. If any step can't be made safe, stop and leave production banks untouched.
