# Scoring Formulas

Implemented in `functions/_grade.js` → `gradeAndReport`. See also `docs/calibration/08_SCORING_MODEL.md`.

## Marks
Per question by difficulty: `foundation = 1`, `standard_exam = 2`, `upper_exam = 3`. Legacy questions with no `marks` default to `1`. Per topic = 8 marks; 40 questions = 80 marks.

## Raw score (headline `score`)
```
rawScore = round( marksAchieved / marksAvailable × 100 )
```
Also shown: `correctCount / totalQuestions` (simple count, unweighted, always visible).

## Estimated examination score
```
Physics / Biology / Chemistry:  examScore = rawScore
Mathematics (strand-weighted):
  examScore = round( Σ_strand w_strand · (strandMarksAchieved / strandMarksAvailable) / Σ_present w_strand × 100 )
  weights:  Number 0.20 · Algebra 0.35 · Shape/Space/Measures 0.30 · Data 0.15
```
Never reduced below marks earned; weighting only re-mixes topic emphasis to match a real Level 2-3 paper.

## Secure-readiness score (stricter, separate)
```
readinessScore = round( (standardMarksAchieved + upperMarksAchieved)
                        / (standardMarksAvailable + upperMarksAvailable) × 100 )
```
Ignores foundation items. Labelled "not a predicted exam mark". Legacy subjects (all default standard_exam) → equals raw.

## Topic labels (n items, cautious)
n = 4: `4 Secure` · `3 Mostly secure` · `2 Possible gap` · `0–1 Priority concern` — all "on this sample". Legacy n≠4 uses ratio bands (≥0.75 / ≥0.5 / ≥0.25 / else). Colour (green/amber/red) retained for the UI.

## Recommendation tiers
`Priority concern → Essential` · `Possible gap → Recommended` · `Mostly secure → Optional` · `Secure → Not currently needed`. `recs` lists only Essential + Recommended topics. `recommendationState = "none_needed"` when there are none → no purchase is pushed.

## Honesty guardrails
Raw marks + correct/total always visible · four items/topic described as a limited sample · no empirical difficulty claimed · exam estimate never deliberately depressed.
