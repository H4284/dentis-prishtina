/**
 * Labelled stand-in when Photo source is `client` and the file is missing.
 */
export function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex items-end bg-surface-container"
      aria-hidden
    >
      <p className="m-[var(--space-3)] rounded-[var(--radius-sm)] bg-surface/80 px-3 py-1 text-xs text-on-surface-muted">
        {label}
      </p>
    </div>
  );
}
