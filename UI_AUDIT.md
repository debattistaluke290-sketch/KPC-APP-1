# UI Audit — KPC Notes Diagnostic

Inspection-only audit of the front end ahead of a visual redesign. **No code was changed.** Primary file: `public/index.html` (701 lines — the entire front end). Backend (`functions/`) is referenced only where it constrains the UI.

---

## 15-point inspection (quick answers)

| # | Question | Finding |
|---|---|---|
| 1 | Framework / language / styling | **Vanilla** HTML5 + plain ES6 JS (no framework, no build step, no TS). Styling = one embedded `<style>` using CSS custom properties for **colour only**. Backend = Cloudflare Pages Functions (ESM). |
| 2 | Folder / component structure | Front end is a **single file** `public/index.html` (HTML + CSS + JS + inline SVG). No component files. "Components" = CSS classes + DOM built imperatively in JS. |
| 3 | Pages / routes | A **single page** with 4 `.screen` sections toggled by `show(id)`: `#s-home`, `#s-quiz`, `#s-email`, `#s-done`. **No client-side router, no URL/hash changes.** API "routes": `GET /api/questions`, `POST /api/preview`, `POST /api/submit`. |
| 4 | User journey | home → pick subject → quiz (one Q at a time) → finish → teaser+email gate → full report → shop CTA / share / restart. (Detailed in §B.) |
| 5 | Reusable UI components | ~30 CSS-class "components" (`.card`, `.btn`, `.opt`, `.row`, `.sol`, `.rec`, `.ring`, badges…). See §C. |
| 6 | Where tokens live | **Only colours** are tokenised in `:root` (lines 90–95). Typography, spacing, radii, shadows are **hard-coded literals** throughout the CSS (and increasingly inline in JS strings). |
| 7 | Duplicated components / styling | Yes — multiple near-identical "pill/badge" styles; the score-colour threshold (`≥80/≥50`) is duplicated in 3 functions; newer blocks are styled inline in JS instead of via classes. See §E. |
| 8 | Inconsistent patterns | Yes — class-based vs inline-styled components; two badge systems; ad-hoc radii/padding; `<div onclick>` vs `<button>`. See §D/§E. |
| 9 | Responsiveness | **No media queries at all.** Mobile-first fluid column (`max-width:600px`). Mostly OK on phones; desktop is a narrow centred column; a few fixed sizes. See §G. |
| 10 | Accessibility | Several real issues: non-focusable `<div onclick>` cards, placeholder-only labels, no `aria-live`, unlabelled SVG diagrams, no focus-visible styles, emoji-as-icons. See §H. |
| 11 | UI changes that could break logic | High coupling via **element IDs, class names, and the `level`/`mark` vocab**, plus the honeypot field and `esc()`. See §I. |
| 12 | Fragile areas to protect | ID/class contract, answer-key gating, tracking events, honeypot, diagram↔question number sync, input→`responses[idx]`→`updateNextState` wiring. See §I. |
| 13 | Existing design system? | **No formal library.** A *de-facto* style (colour tokens + consistent card/pill/pink-button language) but no spacing/type/radii/shadow scale and no documented components. |
| 14 | Special rendering | **No math typesetter** (no MathJax/KaTeX). Equations = Unicode (`² ³ × ÷ ° Ω λ → √ ≤ ≥`) + HTML in `steps`. Diagrams = inline SVG strings injected via `innerHTML`, keyed by `dia`, hard-coded hex colours, **no titles/aria**. Share card = separate `<canvas>` render path with duplicated colours/fonts. |
| 15 | States present | Selected (`.opt.chosen`), disabled (`.btn[disabled]`), correct/incorrect/blank (`.mark`,`.lvl` — report only), hover, some focus, text-only "loading", `alert()` errors. **Missing:** spinners/skeletons, styled empty state, `.opt:focus`, reduced-motion. See §D/§E. |

---

## A. Current architecture

- **Stack:** static `public/index.html` served by Cloudflare Pages; dynamic grading via Pages Functions (`functions/api/*`). No SPA framework, no bundler, no TypeScript, no CSS framework. Zero front-end dependencies.
- **Rendering model:** imperative. Global state (`QUESTIONS`, `idx`, `responses`, `currentSubject`, `LAST_REPORT`, lines 387–391). Screens are pre-rendered `<section class="screen">` blocks; `show(id)` (408) flips a single `.active` class. Dynamic content (question body, report) is built with `innerHTML`/`createElement` inside `renderQuestion` (433), `renderTeaser` (514), `renderReport` (561).
- **Event wiring:** inline `onclick=` attributes calling **global** functions (`startSubject`, `nextQuestion`, `submitEmail`, `shareResult`, `reset`, …). No delegation, no listeners registered in JS except per-element `.onclick`/`.oninput` set during render.
- **Styling:** one `<style>` (89–244). `:root` holds 13 colour variables; everything else (font sizes, paddings, radii, shadows, some one-off colours like `#faf7fc`, `#f3ebf8`, `#fdeef3`) is literal.
- **Analytics:** Meta Pixel + optional GA4 + a unified `track()` (76–86) firing funnel events at fixed points.

## B. Existing pages (screens)

| Screen id | Role | Key elements / dynamic ids |
|---|---|---|
| `#s-home` (255) | Landing: hero, trust stats, 2×2 subject picker, footer | `.hero`, `.subjects` → 4 `.subject` cards (`onclick="startSubject(...)"`) |
| `#s-quiz` (295) | **One quiz question at a time** | progress (`q-count`,`q-pct`,`q-bar`), `q-topic-name`, `q-paper-badge`, `q-text`, `q-diagram`, `q-paper-hint`, `q-body`, `q-next` (gated), `q-back`, skip link |
| `#s-email` (313) | Teaser score + email gate | `t-ring`/`t-head`/`t-sub`/`t-weak`, `.unlock` locked list, `email-name`/`email-addr`/`consent`/`company`(honeypot)/`email-err`/`submit-btn` |
| `#s-done` (343) | Confirmation + full report | `r-ring`,`r-head`,`r-sub`,`r-summary`,`r-scores`,`r-rows`,`r-solutions`,`r-recs`,`cta-box`/`cta-none`/`shop-btn`, share + restart |

**Full journey:** `startSubject()` (415) `GET /api/questions` → `renderQuestion()` loop with `nextQuestion`/`prevQuestion`/`skipQuestion` (Next disabled until answered, 480) → last question → `goToEmail()` (490) `POST /api/preview` → `renderTeaser()` → `submitEmail()` (528) validates + `POST /api/submit` → `renderReport()` (561) → `shop-btn` / `shareResult()` / `reset()`. Refresh at any point returns to `#s-home` (no persisted route/state).

## C. Existing components (CSS-class "components")

- **Layout/shell:** `.wrap`, `.narrow`, `.topbar`+`.brand`, `.card`, `.screen`(+`.active`).
- **Buttons:** `.btn` (primary, full-width pink), `.btn.secondary` (outline), `.btn[disabled]`. Used for Next/Back/Submit/Share/Shop/Restart.
- **Home:** `.hero`(+`:before/:after` glow), `.pill`, `.trust`, `.subjects`/`.subject`(+`.ico`,`.go`,`.soon`+`.badge` **unused**).
- **Quiz:** `.progress-head`, `.bar`>`i`, `.topic-tag`, `.paper-badge`, `.q`/`.q .data`, `.diagram`, `.paper-hint`, `.opt`(+`.chosen`), `.answer-field`, `.answer-sub`, `.quiz-actions`.
- **Gate:** `.pill-lite`, `.unlock`(+`.ck`,`.lk`), `.field`, `.consent`, `.err`, `.gate-h`, `.teaser-weak`.
- **Report:** `.confirm`(+`.big`), `.reveal-divider`, `.score-ring`/`.ring`, `.summary`, `.section-label`/`.section-h`, `.row`(+`.dot`,`.t`,`.meta`,`.lvl` green/amber/red), `.sol`(+`.head`,`.qn`,`.mark` right/wrong/blank,`.dlg`,`.yours`,`.steps`,`.final`), `.priority`/`.rec`(+`.num`,`.ref`,`.why`), `.cta-box`(+`.price`), `.share-note`.
- **Data:** `DIA` = map of 9 inline SVG diagrams (369–379); `DOT` colour map (380); `esc()` (384).
- **Defined but unused:** `.loader`, `.demo-note`, `.fineprint`, `.subject.soon`/`.badge` — dead CSS (do not remove blindly; low cost to keep).

## D. Existing design conventions

- **Colour:** tokenised (`:root`). Palette: deep purple `#341D54`, purple `#7C27AC`, pink `#D6587E`, cream bg `#F5F2EA`, white cards, semantic green/amber/red. Consistent and on-brand.
- **Shape:** rounded everything, but **no radius scale** — 10/12/14/16/18/22 px cards + 99/999 px pills appear ad hoc.
- **Type:** system font stack; sizes hard-coded per element (11–30 px); weights 500–800. No type scale, no `--font-*` tokens.
- **Spacing:** hard-coded paddings/margins; card `28px 24px`, others `14–18px`. No spacing scale.
- **Elevation:** two bespoke shadows (`.card`, `.btn`) using `rgba` literals; not tokenised.
- **Motion:** one `fade` keyframe (screen enter), bar width transition, smooth scroll. No reduced-motion guard.
- **Interaction vocab:** pink = primary action; purple = accent/selected; pill badges for status. Consistent enough to read as one product.

## E. Visual weaknesses

1. **Tokens stop at colour.** Type/spacing/radii/shadow are literals, so the "system" can't be adjusted centrally — a redesign must first extract these into tokens.
2. **Styling is leaking into JS.** The newest blocks — dual-score rows (577–580), recommendation tier badges (610), `cta-none` (358) — are styled with **inline `style="…"`** in template strings, not classes. This is the biggest consistency regression and will fight any CSS redesign.
3. **Duplicated badge/pill families.** `.pill`, `.pill-lite`, `.paper-badge`, `.lvl.*`, `.mark.*`, and the inline tier badge are all the same primitive with different values. Should be one `Badge` with variants.
4. **Duplicated score-colour logic.** The `≥80 green / ≥50 amber / else red` threshold is copy-pasted in `renderTeaser` (517), `renderReport` (566) and `shareResult` (661). Easy to drift.
5. **Ad-hoc one-off colours** outside the token set: `#faf7fc`, `#f3ebf8`, `#fdeef3`, `#fdf2f6`, `#efe7f4`, `#d8c9e2`, badge pairs like `#fbe3e3/#b22a2a`. No neutral/surface ramp.
6. **Button monotony.** Report screen stacks 3–4 identical full-width buttons (Share, Shop, Restart, Back) with weak hierarchy.
7. **Desktop layout** is a single 600 px column — the long report reads as an endless narrow strip on wide screens.

## F. UX weaknesses

1. **No loading indicator between "pick subject" and first question** (a `fetch` gap) — only an `alert()` on failure. Same for the `submit` → report transition (button text only).
2. **Errors use `alert()`** (`startSubject`, `shareResult`) — jarring, un-styled, blocks the thread. Inline `.err` exists for the gate but not elsewhere.
3. **Screen changes aren't signposted** beyond a scroll-to-top; no focus move, no transition affordance.
4. **Teaser can contradict the report:** teaser names a "biggest gap" even for a perfect score (`renderTeaser`), while the report can say "no weak topics". (Pre-existing logic note, flagged for awareness — not to fix in the UI phase.)
5. **"Skip" vs disabled "Next"** now coexist; fine, but the relationship isn't visually explained.
6. **No progress persistence** — a refresh loses all answers and returns home.
7. **Copy still promises emailed solutions** ("Check your inbox", 345) though delivery is on-screen — a content/trust mismatch to resolve at some point (out of scope for visual redesign).

## G. Mobile weaknesses

1. **Zero media queries** — everything relies on the fluid 600 px column. Works, but nothing is *tuned* for small/large breakpoints.
2. **`.subjects` is a hard `1fr 1fr`** (141) at all widths; on ~320 px phones the 2-column cards get cramped and descriptions wrap heavily. No single-column fallback.
3. **Fixed hero `h1` 30px / `.q` 19px** — no fluid scaling; acceptable but not optimised (no `clamp()`).
4. **Diagrams** scale with `max-width:100%` (good) but small viewBoxes can look thin on large phones; none scroll (fine, they're simple).
5. **Tap targets:** `.opt` and `.btn` are comfortably large ✓; but the **subject cards are `<div>`** (tap works, keyboard doesn't), and the **skip link** is small (13px). 
6. **Long topic names** in `.row` rely on `flex:1` truncation-by-wrap; `.lvl` is `nowrap` — could get tight two-lining on narrow screens.
7. Desktop: no `max-width` expansion or multi-column report → underuses large screens (not a bug, an opportunity).

## H. Accessibility weaknesses

1. **Subject cards are `<div onclick>`** (269–288): not keyboard-focusable, no `role`, no Enter/Space. **Keyboard/SR users cannot start a quiz.** (High.)
2. **"Skip this question" is `<a href="#" onclick>`** (308): should be a `<button>`; `href="#"` risks a scroll jump.
3. **Placeholder-as-label** on name/email/answer inputs (329–330, 465) — no `<label>`/`aria-label`. (Consent checkbox *does* have a label — good.)
4. **No `aria-live` regions:** score reveal, "Scoring your answers…", progress %, and the enabling/disabling of **Next** are silent to screen readers.
5. **SVG diagrams have no `role="img"`/`<title>`/`<desc>`** (369–378). Diagram-dependent questions (e.g. "which distance is the wavelength?") are **unanswerable** without sight. (High.)
6. **No visible focus styles** on `.opt`, `.btn`, `.subject`, or the skip link (only `.field/.answer-field` get a focus border). No `:focus-visible`.
7. **MCQ options** are `<button>`s but not exposed as a single-select group (`role="radiogroup"`/`aria-checked`); selection isn't announced as state.
8. **Emoji carry meaning** (⚛️🧬🧪📐 subjects, 🔒 locks, ✏️ paper) without `aria-hidden`/text alternatives.
9. **No `prefers-reduced-motion`** handling (fade, smooth scroll, bar animation).
10. **Contrast risks:** `--muted #7a6f86` on white and especially on `#faf7fc` at 12–13 px is borderline for WCAG AA; verify during redesign.
11. **Screen transitions don't move focus** to the new heading, so SR users don't learn the context changed.

## I. Technical risks (what a UI change could break)

**The HTML↔JS contract is by `id` and `class` string — treat these as an API.**

- **Element IDs read by JS (do not rename/remove):** `q-count, q-pct, q-bar, q-topic-name, q-paper-badge, q-paper-hint, q-text, q-diagram, q-body, q-next, q-back, t-ring, t-head, t-sub, t-weak, r-ring, r-head, r-sub, r-summary, r-scores, r-rows, r-solutions, r-recs, c-head, c-sub, cta-box, cta-none, shop-btn, disc-line, disc-pct, disc-code, email-name, email-addr, consent, company, email-err, submit-btn, privacy-link, consent-privacy`, plus screen ids `s-home/s-quiz/s-email/s-done`.
- **Class names / vocab the JS depends on:** `.screen`/`.active` (screen switching); `.opt`/`.chosen` (MCQ selection + `body.querySelectorAll('.opt')`); `.answer-field` (input lookup); the **level vocab `green|amber|red`** (used as `DOT[level]`, `.lvl ${level}`) and **mark vocab `right|wrong|blank`** (`.mark ${mark}`). Renaming any of these silently breaks colouring/selection.
- **Report field contract:** the UI reads `score, examScore, readinessScore, totalCorrect, totalQ, summary, name, subject, recommendationState, weakTopics, topics[{name,c,n,level,label}], solutions[{n,q,dia,mark,markText,given,steps}], recs[{topic,tier,level,label,ref,why}]`. A redesign must keep consuming these.
- **Answer-key gating (security):** solutions/`steps` and correct answers appear **only** in the `/api/submit` response after the email gate; `/api/questions` and `/api/preview` are answer-free. Do **not** pre-fetch the full report before the gate.
- **HTML injection points:** `q-text` (q + data), `steps`, and diagrams are injected as **HTML** (Unicode/`<b>`/`<br>` etc.). Switching these to `textContent` would break equations/formatting. The student's answer echo is escaped via `esc()` (596) — **must stay escaped** (XSS).
- **Honeypot** `#company` (332) must remain present but visually hidden (anti-bot); don't delete or reveal it.
- **Analytics events** fire at exact points (`quiz_started, quiz_completed, results_previewed, email_submitted→Lead, shop_clicked→InitiateCheckout, result_shared`). Duplicating/moving trigger elements can double-fire or drop ad events.
- **Input→state wiring:** MCQ `onclick` and text `oninput` set `responses[idx]` and call `updateNextState()`. Any new input control must preserve both, or Next-gating and grading break.
- **Diagram↔question sync:** SVGs are keyed by `dia`; some encode specific numbers that match their question (e.g. the circuit's 6Ω/3Ω/9 V). Re-theming SVGs is fine; changing their numbers/labels desyncs them from questions.
- **Global inline handlers:** moving JS into modules/closures would break every inline `onclick=`.

## J. Recommended redesign order

1. **Extract a token layer first** (non-visual-change groundwork): add `--space-*`, `--radius-*`, `--text-*`, `--shadow-*`, and a neutral/surface ramp to `:root`; this is the backbone everything else reuses. Keep existing colour tokens.
2. **Quiz-question screen (`#s-quiz`)** — the representative page (see below). Redesigning it forces you to define the core primitives: **Button, Input, Option, Card, ProgressBar, TopicTag/Badge, Diagram frame, disabled/selected states.**
3. **Homepage (`#s-home`)** — hero + subject cards (the marketing first impression; fix the `<div>`→`<button>` a11y here).
4. **Report screen (`#s-done`)** — the richest composition (score rings, dual-score block, topic rows, solution cards, tier badges, recs, CTA). Consumes every primitive from steps 2–3; pull the inline-styled JS blocks back into classes here.
5. **Teaser + email gate (`#s-email`)** — reuses ring, badges, inputs; small surface.
6. **Share card (`<canvas>`)** — separate render path; restyle **last** to mirror the finalised tokens/fonts.
7. **Cross-cutting passes** (do alongside 2–6): focus-visible styles, roles/labels/`aria-live`, SVG `<title>`/`role="img"`, `prefers-reduced-motion`, replace `alert()` with inline error UI, add loading indicators, extract the duplicated score-colour thresholds into one helper.

---

## Recommended first page (verified from code)

**Redesign the quiz-question screen (`#s-quiz`, lines 295–310) first.** The hypothesis holds — verified against the code:

- **Highest exposure:** every student sees it ~40 times per run; it is the product's core loop.
- **Defines the most reusable primitives:** it is the only screen combining the primary **Button** (+ disabled state), **secondary Button**, **Option** buttons (+ selected), **text/numeric Input**, **Card**, **ProgressBar**, **TopicTag/paper Badge**, and the **Diagram frame** — the exact set the other three screens reuse. Getting these right here cascades everywhere.
- **Exercises the hardest cross-cutting concerns:** inline SVG diagrams, Unicode/HTML "equations", input + selected + disabled states, MCQ-vs-numeric branching, and mobile input ergonomics — i.e. it surfaces the diagram-a11y, focus-state, and math-rendering constraints before they bite on other screens.

*(The report screen `#s-done` is the most visually complex and should be **second-to-last** — it composes the primitives established by the quiz and home screens, so redesigning it first would mean inventing primitives out of context.)*
