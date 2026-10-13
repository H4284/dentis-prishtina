# plan.md — Dentis Prishtina

| | |
|---|---|
| Status | `Building` |
| Layer | `landing` |
| QA | — |
| Updated | 2026-10-13 |

`[REQUIRED]` blocks the build. `⚠️ CONFIRM WITH CLIENT` = assumed. Status rules: `.cursor/rules/00-core.mdc`.

## Overview

| Field | Value |
|---|---|
| Client · what they do · city | Dentis Prishtina · a dental clinic in Prishtina · Prishtina, Kosovo |
| Industry (reference list) | Clinics, dental, health startups (`health-clinic`) |
| Current website | none |
| The one action a visitor takes | Book an appointment |
| Audience (2–3 personas) | Adults who want a checkup or a clean · People who need implants, whitening, or a smile fix · Parents booking for a child |
| Language(s) · tone (3 adjectives) | Albanian · calm, clear, trustworthy |
| The characteristic thing this design must express | “The first visit without fear” — a calm, clean, modern dental clinic that feels trustworthy |

## Conversion

| Channel | On? | Value |
|---|---|---|
| Phone | yes | +383 44 100 100 |
| WhatsApp | yes | +383 44 100 100 |
| Email | yes | info@dentis.example |
| Form | no | — |
| Booking / visit | visit only | Visit the clinic · no online booking link |

Primary CTA label: Book an appointment

## Sitemap (`landing` = one row)

| Page | Route | Status live / hidden / deferred | Visitor action | Copy owner |
|---|---|---|---|---|
| Home | `/` | live | Book an appointment (phone / WhatsApp) · sections: services, about, contact | Thrio drafts · client approves |
| 404 | — | live | back to home | Thrio |

## Brand

Logo (SVG in `brief/brand/`): none yet · text logo for now · colors / fonts: none · set in `/design` ·
likes: ⚠️ CONFIRM WITH CLIENT · must **not** look like: ⚠️ CONFIRM WITH CLIENT · avoid hospital portals and generic hospital-style layouts · section rhythm: Alternating (default)

## Reference (filled by `/refs`)

Reference site: Sky Clinics · https://skyclinics.al/ · screenshots: `brief/refs/sky-clinics/` ·
grammar to keep: fullscreen calm hero → centred video → mid CTA strip → centred approach copy →
alternating service splits (L / stacked / R / L) → sticky closing contact with dual CTAs.
Visual inspiration only (not binding): MINEMAL · https://minemal.dental · `brief/refs/minemal/`
(sparse luxury calm — colours/type mood in `/design`, not layout).

| # | Band + archetype | Measurements (side, aspect, split, alignment, captions, mobile, layered media) | Interaction | Motion | CTA | Do not invent |
|---|---|---|---|---|---|---|
| 1 | hero — fullscreen brand | full-bleed viewport; centred brand + subline; 1 canvas/photo layer under type; nav over; mobile swaps primary to WhatsApp | scroll first; click CTA | scrub — title opacity/translate over early scroll; states in `states/` | 1 primary (Book) | no inset hero card; no centred card frame; no hospital portal chrome |
| 2 | video intro — centred media | single 16:9 video centred; pad-x 48/12; layered media 1; no copy column | scroll | load / ambient muted video | 0 | no side-by-side split; no caption strip invent |
| 3 | CTA strip — centred action | short centred band (~153/87); eyebrow + 1 button | click | none | 1 primary | no dual buttons; no form here |
| 4 | approach — centred editorial | min-height ~540/325; centred eyebrow + large headline; media 0 | scroll | reveal | 0 | no cards; no stats row; no media invent |
| 5 | service 01 — split media left | 36/64 · gap 72 · media left portrait ~0.70 · text left; mobile column gap 40; media 1 | scroll; click link | reveal + ambient video | 1 text link | no card grid; keep portrait media left on desktop |
| 6 | service 02 — stacked media | title → 16:9 video → copy; media 1; left align | scroll; click | reveal + ambient video | 2 (primary + secondary, stacked) | no side split; keep two CTAs stacked |
| 7 | service 03 — split media right | row-reverse 36/64 · gap 72 · media right portrait ~0.70; mobile column; media 1 | scroll; click | reveal + ambient video | 1 text link | do not mirror to left; keep alternate rhythm |
| 8 | service 04 — split media left | same as band 5 (media left portrait ~0.70); media 1 | scroll; click | reveal + ambient video | 1 text link | no extra service cards beyond this rhythm |
| 9 | closing — sticky contact | opaque warm panel; ~26/24/49 copy · photo 0.75 · round graphic; mobile column; media 2; peer form present but Dentis form off | scroll sticky then click | sticky / scrub | 2: Book + WhatsApp | no lead form; no third CTA; keep dual CTA order |

Key pages: landing home only (above). 404 is site chrome, not from peer.

Asset brief: icons Lucide · photo subjects: calm clinic interior, gentle treatment close-ups,
team/trust, city/place of Prishtina (peer comps OK during build → replace before ship) ·
cutouts none · illustrations soft round graphic only if band 9 needs a second layer ·
motion moments: hero scroll scrub title; service row reveals; band 9 sticky settle ·
log peer URLs in `brief/assets.md`

### Reference exceptions

The agent writes a row as `Proposed` and stops. Only the user changes Status to `Approved: <name> <date>`.
Without `Approved`, the lock applies.

| Date | Lock | Peer measured | Band | Status | Logged in DESIGN.md? |
|---|---|---|---|---|---|
| 2026-10-13 | Peer WebGL canvas in hero / band 9 → photo/video + soft shapes; keep fullscreen, layer count, scroll-driven motion | Sky Clinics | 1, 9 | Approved: Hava Jusufi 2026-10-13 | yes |

## Copy lock

| Key | Locked copy |
|---|---|
| `brand.name` | Dentis Prishtina |
| `nav.primaryCta` | Book an appointment |
| `home.hero.headline` | TBD |
| `home.hero.subline` | TBD |

## Content checklist (Pending → Received → Approved)

Photo source: `client`

| Asset | Who | Status |
|---|---|---|
| Logo SVG | Client | Pending |
| NAP, hours, social, phone, WhatsApp | Client | Pending |
| Copy per page | Thrio drafts · client approves | Pending |
| Photos | Client (placeholders until clinic photos arrive) | Pending |
| Privacy page | Thrio | Pending |

## Ops

Domain (owner, registrar): none yet · no domain purchased · GitHub repo: ⚠️ CONFIRM WITH CLIENT · Cloudflare account: Thrio ·
Sanity project (cms): — · Firebase projects + staging URL (ecommerce): — · form inbox: — ·
deadline: ⚠️ CONFIRM WITH CLIENT · ClickUp: ⚠️ CONFIRM WITH CLIENT

Handover after launch — domain / Cloudflare / GitHub / Sanity / Firebase owner: Thrio (domain TBA)

## Decisions

| Date | Decision | Why |
|---|---|---|
| | | |

## Out of scope

Pages beyond the Sitemap · languages beyond Overview · a higher layer · migrating an old CMS ·
copywriting and a photography shoot unless Copy owner says Thrio · SEO / marketing after launch · paid fonts.
