import { MegaphoneIcon } from "@heroicons/react/24/outline";

export const ReferralBanner = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="lg:px-[112px] px-5 w-full flex items-center justify-center border-b border-black border-opacity-10 z-20 bg-white"
      {...props}
    >
      <div className="w-full flex items-center justify-center py-5 max-w-[1216px] gap-4">
        <div className="flex gap-4 items-center justify-center">
          <MegaphoneIcon className="w-6 h-6 text-yellow-500" />
          <p className="text-sm leading-5 font-normal">
            Support us to become an ENS Service Provider.
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <a
            target="_blank"
            href="https://discuss.ens.domains/t/service-provider-stream-nomination-thread/18142/39"
            className="py-2 px-3 border borer-gray-300 rounded-[8px] hover:bg-gray-100 transition-colors duration-200 hidden lg:block"
          >
            Review our proposal
          </a>
          <a
            target="_blank"
            href="https://discuss.ens.domains/t/ep4-9-voting-reports/18339/2"
            className="py-2 px-3 border borer-gray-300 rounded-[8px] hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap	"
          >
            Vote for us
          </a>
        </div>
      </div>
    </div>
  );
};
