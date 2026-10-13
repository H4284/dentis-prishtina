# Band 9 — closing CTA / contact

Verified 2026-10-13 · https://skyclinics.al/

## Placement

| | 1440 | 375 |
|---|---|---|
| height | 1800 (sticky scroll shell) | ~1380 |
| backgroundPaint | opaque-or-image (warm grey panel) | same |

## Layout

- Sticky multi-panel: headline + photo + large circular canvas/graphic + dual CTAs.
- Desktop flex row ~**26 / 24 / 49** (copy · photo 230×308 aspect 0.75 · canvas 855×855).
- Mobile: column stack; canvas ~338×338; photo shrinks.
- Layered media count: **2** (photo + canvas/graphic). Peer also shows a lead form — Dentis form is **off**; keep the dual CTA column, map to phone / WhatsApp, do not add a form band.

## Interaction

- Driver: **scroll** (sticky pin) then **click** on CTAs / WhatsApp.

## Motion

- Sticky / scrub within the tall shell while panels settle. Rebuild sticky pin with CSS sticky + `motion`; replace peer WebGL circle with a calm photo or soft shape if needed — keep **2** layered media.

## CTA

- **2**: primary journey + WhatsApp secondary (order: primary above WhatsApp).
