# KPC Notes — Subject Diagnostic

A free, branded web diagnostic for KPC Notes Malta. Students pick a subject and
take a short quiz (no right/wrong feedback shown), see a teaser score, give their
email to unlock the full results, and get worked solutions + a study plan mapped
to KPC notes. Built on **Cloudflare Pages + Functions**, with **Klaviyo** for
lead capture, **Shopify** for the discounted checkout link, and the **Meta Pixel**
for ad retargeting.

> Status: **live with real content for four subjects** — Physics, Biology,
> Chemistry and Mathematics. Fill in the `ref`/`product` fields in each bank with
> your real KPC note names + Shopify handles, wire the keys, and it's launch-ready.

---

## How it works

```
Browser (public/index.html)
   │  GET  /api/questions?subject=…  → public questions only (no answers)
   │  POST /api/preview              → teaser score only (no solutions, no email)
   │  POST /api/submit               → {subject,name,email,consent,answers}
   ▼
Cloudflare Pages Functions (functions/api/*)
   │  grade server-side against the hidden key (functions/_grade.js)
   │  build the personalised report
   │  push lead + event to Klaviyo (functions/_klaviyo.js)
   ▼
Returns report JSON → browser renders the full report on screen
Meta Pixel → fires Lead event for retargeting
Klaviyo → lead captured + "Completed <Subject> Diagnostic" event recorded
```

The correct answers and worked solutions live **only** in the subject banks
(`functions/_bank.js`, `_biology.js`, `_chemistry.js`, `_maths.js`), which are
never sent to the browser. `publicQuestions()` strips the answer key, so students
cannot view-source it.

**About the results email:** the full report (topic breakdown + worked solutions
+ study plan) is shown **on screen** immediately after the student submits their
email. The backend also captures the lead in Klaviyo and records a per-subject
event. If you want an *emailed* copy of the results, build a Klaviyo flow off that
event — but note the event only carries `score` / `weak_topics`, not the full
per-question worked solutions, so an emailed version would summarise rather than
reproduce them.

---

## Project structure

```
kpc-diagnostic/
├── public/
│   ├── index.html         # the frontend (UI, SVG diagrams, quiz flow, share card)
│   └── _headers           # conservative security headers for Pages
├── functions/
│   ├── _grade.js          # shared grading + report engine  (PRIVATE / server only)
│   ├── _bank.js           # Physics question bank           (PRIVATE)
│   ├── _biology.js        # Biology question bank           (PRIVATE)
│   ├── _chemistry.js      # Chemistry question bank         (PRIVATE)
│   ├── _maths.js          # Mathematics question bank       (PRIVATE)
│   ├── _klaviyo.js        # Klaviyo lead capture
│   └── api/
│       ├── questions.js   # GET  /api/questions  (no answers)
│       ├── preview.js     # POST /api/preview    (teaser score only)
│       └── submit.js      # POST /api/submit     (grade + Klaviyo + full report)
├── test.mjs               # data-driven smoke tests (all four subjects)
├── package.json
└── README.md
```

Every subject bank is just **content + config**: it exports `SUBJECT`,
`TOPIC_ORDER`, `QUESTIONS` and a `WHY` map, then delegates grading to the shared
engine:

```js
const CFG = { SUBJECT, TOPIC_ORDER, QUESTIONS, WHY };
export function publicQuestions() { return pub(CFG); }
export function gradeAndReport(name, answers, env) { return grade(CFG, name, answers, env); }
```

---

## Run it locally

You need Node 18+ installed.

```bash
cd kpc-diagnostic
npm install
npm run dev          # starts wrangler pages dev on http://localhost:8788
npm test             # runs the grading smoke tests (no server needed)
```

Open the local URL. The frontend calls the local `/api/*` functions. Without a
Klaviyo key set, lead sync is skipped (logged to the console) — the rest works
fully. Without a Workers AI binding, typed short answers still grade via lenient
string matching (see "Question types").

> Opening `public/index.html` directly as a file will NOT work — the page needs
> the `/api` functions, so it must be served by `wrangler pages dev` (or deployed).

To test Klaviyo locally, create a `.dev.vars` file (git-ignored):

```
KLAVIYO_API_KEY=pk_xxxxxxxxxxxxxxxxxxxx
KLAVIYO_LIST_ID=XXXXXX
```

---

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo (or use direct upload).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → connect repo**.
3. Build settings:
   - Build command: *(leave blank)*
   - Build output directory: `public`
   - Functions are auto-detected from the `functions/` folder.
4. **Environment variables** (Settings → Variables and Secrets):
   - `KLAVIYO_API_KEY` — your Klaviyo private API key *(Secret)*
   - `KLAVIYO_LIST_ID` — the ID of the dedicated "KPC Diagnostic Leads" list *(Plain)*
5. **Bindings** (optional, for smarter typed-answer grading):
   - Add a **Workers AI** binding named `AI`. Without it, text answers still grade
     via lenient string matching; with it, unusual phrasings get an AI judge.
6. Deploy. You'll get a `*.pages.dev` URL.
7. **Custom domain**: add `diagnostic.kpcnotesmt.com` under the project's Custom
   domains tab and follow the DNS prompt. (Also update the `og:url` in
   `public/index.html` if you switch domains.)

CLI alternative:

```bash
npx wrangler pages deploy public
```

---

## Fill in before launch

In `public/index.html`, top of file (`window.KPC_CONFIG`):

- `privacyUrl` → your privacy policy URL. *(currently set to the Shopify policy)*
- `shopBundleUrl` → your Shopify cart/collection link. *(currently the SEC collection)*
- `discountCode` → the discount code. **Leave empty (`""`) to hide the discount
  line entirely**; set it to e.g. `DIAGNOSTIC20` once that code exists in Shopify.
- `discountPercent` → the label shown next to the code (e.g. `"20%"`).
- `KPC_PIXEL_ID` → your Meta Pixel ID (leave as `YOUR_PIXEL_ID` to disable). *(set)*
- `KPC_GA4_ID` → optional GA4 id (leave as `G-XXXXXXXXXX` to disable).

In Cloudflare env vars: `KLAVIYO_API_KEY` (+ `KLAVIYO_LIST_ID`) to enable lead
capture, and optionally the `AI` binding for text grading.

In Shopify: create the discount code and the product(s)/collection the report
links to. The CTA appends `?discount=CODE` to your cart link **only if**
`discountCode` is set.

Per subject, edit the `ref` (KPC note name) and `product` (Shopify handle) fields
in each bank so the study plan points at the right notes and products.

---

## Question types

Set on each question via `type`:

- **`mcq`** — multiple choice. Needs `opts` (array) + `correct` (index).
- **`work`** — numeric ("paper") question. Needs `accept` (array of accepted
  values) + `unit`. Marked correct within ±3% or ±0.15, whichever is larger, and
  the parser tolerates units, commas and scientific notation (`3e8`, `3×10^8`).
- **`text`** — typed short answer. Needs `accept` (array). Marked leniently:
  spelling mistakes and word order are tolerated via edit-distance, and if a
  Workers AI binding (`AI`) is present, an AI judge is used as a fallback for
  synonyms/unusual phrasings.

---

## Adding real content

Edit the relevant bank file's `QUESTIONS` array only. Each question maps a topic
to a KPC notes reference (`ref`) and a Shopify product (`product`). Add or edit
the topic list in `TOPIC_ORDER` and the per-topic study-plan line in `WHY`.

To add a new diagram: add an SVG entry to the `DIA` map in `public/index.html`
and reference its key via `dia:"yourkey"` in the question.

## Adding a new subject

1. Create `functions/_<subject>.js` using the CFG pattern above (import the shared
   engine, export `SUBJECT` / `TOPIC_ORDER` / `QUESTIONS` / `WHY` + the three
   one-line delegations).
2. Register it in the `GRADERS`/`PUBLIC` maps in `functions/api/questions.js`,
   `submit.js` and `preview.js`.
3. Add a subject card on the homepage in `public/index.html`.

The engine is unchanged — only the content differs.

---

## Privacy & compliance

You collect emails from minors in the EU. Before running ads:
- Link a real privacy policy (`KPC_CONFIG.privacyUrl`).
- The consent checkbox is already required at the email step, with an
  "if you're under 16, ask a parent first" note.
- Honour unsubscribe (Klaviyo) and deletion requests.
