# Responsive & Accessibility Report

Pass over the redesigned app (`ui-redesign` branch). Honest scope: this is **hands-on structural + in-browser testing**, not a certified audit. **WCAG conformance is not claimed** — a real screen-reader pass, a real-device pass, and automated tooling are still required (listed at the end).

## Pages tested
Home (`#s-home`), Quiz (`#s-quiz`) incl. MCQ/work/diagram/final states + exit modal, Email gate (`#s-email`), Results (`#s-done`).

## Widths tested (Chromium preview)
320 · 375 · 768 (tablet) · desktop (~1280). At each: checked horizontal overflow, clipping, cramping, tap sizing.
- **No horizontal overflow** at 320/375/768 (measured `scrollWidth === clientWidth`).
- Layout is a centred reading column (≤600–680px) on all sizes — calm and readable; desktop keeps a centred column by design (not stretched).

## Accessibility — issues found & FIXED
| Issue | Fix |
|---|---|
| Subject cards were non-focusable `<div onclick>` | now `<button>` — keyboard-focusable, `type="button"` |
| Form inputs were placeholder-only (no labels) | real `<label for>` on name + email; `autocomplete` added |
| Diagrams had no text alternative | container `role="img"` + `aria-label` from `DIA_ALT` describing the drawing's geometry **without revealing the answer** |
| MCQ options not exposed as a choice group | `role="radiogroup"` + `role="radio"` + `aria-checked`; **arrow-key** selection |
| No visible keyboard focus | global `:focus-visible` ring on all interactive elements |
| No reduced-motion support | `@media (prefers-reduced-motion: reduce)` disables transitions/animations |
| Progress bar not announced | `role="progressbar"` + `aria-valuenow/min/max`, updated per question |
| Exit/Skip text buttons under 44px | bumped to **44px** min touch target |
| Modal (new) needed a11y | `role="dialog"`, `aria-modal`, labelled, **focus-trap**, **ESC** to close, focus restore, backdrop-click close |
| Screen change silent to SR | focus moves to the question on navigation; `aria-live` on the question count |
| Status/feedback colour-only | topic bands & marks pair colour with **text** (and options use a radio-dot icon) |

## Responsive — issues found & FIXED
| Issue | Fix |
|---|---|
| Long topic status labels (e.g. "Priority concern — limited evidence") clipped off-screen on mobile | topic row switches to a grid on ≤560px: **name + count on line 1, status label on its own line** — no clip, no collision |
| Answer selection could shift text | radio-dot lives in a **reserved slot**; borders keep constant width → **zero layout shift** across states |
| Diagrams | `svg{max-width:100%;height:auto}` — scale proportionally, never cropped/stretched |

## Contrast (spot-checked, not automated)
- Body `--text-primary #211B2E` on paper `#F7F5F0` ≈ 14:1 ✓
- Secondary `--text-secondary #6A6475` on white ≈ 5.9:1, on paper ≈ 5.5:1 ✓ (AA for normal text)
- White on `--primary #7C27AC` ≈ 5.9:1 ✓ · on `--ink #341D54` ≈ 12:1 ✓
- `--text-tertiary #8B8698` (~3.4:1) is used only for **placeholders/non-essential hints**, not body copy.

## Still remaining / NOT done
- **Real screen-reader pass** (VoiceOver / NVDA) — semantics/attributes are in place but end-to-end SR narration was not tested.
- **Real-device mobile** (iOS Safari): on-screen-keyboard behaviour, `env(safe-area-inset)`, dynamic viewport (`dvh`), landscape — not tested on hardware.
- **Automated tooling** (axe / Lighthouse) — not run in this environment.
- **Diagram spatial reasoning:** alt text describes the drawing, but genuinely spatial questions remain harder for SR users than for sighted users (inherent limitation).
- The hero retains subtle decorative gradient glows (kept as a brand moment).
- Copy accuracy ("worked solution by email") — a content issue, not accessibility.

## Manual tests you should still run before claiming compliance
1. VoiceOver (iOS/Mac) or NVDA (Windows) through a full quiz + results.
2. A real iPhone/Android: keyboard on numeric answers, safe-area, landscape.
3. Lighthouse/axe on the deployed preview.
