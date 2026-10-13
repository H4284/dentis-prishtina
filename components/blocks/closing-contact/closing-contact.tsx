import { MessageCircle } from "lucide-react";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { home } from "@/content/home";
import { site } from "@/content/site";

/**
 * Blueprint band 9 — sticky closing contact.
 * CSS sticky only (motion scrub cut for LCP / TBT). No lead form.
 */
export function ClosingContact() {
  return (
    <section
      id="contact"
      className="relative min-h-[var(--min-height-closing-track)] bg-surface-warm md:min-h-[var(--min-height-closing-track-lg)]"
      aria-labelledby="home-closing-heading"
    >
      <div className="sticky top-[var(--header-height)] flex min-h-[calc(var(--hero-min-height)-var(--header-height))] items-start overflow-y-auto px-[var(--space-gutter)] py-[var(--space-6)] md:items-center md:overflow-visible md:py-[var(--space-band-airy)]">
        <div className="mx-auto flex w-full max-w-[75rem] flex-col items-center gap-[var(--space-6)] md:flex-row md:items-center md:gap-[var(--space-8)]">
          <div className="flex w-full flex-col text-left md:w-[26%] md:shrink-0">
            <h2
              id="home-closing-heading"
              className="font-display text-[length:var(--text-3xl)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface md:text-[length:var(--text-4xl)]"
            >
              {home.closing.headline}
            </h2>
            <p className="mt-[var(--space-4)] max-w-[28ch] text-on-surface-muted">
              {home.closing.subline}
            </p>
            <div className="mt-[var(--space-8)] flex flex-col items-start gap-[var(--space-3)]">
              <a
                href={site.primaryCta.href}
                className="inline-flex min-h-11 w-full max-w-[20rem] items-center justify-center rounded-[var(--radius-md)] bg-accent px-[var(--space-6)] py-[var(--space-3)] text-sm font-medium tracking-[0.08em] text-on-accent uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:w-auto"
              >
                {site.primaryCta.label}
              </a>
              <a
                href={site.whatsappHref}
                rel="noopener"
                className="inline-flex min-h-11 w-full max-w-[20rem] items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-outline bg-surface px-[var(--space-6)] py-[var(--space-3)] text-sm font-medium tracking-[0.08em] text-on-surface uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:w-auto"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[14.5rem] overflow-hidden rounded-[var(--radius-md)] bg-surface-container aspect-[var(--aspect-closing-photo)] md:w-[24%] md:max-w-none md:shrink-0">
            <MediaPlaceholder label="Clinic photo — pending" />
          </div>

          <div
            className="relative flex w-full max-w-[21rem] items-center justify-center md:w-[49%] md:max-w-none"
            aria-hidden
          >
            <div className="relative aspect-square w-full max-w-[min(100%,33.5rem)]">
              <div className="absolute inset-[8%] rounded-full bg-accent-soft/70" />
              <div className="absolute inset-[18%] rounded-full bg-accent-soft shadow-[var(--shadow-soft)]" />
              <div className="absolute inset-[32%] rounded-full bg-surface/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
