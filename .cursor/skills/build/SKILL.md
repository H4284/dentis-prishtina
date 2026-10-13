---
name: build
description: Builds exactly one unit — the shell, one band, one page, one schema type, one shop unit, one fix — with tokens, screenshots at 375 and 1440, and an overlay check against the reference row (or the unit's Done-when list) before it is shown. Use for any implementation work after Gate 1; the user says build, implement, add section, add page, fix.
---

# /build <unit> — one unit, verified, then shown

## Gate

1. `Status: Planned` or `Building` (or `Shipped` for `fix:*`). Code exists (else `/scaffold`).
2. The unit is named: `shell` · `home:band-N` · `page:<route>` · `schema:<type>` · `shop:<id>` ·
   `fix:<what>`. No name → ask. Never "build everything".
3. Read the blueprint row, Copy lock, `DESIGN.md`, `design.mdc`, `reference-fidelity.mdc`,
   `code-next.mdc`, `site-chrome.mdc`. Band units: open both reference PNGs first; missing → stop.
   Prefer measures from `brief/refs/<slug>/measures/` and recipes in
   `.cursor/skills/build/references/peer-extract.md`. A shop feature band uses the PNGs of the band
   its row names (`feature — archetype of band N`). `shop:*` units: read the unit in `shop-units.md`,
   the shop addendum (including providers), `layer-ecommerce.mdc`, and `code-firebase.mdc` or
   `code-supabase.mdc` (+ `code-vercel.mdc` if Host is vercel). "Needs" not merged or `In? no` → stop.

## Build order for a site

`shell` → `home:band-1 … N` in blueprint order → `page:/contact` (or the highest-value page) →
remaining routes → cms: `schema:<type>` per type, then collection pages → `/qa`.
Shops: the Index order in `shop-units.md` (home bands after `shop:product-card`) → `/qa`.

## Steps (one unit)

1. Branch `feat/<unit-slug>` (or `fix/…`). ClickUp task id noted if one exists.
2. Say in one line what the unit is, which row, which copy-lock keys.
3. `shell` only: `content/site.ts` phone / WhatsApp / email must be real values — empty → stop and ask.
4. Implement with tokens only. shadcn allowed, restyled. Copy from Copy lock / `content/` / Sanity,
   never from the reference. Peer **visual** comps from `public/_peer/` OK during build
   (`reference-fidelity.mdc`); never peer logo or text. Final photos follow **Photo source**
   (`design.mdc` → Assets). Missing **Photo source** → stop and ask.
   `client`: use the matching file in `brief/photos/`. Missing → labelled placeholder or peer comp;
   leave Photos Pending. `unsplash`: use the logged file for this band. If none, download one image
   into `public/` (AVIF or WebP, hero ≤ **200 KB**) and add a row to `brief/assets.md`. cms: upload
   that file to Sanity. No hotlink. Shop product images stay client files or the seed colour
   placeholders. The first band that shows a photo includes that file in the hand-off. The user may
   reject it.
5. Quiet quality: responsive, focus states, reduced motion, alt text, scroll-padding for anchors.
6. `pnpm typecheck && pnpm lint && pnpm build` (shops: `pnpm test` too; `pnpm test:rules` when the
   unit adds a collection; `pnpm test:emulator` when it adds emulator tests). Red → fix first.
7. Screenshots with the Playwright MCP at **375 and 1440** → `.qa/build/<unit>-{375,1440}.png`
   (UI units; a server-only shop unit shows its test output instead).
8. Band units: **overlay gate** (`reference-fidelity.mdc`) — copy the band PNG into `public/_peer/`,
   run the overlay recipe (`.cursor/skills/build/references/peer-extract.md` § 5) to produce
   `.qa/build/overlay-<unit>-{375,1440}.png`, read them for structure, then fill the hand-off table
   (media side + aspect, split, alignment, captions, CTA, interaction, motion, mobile, Do not invent).
   A mismatch or missing overlay → fix and repeat. Do not show. `shop:*` units: check every
   "Done when" line and write the evidence next to it. An open line → fix first.
9. Commit. Remote → push, PR (draft → Ready when the template checklist is done). No remote → say so.
10. Hand-off. First unit sets `Status: Building`.

## Hand-off

```markdown
## Build unit: <unit>
| row column | reference | build | match |
|---|---|---|---|
| media side + aspect | … | … | ✓ |
| split / alignment / captions | … | … | ✓ |
| CTA count + order | … | … | ✓ |
| interaction + motion | … | … | ✓ |
| mobile (375) | … | … | ✓ |
| Do not invent | … | … | ✓ |
| photo source + file | `plan.md` | file or placeholder | ✓ |
| overlay 375 + 1440 | `.qa/build/overlay-…` | read | ✓ |
typecheck / lint / build: green · screenshots 375 + 1440 attached · PR / preview: … · next unit: …
```

Shop units use the unit's Done-when list instead of the table:

```markdown
## Build unit: shop:<id>
| Done when | evidence | ✓ |
|---|---|---|
| … | test name / screenshot / emulator check | ✓ |
typecheck / lint / test / build: green · rules tests: green / n.a. · PR: … · next unit: …
```

## User says "like this" / "bigger" / "more"

Save the example, measure it, then code. After two vague nudges, ask for a number or a crop.

## Do not

More than one unit per pass · hardcoded values · invent bands · show a unit that fails checks or the
overlay gate · edit files outside the unit · `git push` without a remote (check first).
