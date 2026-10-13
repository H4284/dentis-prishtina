## Unit

<!-- one unit per PR: shell · home:band-N · page:/route · schema:type · shop:id · fix:what -->

ClickUp: CU-
Preview: <!-- Cloudflare preview URL · shops: none per branch — CI + screenshots; staging shows main -->

## Checklist (Ready only when every box is ticked)

- [ ] `pnpm typecheck && pnpm lint && pnpm build` green (shops: `pnpm test` too)
- [ ] Screenshots at 375 and 1440 attached
- [ ] Band units: overlay files at both widths + hand-off table against the reference row pasted below
- [ ] Shop units: the Done-when table with evidence pasted below; a new collection is in the rules test list
- [ ] Tokens only — no raw hex, px font sizes, font names, durations in components
- [ ] Copy from Copy lock / `content/` / Sanity — nothing from the reference site
- [ ] Photos match `plan.md` **Photo source** — `client` files, or logged Unsplash files (no hotlink)
- [ ] No secrets, no `any`, no `@ts-ignore`
- [ ] Only files inside the named unit changed

## Overlay + side-by-side (band units) or Done when (shop units)

| row column / Done when | reference / evidence | build | match |
|---|---|---|---|
| overlay 375 | `.qa/build/overlay-…-375.png` | | |
| overlay 1440 | `.qa/build/overlay-…-1440.png` | | |
