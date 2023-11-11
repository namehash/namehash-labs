import Image from "next/image";
import { ChevronDown, DotPattern, HeroTexture } from "../1 - atoms";
import { Header } from "./header";
import CalButton from "../1 - atoms/cal-button";

export const HeroSection = () => {
  return (
    <section className="px-5 h-screen w-full flex flex-col relative items-center justify-center bg-gray-200 overflow-hidden">
      <Header />

      <div className="flex flex-col items-centCalButtoner gap-5 max-w-[728px] z-20">
        <h1 className="lg:text-5xl lg:leading-[60px] text-center text-4xl leading-10 font-bold">
          Core Infrastructure for the internet of identity
        </h1>
        <p className="text-lg text-center text-gray-500 font-normal leading-7">
          We are a relentlessly committed team building open source public goods
          to drive global adoption of the ENS protocol
        </p>
        <div className="flex items-center justify-center">
          <CalButton className="bg-black cursor-pointer py-[13px] hover:bg-gray-800 transition-colors duration-200 px-[25px] border rounded-[8px] flex">
            <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6 text-white">
              Schedule a call
            </p>
          </CalButton>
        </div>
      </div>
      <HeroTexture className="absolute top-0 right-0 w-full h-full" />
      <DotPattern className="absolute top-0 right-0 w-full h-full" />
      <div className="bg-gradient-to-b from-transparent to-white h-1/2 w-full absolute bottom-0 left-0" />

      <button
        onClick={() => {
          const targetDiv = document.getElementById("targetDiv");

          if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="px-20 py-2.5 z-20 border rounded-full border-gray-300 absolute bottom-10 hover:bg-gray-100 transition-colors duration-200"
      >
        <ChevronDown />
      </button>

      <Image
        className="absolute invisible lg:visible top-[150px] left-[508px]"
        alt="test"
        src={"/images/hero-section/zeus.png"}
        width={50}
        height={50}
      />
      <Image
        className="absolute invisible lg:visible top-[50px] left-[20px]"
        alt="test"
        src={"/images/hero-section/phoenix.png"}
        width={250}
        height={250}
      />
      <Image
        className="absolute invisible lg:visible bottom-[50px] left-[100px]"
        alt="test"
        src={"/images/hero-section/hidra.png"}
        width={250}
        height={250}
      />
      <Image
        className="absolute invisible lg:visible bottom-[200px] left-[450px]"
        alt="test"
        src={"/images/hero-section/run.png"}
        width={150}
        height={150}
      />
      <Image
        className="absolute invisible lg:visible bottom-[65px] left-[700px]"
        alt="test"
        src={"/images/hero-section/super-woman.png"}
        width={250}
        height={250}
      />
      <Image
        className="absolute invisible lg:visible bottom-[200px] right-[650px]"
        alt="test"
        src={"/images/hero-section/running-girl.png"}
        width={150}
        height={150}
      />
      <Image
        className="absolute invisible lg:visible bottom-[50px] right-[400px]"
        alt="test"
        src={"/images/hero-section/skeleton.png"}
        width={200}
        height={200}
      />
      <Image
        className="absolute invisible lg:visible bottom-[200px] right-[100px]"
        alt="test"
        src={"/images/hero-section/dancing.png"}
        width={250}
        height={250}
      />
      <Image
        className="absolute invisible lg:visible top-[0px] right-[650px]"
        alt="test"
        src={"/images/hero-section/eye.png"}
        width={350}
        height={350}
      />
      <Image
        className="absolute invisible lg:visible top-[200px] right-[450px]"
        alt="test"
        src={"/images/hero-section/running.png"}
        width={150}
        height={150}
      />
      <Image
        className="absolute invisible lg:visible top-[200px] right-[200px]"
        alt="test"
        src={"/images/hero-section/zeus-2.png"}
        width={90}
        height={90}
      />
    </section>
  );
};
