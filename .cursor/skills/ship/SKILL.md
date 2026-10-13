---
name: ship
description: Gate 2 and production launch — checks QA pass, content approval, PR review, secrets and domain, then deploys (Workers Builds for static; App Hosting or Vercel for shops), sets the domain, runs post-launch checks and writes the handoff. Human-triggered only.
disable-model-invocation: true
---

# /ship — launch

## Gate (cheapest first, refuse at the first failure)

1. `plan.md`: `Status: Building`, `QA: pass <date>` present, Content checklist Approved for every
   launch item. Otherwise name the row, stop.
   Photos follow **Photo source** (`design.mdc` → Assets). `client`: files from `brief/photos/`.
   `unsplash`: committed files with a `brief/assets.md` row, no hotlink. Shop product photos are
   client files in both modes.
2. Peer comps replaced with client/licensed media; `public/_peer/` deleted. Still present → Blocker
   (or acceptance logged in `plan.md` Ops). Missing → stop.
3. `node .cursor/brain/check-project.mjs` passes (shops: providers + CI match).
4. The release PR is reviewed (Bugbot + one human) and merged to `main`, or ready to merge.
5. Production secrets exist (Worker / App Hosting / Vercel — names from `.env.example`). Missing → stop.
6. cms: Studio deployed, client owner invited, rebuild hook tested once.
7. Domain: DNS on Cloudflare, or registrar access in hand. Otherwise stop.
8. Shops: every extra gate in `.cursor/skills/ship/references/shop-launch.md` (inbox proof, admin guide).
9. The approver said **go** in writing.

Shops: follow the steps in `shop-launch.md` instead of steps 1–6 below, then continue with step 7.

## Steps

1. Merge to `main` (squash). Workers Builds deploys production.
2. Custom domain on the Worker; `www` → apex redirect; wait for the certificate.
3. **Post-launch checks** on the live domain: every live route, 404, `sitemap.xml`, `robots.txt`,
   OG preview, form delivers, phone / WhatsApp links open, analytics beacon fires, Lighthouse mobile
   median of 3 ≥ 90.
4. Search Console: submit the sitemap. Old site → 301 map applied and checked.
5. **Handoff** → `docs/handoff.md` in the project: repo access, Cloudflare roles, Sanity owner, domain
   and DNS notes, env **names** and where they live, form destination and test steps, analytics,
   editor guide (cms), what Thrio keeps. No secret values.
6. `Status: Shipped`, launch date in `plan.md`, tag `v1.0.0`, close the ClickUp list.
7. Report: live URL, checks table, handoff path, anything deferred.

## Do not

Deploy from a laptop · skip a gate because the client is waiting (say the risk, ask for a written go)
· put secret values in the handoff.
