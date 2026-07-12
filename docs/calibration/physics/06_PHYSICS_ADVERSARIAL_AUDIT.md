# Physics Adversarial Audit

Second pass, attempting to **reject** each question. Checks applied to all 40: ambiguity, hidden assumptions, missing data, accidental clues, answer leakage, invalid distractors, multiple defensible answers, wrong units, unsuitable tolerance, excessive arithmetic, reading load, syllabus mismatch, near-duplication, similarity to official material, unfair difficulty, weak diagnostic value, auto-grading failure. Physics-specific: unit conversions, vector direction, graph interpretation, sign conventions, diagram geometry, practical assumptions, accepted sig-figs.

## Findings & resolutions
- **Sign conventions (phy-t1-u braking):** answer requested as the **size** of the force (800 N), avoiding a ±/direction dispute. ✓ resolved by wording.
- **Unit conversions (t1-u km/h; t2-u cm→m):** prompts explicitly instruct the conversion; accepted units listed; tolerance small but not zero. ✓
- **Tolerance suitability:** each numeric tolerance set to admit sensible rounding but reject a wrong method (e.g. t2-a Pa tol ±100 on 50000; t10 standard-form tol 0.05×10ⁿ). No tolerance is so wide it accepts a distractor value. ✓
- **MCQ distractors:** every distractor maps to a named misconception (recorded in `commonMisconception`); none is obviously silly in a way that gives the answer away. Rechecked t4-a (poorest emitter): only "shiny silver" is a poor emitter; the three dark options are all good emitters → single defensible answer. ✓
- **Accidental clues / leakage:** prompts do not state the formula result; `steps`/`accept` are server-private (stripped by `publicQuestions`). ✓
- **Graph question (t5-s) & diagram reuse:** uses the existing original KPC `wave` SVG; the question asks for wavelength (distance Y), which the diagram supports unambiguously. t1/t7 reuse `vtgraph`/`circuit` only where numbers match the SVG. ✓
- **Excessive arithmetic:** all within 3 steps; no long unrelated computation. ✓
- **Syllabus fit:** every item tagged to an LO (Light & Optics → LO1). No out-of-syllabus content (e.g. no lens-equation 1/f, kept to magnification ratio and n from speeds). ✓
- **Similarity to official material:** all numbers/contexts freshly chosen and differ from both the current KPC bank and typical paper values; no official phrasing/diagram reused. ✓ (see originality report)
- **Auto-grading:** 27 `work` are single clean numerics; 13 `mcq` index-based. None needs free-text/AI marking. ✓

## Residual notes (not defects, flagged for teacher review)
- **phy-t6-s** refractive index from speeds assumes the simple ratio definition (fine at SEC). A teacher may prefer to add a Snell's-law variant for the pilot.
- **phy-t4-a / t6-a** are concept MCQs at "application" — defensible, but a teacher may wish to confirm they feel Level-2/3 rather than recall.

**Verdict:** 40/40 survive adversarial review; 0 require revision. 2 items flagged as *teacher-judgement* preferences (not defects).
