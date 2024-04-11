import { Balancer } from "react-wrap-balancer";
import { EnsLogoColored } from "../1 - atoms/icons/ens-logo-colored";

export const FinancialSupportSection = () => {
  return (
    <section
      id="financialSupportSection"
      className="lg:px-[112px] w-full flex flex-col items-center justify-center px-5 py-20 "
    >
      <div
        className="flex flex-col gap-5 items-center justify-center w-full max-w-[1280px] py-8 px-8 rounded-[8px] border border-gray-200"
        style={{
          background:
            "linear-gradient(271deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), linear-gradient(271deg, rgba(255, 175, 0, 0.15) 0%, rgba(241, 18, 217, 0.15) 32.29%, rgba(76, 63, 160, 0.15) 70.83%, rgba(46, 211, 198, 0.15) 95.83%)",
        }}
      >
        <div
          role="text"
          className="text-2xl leading-8 font-semibold text-center"
        >
          <Balancer>Our work receives generous financial support from</Balancer>
        </div>
        <a
          target="_blank"
          href="https://ensdao.org/"
          className="py-[9px] px-[25px] bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-[8px] border border-gray-200"
        >
          <EnsLogoColored />
        </a>
      </div>
    </section>
  );
};
