import { home } from "@/content/home";

/** Blueprint band 4 — centred editorial approach. No media, no CTA. */
export function Approach() {
  return (
    <section
      id="about"
      className="flex min-h-[var(--min-height-approach)] items-center justify-center bg-transparent px-[var(--space-gutter)] py-[var(--space-6)] md:min-h-[var(--min-height-approach-lg)] md:py-[var(--space-band-mid)]"
      aria-labelledby="home-approach-heading"
    >
      <div className="mx-auto flex w-full max-w-[var(--max-w-approach)] flex-col items-center text-center">
        <p className="text-xs tracking-[0.14em] text-on-surface-muted uppercase">
          {home.approach.eyebrow}
        </p>
        <h2
          id="home-approach-heading"
          className="mt-[var(--space-4)] w-full font-display text-[length:var(--text-2xl)] leading-[var(--leading-display)] tracking-[var(--tracking-display)] text-on-surface md:mt-[var(--space-6)] md:text-[length:var(--text-4xl)]"
        >
          {home.approach.headline}
        </h2>
      </div>
    </section>
  );
}
