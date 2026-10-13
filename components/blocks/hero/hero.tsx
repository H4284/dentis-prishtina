import { home } from "@/content/home";

/**
 * Blueprint band 1 — fullscreen brand hero.
 * Soft shape + labelled placeholder. Scroll scrub cut for LCP (design.mdc cut order).
 */
export function Hero() {
  return (
    <section
      className="relative"
      aria-labelledby="home-hero-heading"
    >
      <div className="relative flex h-[var(--hero-min-height)] min-h-[var(--hero-min-height)] w-full items-center justify-center overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-surface-container/40" />
          <div className="absolute left-1/2 top-1/2 size-[min(72vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft/40" />
          <p className="absolute bottom-[var(--space-6)] left-[var(--space-gutter)] rounded-[var(--radius-sm)] bg-surface/80 px-3 py-1 text-xs text-on-surface-muted">
            Clinic photo — pending
          </p>
        </div>

        <div className="relative z-10 flex max-w-[40rem] flex-col items-center px-[var(--space-gutter)] text-center">
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
        </div>
      </div>
    </section>
  );
}
