import {
  CTASection,
  ColoredText,
  Footer,
  HeroSection,
  OurPrinciplesSection,
  ProductsSection,
  TeamSection,
} from "@/components/2 - molecules";
import { IntroducingNamekit } from "@/components/2 - molecules/introducing-namekit";
import { CollaborationPartnersSection } from "@/components/2 - molecules/collaboration-partners-section";
import { TheVisionSection } from "@/components/2 - molecules/the-vision-section";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NameHash Labs - Helping ENS Grow",
  description:
    "Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS.",
  keywords: ["namehashlabs", "ens", "web3", "eth"],
  icons: [
    { rel: "icon", url: "favicon.ico" },
    { rel: "apple-touch-icon", url: "favicon.ico" },
  ],
  openGraph: {
    type: "website",
    title: "NameHash Labs - Helping ENS Grow",
    description:
      "Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS.",
    url: "https://namehashlabs.org/",
    images: {
      url: "https://namehashlabs.org/images/og-image.png",
      alt: "NameHash Labs - Helping ENS Grow",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@NamehashLabs",
    creator: "@NamehashLabs",
    description:
      "Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS.",
    images: {
      url: "https://namehashlabs.org/images/og-image-twitter.png",
      alt: "NameHash Labs - Helping ENS Grow",
    },
  },
};

export default function Home() {
  useEffect(() => {
    console.log("open calendar");
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "--brand-color": "#000000",
          },
          dark: {
            "--brand-color": "#000000",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <ColoredText />
      <TheVisionSection />
      <IntroducingNamekit />
      <ProductsSection />
      <OurPrinciplesSection />
      <TeamSection />
      <CollaborationPartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
