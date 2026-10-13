"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { home } from "@/content/home";
import { site } from "@/content/site";

/**
 * Blueprint band 9 — sticky closing contact.
 * Media: labelled photo placeholder + soft round shape (WebGL exception). No lead form.
 */
export function ClosingContact() {
  const trackRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const panelY = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduceMotion ? [0, 0, 0] : [12, 0, 0],
  );
  const panelOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    reduceMotion ? [1, 1] : [0.72, 1],
  );

  return (
    <section
      ref={trackRef}
      id="contact"
      className={
        reduceMotion
          ? "relative bg-surface-warm"
          : "relative min-h-[var(--min-height-closing-track)] bg-surface-warm md:min-h-[var(--min-height-closing-track-lg)]"
      }
      aria-labelledby="home-closing-heading"
    >
      <motion.div
        className={
          reduceMotion
            ? "flex min-h-[min(100vh,56rem)] items-center px-[var(--space-gutter)] py-[var(--space-band-airy)]"
            : "sticky top-[var(--header-height)] flex min-h-[calc(var(--hero-min-height)-var(--header-height))] items-start overflow-y-auto px-[var(--space-gutter)] py-[var(--space-6)] md:items-center md:overflow-visible md:py-[var(--space-band-airy)]"
        }
        style={reduceMotion ? undefined : { y: panelY, opacity: panelOpacity }}
      >
        <div className="mx-auto flex w-full max-w-[75rem] flex-col items-center gap-[var(--space-6)] md:flex-row md:items-center md:gap-[var(--space-8)]">
          {/* ~26% copy + dual CTAs */}
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

          {/* ~24% photo · aspect 0.75 — layered media 1 */}
          <div className="relative w-full max-w-[14.5rem] overflow-hidden rounded-[var(--radius-md)] bg-surface-container aspect-[var(--aspect-closing-photo)] md:w-[24%] md:max-w-none md:shrink-0">
            <MediaPlaceholder label="Clinic photo — pending" />
          </div>

          {/* ~49% soft round graphic — layered media 2 (WebGL → soft shape) */}
          <div
            className="relative flex w-full max-w-[21rem] items-center justify-center md:w-[49%] md:max-w-none"
            aria-hidden
          >
            <div className="relative aspect-square w-full max-w-[min(100%,33.5rem)]">
              <div className="absolute inset-[8%] rounded-full bg-accent-soft/70 blur-md" />
              <div className="absolute inset-[18%] rounded-full bg-accent-soft shadow-[var(--shadow-soft)]" />
              <div className="absolute inset-[32%] rounded-full bg-surface/40" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
