import { MegaphoneIcon } from "@heroicons/react/24/outline";

export const HeadlineBanner = () => {
  return (
    <div className="px-5 text-white justify-center items-center w-full bg-[#3B0D48] space-x-4 py-4 text-sm relative z-20 flex">
      <div className="flex space-x-3 items-center">
        <MegaphoneIcon className="flex shrink-0 w-6 h-6 opacity-50 -mr-1" />
        <p className="pr-16 sm:pr-0">
          Track our progress as an ENS Service Provider
        </p>
      </div>
      <a
        target="_blank"
        href="https://twitter.com/NamehashLabs"
        className="animated-white-underline"
      >
        <p className="hidden sm:block underline underline-offset-4 hover:underline-offset-2 transition-all duration-200">
          Follow us on Twitter
        </p>
        <p className="block sm:hidden w-max underline ">Follow us</p>
      </a>
    </div>
  );
};
