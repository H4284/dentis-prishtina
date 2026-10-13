import { ArrowRight } from "lucide-react";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { home } from "@/content/home";

/**
 * Blueprint band 6 — stacked media: title → 16:9 → copy + dual CTAs.
 * Labelled placeholder until client media arrives.
 */
export function Service02() {
  return (
    <section
      className="bg-transparent px-[var(--space-gutter)] py-[var(--space-4)] md:py-[var(--space-8)] md:pl-[var(--space-band-stack-pl)] md:pr-[var(--space-band-stack-pr)]"
      aria-labelledby="home-service-02-heading"
    >
      <div className="flex w-full max-w-[var(--max-w-service-stack)] flex-col gap-[var(--space-6)] text-left md:gap-[var(--space-8)]">
        <header>
          <p className="text-sm tracking-[0.08em] text-on-surface-muted">
            {home.service02.index}
          </p>
          <h2
            id="home-service-02-heading"
            className="mt-[var(--space-3)] font-display text-[length:var(--text-3xl)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface md:text-[length:var(--text-4xl)]"
          >
            {home.service02.title}
          </h2>
        </header>

        <div className="relative w-full overflow-hidden rounded-[var(--radius-md)] bg-surface-container aspect-video">
          <MediaPlaceholder label="Service film — pending" />
        </div>

        <div className="flex flex-col gap-[var(--space-6)]">
          <p className="max-w-[42ch] text-on-surface-muted">{home.service02.body}</p>
          <div className="flex flex-col items-start gap-[var(--space-3)]">
            <a
              href={home.service02.primaryCtaHref}
              className="inline-flex min-h-11 items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] bg-accent-soft px-[var(--space-6)] py-[var(--space-3)] text-sm font-medium tracking-[0.1em] text-on-surface uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {home.service02.primaryCtaLabel}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={home.service02.secondaryCtaHref}
              className="inline-flex w-fit items-center gap-[var(--space-2)] text-sm font-medium tracking-[0.12em] text-accent uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {home.service02.secondaryCtaLabel}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
