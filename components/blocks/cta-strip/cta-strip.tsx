import { home } from "@/content/home";
import { site } from "@/content/site";

/** Blueprint band 3 — centred CTA strip. One primary only. */
export function CtaStrip() {
  return (
    <section
      className="flex justify-center bg-transparent px-[var(--space-gutter)] py-0 md:py-[var(--space-6)]"
      aria-label={site.primaryCta.label}
    >
      <a
        href={site.primaryCta.href}
        className="flex w-full max-w-[30rem] flex-col items-center justify-center rounded-[var(--radius-lg)] bg-accent-soft px-[var(--space-6)] py-[var(--space-4)] text-center shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:py-[var(--space-6)]"
      >
        <span className="text-xs tracking-[0.12em] text-on-surface-muted uppercase">
          {home.ctaStrip.eyebrow}
        </span>
        <span className="mt-[var(--space-2)] text-sm font-medium tracking-[0.14em] text-on-surface uppercase">
          {site.primaryCta.label}
        </span>
        <span
          className="mt-[var(--space-3)] h-px w-10 bg-on-surface/35"
          aria-hidden
        />
      </a>
    </section>
  );
}
