export const site = {
  name: "Dentis Prishtina",
  tagline: "The first visit without fear",
  city: "Prishtina",
  country: "Kosovo",
  /** Confirm street address with client. */
  address: "Prishtina, Kosovo",
  phone: "+383 44 100 100",
  phoneHref: "tel:+38344100100",
  whatsapp: "+383 44 100 100",
  whatsappHref: "https://wa.me/38344100100",
  email: "info@dentis.example",
  emailHref: "mailto:info@dentis.example",
  locales: ["sq"] as const,
  defaultLocale: "sq" as const,
  nav: [
    { href: "/#services", label: "Shërbimet" },
    { href: "/#about", label: "Rreth nesh" },
    { href: "/#contact", label: "Kontakt" },
  ],
  primaryCta: {
    label: "Book an appointment",
    href: "tel:+38344100100",
  },
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export type Site = typeof site;
