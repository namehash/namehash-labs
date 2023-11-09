import { ChevronDown, DotPattern, HeroTexture } from "../1 - atoms";
import { Header } from "./header";

export const HeroSection = () => {
  return (
    <section className="px-5 h-screen w-full flex flex-col relative items-center justify-center bg-gray-200 ">
      <Header />

      <div className="flex flex-col items-center gap-5 max-w-[728px] z-20">
        <h1 className="lg:text-5xl lg:leading-[60px] text-center text-4xl leading-10 font-bold">
          Core Infrastructure for the internet of identity
        </h1>
        <p className="text-lg text-center text-gray-500 font-normal leading-7">
          We are a relentlessly committed team building open source public goods
          to drive global adoption of the ENS protocol
        </p>
        <div>
          <button className="bg-black cursor-pointer py-[13px] hover:bg-gray-800 transition-colors duration-200 px-[25px] border rounded-[8px] flex">
            <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6 text-white">
              Schedule a call
            </p>
          </button>
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
        className="px-20 py-2.5 border rounded-full border-gray-300 absolute bottom-10 hover:bg-gray-100 transition-colors duration-200"
      >
        <ChevronDown />
      </button>
    </section>
  );
};
