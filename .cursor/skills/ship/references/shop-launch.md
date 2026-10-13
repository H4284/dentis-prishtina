# Shop launch — `/ship` for Layer `ecommerce`

Normal `/ship` gates still apply. These replace Cloudflare-only deploy steps.
Refuse at the first failure. Run `node .cursor/brain/check-project.mjs` first.

## Extra gates

1. Providers in the plan are valid (`docs/adr/0008`). CI and runtime match Backend/Host.
2. **Production** project exists for the Backend (Firebase client project or Supabase prod) with
   budget/alerts as applicable. Thrio has admin access.
3. **Host** ready: App Hosting production backend (manual rollouts) **or** Vercel production.
   Secrets set; DB rules/migrations deployed.
4. Real catalog in production — not seed data.
5. Admin accounts created and signed in once each.
6. Payments: COD on. Card only if Step 0 received and test cards passed on staging.
7. Legal pages approved.
8. **Email inbox proof:** place a test order → customer + admin messages arrive in real inboxes.
   Domain auth (SPF/DKIM for Resend) or EmailJS server config verified. Template recipient is a variable.
9. **`docs/admin-guide.md`** with screenshots exists (add product, process order, cancel, discount,
   home content, settings). Missing guide → refuse ship.
10. Daily backups scheduled for the production database.

## Steps

1. Merge release PR. Staging/Preview updates. Golden path once more.
2. Production deploy: App Hosting rollout **or** Vercel production promote.
3. Domain + DNS (DNS only if cookies break behind a proxy). Certificate OK.
4. Real COD test order → both emails in real inboxes → cancel → stock returns.
5. Card on: small live payment + refund in bank portal.
6. GA4/Meta debug events; Search Console sitemap; old-site 301s.
7. `shop:backups` on production.
8. Handoff: `docs/handoff.md` (provider trio, project ids, env **names**, email, DNS, bank, backups,
   rollback — see below) + admin guide. Train order staff 30–60 min.
9. Status `Shipped`.

## Completion criteria (ship is done when)

- [ ] check-project green · golden path on production · inbox proof · admin guide delivered
- [ ] CSP matches active stack · sitemap paths live · image contract held on production
- [ ] Handoff names Backend / Host / Email and how to roll back

## Post-launch watch (48–72 hours)

Owner checks daily: new orders appear · emails still arrive · stock moves correctly · error rate /
host dashboard quiet · no CSP/console blocks on checkout. Log issues in ClickUp; hotfix as
`/build fix:*`.

## Rollback

- **App Hosting:** create a rollout from the previous successful git SHA / prior rollout in console.
- **Vercel:** promote the previous Production deployment.
- **Data:** restore from the backup schedule only with a senior dev; restores create a new DB — verify
  counts before switching. Document the exact clicks in `docs/handoff.md`.
