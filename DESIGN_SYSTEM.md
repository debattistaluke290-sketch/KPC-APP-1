# KPC Notes — Design System

Companion to `UI_AUDIT.md`. This defines **one** design direction and the full token + component specification for the diagnostic app. It is a specification only — no application files are changed in this phase. Implementation happens in a later phase (foundation tokens first, then the quiz page).

Constraints carried from the audit that this system must respect:
- **The quiz is intentionally feedback-free during play** ("we won't tell you if it's right"). Correct/incorrect option states therefore belong to the **results answer-review**, not the live quiz. The redesign must not introduce live right/wrong feedback (that would change the product).
- The stack stays **vanilla HTML/CSS/JS in `public/index.html`** (Cloudflare Pages static, no build). Tokens live in `:root`; "components" are documented CSS class families + small render helpers, not framework components.
- The HTML↔JS contract (ids, class names, the `green|amber|red` / `right|wrong|blank` vocab, report fields) is preserved.

---

## THE DIRECTION (one only): **"Calm Academic"**

A quiet, editorial study surface — like a premium printed workbook rebuilt as a modern assessment tool. Content sits on **warm paper** with generous whitespace and confident typography. Colour is used **functionally, not decoratively**: deep purple anchors the brand and headings, brand purple drives actions, pink appears once per view at most, and true semantic colours (green/red/amber/blue) are reserved for meaning. Separation is achieved with **hairline borders and space**, not heavy shadows or big rounded cards. The result reads as credible to a parent and calm to a stressed 15-year-old, and never as a generic AI dashboard or a cartoon quiz game.

Three words: **credible · calm · legible.**

---

## 1. Brand principles
1. **Learning first.** Question content is the hero; chrome recedes.
2. **Earned trust.** Restraint and precision signal a serious educational product (parents are watching).
3. **Colour with intent.** Every non-neutral colour means something (brand, action, or status).
4. **Calm under pressure.** Long sessions demand low-glare surfaces, steady layout, no visual noise.
5. **Honest, not gamified.** No streaks, confetti, or fake precision. Results are guidance, framed cautiously.
6. **Accessible by default.** Legible, keyboard-navigable, not colour-only, comfortable on any phone.

## 2. Visual personality
Editorial · understated · precise · warm-neutral · typographic. Think a modern university press or a well-made revision guide — not a SaaS dashboard, not Duolingo. Flat surfaces, hairline rules, one accent, lots of air.

---

## 3. Colour roles

| Role | Token | Value | Use |
|---|---|---|---|
| Brand ink (deep purple) | `--ink` | `#341D54` | brand mark, top nav, major headings, strong moments, focus-dark surfaces |
| Primary (brand purple) | `--primary` | `#7C27AC` | primary buttons, selected/active states, progress fill, links |
| Accent (pink) | `--accent` | `#D6587E` | **sparingly** — a single highlight/underline/emphasis per view |
| Paper (app bg) | `--bg-app` | `#F7F5F0` | the calm session background |
| Surface | `--bg-card` | `#FFFFFF` | cards, inputs, options |

Intensity rule: **ink for identity, purple for action, pink as a whisper.** Never all three at equal weight on one screen. Pink is never a large fill or a text-body colour.

## 4. Neutral colour scale (warm-tinted "paper")

| Token | Value | Use |
|---|---|---|
| `--n-0` | `#FFFFFF` | card / control surface |
| `--n-25` | `#FBFAF7` | subtle inset (solution boxes, diagram frames) |
| `--n-50` | `#F7F5F0` | app background (paper) |
| `--n-100` | `#EFECE6` | sunken panels, skeleton base, progress track |
| `--n-200` | `#E6E1DC` | **hairline borders** (default) |
| `--n-300` | `#D8D2CB` | strong borders, dividers |
| `--n-400` | `#B4AEA6` | disabled text/icons, placeholders on paper |
| `--n-500` | `#8B8698` | tertiary text (hints — large/non-essential only) |
| `--n-600` | `#6A6475` | **secondary text** (≥4.5:1 on paper) |
| `--n-800` | `#2C2739` | strong body |
| `--n-900` | `#211B2E` | **primary text** (near-black, faint purple) |

Text tokens (derived): `--text-primary:#211B2E` · `--text-secondary:#6A6475` · `--text-tertiary:#8B8698` · `--text-heading:#341D54` · `--text-on-dark:#FFFFFF`. A soft brand hairline `--border-brand:#E7DEF0` is available for brand-tinted separations.

## 5. Primary, secondary & accent (interactive)

| Token | Value | Notes |
|---|---|---|
| `--primary` | `#7C27AC` | primary action / active |
| `--primary-hover` | `#6A1F94` | |
| `--primary-active` | `#59187C` | |
| `--primary-soft` | `#F3EBF8` | selected-option fill, soft purple wash |
| `--primary-ring` | `rgba(124,39,172,.35)` | focus ring |
| `--ink` / `--ink-hover` | `#341D54` / `#2A1745` | brand/nav |
| `--accent` / `--accent-soft` | `#D6587E` / `#FCEEF3` | sparing accent |

Contrast: white on `--primary` = 5.9:1 ✓; white on `--ink` = 12.0:1 ✓; white on `--accent` ≈ 3.9:1 → **pink is not used behind white body text** (use for large/bold only or as a border/underline).

## 6. Status states (correct / incorrect / warning / information)

The brief requires green, red, amber **and blue**. Blue (info) is new to the app.

| State | Text/icon | Background | Border | Use |
|---|---|---|---|---|
| Correct / success | `--success #1F7A4D` | `--success-bg #E4F6EC` | `#BCE6CC` | correct answer in review; secure topic |
| Incorrect / danger | `--danger #C0392B` | `--danger-bg #FBE7E7` | `#F1CACA` | incorrect answer in review; validation error |
| Warning / amber | `--warning #A66A00` | `--warning-bg #FBF0DA` | `#F0DCB0` | "possible gap" topic; caution notes |
| Information / blue | `--info #2563A8` | `--info-bg #E7F0FB` | `#C6DBF3` | instructions, "paper question" hint, tips |

Topic-band mapping (keeps the existing `green|amber|red` vocab): Secure→success, Possible gap→warning, Priority concern→danger. **Feedback is never colour-only** — always paired with an icon (✓ / ✕ / ! / i) and text.

---

## 7–13. Typography system

### 8. Font families
- `--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`
  **Recommendation:** self-host **Inter** (variable `woff2`, `font-display:swap`) in `public/`. It's calm, highly legible at small sizes, has true tabular numerals for scores, and — self-hosted — adds **no external request/CSP concern**. If a webfont is undesirable, the system stack fallback renders with zero breakage.
- `--font-display` *(optional):* `"Fraunces", Georgia, serif;` — a serif **only** for the hero/landing display heading, to add editorial/academic warmth. Ship sans-only if you prefer maximum simplicity.
- Numerals: apply `font-variant-numeric: tabular-nums` to scores, progress, and question counts (steady alignment). No separate mono family needed.

### 9–10. Type scale (16px root)

| Token | Size | Line-height | Weight | Role |
|---|---|---|---|---|
| `--text-xs` | 12px | 1.4 | 500 | overline labels, captions, meta |
| `--text-sm` | 14px | 1.5 | 400/500 | supporting text, helper, badges |
| `--text-base` | 16px | 1.6 | 400 | body |
| `--text-md` | 18px | 1.55 | 500 | emphasised body, h4 |
| `--text-lg` | 20px | 1.4 | 600 | **question text (mobile)**, h3 |
| `--text-xl` | 24px | 1.35 | 600 | **question text (desktop)**, h2 |
| `--text-2xl` | 30px | 1.2 | 700 | page/section title, h1 |
| `--text-3xl` | 38px | 1.15 | 700 | hero display (landing) |
| `--text-score` | 44–56px | 1 | 700 | result numerals (tabular) |

Letter-spacing: headings −0.015em; overline labels +0.06em UPPERCASE. Max reading measure: **60–66 characters** for questions and prose.

### 11. Question text
`--text-xl` desktop / `--text-lg` mobile, weight 600, `--text-primary`, line-height 1.35–1.45, constrained to the reading measure. Dominant on the screen; nothing competes.

### 12. Supporting text (instructions, "give your answer in…")
`--text-sm`/`--text-base`, weight 400, `--text-secondary`. Visually secondary but comfortably readable; sits directly under the question with clear spacing, never styled like a warning.

### 13. Mathematical notation
SEC-level maths/physics needs **no typesetter** — keep **Unicode + HTML** (`² ³ × ÷ ° Ω λ → √ ≤ ≥`). Rules: render at the surrounding text size; enable `tabular-nums`; give operators breathing room; in worked solutions style the **final answer** with `--primary` semibold (existing `.final`), and set display fractions/steps on a `--n-25` inset with line-height 1.7. If richer notation is ever needed, adopt **KaTeX** (self-hosted) — documented as the upgrade path, not implemented now.

---

## 14. Spacing scale (4px base)
`--space-1:4 · -2:8 · -3:12 · -4:16 · -5:20 · -6:24 · -8:32 · -10:40 · -12:48 · -16:64`. Use only these; no arbitrary values. Vertical rhythm: 8/16/24 for intra-component, 32/48 between sections.

## 15. Border-radius scale
`--radius-sm:6 · --radius-md:10 · --radius-lg:14 · --radius-xl:18 · --radius-pill:999`. Inputs/buttons/options **10**; cards **14**; chips/badges **pill**. **Do not exceed 18** (avoids the "giant rounded card" look; the current 22px hero radius drops to 14–18).

## 16. Shadow scale (soft, purple-tinted, restrained)
| Token | Value | Use |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(52,29,84,.06)` | resting interactive controls |
| `--shadow-sm` | `0 2px 8px rgba(52,29,84,.06)` | raised card / dropdown |
| `--shadow-md` | `0 8px 24px rgba(52,29,84,.10)` | popovers |
| `--shadow-lg` | `0 20px 48px rgba(52,29,84,.16)` | modals only |
**Prefer borders to shadows.** Static content uses hairlines; shadow is reserved for genuinely elevated/floating surfaces. No pure-black shadows.

## 17. Border styles
Default hairline **1px `--n-200`**. Inputs/options **1.5px** (so focus/selected recolour without width change → no layout shift). Dividers **1px `--n-200`**. Focus ring: **2px `--primary-ring`** + 2px offset via `:focus-visible`. Selected/active recolours border to `--primary` at the **same width**.

## 18. Container widths
`--container-reading:680px` (questions/solutions) · `--container-content:760px` (forms/report body) · `--container-wide:1080px` (desktop shell / two-column report). Gutters: **16px** (<640), **24px** (640–1024), **32px** (>1024).

## 19. Breakpoints (mobile-first)
`--bp-sm:480 · --bp-md:640 · --bp-lg:1024 · --bp-xl:1280`. Phone <640 · tablet 640–1024 · desktop >1024. Add `@media` queries (the app currently has none).

---

## 20. Button hierarchy

| Variant | Fill | Text | Border | Height | Use |
|---|---|---|---|---|---|
| **Primary** | `--primary` | white | none | 48 (44 min) | the one main action per view (Next, Unlock, Start) |
| **Secondary** | `--n-0` | `--primary` | 1.5px `--n-200` | 48 | alternative action (Back) |
| **Text** | none | `--primary` | none | auto | low-emphasis (Skip, Restart, Share) — underline on hover |
| **Destructive** | `--danger` | white | none | 48 | rare (reserved) |

Radius `--radius-md`; weight 600; `--shadow-xs` on primary only; hover darkens; active `translateY(1px)`; disabled `--n-100` fill + `--n-400` text, `cursor:not-allowed`. **One primary per view.** Full-width on mobile; primary may be inline-right on desktop for the quiz. Always `:focus-visible` ring.

## 21. Form controls
Real **`<label>` above each field** (replace placeholder-only). Field: `--n-0`, 1.5px `--n-200`, `--radius-md`, padding 12–14px, **font-size ≥16px** (prevents iOS zoom), placeholder `--n-400`. Focus: `--primary` border + ring. Error: `--danger` border + helper row with `✕` icon + message (`aria-describedby`, `aria-invalid`). Checkbox: `accent-color:--primary`, ≥20px, label clickable.

## 22. Answer-option styling
Full-width button, left-aligned, `--n-0`, **1.5px `--n-200`**, `--radius-md`, padding 14–16, **min-height 52**, multiline supported, a **reserved 22px indicator slot** on the left (radio dot) so selection never shifts text.

| State | Treatment |
|---|---|
| Default | white, `--n-200` border |
| Hover | `--n-300` border, `--n-25` bg |
| Focus-visible | 2px `--primary-ring` |
| Selected | `--primary` border (same width) + `--primary-soft` bg + filled radio dot |
| Correct *(review only)* | `--success` border + `--success-bg` + ✓ |
| Incorrect-selected *(review only)* | `--danger` border + `--danger-bg` + ✕ |
| Disabled | 60% opacity, no pointer |

No layout shift between any states (border width constant; indicator in reserved slot).

## 23. Card styling
`--n-0`, **1px `--n-200`**, `--radius-lg`, padding 20 (mobile) / 28 (desktop). `--shadow-xs` only if interactive/raised. **Do not nest cards.** **Not everything is a card** — the question can sit on paper with whitespace; cards are for grouped/elevated content (subject tiles, solution items, the report shell).

## 24. Navigation styling
Slim **top bar**: KPC mark (ink) + wordmark left, context right (e.g. site tag / "Exit"). `--bg-app` or white with a 1px `--n-200` bottom hairline; height ~56–64px. During the quiz, the bar is minimal (brand + progress). No sidebar. On mobile the bar may host a compact back/exit affordance.

## 25. Progress indicator styling
Slim track **6px**, `--n-100`, `--radius-pill`; fill **solid `--primary`** (restrained — no rainbow gradient), animated width. Paired label "Question X of N" (`--text-sm`, `--text-secondary`) + optional %. `role="progressbar"` with `aria-valuenow/min/max`. Light, not heavy.

## 26. Result-card styling
Calm, editorial. **Headline result** as a large tabular numeral (or a thin ring) in a semantic colour on `--n-0`. Beneath, the **two scores** (estimated exam-level, secure-readiness) in a small labelled 2-row table with the "on this sample — a guide, not a prediction" caption. **Topic performance** as a clean list of rows (dot + name + `c/n` + status pill) — **not** a busy chart. Recommendation tiers as quiet labelled rows. No game-screen theatrics, no misleading precision.

## 27. Feedback-state styling (FeedbackPanel)
Inset panel: tinted bg + 1px status border (or a 3px left rule), a **status icon** + label + message, `--radius-md`, `--text-sm/base`. Variants success/danger/warning/info per §6. Used in the **results answer-review** (correct/incorrect) and for instructions/tips (info). Announced via `aria-live` when it appears dynamically.

## 28. Diagram & image-container styling
Framed inset: `--n-25`, 1px `--n-200`, `--radius-md`, padding 12–16, centred. `svg{max-width:100%;height:auto}` — **never stretch or crop**; scale proportionally. Optional caption (`--text-xs`, `--text-secondary`) below. **A11y:** each SVG gets `role="img"` + `<title>` + `<desc>` (the current diagrams have none). Keep diagram colours mapped to tokens where practical.

## 29. Modal styling (ConfirmationModal)
*(New component — e.g. an exit-confirmation. The app has no modal today; adding "leave the quiz?" is a small new feature — flagged for approval before build.)* Centred dialog, `--n-0`, `--radius-lg`, `--shadow-lg`, max-width 420, overlay scrim `rgba(52,29,84,.45)`. `role="dialog"`, `aria-modal="true"`, labelled by its heading, **focus-trapped**, **ESC closes**, focus returns to the trigger. Actions: primary confirm + text cancel.

## 30. Loading-skeleton styling
Placeholder blocks matching content shape: `--n-100` base with a **subtle shimmer** (disabled under reduced-motion → static). Use for the question-fetch gap and report build (replaces the current alert-only gap). `aria-busy="true"` on the region; announce "Loading…" politely.

## 31. Empty & error states
Centred composition: a small **restrained** glyph (not a cartoon), a heading (`--text-lg`), one line of `--text-secondary`, and a clear action button. **Error** replaces the current `alert()` calls (question-load failure, submit failure) — friendly, with a Retry. **Empty** e.g. a subject with no questions. `role="alert"` for errors.

## 32. Animation & transition rules
Durations **120–240ms**, easing `cubic-bezier(.2,.7,.2,1)` (ease-out). Transition **colour/opacity/transform** only — never layout properties. Screen change = gentle 160ms fade/slide. Progress bar animates width. **No** looping, bouncing, confetti, or interaction-delaying animation. **`@media (prefers-reduced-motion: reduce)`** disables transforms/animations and keeps everything instant.

## 33. Accessibility rules
- Semantic controls: `<button>` for actions, `<a>` for navigation, real form controls. **No `<div onclick>`** (fixes the subject cards).
- One `<h1>` per screen; logical heading order.
- Every input labelled; errors linked via `aria-describedby`, `aria-invalid`.
- **Visible `:focus-visible`** ring on every interactive element.
- MCQ options as a **radiogroup** (`role="radiogroup"`, options `aria-checked`), or native radios visually restyled.
- Diagrams: `role="img"` + title/desc.
- **`aria-live`** for score reveal, validation errors, progress, and answer-review feedback.
- Contrast ≥ **4.5:1** text / **3:1** large text & UI borders; **never colour-only** (icon + text).
- Touch targets ≥ **44×44px**; skip-to-content link; modal focus-trap + ESC.
- Respect reduced motion. **Do not claim WCAG conformance without a real audit.**

## 34. Mobile interaction rules
- Targets ≥44px; generous spacing between tappables.
- Primary action **thumb-reachable** (bottom); consider a sticky action bar that the on-screen keyboard can't cover.
- Inputs **≥16px** font (no iOS zoom); scroll focused input into view on keyboard open.
- **Safe-area insets** (`env(safe-area-inset-*)`); **dynamic viewport** units (`svh`/`dvh`) for full-height.
- **No horizontal scroll** at 320px; single-column stacking; no hover-only affordances; diagrams scale, never crop.

---

## Recommended component structure

Vanilla codebase → these are **documented CSS class families + small render helpers**, not framework components. Each maps to existing DOM where possible.

| Component | Purpose | Visual treatment | States | Mobile | Accessibility |
|---|---|---|---|---|---|
| **AppShell** | Page frame + paper bg + max-width | `--bg-app`, centred container, top nav slot | — | full-height (`dvh`), safe-area padding | landmark `<main>`, skip link |
| **TopNavigation** | Brand + context | slim bar, ink mark, 1px bottom hairline | default / quiz-minimal | compact height, optional back | `<header><nav>`, current-screen label |
| **PageContainer** | Width + gutter control | reading/content/wide widths | — | 16px gutters | — |
| **PageHeader** | Screen title + overline | `--text-2xl` heading, `--text-xs` overline, optional accent underline | — | stacks | `<h1>` |
| **SubjectCard** | Choose a subject | white card, 1px border, icon chip, title, one-line desc, "Start" text-link | default/hover/focus/pressed | **1-col stack <480**, equal heights | **`<button>`** (not div), labelled, focus ring |
| **QuizHeader** | Progress + topic context | topic overline + ProgressIndicator | — | compact | progress semantics |
| **ProgressIndicator** | Position in quiz | 6px track, solid `--primary` fill, "X of N" | animates width; reduced-motion static | full-width | `role="progressbar"` |
| **QuestionCard** | Hold one question | mostly **card-less**: question on paper; optional subtle container for the input group | — | full-width, generous padding | region labelled by question number |
| **QuestionNumber** | Orient the student | `--text-sm` `--text-secondary`, tabular | — | — | part of accessible name |
| **QuestionPrompt** | The question | `--text-xl/lg` 600, `--text-primary`, 60–66ch | HTML/Unicode preserved | 20px, no clip | proper heading/label association |
| **SupportingInstruction** | "Give your answer in…" | `--text-sm` `--text-secondary` | — | wraps | linked to input as description |
| **DiagramContainer** | Frame an SVG | `--n-25` inset, 1px border, centred, caption | — | scales, never crops | `role="img"` + title/desc |
| **AnswerOption** | One MCQ choice | §22 | default/hover/focus/selected/correct*/incorrect*/disabled | ≥52px, multiline | radio semantics, `aria-checked` |
| **AnswerOptionGroup** | Group + single-select | vertical stack, 10px gap | manages selection | full-width | `role="radiogroup"` + label |
| **PrimaryButton** | Main action | solid `--primary` | default/hover/active/disabled/focus | full-width, thumb zone | `<button>`, ring, disabled announced |
| **SecondaryButton** | Alt action | outline | as above | full-width | `<button>`, ring |
| **TextButton** | Low-emphasis | text-only `--primary` | default/hover/focus | adequate hit area | `<button>` (Skip/Restart) or `<a>` |
| **FeedbackPanel** | Status/instruction | §27, icon+text | success/danger/warning/info | full-width | `aria-live`, not colour-only |
| **ResultsSummary** | Headline + dual scores | large numeral/ring + 2-row score table + caption | — | stacks | `aria-live` on reveal |
| **ResultsBreakdown** | Topic list wrapper | list of TopicPerformanceCards + section label | — | full-width list | list semantics |
| **TopicPerformanceCard** | One topic row | dot + name + `c/n` + status pill | secure/mostly/gap/priority | row wraps gracefully | label + status text (not colour-only) |
| **ConfirmationModal** | Exit/confirm *(new)* | §29 | open/closing | full-width sheet option on mobile | dialog, focus-trap, ESC |
| **LoadingSkeleton** | Fill fetch gaps | §30 shimmer blocks | animating/static (reduced-motion) | matches layout | `aria-busy`, polite "Loading" |
| **EmptyState** | Nothing to show | §31 centred | — | centred | informative text |
| **ErrorState** | Failure + retry | §31 danger flavour + Retry | — | centred | `role="alert"` |
| **Badge/Pill** | Status/label chip | pill, tinted per status; **one** badge system (replaces `.pill`/`.pill-lite`/`.lvl`/`.mark`/tier) | success/warning/danger/info/neutral | — | text + icon, not colour-only |

---

## Direction summary (single, final)
**Calm Academic** — warm-paper surfaces, hairline separation, one confident type family, **ink for brand / purple for action / pink as a whisper**, true semantic status colours, restrained motion, and accessibility built in. It elevates the current app's genuine brand equity (the purple/pink palette, the card language) into something a parent trusts and a student finds calm — without gradients-everywhere, giant rounded cards, or gamified noise. All values above are tokenisable directly into `:root`, which is the first implementation step.

---

### Next steps in the playbook (with the mandated checkpoint)
- **Prompt 3 — foundation:** implement these tokens + shared primitives (Button, Card, Container, Typography, Badge, Progress, Modal, Skeleton, FeedbackPanel) in `:root`/CSS, **without redesigning any page**, keeping all behaviour identical.
- **Prompt 4 — quiz page:** redesign `#s-quiz` to this system as the representative page, then **stop for your review** (ChatGPT's own instruction). I'll do 3 & 4 on a branch and **not push to the live site** until you approve the new look.
- Prompts 5–8 (critical review → remaining pages → mobile/a11y pass → final polish) follow only after the quiz page is approved.
