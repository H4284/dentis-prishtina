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
} as const;
