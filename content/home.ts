import { site } from "./site";

/** Copy-lock keys. Hero lines TBD until client approves. */
export const home = {
  hero: {
    brand: site.name,
    headline: "The first visit without fear",
    subline: "A calm, modern dental clinic in Prishtina.",
  },
  ctaStrip: {
    eyebrow: "Filloni këtu",
  },
  approach: {
    eyebrow: "Qasja jonë",
    headline:
      "Calm dental care in Prishtina, shaped around the first visit without fear.",
  },
  service01: {
    index: "01",
    title: "Calm first visits",
    body: "A gentle first appointment — clear talk, no rush, and a plan you can trust.",
    ctaLabel: "Discover",
    ctaHref: "/#contact",
  },
  service02: {
    index: "02",
    title: "Thoughtful restorations",
    body: "Restorative care planned as one calm path — function first, then a smile that feels like yours.",
    primaryCtaLabel: site.primaryCta.label,
    primaryCtaHref: site.primaryCta.href,
    secondaryCtaLabel: "Explore",
    secondaryCtaHref: "/#about",
  },
  service03: {
    index: "03",
    title: "Natural smile design",
    body: "Smile work guided by your face, your bite, and a result that still feels like you.",
    ctaLabel: "Learn more",
    ctaHref: "/#contact",
  },
} as const;
