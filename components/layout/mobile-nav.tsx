"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const menuButton = openRef.current;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
      menuButton?.focus();
    };
  }, [open, close]);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <a
        href={site.whatsappHref}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-md)] bg-accent px-3 text-sm text-on-accent"
        rel="noopener"
      >
        WhatsApp
      </a>
      <button
        ref={openRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-md)] text-on-surface"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-on-surface/40 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={close}
      />

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open ? true : undefined}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(20rem,100%)] flex-col bg-surface px-[var(--space-gutter)] py-[var(--space-6)] shadow-[var(--shadow-soft)] transition-transform duration-[var(--duration-mid)] ease-[var(--ease-out)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <p className="font-display text-lg tracking-[var(--tracking-display)]">{site.name}</p>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-md)]"
            aria-label="Close menu"
            onClick={close}
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 py-3 text-lg text-on-surface"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.primaryCta.href}
          className="mt-auto inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-accent px-4 text-on-accent"
          onClick={close}
        >
          {site.primaryCta.label}
        </a>
      </div>
    </div>
  );
}
