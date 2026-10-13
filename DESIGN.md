# DESIGN.md — Dentis Prishtina

Art direction and token rationale. Filled by `/design`. Stays in sync with `plan.md`
(Section rhythm, Copy lock, Motion contract, Reference Blueprint).

---

## The business

| | |
|---|---|
| What it is | Dentis Prishtina — a dental clinic in Prishtina, Kosovo |
| Who visits | Adults for checkups · people needing implants / whitening / smile work · parents booking for a child |
| The one action | Book an appointment (phone / WhatsApp **+383 44 100 100**) |
| **The characteristic thing** | “The first visit without fear” — calm, clean, modern, trustworthy |
| Does NOT want to look like | Hospital portals · generic hospital-style layouts |

---

## Direction: Quiet Courage

A calm, airy dental landing that borrows Sky Clinics’ band grammar and MINEMAL’s sparse quiet.
Soft stone surfaces and a teal trust accent lower the pulse; the brand name owns the first viewport.
Scroll settles the hero title, then alternating service media leads to a dual Book / WhatsApp close —
courage without clinical coldness.

| Axis | Position | Why |
|---|---|---|
| editorial ↔ corporate | editorial-leaning | Human reassurance, not clinic software |
| warm ↔ cool | warm-neutral + cool accent | Stone warmth; teal for trust, not portal blue |
| dense ↔ airy | airy | Fear drops when space is generous |
| geometric ↔ organic | soft-geometric | Clean lines; round graphic only on band 9 |
| understated ↔ bold | understated | Confidence without shout |

---

## Principles

Decision rules. Each one must be able to reject a future choice.

1. **Calm first.** If a colour, motion, or density raises pulse, reject it — fear is the enemy.
2. **One job per band.** If a section needs a second headline or a card grid to “explain more,” cut it.
3. **Blueprint over mood.** If a layout choice matches MINEMAL mood but breaks a Sky Clinics measurement, reject it.

---

## Signature element

**What:** Fullscreen hero brand settle — title opacity and slight rise linked to early scroll (photo/video layer under type; no WebGL).
**Why it belongs:** Makes “first visit without fear” feel physical: the page softens as you arrive.
**Where:** Band 1 only.

---

## Asset brief

| Job | Source | This project |
|---|---|---|
| Icons | Lucide | UI chrome only |
| Imagery | `client` | subjects: calm clinic interior · gentle treatment close-ups · team/trust · Prishtina place; placeholders until client files; peer comps for build only |
| PNG cutouts | pre-cut only | no |
| Shapes | Haikei / CSS | yes — soft round graphic as band 9 second layer (Approved WebGL exception) |
| Illustrations | unDraw | no |
| UI patterns | shadcn + tokens | restyle; no default registry look |
| Motion | `motion` | hero scrub · approach reveal · closing sticky settle |

---

## Token rationale

| Group | Decision | Why |
|---|---|---|
| Color anchor | Teal accent `oklch(0.52 0.07 195)` on warm stone | Trust + calm; not hospital blue or terracotta cliché |
| Neutral temperature | Warm stone surfaces (hue ~85–95) | Soft clinic light; closing panel matches peer warm grey role |
| Display / body type | Fraunces + Source Sans 3 | Soft optical display for courage; clear body for Albanian UI · licence: OFL (Google Fonts / `next/font`) |
| Type scale / tracking | Display tight (−0.02em) · body normal · measure ≤75ch | Matches cinematic peer hierarchy without shouting |
| Spacing / section rhythm | Alternating | From `plan.md`; consecutive bands do not share the same vertical pad |
| Radius / elevation | Small radius (8–12) · shadow almost none | Quiet; no card chrome |
| Motion signature | Scroll-scrub hero + ≤2 reveals + sticky close | Matches blueprint drivers; rebuild with `motion` |

## Tokens (`@theme`)

```css
@theme {
  /* color */
  --color-surface: oklch(0.985 0.006 95);
  --color-surface-container: oklch(0.955 0.01 95);
  --color-surface-warm: oklch(0.94 0.014 85);
  --color-on-surface: oklch(0.28 0.02 250);
  --color-on-surface-muted: oklch(0.45 0.015 250);
  --color-accent: oklch(0.52 0.07 195);
  --color-on-accent: oklch(0.99 0.005 95);
  --color-accent-soft: oklch(0.92 0.03 195);
  --color-outline: oklch(0.82 0.01 95);

  /* type */
  --font-display: "Fraunces", ui-serif, Georgia, serif;
  --font-sans: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1.0625rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.75rem;
  --text-4xl: 3.5rem;
  --text-hero: clamp(2.75rem, 6vw, 5.5rem);
  --tracking-display: -0.02em;
  --leading-body: 1.55;
  --leading-display: 1.1;

  /* space — Alternating rhythm */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-gutter: clamp(1rem, 4vw, 3rem);
  --space-band-tight: var(--space-8);
  --space-band-mid: var(--space-16);
  --space-band-airy: var(--space-24);
  --space-band-video-top: clamp(12rem, 25vw, 22.5rem);
  --space-band-video-x: clamp(0.75rem, 3.3vw, 3rem);
  --space-band-split-y: 1.4rem;
  --space-band-split-x: clamp(4rem, 8vw, 7.2rem);
  --space-split-gap: 4.5rem;

  /* radius / elevation */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
  --shadow-soft: 0 1px 2px oklch(0.28 0.02 250 / 0.06);

  /* motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-soft: cubic-bezier(0.33, 1, 0.68, 1);
  --duration-fast: 150ms;
  --duration-mid: 420ms;
  --duration-slow: 720ms;

  /* chrome */
  --hero-min-height: 100vh;
  --header-height: 4.5rem;
  --min-height-approach: 20.3125rem;
  --min-height-approach-lg: 33.75rem;
  --max-w-approach: 56.25rem;
}
```

---

## Contrast

WCAG 4.5:1 body · 3:1 large / UI · Verified 2026-10-13 with `culori` `wcagContrast`.

| Foreground | Background | WCAG | Pass | APCA Lc |
|---|---|---|---|---|
| on-surface | surface | 13.96:1 | yes | — |
| on-surface-muted | surface | 7.12:1 | yes | — |
| on-accent | accent | 5.17:1 | yes | — |
| accent | surface | 5.10:1 | yes (large/UI) | — |
| on-surface | surface-warm | 12.22:1 | yes | — |

---

## Layout plan

Mirror the Reference Blueprint in `plan.md` (same order, same archetypes).

| Section / band | Reference band | Archetype | Spacing token | Notes |
|---|---|---|---|---|
| Hero | 1 | fullscreen brand | none (100vh) | photo/video layer under type · text logo until SVG · scroll scrub title |
| Video intro | 2 | centred 16:9 | `--space-band-airy` + gutter | ambient muted; no copy column |
| CTA strip | 3 | centred action | `--space-band-tight` | 1 primary Book |
| Approach | 4 | centred editorial | `--space-band-mid` | about copy; reveal |
| Service 01 | 5 | split media left | `--space-band-split-y` / `--space-band-split-x` · gap `--space-split-gap` | portrait ~0.70 |
| Service 02 | 6 | stacked 16:9 | `--space-band-mid` | 2 CTAs stacked |
| Service 03 | 7 | split media right | same as 5 | keep alternate side |
| Service 04 | 8 | split media left | same as 5 | |
| Closing contact | 9 | sticky dual CTA | `--space-band-airy` on `--color-surface-warm` | photo + soft round shape · Book + WhatsApp · no form |

- [x] Band order matches the blueprint · Do not invent respected
- [x] Reference grammar logged in Decisions
- [x] Hero `100vh` · header ≥ 40px · home ≥ 5 sections

---

## Motion plan

| Moment | What moves | Duration token | Easing token |
|---|---|---|---|
| Hero scrub | Title opacity + translateY over early scroll | `--duration-slow` (scroll-linked) | `--ease-soft` |
| Approach reveal | Centred copy fades/rises once into view | `--duration-mid` | `--ease-out` |
| Closing sticky | Panel settles while dual CTAs stay reachable | `--duration-mid` | `--ease-soft` |

- [x] Scroll reveals ≤ 2 · `prefers-reduced-motion` verified (scrub → static frame; reveal → instant show; sticky → normal flow)

---

## Reference overrides

Reference grammar kept over a Never rule (pill CTAs, badges, wave dividers…), one line each.

**Logged reference exceptions** (hard lock vs peer — `design.mdc`):

| Lock | Peer measured | Band | Status (`Proposed` / `Approved: <name> <date>`) |
|---|---|---|---|
| WebGL canvas layers → photo/video + soft shapes; keep fullscreen, layered-media count, scroll-driven motion | Sky Clinics canvas hero + closing graphic | 1, 9 | Approved: Hava Jusufi 2026-10-13 |

Other decisions go to `plan.md` → Decisions / Reference exceptions.

---

## Decisions

| Date | Decision | Why |
|---|---|---|
| 2026-10-13 | Direction Quiet Courage · Fraunces + Source Sans 3 · teal on warm stone | Express “first visit without fear” under Sky Clinics grammar |
| 2026-10-13 | Reference exception: no WebGL; photo/video + soft shape on bands 1 & 9 | Approved Hava Jusufi; fidelity via composition + motion driver |
