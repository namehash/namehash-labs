import {
  CTASection,
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
import { Header } from "@/components/2 - molecules/header";
import { Balancer } from "react-wrap-balancer";

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
      <Header />
      <section className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl text-center font-bold">
            Still Under Construction 🚧
          </h1>
          <p className="text-lg text-center text-gray-500 font-normal leading-7 max-w-[500px]">
            <Balancer>
              Whoops! It looks like the page you&apos;re searching for is still
              a work in progress. Our digital builders are on the job, laying
              down the code bricks and painting the pixels to bring it to life.
              Check back soon to see the finished masterpiece! In the meantime,
              feel free to explore other parts of our site.
            </Balancer>
          </p>
        </div>
      </section>
      <Footer className="lg:px-[112px] px-5 flex items-center justify-center w-full border-t border-gray-200 absolute bottom-0 left-0" />
    </main>
  );
}
