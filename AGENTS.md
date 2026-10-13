# Dentis Prishtina — website

| | |
|---|---|
| Layer / Status | see `plan.md` |
| Brain | `brain.lock` — managed files from `github.com/kentech01/cursor-brain` |
| Providers (shops) | Backend / Host / Email — see shop addendum in `plan.md` |
| ClickUp · Repo · Preview · Production | [links] |

## Before you code

1. Read `plan.md`. `Status:` decides what you may do (`.cursor/rules/00-core.mdc`).
2. Chain: `/kickoff` → `/refs` → `/design` → Gate 1 → `/scaffold` → `/build <unit>` → `/qa` → Gate 2 → `/ship`.
3. Managed files under `.cursor/` (except `project-*.mdc`) come from sync — do not edit them here.
   Wrong rule → `LESSONS.md`, then a brain PR. Sync: `node .cursor/brain/brain.mjs sync`.
4. How layers work: `docs/agent-architecture.md` (in the brain) — Rules vs Skills vs this file.

## Commands

- Install: `pnpm install --frozen-lockfile`
- Dev: `pnpm dev`
- Typecheck / lint / build / preview: `pnpm typecheck` · `pnpm lint` · `pnpm build` · `pnpm preview`
- Cloudflare types: `pnpm cf-typegen`
- Project gates: `node .cursor/brain/check-project.mjs`


## Completion

- Run the checks that match the unit. Report real command output.
- Shops: CI and e2e must exercise the **Backend** and **Host** in `plan.md` (not a retired stack).
- Do not commit secrets. `.env.example` lists names only.

## Files

| File | Role |
|---|---|
| `plan.md` | contract — facts, sitemap, blueprint, providers, decisions |
| `DESIGN.md` | tokens and layout plan |
| `LESSONS.md` | failures and the hard stop for each |
| `brief/` | brand, copy, photos, reference screenshots |

## Project notes

[client-specific notes for the agent]
