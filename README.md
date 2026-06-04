# KPC Notes — Subject Diagnostic

A free, branded web diagnostic for KPC Notes Malta. Students take a short quiz
(no right/wrong feedback shown), give their email to unlock results, and receive
full worked solutions + a study plan mapped to KPC notes. Built on **Cloudflare
Pages + Functions**, with **Klaviyo** for lead capture and the results email,
**Shopify** for the discounted checkout link, and the **Meta Pixel** for ad
retargeting.

> Status: functional scaffold with **placeholder physics content**. Drop in your
> real questions + notes map (see "Adding real content") and wire the keys, and
> it's ready to launch.

---

## How it works

```
Browser (public/index.html)
   │  GET /api/questions      → public questions only (no answers)
   │  POST /api/submit        → {name,email,consent,answers}
   ▼
Cloudflare Pages Function (functions/api/*)
   │  grades against hidden key (functions/_bank.js)
   │  builds the personalised report
   │  pushes lead + event to Klaviyo (functions/_klaviyo.js)
   ▼
Returns report JSON → browser renders it
Klaviyo flow (you build) → emails worked solutions + study plan
Meta Pixel → fires Lead event for retargeting
```

The correct answers and worked solutions live **only** in `functions/_bank.js`,
which is never sent to the browser. Students cannot view-source the answer key.

---

## Project structure

```
kpc-diagnostic/
├── public/
│   └── index.html          # the frontend (UI, diagrams, quiz flow)
├── functions/
│   ├── _bank.js            # question bank + grading + report  (PRIVATE / server only)
│   ├── _klaviyo.js         # Klaviyo profile + event sync
│   └── api/
│       ├── questions.js    # GET  /api/questions  (no answers)
│       └── submit.js       # POST /api/submit     (grade + Klaviyo + report)
├── package.json
└── README.md
```

---

## Run it locally

You need Node 18+ installed.

```bash
cd kpc-diagnostic
npm install
npm run dev          # starts wrangler pages dev on http://localhost:8788
```

Open the local URL. The frontend will call the local `/api/*` functions.
Without a Klaviyo key set, lead sync is skipped (logged to the console) — the
rest works fully.

> Opening `public/index.html` directly as a file will NOT work — the page needs
> the `/api` functions, so it must be served by `wrangler pages dev` (or deployed).

To test Klaviyo locally, create a `.dev.vars` file (git-ignored):

```
KLAVIYO_API_KEY=pk_xxxxxxxxxxxxxxxxxxxx
```

---

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo (or use direct upload).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → connect repo**.
3. Build settings:
   - Build command: *(leave blank)*
   - Build output directory: `public`
   - Functions are auto-detected from the `functions/` folder.
4. **Environment variables** (Settings → Environment variables, mark as *Encrypted*):
   - `KLAVIYO_API_KEY` = your Klaviyo private API key
5. Deploy. You'll get a `*.pages.dev` URL.
6. **Custom domain**: add `diagnostic.kpcnotesmt.com` under the project's Custom
   domains tab and follow the DNS prompt.

CLI alternative:

```bash
npx wrangler pages deploy public
```

---

## Fill in before launch

In `public/index.html`, top of file:

- `window.KPC_PIXEL_ID` → your real Meta Pixel ID (leave as `YOUR_PIXEL_ID` to disable).
- `window.KPC_CONFIG.privacyUrl` → your privacy policy URL.
- `window.KPC_CONFIG.shopBundleUrl` → your Shopify cart/collection link.
- `window.KPC_CONFIG.discountCode` → the discount code (default `DIAGNOSTIC20`).

In Cloudflare env vars:

- `KLAVIYO_API_KEY` → enables lead capture + the results-email trigger.

In Klaviyo:

- Build one **Flow** triggered by the metric **"Completed Physics Diagnostic"**
  that sends the results email. Profile properties available for segmentation:
  `last_diagnostic_subject`, `diagnostic_score`, `weak_topics`, `date_taken`.

In Shopify:

- Create the `DIAGNOSTIC20` discount and the product(s)/collection the report
  links to. (The CTA appends `?discount=CODE` to your cart link.)

---

## Adding real content

Edit `functions/_bank.js` only. Each question maps a topic + subtopic to a KPC
notes reference and a Shopify product. For paper-based questions, list accepted
numeric answers in `accept` (tolerance is ±3% or ±0.15, whichever is larger).
Add or edit the topic list in `TOPIC_ORDER`.

To add a new diagram: add an SVG entry to the `DIA` map in `public/index.html`
and reference its key via `dia:"yourkey"` in the question.

To add a new **subject** later (e.g. Biology): clone this project (or extend the
bank to key questions by subject) and add a card on the homepage. The engine is
unchanged — only the content differs.

---

## Privacy & compliance

You collect emails from minors in the EU. Before running ads:
- Link a real privacy policy (`KPC_CONFIG.privacyUrl`).
- The consent checkbox is already required at the email step.
- Honour unsubscribe (Klaviyo) and deletion requests.
