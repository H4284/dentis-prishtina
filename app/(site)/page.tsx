import type { Metadata } from "next";
import { home } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: home.hero.subline,
  alternates: { canonical: "/" },
};

/** Shell placeholder — home bands land in later `/build home:band-N` units. */
export default function HomePage() {
  return (
    <main id="main">
      <section
        className="flex min-h-[var(--hero-min-height)] flex-col items-center justify-center px-[var(--space-gutter)] text-center"
        aria-labelledby="home-hero-heading"
      >
        <p className="font-display text-[length:var(--text-hero)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface">
          {home.hero.brand}
        </p>
        <h1
          id="home-hero-heading"
          className="mt-4 max-w-[24ch] text-xl text-on-surface-muted"
        >
          {home.hero.headline}
        </h1>
        <p className="mt-3 max-w-[40ch] text-on-surface-muted">{home.hero.subline}</p>
        <a
          href={site.primaryCta.href}
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-accent px-5 text-on-accent"
        >
          {site.primaryCta.label}
        </a>
      </section>
    </main>
  );
}
