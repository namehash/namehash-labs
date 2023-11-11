import {
  CTASection,
  ColoredText,
  Footer,
  HeroSection,
  OurPrinciplesSection,
  ProductsSection,
  TeamSection,
} from "@/components/2 - molecules";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <ColoredText />
      <ProductsSection />
      <OurPrinciplesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}
