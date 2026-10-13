import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="flex h-[var(--header-height)] items-center justify-between px-[var(--space-gutter)]">
      <Link href="/" className="font-display text-lg tracking-[var(--tracking-display)] text-on-surface">
        {site.name}
      </Link>
      <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-on-surface-muted hover:text-on-surface"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={site.primaryCta.href}
          className="rounded-[var(--radius-md)] bg-accent px-4 py-2 text-sm text-on-accent"
        >
          {site.primaryCta.label}
        </a>
      </nav>
      <a
        href={site.whatsappHref}
        className="rounded-[var(--radius-md)] bg-accent px-3 py-2 text-sm text-on-accent md:hidden"
        rel="noopener"
      >
        WhatsApp
      </a>
    </header>
  );
}
