import { NameHashLabsLogo } from "../1 - atoms";
import CalButton from "../1 - atoms/cal-button";

export const Header = () => {
  return (
    <div className="lg:px-[112px] px-5 w-full flex items-center justify-center absolute top-0 left-0 border-b border-black border-opacity-10 z-20">
      <div className="w-full flex items-center justify-between py-5 max-w-[1216px]">
        <a href="https://namehashlabs.org/">
          <NameHashLabsLogo />
        </a>

        <div className="flex items-center justify-center gap-3">
          <a
            href="mailto:hello@namehashlabs.org"
            className="px-[16px] hidden sm:inline py-[9px] bg-white text-black border border-gray-300 rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-100 transition-colors duration-200"
            style={{
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            Open positions
          </a>
          <CalButton className="px-[16px] py-[9px] bg-black text-white border border-black rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-800 transition-colors duration-200">
            Schedule a call
          </CalButton>
        </div>
      </div>
    </div>
  );
};
