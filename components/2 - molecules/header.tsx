import Link from "next/link";
import { NameHashLabsLogo, CalButton } from "../1 - atoms";
import { useRouter } from "next/router";

export const Header = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();

  return (
    <nav className="lg:px-[112px] px-5 w-full flex items-center justify-center border-b border-black border-opacity-10 z-20">
      <div className="w-full flex items-center justify-between py-5 max-w-[1216px]">
        <a href="https://namehashlabs.org/">
          <NameHashLabsLogo />
        </a>

        <div className="flex items-center justify-center gap-3">
          <Link
            href={"/ens-referral-program"}
            className="hidden md:block mr-[18px] hover:underline transition text-sm font-medium"
          >
            ENS Referral Program
          </Link>
          <button
            onClick={() => {
              if (router.pathname === "/") {
                const el = document.getElementById("joinOurTeam");

                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              } else {
                router.push("/#joinOurTeam");
              }
            }}
            className="px-[16px] py-[9px] bg-white text-black border border-gray-300 rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-100 transition-colors duration-200"
            style={{
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            Open positions
          </button>
          <CalButton className="hidden sm:inline px-[16px] py-[9px] bg-black text-white border border-black rounded-[8px] text-sm leading-5 font-medium hover:bg-gray-800 transition-colors duration-200">
            Schedule a call
          </CalButton>
        </div>
      </div>
    </nav>
  );
};
