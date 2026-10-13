"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { home } from "@/content/home";

/**
 * Blueprint band 1 — fullscreen brand hero with scroll scrub.
 * Media: soft shape + labelled placeholder until client photos arrive.
 */
export function Hero() {
  const trackRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduceMotion ? [1, 1] : [0.36, 1],
  );
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduceMotion ? [0, 0] : [-6, 0],
  );

  return (
    <section
      ref={trackRef}
      className="relative h-[170vh]"
      aria-labelledby="home-hero-heading"
    >
      <div className="sticky top-0 flex h-[var(--hero-min-height)] min-h-[var(--hero-min-height)] w-full items-center justify-center overflow-hidden bg-surface">
        {/* Layered media count: 1 — soft shape (WebGL exception) + pending label */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-surface-container/40" />
          <div className="absolute left-1/2 top-1/2 size-[min(72vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft/50 blur-3xl" />
          <p className="absolute bottom-[var(--space-6)] left-[var(--space-gutter)] rounded-[var(--radius-sm)] bg-surface/80 px-3 py-1 text-xs text-on-surface-muted">
            Clinic photo — pending
          </p>
        </div>

        <motion.div
          className="relative z-10 flex max-w-[40rem] flex-col items-center px-[var(--space-gutter)] text-center"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h1
            id="home-hero-heading"
            className="font-display text-[length:var(--text-hero)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface"
          >
            {home.hero.brand}
          </h1>
          <p className="mt-4 max-w-[28ch] text-xl text-on-surface-muted">
            {home.hero.headline}
          </p>
          <p className="mt-3 max-w-[40ch] text-on-surface-muted">{home.hero.subline}</p>
        </motion.div>
      </div>
    </section>
  );
}
