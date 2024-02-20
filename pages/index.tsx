import "@namehash/ens-webfont";

import {
  HeroSection,
  OurPrinciplesSection,
  ProductsSection,
  TeamSection,
} from "@/components/2 - molecules";
import { IntroducingNamekit } from "@/components/2 - molecules/introducing-namekit";
import { TheVisionSection } from "@/components/2 - molecules/the-vision-section";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Head from "next/head";
import { JoinOurTeamSection } from "@/components/1 - atoms/join-our-team-section";
import { useRouter } from "next/router";
import { origin } from "@/lib/shared/origin";
import { TestimonialsSection } from "@/components/2 - molecules/testimonials-section";
import { Layout } from "@/components/4 - templates/layout";
import { OurSuportersSection } from "@/components/2 - molecules/our-supporters-section";
import { FinancialSupportSection } from "@/components/2 - molecules/financial-support-section";

export default function Home() {
  useEffect(() => {
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
    <main className="w-full flex flex-col items-center justify-between">
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
      <Layout>
        <HeroSection />
        <TheVisionSection />
        <IntroducingNamekit />
        <ProductsSection />
        <OurSuportersSection />
        <TestimonialsSection />
        <OurPrinciplesSection />
        <TeamSection />
        <JoinOurTeamSection />
        <FinancialSupportSection />
      </Layout>
    </main>
  );
}
