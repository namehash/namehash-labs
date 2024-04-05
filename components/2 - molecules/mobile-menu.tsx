import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CalButton, NameHashLabsLogo } from "../1 - atoms";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      enableScroll();
    } else {
      disableScroll();
    }
    setIsOpen(!isOpen);
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="z-50">
      {/* Hamburguer button  */}
      <button className="block lg:hidden p-2" onClick={() => toggleMenu()}>
        <Bars3Icon className="w-6 h-6 text-black" />
      </button>

      {/* Menu Overlay  */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black z-50 transform ease-in-out transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex w-full justify-between items-center p-4">
            <NameHashLabsLogo className="text-white" />
            <button className="p-4" onClick={() => toggleMenu()}>
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          <nav className="flex flex-col justify-center flex-grow">
            <Link
              className="block p-4 text-white text-sm hover:bg-gray-100"
              href="/ens-referral-program"
              onClick={() => {
                toggleMenu();
                enableScroll();
              }}
            >
              ENS Referral Program
            </Link>
            <Link
              onClick={() => {
                toggleMenu();
                enableScroll();
              }}
              className="block p-4 text-white text-sm hover:bg-gray-100"
              href="/#joinOurTeam"
            >
              Open positions
            </Link>

            <CalButton className="block p-4 text-white text-sm hover:bg-gray-100 text-left">
              Schedule a call
            </CalButton>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
