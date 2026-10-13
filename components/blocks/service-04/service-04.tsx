"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { home } from "@/content/home";

/**
 * Blueprint band 8 — split media left (36/64), same archetype as band 5.
 * Peer film in `public/_peer/` until client media arrives.
 */
export function Service04() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="bg-transparent px-[var(--space-gutter)] py-[var(--space-band-split-y)] md:px-[var(--space-band-split-x)]"
      aria-labelledby="home-service-04-heading"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[75rem] flex-col items-stretch gap-[var(--space-10)] md:flex-row md:items-center md:gap-[var(--space-split-gap)]"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.42,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="relative order-2 mx-auto w-full max-w-[16rem] overflow-hidden rounded-[var(--radius-md)] bg-surface-container aspect-[var(--aspect-service-portrait-sm)] md:order-1 md:mx-0 md:max-w-none md:w-[36%] md:shrink-0 md:aspect-[var(--aspect-service-portrait)]">
          <video
            className="absolute inset-0 size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/_peer/service-04-still.png"
          >
            <source src="/_peer/service-04.mp4" type="video/mp4" />
          </video>
          <p className="pointer-events-none absolute bottom-[var(--space-3)] left-[var(--space-3)] rounded-[var(--radius-sm)] bg-surface/80 px-3 py-1 text-xs text-on-surface-muted">
            Service film — pending
          </p>
        </div>

        <div className="order-1 flex min-w-0 flex-1 flex-col justify-center text-left md:order-2 md:w-[64%]">
          <p className="text-sm tracking-[0.08em] text-on-surface-muted">
            {home.service04.index}
          </p>
          <h2
            id="home-service-04-heading"
            className="mt-[var(--space-3)] font-display text-[length:var(--text-3xl)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface md:text-[length:var(--text-4xl)]"
          >
            {home.service04.title}
          </h2>
          <p className="mt-[var(--space-4)] max-w-[36ch] text-on-surface-muted md:max-w-[42ch]">
            {home.service04.body}
          </p>
          <a
            href={home.service04.ctaHref}
            className="mt-[var(--space-6)] inline-flex w-fit items-center gap-[var(--space-2)] text-sm font-medium tracking-[0.12em] text-accent uppercase underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {home.service04.ctaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
