import { ChevronDown, DotPattern, HeroTexture } from "../1 - atoms";
import { Header } from "./header";
import CalButton from "../1 - atoms/cal-button";
import { HeroTextureRight } from "../1 - atoms/hero-texture-2";
import { Balancer } from "react-wrap-balancer";

export const HeroSection = () => {
  return (
    <section className="px-5 h-screen w-full flex flex-col relative items-center justify-center  overflow-hidden">
      <Header />
      <div className="flex flex-col items-center  max-w-[600px] z-20 animate-fadeIn">
        <h1 className="lg:text-[100px] text-5xl text-center font-bold lg:leading-[120px]">
          Helping ENS grow
        </h1>
        <p className="text-lg text-center text-gray-500 font-normal leading-7 mt-4">
          <Balancer>
            Welcome to NameHash Labs, a team of builders dedicated to the growth
            of ENS.
          </Balancer>
        </p>
        <div className="flex items-center justify-center mt-10">
          <CalButton className="bg-black cursor-pointer py-[13px] hover:bg-gray-800 transition-colors duration-200 px-[25px] border rounded-[8px] flex text-sm leading-5 font-medium lg:text-base lg:leading-6 text-white">
            Schedule a call
          </CalButton>
        </div>
      </div>
      <HeroTexture className="absolute left-0 top-0 h-[130%] w-[40%]" />
      <HeroTextureRight className="absolute right-0 top-0 h-[100%] w-[45%]" />

      <div
        className="absolute bottom-0 left-0 w-full h-[140px] bg-white z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        }}
      />

      <div
        className="w-[100vh] h-[100vw] absolute opacity-50"
        style={{
          transform: "rotate(-90deg)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 100%), linear-gradient(180deg, #FBA600 24.22%, #F112D9 48.69%, #4C3FA0 77.9%, #2ED3C6 96.84%)",
        }}
      />
      <div className="border rounded-full w-[1832px] h-[1832px] opacity-50 absolute bottom-0 translate-y-[50%] bg-white" />
      <div
        className="w-[1440px] h-[1440px] absolute bottom-0 translate-y-[50%]"
        style={{
          borderRadius: "1401.845px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.50) 48.96%)",
        }}
      />

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
