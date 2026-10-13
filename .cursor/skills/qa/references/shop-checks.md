# Shop QA checks — `/qa` for Layer `ecommerce`

Run these on top of the normal `/qa` steps. Production build only: staging / Preview URL, or locally
`pnpm build && pnpm start` with the plan’s local backend and seed. Never `next dev`.
First: `node .cursor/brain/check-project.mjs` must pass.

## Blocker — money, stock, data, access, providers

1. Golden-path e2e is green on the **chosen** Backend runtime (`pnpm e2e`).
2. Price tamper: `POST /api/orders` with lower prices → stored total is the server total.
3. Last-unit race: two parallel orders → one 200 and one 409.
4. Double-submit / double-click checkout → one order only.
5. Cancel twice → stock back once; unpaid card returns no stock; stock never &lt; 0.
6. Each email once per event; failure does not mark `emails.*At` until success.
7. Access tests for the chosen backend (Firebase deny-all rules **or** Supabase RLS). Browser holds
   no service role / admin credentials.
8. No secret in the client bundle. No card PAN/CVV/expiry in DB, logs or code.
9. Non-admin denied on `/admin` and admin actions. Session works on the URL under test.
10. Another customer’s order id → 404. Card on → `shop:payment-bank` Done-when again.
11. CI matches Backend (no Firebase emulator suite for a Supabase shop).

## High — customer flow, email, images, routes

1. Checkout at 375: fields, keyboard, plan language, phone/city rules.
2. Delivery fee around the free threshold; four discount messages.
3. Out-of-stock cannot add; impossible variants disabled.
4. Consent declined → no GA/Meta.
5. Legal pages approved. Placeholder legal text blocks `/ship`.
6. Order emails: real **inbox** proof (not only provider dashboard). Recipient is a variable.
7. Email plan fits volume (Resend free = 100/day, verified 2026-09-28).
8. Image contract: only uploaded widths; `sizes` set; GET shows cache; no sideways photos.
9. Every live `plan.md` Sitemap path returns **200** (redirect-only fails).

## Medium — SEO, speed, a11y

1. Product JSON-LD valid; sitemap has no private routes; robots correct.
2. Lighthouse mobile on home, category, product: median of 3 after warm-up (App Hosting can start
   cold). One LCP/priority image. Targets from `design.mdc`.
3. Product images arrive as pre-sized WebP; no 1280 file at 375. They are client files or the seed
   colour placeholders. No Unsplash product photo.
4. A11y: one `h1`, carousel `region`s, promo bar inside `header`.

## Report — add this block

```markdown
### Shop
| check | result |
|---|---|
| check-project · providers | … |
| golden path e2e (runtime) | … |
| price tamper · race · double-submit · double cancel | … |
| emails once · inbox proof | … |
| access tests · no browser service credentials | … |
| admin guard · other customer's order | … |
| sitemap paths 200 · image contract · CSP stack | … |
| consent · legal · card (if on) | … |
```
