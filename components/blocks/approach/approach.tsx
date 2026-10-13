"use client";

import { motion, useReducedMotion } from "motion/react";
import { home } from "@/content/home";

/** Blueprint band 4 — centred editorial approach. Reveal once; no media, no CTA. */
export function Approach() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="flex min-h-[var(--min-height-approach)] items-center justify-center bg-transparent px-[var(--space-gutter)] py-[var(--space-6)] md:min-h-[var(--min-height-approach-lg)] md:py-[var(--space-band-mid)]"
      aria-labelledby="home-approach-heading"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[var(--max-w-approach)] flex-col items-center text-center"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: reduceMotion ? 0 : 0.42,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <p className="text-xs tracking-[0.14em] text-on-surface-muted uppercase">
          {home.approach.eyebrow}
        </p>
        <h2
          id="home-approach-heading"
          className="mt-[var(--space-4)] w-full font-display text-[length:var(--text-2xl)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface md:mt-[var(--space-6)] md:text-[length:var(--text-4xl)]"
        >
          {home.approach.headline}
        </h2>
      </motion.div>
    </section>
  );
}
