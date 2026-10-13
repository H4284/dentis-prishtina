import type { Metadata } from "next";
import { Approach } from "@/components/blocks/approach/approach";
import { CtaStrip } from "@/components/blocks/cta-strip/cta-strip";
import { Hero } from "@/components/blocks/hero/hero";
import { VideoIntro } from "@/components/blocks/video-intro/video-intro";
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
      <VideoIntro />
      <CtaStrip />
      <Approach />
    </main>
  );
}
