# brief/ — client inputs

Everything the client gives us, in one place, committed. `/kickoff` creates one ClickUp task per row
of the Content checklist in `plan.md`.

```
brief/
├── brand/        logo.svg, logo.png, brand guide PDF, color values (brand.md)
├── copy/         one file per page: home.md, about.md, contact.md … (approved text only)
├── photos/       client originals only (Photo source `client`), named by subject (team-01.jpg)
├── refs/         reference packs from /refs — committed; QA and overlays need them
│   └── <ref-slug>/
│       ├── home-full-{375,1440}.png, {page}-band-{N}-{375,1440}.png
│       ├── assets/      peer visual comps (photos, shapes, …) — replace before ship
│       ├── measures/    raw getComputedStyle notes per band
│       └── states/      hover / open / motion before→after when motion ≠ none
├── assets.md     licence log (client + Unsplash + peer-comp rows)
└── README.md     this file
```

Peer comps under `refs/<slug>/assets/` are layout fidelity only — never peer logo, brand name, or
text. Copy into `public/_peer/` while building; replace and delete `_peer/` before ship
(`reference-fidelity.mdc`).

## Ask the client for (Round 4 and 5 of `/kickoff`)

1. Logo as **SVG** (or the original AI / EPS file). PNG only is not enough.
2. Brand colors and fonts they already use, or "none".
3. Copy per page, approved, in the site language(s). Or agree that Thrio writes it.
4. Photos when Photo source is `client`: originals, not WhatsApp compressions. Team, place, work.
   Shops: product photos always, even when Photo source is `unsplash`.
5. NAP: name, address, **phone and WhatsApp numbers**, opening hours, social links, map pin.
6. Legal: company registration name and number for the privacy page and footer.
7. Access: domain registrar login or a DNS change window; existing hosting if we migrate.

Nothing in `brief/` is placeholder. If it is not approved, it is not here.
Unsplash files stay out of `photos/`. Commit them with the site and log them in `assets.md`.
Screenshots in `refs/` are reference layout only. They are not project photos.
