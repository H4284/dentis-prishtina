# Peer extract recipes (Playwright)

Use with `browser_evaluate` on the **live reference** during `/refs` and `/build`.
Layout evidence only — then map to `@theme` tokens.

## Hard limits

- Viewports: **375** and **1440** (QA also uses **768**).
- Extract spacing, type size/weight, gaps, aspect, CTA shape, behavior triggers.
- **Do not** paste reference DOM/CSS into the app.
- **Do not** copy reference brand colors, font families, logo, brand name, or any text/copy.
- Visual comps OK (photos, illustrations, textures, icons, shapes, backgrounds, video) —
  `reference-fidelity.mdc` Peer media. Never download logos or text-as-image marks.

## 1. Band measure (replace `SELECTOR`)

Run once per band container at 375 and at 1440. Persist useful numbers into
`brief/refs/<slug>/measures/<band>.md`.

```js
(function (selector) {
  const el = document.querySelector(selector);
  if (!el) return JSON.stringify({ error: "Element not found: " + selector });
  const props = [
    "fontSize", "fontWeight", "lineHeight", "letterSpacing",
    "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
    "marginTop", "marginBottom",
    "width", "height", "maxWidth", "minHeight",
    "display", "flexDirection", "justifyContent", "alignItems", "gap",
    "gridTemplateColumns",
    "borderRadius", "boxShadow",
    "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth",
    "position", "top", "bottom", "left", "right", "zIndex",
    "objectFit", "objectPosition",
  ];
  function isTransparentBg(cs) {
    const c = cs.backgroundColor;
    return !c || c === "transparent" || c === "rgba(0, 0, 0, 0)";
  }
  function pick(element) {
    const cs = getComputedStyle(element);
    const styles = {};
    props.forEach((p) => {
      const v = cs[p];
      if (v && v !== "none" && v !== "normal" && v !== "auto" && v !== "0px" && v !== "rgba(0, 0, 0, 0)")
        styles[p] = v;
    });
    styles.backgroundPaint = isTransparentBg(cs) && (!cs.backgroundImage || cs.backgroundImage === "none")
      ? "transparent"
      : "opaque-or-image";
    styles.backgroundImage = cs.backgroundImage;
    return styles;
  }
  function walk(element, depth) {
    if (depth > 3) return null;
    const children = [...element.children];
    return {
      tag: element.tagName.toLowerCase(),
      classes: element.className?.toString().split(" ").slice(0, 4).join(" "),
      styles: pick(element),
      img:
        element.tagName === "IMG"
          ? { alt: element.alt, w: element.naturalWidth, h: element.naturalHeight, position: getComputedStyle(element).position }
          : null,
      childCount: children.length,
      children: children.slice(0, 12).map((c) => walk(c, depth + 1)).filter(Boolean),
    };
  }
  const rect = el.getBoundingClientRect();
  return JSON.stringify(
    {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      placement: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
      tree: walk(el, 0),
    },
    null,
    2
  );
})("SELECTOR");
```

Omit `color` / reference `backgroundColor` hex / `fontFamily` from token mapping — those stay our
brand. Do record **backgroundPaint** (`transparent` vs `opaque-or-image`) and **placement.top**
(`reference-fidelity.mdc` Known failures).

## 2. State diff (scroll / hover / open / motion)

1. Run the measure script at state A (e.g. scrollY = 0, before reveal).
2. Trigger the change (scroll past threshold, hover, open drawer).
3. Re-run on the same selector.
4. Screenshot both states at 375 + 1440 → `brief/refs/<slug>/states/` when Motion ≠ `none`.
5. Record in `measures/<band>.md`: property · before → after · trigger · approx duration/easing
   **as future tokens** — never paste reference animation source.

## 3. Asset discovery (layered media)

Enumerate images and backgrounds before coding. Count layers for the blueprint row.
**Skip** logos / wordmarks / images that are mostly peer text — never download those.
Allowed visuals → `brief/refs/<slug>/assets/`, then copy to `public/_peer/` for comps.

```js
(function (selector) {
  const root = selector ? document.querySelector(selector) : document.body;
  if (!root) return JSON.stringify({ error: "root not found" });
  const imgs = [...root.querySelectorAll("img")].map((img) => ({
    src: img.currentSrc || img.src,
    alt: img.alt,
    w: img.naturalWidth,
    h: img.naturalHeight,
    position: getComputedStyle(img).position,
    zIndex: getComputedStyle(img).zIndex,
    parent: img.parentElement?.className?.toString().slice(0, 80),
    siblings: img.parentElement ? img.parentElement.querySelectorAll("img").length : 0,
  }));
  const backgrounds = [...root.querySelectorAll("*")]
    .map((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (!bg || bg === "none") return null;
      return {
        url: bg,
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(" ").slice(0, 3).join(" "),
      };
    })
    .filter(Boolean)
    .slice(0, 40);
  return JSON.stringify({ imgs, backgrounds, svgCount: root.querySelectorAll("svg").length, layerHint: imgs.length + backgrounds.length }, null, 2);
})("SELECTOR");
```

Download one URL when Playwright cannot save (e.g. CSS-only background) — project script from
`templates/scripts/fetch-peer-asset.mjs`:

```bash
node scripts/fetch-peer-asset.mjs <url> brief/refs/<slug>/assets/<file>
```

Log the source URL in `brief/assets.md` (`peer-comp`). Replace before ship.

## 4. Interaction + motion sweep → blueprint columns

During `/refs` after the screenshot pack:

- **Scroll sweep first:** header change · in-view reveals · scroll-snap · sticky · scrub/parallax —
  note presence only; do not copy their JS
- **Hover / click sweep:** only after scroll — tabs, drawers, cards
- **Motion role per band:** `none` / `reveal` / `sticky` / `scrub` / `hover` / `load`
- **Responsive:** note layout shifts at 375 / 768 / 1440

Write short bullets per band into the blueprint **Interaction** and **Motion** columns.

## 5. Overlay (the overlay gate's only recipe)

Run against the **build** (preview URL or `pnpm preview`), once at 375 and once at 1440, after the band's
PNG sits in `public/_peer/`. Replace `BAND_PNG` with that file name and `BAND_TOP` with the band's
`placement.top` from the measure script. No other tool is needed; `magick` is not installed.

```js
(function (src, top) {
  document.querySelectorAll("#peer-overlay").forEach((n) => n.remove());
  const img = document.createElement("img");
  img.id = "peer-overlay";
  img.src = "/_peer/" + src;
  img.style.cssText = "position:absolute;left:0;top:" + top + "px;width:100%;mix-blend-mode:difference;pointer-events:none;z-index:9999";
  document.body.appendChild(img);
  return "overlay on: " + src;
})("BAND_PNG", BAND_TOP);
```

Then `browser_take_screenshot` → `.qa/build/overlay-<unit>-<width>.png`. Near-black = aligned; bright
structure edges = fail. Remove the overlay with the same snippet's first line before the next unit.
