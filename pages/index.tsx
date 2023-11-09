import { DotPattern } from "@/components/1 - atoms/dot-pattenr";
import { HeroTexture } from "@/components/1 - atoms/hero-texture";
import { ServicesSection } from "@/components/2 - molecules/services-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="h-screen w-full flex items-center justify-center relative bg-gray-200">
        <div className="flex flex-col items-center gap-5 max-w-[728px] z-20">
          <h1 className="text-5xl font-bold leading-[60px] text-center">
            Core Infrastructure for the internet of identity
          </h1>
          <p className="text-lg text-center text-gray-500 font-normal leading-7">
            We are a relentlessly committed team building open source public
            goods to drive global adoption of the ENS protocol
          </p>
          <div>
            <button className="text-white bg-black cursor-pointer py-[13px] hover:bg-gray-800 transition-colors duration-200 px-[25px] border rounded-[8px] flex">
              Schedule a call
            </button>
          </div>
        </div>
        <HeroTexture className="absolute top-0 right-0 w-full h-full" />
        <DotPattern className="absolute top-0 right-0 w-full h-full" />
        <div className="bg-gradient-to-b from-transparent to-white h-1/2 w-full absolute bottom-0 left-0" />
      </section>
      <section className="px-[110px] py-[122px]">
        <p
          style={{
            background: "linear-gradient(180deg, #289FB9 0%, #8740A0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
          className="text-transparent text-4xl font-semibold text-center max-w-[1216px]"
        >
          Founded in 2022, Namehash Labs is a technology organization dedicated
          to infrastructure-level solutions that helps the Ethereum Name Service
          (ENS) Protocol grow
        </p>
      </section>
      <section>
        <p className="text-xs font-medium leading-4 uppercase tracking-tight text-gray-500 text-center">
          What we{"’"}re building
        </p>
        <h3 className="text-4xl leading-10 font-bold text-center mt-3">
          Our products
        </h3>
      </section>
      <ServicesSection />
    </main>
  );
}
