import Link from "next/link";
import { NameHashLabsLogo } from "../1 - atoms";
import CalButton from "../1 - atoms/cal-button";
import { ReferralBanner } from "./referral-banner";

export const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="absolute top-0 left-0 w-full z-20" {...props}>
      <div className="lg:px-[112px] px-5 w-full flex flex-col items-center justify-center  border-b border-black border-opacity-10 z-20">
        <div className="w-full flex items-center justify-between py-5 max-w-[1216px]">
          <a href="https://namehashlabs.org/">
            <NameHashLabsLogo />
          </a>

          <div className="flex items-center justify-center gap-3">
            <Link
              className="px-2.5 py-[9px] hover:bg-gray-100 rounded-[8px] transition-colors duration-200 border border-transparent hover:border-gray-300"
              href="/ens-referral-program"
            >
              ENS Referral Program
            </Link>
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
      <ReferralBanner />
    </div>
  );
};
