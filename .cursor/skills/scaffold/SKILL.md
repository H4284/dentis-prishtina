---
name: scaffold
description: Creates the code skeleton for the plan's layer — Next.js static export + Tailwind v4 + the small forms Worker on Cloudflare, a standalone Sanity Studio for cms, or a Next.js server shop from the plan's provider trio — from a verified starter or the dated recipe. Runs typecheck, build and preview before it commits. Use once per project after Gate 1.
---

# /scaffold — code skeleton

## Gate

1. `Status: Planned`. Code already exists (`package.json`) → stop; use `/build`.
2. Layer is `landing`, `multipage`, `cms` or `ecommerce`. `dashboard` → stop (`docs/notes/later-layers.md`).
3. Read `01-stack.mdc`, `code-next.mdc`, `code-cloudflare.mdc`; cms also `code-sanity.mdc` and the
   Sanity MCP rules; ecommerce: `layer-ecommerce.mdc`, `docs/providers-ecommerce.md`, and the code
   rules for the chosen Backend/Host (not Cloudflare for the shop server).
4. ecommerce: shop addendum filled (no `[REQUIRED]`), including **Backend · Host · Email**. Staging
   project exists for that backend. Firebase host/backend → Java 21 for emulators. Missing → stop.

## Steps

1. **Starter or recipe.** `node .cursor/brain/brain.mjs starter <layer>`. Exit 0 → copy
   `.tmp-starter/` into place, rename the app in `package.json` and `wrangler.jsonc`, delete
   `.tmp-starter/`. Exit 3 → recipes, command by command:
   - static / cms: `recipe-static.md` (+ `recipe-cms.md`)
   - shop **firebase + apphosting**: `recipe-ecommerce.md`
   - shop **firebase + vercel**: `recipe-ecommerce.md` then `recipe-ecommerce-vercel.md`
   - shop **supabase + vercel**: `recipe-ecommerce-supabase.md`
   Email `emailjs` → follow the email notes in the recipe (server-side only). A command that
   behaves differently → check Context7 / the docs MCP, fix the recipe, date the fix, say so in the hand-off.
2. **Tokens.** Move the `@theme` block from `DESIGN.md` into `app/globals.css`.
3. **Project files.** `content/site.ts` with name, NAP, **phone and WhatsApp numbers**, nav, social
   from `plan.md` · `app/not-found.tsx`, `sitemap.ts`, `robots.ts` · `public/og.png` labelled
   "OG — replace" · copy `.cursor/brain/templates/scripts/fetch-peer-asset.mjs` → `scripts/` ·
   `.env.example` (names only) · `.github/PULL_REQUEST_TEMPLATE.md` from
   `.cursor/brain/templates/.github/`. Ensure `public/_peer/` is in `.gitignore`.
   Fill `AGENTS.md` Commands from the recipe. CI must match Backend (Firebase emulators vs Supabase).
4. **Verify.** `pnpm typecheck && pnpm lint && pnpm build && pnpm preview` — `/` served from `out/`.
   `pnpm exec playwright install chromium` done once. cms: `studio` builds, `sanity typegen generate` runs.
   Shop: the recipe's verify step (emulators or Supabase up, `pnpm seed`, `pnpm test` green) +
   `node .cursor/brain/check-project.mjs`.
5. **Commit.** Branch `chore/scaffold`, commit `chore(scaffold): <layer> skeleton`. Remote exists →
   push, draft PR, ask the user once to connect Workers Builds (static) or the staging host
   (App Hosting / Vercel) and paste the URL into Ops. No remote → say so, continue.
6. Say: "Next: `/build shell`." Shops: "Next: `/build shop:catalog-model`" — the shell needs the
   catalog (unit 3) for its category menu.

## Do not

Add UI bands · change provider trio without a plan Decision + cutover · embed Sanity Studio ·
add Cursor hooks · skip preview/verify.
