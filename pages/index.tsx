import {
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
import { JoinOurTeamSection } from "@/components/1 - atoms/join-our-team-section";
import { useRouter } from "next/router";
import { origin } from "@/lib/shared/origin";

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

  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between">
      <Head>
        <meta
          name="twitter:image"
          content="https://namehashlabs.org/images/og-image-twitter.png"
        />
        <meta
          property="og:image"
          content="https://namehashlabs.org/images/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="NameHash Labs - Helping ENS Grow"
        />

        <meta property="og:url" content={origin + router.pathname} />
        <title>NameHash Labs - Helping ENS Grow</title>
      </Head>
      <HeroSection />
      <TheVisionSection />
      <IntroducingNamekit />
      <ProductsSection />
      <OurPrinciplesSection />
      <TeamSection />
      <CollaborationPartnersSection />
      <JoinOurTeamSection />
      <Footer />
    </main>
  );
}
