import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--space-gutter)] text-center">
      <h1 className="font-display text-3xl tracking-[var(--tracking-display)]">Page not found</h1>
      <p className="mt-3 text-on-surface-muted">This page is not on {site.name}.</p>
      <Link href="/" className="mt-8 text-accent underline-offset-4 hover:underline">
        Back to home
      </Link>
    </main>
  );
}
