# Recipe add-on — ecommerce on Vercel

Use when `plan.md` → Host is **`vercel`**. Backend is `firebase` or `supabase`.
Read `recipe-ecommerce.md` (Firebase) or `recipe-ecommerce-supabase.md` first, then this file.
Rule: `code-vercel.mdc`.

## Differences from App Hosting

1. Create a Vercel project linked to the GitHub repo. Framework: Next.js. Root: `/`.
2. Env vars: staging (Preview) and production. Same **names** as the backend recipe.
3. Do **not** create App Hosting backends. Cloudflare DNS can point the domain to Vercel.
4. `allowedDevOrigins` still includes localhost and `127.0.0.1` (Sanem login hydration).
5. Production deploy after Gate 2 — protect `main` or promote manually. Put the production URL in Ops.
6. CSP in `shop:hardening` must list Vercel / the active backend hosts — not a retired App Hosting
   or Firebase list after cutover.

## CI

Keep the backend’s test job (Firebase emulators **or** Supabase). Add gitleaks +
`node .cursor/brain/check-project.mjs`. Deploy is Vercel’s Git integration, not
`firebase apphosting:rollouts`.

## Verify

`pnpm build && pnpm start` locally, then a Preview deployment. Sign-in cookie works on the Preview
URL. `check-project` passes with Host `vercel`.
