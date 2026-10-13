/**
 * Blueprint band 2 — centred 16:9 ambient video.
 * Peer film in `public/_peer/` until the client file arrives.
 */
export function VideoIntro() {
  return (
    <section
      className="flex justify-center bg-surface px-[var(--space-band-video-x)] pb-[var(--space-band-tight)] pt-[var(--space-band-video-top)]"
      aria-label="Clinic film"
    >
      <div className="relative aspect-video w-full max-w-[62.5rem] overflow-hidden rounded-[var(--radius-md)] bg-surface-container">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/_peer/video-intro.mp4" type="video/mp4" />
        </video>
        <p className="pointer-events-none absolute bottom-[var(--space-3)] left-[var(--space-3)] rounded-[var(--radius-sm)] bg-surface/80 px-3 py-1 text-xs text-on-surface-muted">
          Clinic film — pending
        </p>
      </div>
    </section>
  );
}
