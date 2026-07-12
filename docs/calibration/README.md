# Diagnostic Calibration Workspace

This folder holds **our own** calibration work for the KPC Notes Malta diagnostic —
audits, syllabus-coverage matrices, difficulty blueprints, item-analysis notes, and
calibration reports. Everything here is safe to commit to Git.

## What goes here
- Syllabus coverage matrices (which topics/questions map to which syllabus points)
- Difficulty blueprints (target mix of foundation / standard / upper / stretch)
- Question audits and proposed calibration changes
- Readiness-score design notes
- Any analysis derived from the private reference material

## What does NOT go here
- Official MATSEC / SEC syllabi, past papers, marking schemes or examiners' reports.
  Those are copyrighted and live **only** in the git-ignored `reference/` folder on
  your local machine — see `reference/README.txt`.
- Secrets, API keys, or environment files.

## Related
- Private reference library (local only, git-ignored): `reference/`
- Production question banks (do not edit during audit): `functions/_bank.js`,
  `functions/_biology.js`, `functions/_chemistry.js`, `functions/_maths.js`
- Shared grading engine (do not edit during audit): `functions/_grade.js`
