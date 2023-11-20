import {
  CTASection,
  ColoredText,
  Footer,
  HeroSection,
  OurPrinciplesSection,
  ProductsSection,
  TeamSection,
} from "@/components/2 - molecules";
import { CollaborationPartnersSection } from "@/components/2 - molecules/collaboration-partners-section";
import { getCalApi } from "@calcom/embed-react";
import Head from "next/head";
import { useEffect } from "react";

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
        <meta
          name="description"
          content="Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS."
        />
        <meta
          name="keywords"
          content="ens, web3, eth, nameguard, namegraph, namekit"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NameHash Labs - Helping ENS Grow" />
        <meta
          property="og:description"
          content="Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS."
        />
        <meta property="og:url" content="https://namehashlabs.org" />
        <meta
          property="og:image"
          content="https://namehashlabs.org/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="NameHash Labs - Helping ENS Grow"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@NamehashLabs" />
        <meta property="twitter:creator" content="@NamehashLabs" />
        <meta
          property="twitter:description"
          content="Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS."
        />
        <meta
          property="twitter:image"
          content="https://namehashlabs.org/og-image-twitter.png"
        />
        <meta
          property="twitter:image:alt"
          content="NameHash Labs - Helping ENS Grow"
        />
      </Head>
      <HeroSection />
      <ColoredText />
      <ProductsSection />
      <OurPrinciplesSection />
      <TeamSection />
      <CollaborationPartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
