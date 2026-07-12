# ☀️ Morning Review — Maths & Physics Calibration

Read this first. Plain-English summary of the autonomous run.

## 1. What was completed
Full calibration **design + candidate build + implementation + tests** for Physics and Mathematics, on a protected branch. Both subjects were re-blueprinted against the current 2026 SEC syllabi, rebuilt to 40 syllabus-aligned questions each with rich metadata, independently solved and adversarially reviewed, and wired into a **backward-compatible upgraded grading engine** with new tests. Biology & Chemistry were **not touched** (and still pass). Nothing was deployed or pushed.

## 2. Final Physics topic structure (10)
Motion & Forces · Forces, Moments & Pressure · Energy, Work & Power · Thermal Physics · Waves & Sound · **Light & Optics (new)** · Electricity & Circuits · Magnetism & Electromagnetism · Radioactivity · Earth & Space.
*(One evidence-based change from the old 9 topics: split "Waves, Light & Sound" into "Waves & Sound" + "Light & Optics", per syllabus LO1.)*

## 3. Final Maths topic structure (10 = the 10 official syllabus Foci)
The Number System · Numerical Calculations · Fundamentals of Algebra · **Graphs (new)** · Measurement · Lines, Angles & Shapes · **Constructions & Loci (new)** · **Transformations (new)** · Statistics · Probability.
*(Reorganised to add three previously-missing syllabus areas and to separate Statistics from Probability.)*

## 4. Questions retained / revised / replaced
- **Physics:** 32 revised-minor (kept content, re-tagged + metadata, some redistributed) + 4 brand-new (Light & Optics) + fresh numbers/contexts throughout = **40**. All numbers re-authored for originality.
- **Maths:** ~22 mapped from existing (revised) + ~18 new (Graphs ×4, Constructions/Loci ×4, Transformations ×4, Stats/Prob split fills) = **40**. 8 sound old questions became "surplus" (kept in docs, not in the core 40).

## 5. Final difficulty distribution (each subject)
**10 foundation · 20 standard_exam (10 of them application) · 10 upper_exam.** No stretch questions in the core 40. Verified programmatically per topic (1F / 2S / 1U).

## 6. Unresolved academic concerns
None that block private review. All 80 answers independently recomputed (confidence 5/5). Two Physics items flagged as teacher *preference* (t6-s refractive-index definition; t4-a/t6-a level "feel"). Maths **Constructions & Loci** assesses knowledge/numeric proxies, not compass-drawing (documented limitation).

## 7. Questions still needing teacher judgement
Physics t6-s, t4-a, t6-a (preferences). Maths T7 (proxy approach) and mat-t10-u (tolerance fairness on 1/12). Nothing is *wrong*; these are judgement calls for a subject teacher.

## 8. Copyright concerns
None identified. Every question is independently authored (wording, values, context, distractors, solutions). No official MATSEC wording/diagram/scenario reproduced. Official PDFs remain private and git-ignored (0 tracked). See the two originality reports.

## 9. Scoring formulas (plain English)
- **Raw score** = marks you got ÷ marks available × 100 (harder questions worth more: F=1, S=2, U=3). The visible "X of N" stays a simple count.
- **Estimated exam-level score** = the same, but for Maths re-weighted to match the real exam's strand emphasis (Algebra 35%, Shape/Space/Measures 30%, Number 20%, Data 15%). Physics = raw.
- **Secure-readiness score** = how you did on the *standard + upper* questions only (ignores the easy ones). Stricter; labelled "not a predicted exam mark".
- **Topic labels** (4 questions each): 4/4 Secure · 3/4 Mostly secure · 2/4 Possible gap · 0–1/4 Priority concern — all "on this sample, limited evidence". Never calls 2/4 a confirmed weakness.
- **Recommendations:** Essential (priority) · Recommended (possible gap) · Optional (mostly secure) · Not currently needed (secure). A student secure everywhere gets **no purchase push**.

## 10. Files changed (production)
`functions/_grade.js` (engine upgrade), `functions/_bank.js` (Physics bank), `functions/_maths.js` (Maths bank), `functions/_validate.js` (new), `public/index.html` (report UI), `test.mjs` (tests). Biology/Chemistry files unchanged. Plus ~20 calibration docs under `docs/calibration/`.

## 11. Tests run
`npm test` (structure/validation/scoring/parser/regression across all 4 subjects) + a local HTTP integration suite against `wrangler pages dev` (questions/preview/submit, validation, safety).

## 12. Tests passed / failed
**All passed.** `npm test`: 70+ assertions, 0 failures. Integration: 19 checks, 0 failures.

## 13. Local integration results
Server booted on :8788. Verified: no answer-key leak (questions/preview), dual scores correct, recommendation tiers + none-needed state, **fraction answer 3/8 graded correct end-to-end**, malformed input handled safely, missing-email/consent → 400, unknown subject defaults safely. **No real Klaviyo write** (no key in dev). **No deploy.**

## 14. Do Biology and Chemistry still work?
**Yes.** Their question content is unchanged; the engine grades them via safe defaults (marks=1, difficulty=standard_exam, examScore=rawScore). Regression covered by `npm test` (both subjects: all-correct, blank, weak-topic, report shape).

## 15. Candidate-release classification
**Technically ready, awaiting academic review** — i.e. safe for **private teacher review + a small student pilot**. It is **NOT production-ready** and must not be described as empirically validated: there is no facility/discrimination pilot data yet (four items/topic is a limited sample). Do not deploy to paid traffic until teacher sign-off + pilot.

## 16. Exact manual checks for you
1. Open the app locally (command below) and click through Physics and Maths: confirm scores, cautious topic labels, tiers, and that a *fully-correct* run shows "No priority gaps — nothing to buy".
2. Skim `functions/_bank.js` and `functions/_maths.js` — sanity-check a few answers against your own working.
3. Read the two blueprints and confirm the topic structures match how you teach.
4. Decide on the flagged teacher-judgement items (§7).

## 17. Command to inspect the app locally
```
npm install        # if needed
npm run dev        # wrangler pages dev → http://localhost:8788
npm test           # re-run the automated checks
```

## 18. Command to review the Git diff
```
git switch maths-physics-calibrated-candidate
git diff diagnostic-calibration...HEAD -- functions public/index.html test.mjs   # code changes
git diff diagnostic-calibration...HEAD --stat                                    # everything
```

## 19. Deployment / push status
**Nothing was pushed. Nothing was deployed.** All work is local on branch `maths-physics-calibrated-candidate`. Pre-task state is preserved at branch `pre-maths-physics-autonomous-calibration`.

## 20. Final commit
Final **candidate code** commit: `3a583c0` (frontend). Branch tip after docs: see `git log -1 --oneline` on `maths-physics-calibrated-candidate` (the documentation commit that includes this file). Nothing pushed.
