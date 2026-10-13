import { MediaPlaceholder } from "@/components/media-placeholder";

/**
 * Blueprint band 2 — centred 16:9 media frame.
 * Labelled placeholder until the client film arrives.
 */
export function VideoIntro() {
  return (
    <section
      className="flex justify-center bg-surface px-[var(--space-band-video-x)] pb-[var(--space-band-tight)] pt-[var(--space-band-video-top)]"
      aria-label="Clinic film"
    >
      <div className="relative aspect-video w-full max-w-[62.5rem] overflow-hidden rounded-[var(--radius-md)] bg-surface-container">
        <MediaPlaceholder label="Clinic film — pending" />
      </div>
    </section>
  );
}
