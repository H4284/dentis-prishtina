import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-outline px-[var(--space-gutter)] py-[var(--space-band-mid)] text-sm text-on-surface-muted">
      <p className="font-display text-on-surface">{site.name}</p>
      <p className="mt-2">{site.address}</p>
      <p className="mt-1">
        <a href={site.phoneHref}>{site.phone}</a>
        {" · "}
        <a href={site.emailHref}>{site.email}</a>
      </p>
      <p className="mt-6">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
