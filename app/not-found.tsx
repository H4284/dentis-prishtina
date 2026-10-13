import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--space-gutter)] py-[var(--space-band-mid)] text-center"
    >
      <h1 className="font-display text-3xl tracking-[var(--tracking-display)] text-on-surface">
        Page not found
      </h1>
      <p className="mt-3 max-w-[40ch] text-on-surface-muted">
        This page is not on {site.name}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-accent px-5 text-on-accent"
      >
        Back to home
      </Link>
    </main>
  );
}
