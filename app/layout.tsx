import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/layout/json-ld";
import { SkipLink } from "@/components/layout/skip-link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  // Brand headline is Latin-only; keeps the LCP font file small.
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL("https://dentis.example"),
  openGraph: {
    type: "website",
    locale: "sq_AL",
    siteName: site.name,
    title: site.name,
    description: site.tagline,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sq"
      className={cn(fraunces.variable, sourceSans.variable, "font-sans")}
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <JsonLd />
        <SkipLink />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
