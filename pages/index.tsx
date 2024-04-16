import "@namehash/ens-webfont";
import {
  HeroSection,
  OurPrinciplesSection,
  ProductsSection,
  TeamSection,
} from "@/components/2 - molecules";
import { IntroducingNamekit } from "@/components/2 - molecules/introducing-namekit";
import { TheVisionSection } from "@/components/2 - molecules/the-vision-section";
import { JoinOurTeamSection } from "@/components/1 - atoms/join-our-team-section";
import { useRouter } from "next/router";
import { TestimonialsSection } from "@/components/2 - molecules/testimonials-section";
import { Layout } from "@/components/4 - templates/layout";
import { OurSuportersSection } from "@/components/2 - molecules/our-supporters-section";
import { FinancialSupportSection } from "@/components/2 - molecules/financial-support-section";
import { SEO } from "@/components/1 - atoms/seo";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full flex flex-col items-center justify-between">
      <SEO
        title="NameHash Labs - Helping ENS Grow"
        description="NameHash Labs builds open source public goods that drive the global adoption of ENS."
        keywords="ens, web3, eth, nameguard, namekit, namehash"
        ogImagePath="/images/og-image.png"
        ogImageAlt="NameHash Labs - Helping ENS Grow"
        twitterImagePath="/images/og-image-twitter.png"
      />
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
