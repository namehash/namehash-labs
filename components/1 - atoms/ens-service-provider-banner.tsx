import { MegaphoneIcon } from "@heroicons/react/24/outline";

export const ENSServiceProviderBanner = () => {
  return (
    <div className="px-5 text-white flex justify-center items-center w-screen bg-[#3B0D48] space-x-4 py-4 text-sm">
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
        <p className="hidden sm:block">Follow us on Twitter</p>
        <p className="block sm:hidden w-max">Follow us</p>
      </a>
    </div>
  );
};
