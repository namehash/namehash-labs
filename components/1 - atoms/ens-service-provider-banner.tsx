import { MegaphoneIcon } from "@heroicons/react/24/outline";

export const ENSServiceProviderBanner = () => {
  return (
    <div className="px-5 text-white flex justify-between md:justify-center items-center w-screen bg-[#3B0D48] space-x-4 py-4 text-sm">
      <MegaphoneIcon className="flex shrink-0 w-6 h-6 opacity-50 -mr-1" />
      <p className="pr-4">Support us to become an ENS Service Provider.</p>
      <a
        target="_blank"
        href="https://discuss.ens.domains/t/service-provider-stream-nomination-thread/18142/39?u=lightwalker.eth"
        className="hidden md:block animated-white-underline"
      >
        Review our proposal
      </a>
      <a
        target="_blank"
        href="https://snapshot.org/#/ens.eth/proposal/0x6ba81cd2997288cc49ae1b95921ec8f107e8ffb9733321d53d488e2b30710b86"
        className="min-w-[80px] animated-white-underline"
      >
        Vote for us
      </a>
    </div>
  );
};
