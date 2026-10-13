export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-4 top-4 z-[60] -translate-y-16 rounded-[var(--radius-md)] bg-surface px-4 py-3 text-on-surface opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-accent"
    >
      Skip to content
    </a>
  );
}
