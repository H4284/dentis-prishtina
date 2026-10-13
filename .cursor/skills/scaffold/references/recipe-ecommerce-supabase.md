# Recipe — ecommerce (Supabase backend + Vercel host)

Use when Backend is **`supabase`** and Host is **`vercel`** (`docs/adr/0008`). Email `resend` or
`emailjs` (server-side). Rules: `code-supabase.mdc`, `code-vercel.mdc`, `layer-ecommerce.mdc`.
Verified pattern 2026-10-06 — refine after the first Supabase shop ships.

## 0. Before you start

1. Supabase projects: staging (Thrio) and production (client), region close to the audience (e.g. EU).
2. Vercel project for the Next app (see `recipe-ecommerce-vercel.md`).
3. Supabase CLI locally. Node 22 · pnpm.

## 1. Create the app

Same Next + Tailwind + shadcn baseline as `recipe-ecommerce.md` step 1, but packages:

```bash
pnpm add @supabase/supabase-js @supabase/ssr server-only zod zustand react-hook-form @hookform/resolvers sharp react-markdown @tanstack/react-table motion clsx tailwind-merge class-variance-authority lucide-react
# email: resend + @react-email/components  OR  keep EmailJS secrets server-side only
pnpm add -D vitest @playwright/test tsx supabase culori
```

`next.config.ts`: `allowedDevOrigins`, image `deviceSizes`/`imageSizes` = **320, 640, 960, 1280**,
custom loader, `bodySizeLimit` 11mb (`code-supabase.mdc` image contract).

## 2. Supabase

```bash
pnpm exec supabase init
# migrations in supabase/migrations/ — products, variants, orders, stock RPC, profiles.is_admin
```

- RLS on every shop table. **Revoke** broad anon grants; add explicit policies.
- Order place = one SQL function / transaction (stock, counter, snapshots).
- `lib/supabase/server.ts` (user) · `admin.ts` (service role, server-only) · `client.ts` (Auth UI only).
- Sessions via `@supabase/ssr` — never a custom access/refresh cookie.

## 3. Seed and scripts

`scripts/seed.ts` uses `async function main()` (no top-level await — Windows). Refuses to run against
production without `--project` / explicit flag. Invented catalog only.

## 4. CI

```yaml
# .github/workflows/ci.yml — must NOT run Firebase emulators
- uses: actions/checkout@v4
  with: { fetch-depth: 0 }
- uses: gitleaks/gitleaks-action@v2
  env: { GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} }
- run: pnpm install --frozen-lockfile
- run: pnpm typecheck && pnpm lint && pnpm test && pnpm build
- run: pnpm exec supabase db lint   # or project-equivalent RLS/SQL tests
- run: pnpm e2e                     # against local supabase start + next start
- run: node .cursor/brain/check-project.mjs
```

## 5. Turnstile and email

Fail closed if `TURNSTILE_SECRET_KEY` is missing outside local test keys. Email after commit;
idempotency key per order event; mark `emails.*_at`; on provider failure retry once, do not mark
sent until success; never double-send when the flag is set.

## 6. Verify

`supabase start` · `pnpm seed` · `pnpm dev` · `check-project` · Preview on Vercel.
Cutover from Firebase: delete Firebase CI jobs; reopen units in `docs/providers-ecommerce.md`.
