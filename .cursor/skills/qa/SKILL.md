---
name: qa
description: Full-site review on the preview URL — reference fidelity per page, 375 / 768 / 1440 screenshots, critique against DESIGN.md and the rules, an adversarial pass for silent bugs, accessibility, performance on a production build. Reports Blocker / High / Medium / Nit; fixes only after approval. Use before ship or when the user says QA, review, audit.
---

# /qa — full-site review

Not a substitute for the per-unit checks in `/build`. The whole site, near the end.

## Gate

1. `Status: Building`, every Sitemap `live` route built. Missing → list them, stop.
2. A URL that serves a **production build**: Cloudflare preview, or locally `pnpm build && pnpm preview`
   (shops: staging/Preview URL, or `pnpm build && pnpm start` with the **plan Backend** local stack
   and seed). **Never measure `next dev`**. Start/stop the local server yourself on a fixed port.
3. Read `plan.md`, `DESIGN.md`, `design.mdc`, `site-chrome.mdc`, `reference-fidelity.mdc`. Shops:
   `layer-ecommerce.mdc`, providers docs, and `shop-checks.md`.
4. `node .cursor/brain/check-project.mjs` passes.

## Steps

1. **Fidelity (Blocker tier).** Home + every live Sitemap route at 1440 and 375 against `brief/refs/`,
   row by row, including interaction and motion. Overlay files from `/build` must exist for bands.
2. **Screenshots** of every template at **375 / 768 / 1440** → `.qa/site/` (Playwright MCP).
3. **Critique** against `DESIGN.md`, `design.mdc`, `site-chrome.mdc`, the layer's done-means.
4. **Adversarial pass — try to break it.** Conversion in ≤ 2 taps on mobile with real numbers ·
   anchors under the sticky header · sticky bar covering the footer · honeypot returns success silently
   · form delivers to a real inbox · 404 · `sitemap.xml` · `robots.txt` · OG preview · every locale ·
   unique titles/descriptions · JSON-LD valid (Organization/LocalBusiness + WebSite; no FAQPage/HowTo
   on commercial pages) · studio/admin/`noindex` honored · NAP in schema matches content ·
   peer comps replaced · `public/_peer/` gone · images sized (no CLS) · no secrets in the bundle · no `any`.
   **Photo source:** `client` — a labelled placeholder is allowed. `unsplash` — a placeholder or a
   hotlink is a Blocker, and each file has a `brief/assets.md` row. Shop product photos are client
   files or colour placeholders.
5. **Accessibility.** axe (via the Playwright MCP or `@axe-core/playwright`) on every template.
   Keyboard walk: nav, menu, form. Focus visible.
6. **Performance.** Lighthouse mobile on the production URL, median of 3: ≥ 90, LCP < 2.5 s,
   CLS < 0.1, INP < 200 ms. Failing → cuts in the `design.mdc` order. Do not experiment with font
   weights before images are right.
7. **Shops only.** Every check in `shop-checks.md`. Money, stock, data and access failures are
   Blockers. Add its Shop block to the report.
8. **Report** (below), then wait. Fix only after approval, tier by tier, each fix as `/build fix:<what>`.
9. Zero Blockers and Highs, axe clean, perf met (or a written waiver in `plan.md`) → write
   `QA: pass <date>` in `plan.md`. Say: "Next: `/ship` when the approver says go."

## Report

```markdown
## QA — <client> — <date> — <url>
### Fidelity: pass / fail per page
### Findings
| # | tier | page | finding | fix |
### Scores: Lighthouse … · LCP … · CLS … · INP … · axe …
### Verdict: pass / fail — what blocks
```

## Do not

Fix before approval · measure dev builds · call a `client`-mode labelled placeholder a Blocker ·
kill a server you did not start.
