import Link from "next/link";
import { NameHashLabsLogo, CalButton } from "../1 - atoms";
import { origin } from "@/lib/shared/origin";

export const Header = () => {
  return (
    <nav className="lg:px-[112px] px-5 w-full flex items-center justify-center border-b border-black border-opacity-10 z-20">
      <div className="w-full flex items-center justify-between py-5 max-w-[1216px]">
        <Link href={origin}>
          <NameHashLabsLogo />
        </Link>

        <div className="flex items-center justify-center gap-3">
          <Link
            href={"/ens-referral-program"}
            className="hidden md:block mr-[18px] hover:underline transition text-sm font-medium"
          >
            ENS Referral Program
          </Link>
          <Link
            href={origin + "/#joinOurTeam"}
            className="px-[16px] py-[9px] bg-white text-black border border-gray-300 rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-100 transition-colors duration-200"
            style={{
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            Open positions
          </Link>
          <CalButton className="hidden sm:inline px-[16px] py-[9px] bg-black text-white border border-black rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-800 transition-colors duration-200">
            Schedule a call
          </CalButton>
        </div>
      </div>
    </nav>
  );
};
