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
import Head from "next/head";

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
      <Head>
        <title>NameHash Labs - Helping ENS Grow</title>
      </Head>

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
