import type { Metadata } from "next";
import { Hero } from "@/components/blocks/hero/hero";
import { home } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: home.hero.subline,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
    </main>
  );
}
