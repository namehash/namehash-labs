import { ChevronDown, DotPattern, HeroTexture } from "../1 - atoms";
import { Header } from "./header";
import CalButton from "../1 - atoms/cal-button";
import { HeroTextureRight } from "../1 - atoms/hero-texture-2";

export const HeroSection = () => {
  return (
    <section className="px-5 h-screen w-full flex flex-col relative items-center justify-center  overflow-hidden">
      <Header />
      <div className="flex flex-col items-centCalButtoner max-w-[728px] z-20 animate-fadeIn">
        <h1 className="lg:text-[80px] text-5xl text-center font-bold lg:leading-[120px]">
          Helping ENS grow
        </h1>
        <p className="text-lg text-center text-gray-500 font-normal leading-7 mt-4">
          Welcome to NameHash Labs, a team of builders dedicated to growing ENS.
        </p>
        <div className="flex items-center justify-center mt-10">
          <CalButton className="bg-black cursor-pointer py-[13px] hover:bg-gray-800 transition-colors duration-200 px-[25px] border rounded-[8px] flex text-sm leading-5 font-medium lg:text-base lg:leading-6 text-white">
            Schedule a call
          </CalButton>
        </div>
      </div>
      <HeroTexture className="absolute left-0 top-0 h-[130%] w-[40%] " />
      <HeroTextureRight className="absolute right-0 top-0 h-[100%] w-[45%] " />

      <DotPattern className="absolute top-0 right-0 w-full h-full" />
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
    </section>
  );
};
