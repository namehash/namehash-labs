import {
  CTASection,
  ColoredText,
  Footer,
  HeroSection,
  OurPrinciplesSection,
  ServicesSection,
  TeamSection,
} from "@/components/2 - molecules";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <ColoredText />
      <ServicesSection />
      <OurPrinciplesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}
