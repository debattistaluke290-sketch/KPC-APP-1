# Deployment Checklist — Maths/Physics Calibrated Candidate

**Current status: NOT for production yet.** Candidate is safe for private teacher review + a student pilot. Do not deploy to paid traffic until the "Must" items are done.

## Must do before ANY launch
- [ ] **Teacher review** of both banks (answers, difficulty tags, wording) — sign off the flagged items in `docs/calibration/MORNING_REVIEW.md` §7.
- [ ] **Student pilot** (even small) to gather facility data — needed before claiming the diagnostic estimates exam performance.
- [ ] Manual click-through of Physics + Maths in the browser: scores show, cautious labels show, tiers show, a fully-correct run shows "no notes needed".
- [ ] Confirm `npm test` passes on the deploy commit.
- [ ] Decide messaging: the app still says "check your inbox" — either build the Klaviyo results email or soften that copy (pre-existing issue, unrelated to this calibration).

## Verify (config / integrations)
- [ ] Cloudflare Pages: build output `public`, functions auto-detected.
- [ ] `KLAVIYO_API_KEY` (+ `KLAVIYO_LIST_ID`) set as needed; optional `AI` binding for Biology/Chemistry text grading (Physics/Maths need no AI).
- [ ] Meta Pixel ID correct.
- [ ] `reference/` is NOT deployed (it is git-ignored; only `public/` is the build output — confirmed).

## Merge / release flow (when approved)
- [ ] Review diff: `git diff diagnostic-calibration...maths-physics-calibrated-candidate`.
- [ ] Merge candidate → `diagnostic-calibration` (or your release branch) — **no force-push, no history rewrite**.
- [ ] Keep `pre-maths-physics-autonomous-calibration` as the rollback point.

## Desirable / later
- [ ] Add per-topic product deep-links (currently one generic collection URL).
- [ ] Store anonymised responses to compute item facility/discrimination (enables real calibration).
- [ ] Draft optional `stretch` questions (kept out of the core 40).
