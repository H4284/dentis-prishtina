import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-outline bg-surface-container px-[var(--space-gutter)] py-[var(--space-band-mid)] text-sm text-on-surface-muted">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-lg tracking-[var(--tracking-display)] text-on-surface">
            {site.name}
          </p>
          <p className="mt-2 max-w-[36ch]">{site.tagline}</p>
          <p className="mt-4">{site.address}</p>
          <p className="mt-2">
            <a href={site.phoneHref} className="min-h-11 inline-flex items-center text-on-surface">
              {site.phone}
            </a>
          </p>
          <p>
            <a href={site.emailHref} className="min-h-11 inline-flex items-center">
              {site.email}
            </a>
          </p>
          <p>
            <a
              href={site.whatsappHref}
              className="min-h-11 inline-flex items-center"
              rel="noopener"
            >
              WhatsApp {site.whatsapp}
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <nav aria-label="Footer" className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="min-h-11 inline-flex items-center">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href={site.primaryCta.href}
              className="inline-flex min-h-11 w-fit items-center justify-center rounded-[var(--radius-md)] bg-accent px-4 text-on-accent"
            >
              {site.primaryCta.label}
            </a>
            <p className="text-xs">Privacy page pending client NAP approval.</p>
          </div>
        </div>
      </div>
      <p className="mt-10 text-xs">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
