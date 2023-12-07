import { ChevronDown } from "../1 - atoms";
import { Header } from "./header";
import CalButton from "../1 - atoms/cal-button";
import { Balancer } from "react-wrap-balancer";
import { BeansBg } from "../1 - atoms/icons/beans-bg";

export const HeroSection = () => {
  return (
    <section className="px-5 h-screen w-full flex flex-col relative items-center justify-center  overflow-hidden">
      <Header />
      <div className="flex flex-col items-center  max-w-[600px] z-20 animate-fadeIn">
        <h1 className="lg:text-[100px] text-5xl text-center font-bold lg:leading-[120px]">
          Helping ENS grow
        </h1>
        <p className="text-lg text-center text-gray-500 font-normal leading-7 mt-4 max-w-[500px]">
          <Balancer>
            We integrate ENS onboarding into web3 wallets, apps, and games
          </Balancer>
        </p>
        <div className="flex items-center justify-center mt-10">
          <CalButton className="bg-black cursor-pointer py-[13px] hover:bg-gray-800 transition-colors duration-200 px-[25px] border rounded-[8px] flex text-sm leading-5 font-medium lg:text-base lg:leading-6 text-white">
            Schedule a call
          </CalButton>
        </div>
      </div>
      <BeansBg className="animate-spinSlow absolute right-[calc(50% - 50vw)] h-[100vw] min-h-[1000px] min-w-[1000px] w-[100vw] top-[calc(50% - 50vw)] z-10" />

      <div
        className="absolute bottom-0 left-0 w-full h-[140px] bg-white z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        }}
      />

      <div
        className="w-[100vw] h-[100vh] absolute opacity-70"
        style={{
          background:
            "linear-gradient(90deg, rgba(221, 160, 233, 0.00) -1.42%, rgba(93, 128, 219, 0.20) 100%), linear-gradient(180deg, #FDE8FB 0%, #DFA4EA 33.33%, #9981D4 64.06%, #9DB9DD 95.83%)",
        }}
      />
      <div className="border rounded-full min-w-[1832px] min-h-[1832px] w-[120vw] h-[120vw] opacity-50 absolute bottom-0 translate-y-[50%] bg-white" />

      <div
        className="min-w-[1440px] min-h-[1440px] w-[95vw] h-[95vw] absolute bottom-0 translate-y-[50%]"
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
        className="px-20 py-2.5 z-20 border rounded-full border-gray-300 bg-white absolute bottom-10 hover:bg-gray-100 transition-colors duration-200"
      >
        <ChevronDown />
      </button>
    </section>
  );
};
