import Link from "next/link";
import { site } from "@/content/site";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-outline/60 bg-surface/90 backdrop-blur-sm">
      <div className="flex h-[var(--header-height)] items-center justify-between px-[var(--space-gutter)]">
        <Link
          href="/"
          className="font-display text-lg tracking-[var(--tracking-display)] text-on-surface"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-on-surface-muted transition-colors hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.primaryCta.href}
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-accent px-4 text-sm text-on-accent"
          >
            {site.primaryCta.label}
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
