# Question Editing Guide (calibrated banks)

Applies to `functions/_bank.js` (Physics) and `functions/_maths.js` (Maths). Biology/Chemistry use the older simpler schema and still work.

## Question object (calibrated schema)
```js
M({ id:"phy-t1-s", topic:"Motion & Forces", subtopic:"Acceleration",
    syllabusReference:"LO2 / AC2.2", difficulty:"standard_exam",   // foundation|standard_exam|upper_exam|stretch
    cognitiveSkill:"application", type:"work", marks:2, expectedTimeSeconds:80,
    q:"…prompt…", data:"…hint shown under the prompt…", dia:null,   // dia = key into DIA map in index.html
    // MCQ: opts:[…], correct:<index>
    accept:[2], acceptedUnits:["m/s^2"], unit:"m/s²", tolerance:0.05,  // work only
    commonMisconception:"…", steps:`…worked solution (HTML)…`,
    ref:"KPC Physics — …", product:"physics-…" })
// M(...) fills defaults: status/version/originality/humanReviewStatus/pilotStatus/marks.
```
Private fields (never sent to browser): `correct, accept, acceptedUnits, tolerance, steps, ref, product, difficulty, marks, subtopic, syllabusReference, commonMisconception, …`. Public: `id, topic, type, q, data, dia, opts(mcq), unit`.

## Rules that keep the bank valid (checked by `npm test`)
- **10 topics, 4 questions each, composition 1 foundation / 2 standard_exam / 1 upper_exam per topic.**
- **Unique `id`** on every question (convention `subj-tN-{f|s|a|u}`).
- MCQ: `correct` is a 0-based index into `opts`. Work/text: non-empty `accept:[…]`.
- Every question needs `steps`. Every calibrated question needs `syllabusReference` and a valid `difficulty`.
- Maths: every topic must appear in `STRANDS`.

## Common edits
| Task | How | Watch out |
|---|---|---|
| Change a numeric answer | edit `accept:[…]` (+ `tolerance` if needed) | recompute by hand; keep tolerance tight enough to reject wrong methods |
| Allow a fraction/exact form | just set the decimal in `accept`; the parser accepts `3/8`, `0.375`, `6/16` automatically | — |
| Change MCQ answer | update `correct` **index** (0-based) | re-check after reordering `opts` |
| Change difficulty | edit `difficulty` **and** `marks` (F1/S2/U3) **and** keep the per-topic 1/2/1 mix | validation fails otherwise |
| Add a diagram | add an SVG to the `DIA` map in `public/index.html`, reference via `dia:"key"` | numbers in the SVG must match the question |
| Retire a question | replace it (keep 4/topic); don't leave a topic with ≠4 | validation fails |

## After ANY edit
1. `npm test` (must stay green — checks composition, no-leak, scoring, parser).
2. `npm run dev`, take the quiz for the edited subject, confirm the report renders and topic counts add up.
3. Confirm no answer key leaks: `GET /api/questions?subject=…` should contain no `correct/accept/steps`.
4. Symbols: prefer Unicode (`²³×÷°Ω→√`); the student's typed answer is HTML-escaped, but `steps`/`q` are raw HTML, so escape any literal `<`/`>`/`&` as `&lt;`/`&gt;`/`&amp;`.
