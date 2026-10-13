import type { Metadata } from "next";
import { Approach } from "@/components/blocks/approach/approach";
import { CtaStrip } from "@/components/blocks/cta-strip/cta-strip";
import { Hero } from "@/components/blocks/hero/hero";
import { Service01 } from "@/components/blocks/service-01/service-01";
import { Service02 } from "@/components/blocks/service-02/service-02";
import { Service03 } from "@/components/blocks/service-03/service-03";
import { Service04 } from "@/components/blocks/service-04/service-04";
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
      <Service01 />
      <Service02 />
      <Service03 />
      <Service04 />
    </main>
  );
}
