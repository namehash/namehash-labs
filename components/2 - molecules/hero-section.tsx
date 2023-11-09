import {
  ChevronDown,
  DotPattern,
  HeroTexture,
  NameHashLabsLogo,
} from "../1 - atoms";

export const HeroSection = () => {
  return (
    <section className="h-screen w-full flex flex-col relative items-center justify-center bg-gray-200 ">
      {/* header  */}
      <div className="px-[112px] w-full absolute top-0 left-0 border-b border-gray-300 z-20">
        <div className="w-full flex items-center justify-between py-5">
          <NameHashLabsLogo />
          <button className="px-[16px] py-[9px] bg-black text-white border rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-900 transition-colors duration-200">
            Schedule a call
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 max-w-[728px] z-20">
        <h1 className="text-5xl font-bold leading-[60px] text-center">
          Core Infrastructure for the internet of identity
        </h1>
        <p className="text-lg text-center text-gray-500 font-normal leading-7">
          We are a relentlessly committed team building open source public goods
          to drive global adoption of the ENS protocol
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
