# Band 1 — hero

Verified 2026-10-13 · https://skyclinics.al/ · viewports 1440×900 and 375×812

## Placement

| | 1440 | 375 |
|---|---|---|
| height class | viewport (`900px`, `position: fixed`) | viewport (`812px`) |
| width | full bleed ~1425 | full bleed ~360 |
| backgroundPaint | transparent (canvas behind) | transparent |

## Layout

- Centred brand wordmark + short subline over fullscreen canvas scrub layer.
- Nav row absolute over hero: links + primary **BOOK CONSULTATION** (desktop).
- Mobile: primary becomes **WHATSAPP US**; language switcher present on peer (do not copy brand).
- Layered media: **1** fixed canvas (WebGL/image sequence) under type — count = 1 canvas layer (+ UI chrome).

## Interaction

- Driver: **scroll** (primary). Click on nav / CTA secondary.
- Fixed hero shell while early page scroll advances canvas + title opacity.

## Motion

- Driver: **scrub** (scroll-linked).
- Title opacity ~0.36 → 1 and translateY ~−6px → 0 over first ~700px scroll (1440).
- States: `states/hero-scroll-before-{375,1440}.png`, `states/hero-scroll-after-{375,1440}.png`.
- Rebuild with `motion` scroll; do not paste peer canvas JS. Photo/video full-bleed OK as layer substitute if WebGL is out of scope for landing cost — keep fullscreen + scroll-linked title reveal.

## CTA

- Desktop: 1 primary in nav (**BOOK CONSULTATION**) + text nav links.
- Mobile: 1 sticky/primary (**WHATSAPP US**).

## Raw notes

- `h1` opacity/transform change confirmed via getComputedStyle before/after scroll.
- Canvas size at 1440: 1424×900.
