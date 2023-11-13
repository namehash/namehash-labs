import { NameHashLabsLogo } from "../1 - atoms";
import CalButton from "../1 - atoms/cal-button";

export const Header = () => {
  return (
    <div className="lg:px-[112px] px-5 w-full flex items-center justify-center absolute top-0 left-0 border-b border-gray-300 z-20">
      <div className="w-full flex items-center justify-between py-5 max-w-[1216px]">
        <a href="https://namehashlabs.org/">
          <NameHashLabsLogo />
        </a>

        <CalButton className="px-[16px] py-[9px] bg-black text-white border rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-900 transition-colors duration-200">
          Schedule a call
        </CalButton>
      </div>
    </div>
  );
};
