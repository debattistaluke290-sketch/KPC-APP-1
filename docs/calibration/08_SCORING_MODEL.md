# Scoring Model (Maths & Physics candidate)

Three transparent scores + cautious topic labels + demonstrated-gap recommendations. No score is deliberately depressed to manufacture sales. Raw `correct/total` stays visible everywhere.

## Marks per question
By difficulty (marks-equivalent, defensible from exam mark conventions):
`foundation = 1`, `standard_exam = 2`, `upper_exam = 3`. Per topic = 1+2+2+3 = **8 marks**; 10 topics = **80 marks** per subject.
Legacy Biology/Chemistry questions with no `marks` default to **1** (so their behaviour is unchanged).

## 1. Raw score (transparent)
```
rawScore = round( marksAchieved / marksAvailable × 100 )
```
Plus the visible unweighted tally `correctCount / totalQuestions`. This is the honest headline figure.

## 2. Estimated examination score (representative)
Represents performance on an exam-standard mix. Uses the same marks, but for **Mathematics** applies the syllabus **strand weighting** so it mirrors a real Level 2-3 paper (Number 20% · Algebra 35% · Shape/Space/Measures 30% · Data 15%):
```
examScore(Maths) = round( Σ_strand [ weight_strand × (strandMarksAchieved / strandMarksAvailable) ] × 100 )
```
Strand→topic map: Number={T1,T2}, Algebra={T3,T4}, SSM={T5,T6,T7,T8}, Data={T9,T10}.
For **Physics** (no published strand %), `examScore = rawScore` (equal topic weight). For **Biology/Chemistry** (no strand metadata), `examScore = rawScore`.
It is **never** reduced below the marks earned; weighting only re-mixes topic emphasis to match the exam.

## 3. Secure-readiness score (stricter, separate)
A stricter indicator of readiness for the *harder* end of the exam. It ignores foundation items (getting only easy items right ≠ ready) and rewards standard+upper mastery:
```
readinessScore = round( (standardMarksAchieved + upperMarksAchieved)
                        / (standardMarksAvailable + upperMarksAvailable) × 100 )
```
Presented with the explicit caveat: **"a stricter readiness indicator — not your predicted exam mark."** For Biology/Chemistry (all items default `standard_exam`) this equals their raw score — acceptable and clearly labelled.

## 4. Topic diagnosis (4 items/topic → cautious language)
| correct/4 | Label |
|---|---|
| 4/4 | `Secure on this sample` |
| 3/4 | `Mostly secure on this sample` |
| 2/4 | `Possible gap — limited evidence` |
| 0–1/4 | `Priority concern — limited evidence` |

`correct/total` always shown. **2/4 is never called a confirmed weakness**; one error never labels a topic weak. (Legacy subjects with n≠4 use ratio bands: ≥0.75 secure, ≥0.5 mostly, ≥0.25 possible gap, else priority — same wording.)

## 5. Recommendation tiers (demonstrated gaps only)
| Topic label | Tier | Behaviour |
|---|---|---|
| Priority concern (0–1/4) | **Essential** | strongly recommend the mapped KPC notes |
| Possible gap (2/4) | **Recommended** | suggest the mapped notes |
| Mostly secure (3/4) | **Optional** | light "polish" mention |
| Secure (4/4) | **Not currently needed** | no product pushed for this topic |

- A student **secure/mostly-secure across all topics** receives an overall **"Not currently needed — you're in good shape"** state and **no forced CTA**. The shop link may remain available but is not presented as needed.
- Recommendations use only **existing configured mappings**: each topic's `product` handle + the single configured `shopBundleUrl`. **No product names/URLs are invented.** If a mapping is absent, the tier is shown without a link.

## Honesty guarantees
- Four items/topic is explicitly described as a limited sample, not a precise measurement.
- No empirical difficulty/discrimination is claimed (no pilot data).
- Raw marks and correct/total remain visible so students can see the basis of every label.
