import { ArrowRight } from "lucide-react";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { home } from "@/content/home";

/**
 * Blueprint band 5 — split media left (36/64), portrait frame.
 * Labelled placeholder until client media arrives.
 */
export function Service01() {
  return (
    <section
      id="services"
      className="bg-transparent px-[var(--space-gutter)] py-[var(--space-band-split-y)] md:px-[var(--space-band-split-x)]"
      aria-labelledby="home-service-01-heading"
    >
      <div className="mx-auto flex w-full max-w-[75rem] flex-col items-stretch gap-[var(--space-10)] md:flex-row md:items-center md:gap-[var(--space-split-gap)]">
        <div className="relative order-2 mx-auto w-full max-w-[16rem] overflow-hidden rounded-[var(--radius-md)] bg-surface-container aspect-[var(--aspect-service-portrait-sm)] md:order-1 md:mx-0 md:max-w-none md:w-[36%] md:shrink-0 md:aspect-[var(--aspect-service-portrait)]">
          <MediaPlaceholder label="Service film — pending" />
        </div>

        <div className="order-1 flex min-w-0 flex-1 flex-col justify-center text-left md:order-2 md:w-[64%]">
          <p className="text-sm tracking-[0.08em] text-on-surface-muted">
            {home.service01.index}
          </p>
          <h2
            id="home-service-01-heading"
            className="mt-[var(--space-3)] font-display text-[length:var(--text-3xl)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface md:text-[length:var(--text-4xl)]"
          >
            {home.service01.title}
          </h2>
          <p className="mt-[var(--space-4)] max-w-[36ch] text-on-surface-muted md:max-w-[42ch]">
            {home.service01.body}
          </p>
          <a
            href={home.service01.ctaHref}
            className="mt-[var(--space-6)] inline-flex w-fit items-center gap-[var(--space-2)] text-sm font-medium tracking-[0.12em] text-accent uppercase underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {home.service01.ctaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
