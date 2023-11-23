import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import Image from "next/image";
import { EllipseBig } from "../1 - atoms/ellispse-big";
import { EllipseMedium } from "../1 - atoms/ellispse-medium";
import { EllipseSmall } from "../1 - atoms/ellispse-small";
import { Balancer } from "react-wrap-balancer";

export const IntroducingNamekit = () => {
  return (
    <section className="px-5 py-20 w-full flex flex-col relative items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3 mb-[60px] max-w-[650px]">
        <PreSectionText>WHAT WE’RE BUILDING</PreSectionText>
        <SectionTitle>Introducing NameKit</SectionTitle>
        <SectionText className="text-center">
          <Balancer>
            Dedicated 100% to the growth of ENS. NameKit includes sub-modules
            such as ENSNode or NameGuard that can also be used independently.
          </Balancer>
        </SectionText>
      </div>
      <div className="relative flexw w-full max-w-[1216px]">
        <EllipseBig className=" w-full" />
        <div className="absolute bottom-0 left-1/2 w-[85%] translate-x-[-50%] ">
          <EllipseMedium />
        </div>
        <div className="absolute bottom-0 left-1/2 w-[70%] translate-x-[-50%] ">
          <EllipseSmall />
        </div>
        <Image
          className="absolute bottom-0 left-1/2 translate-x-[-50%] max-w-[690px] w-full h-auto"
          src={"/images/building-image.png"}
          alt="the vision"
          width={691}
          height={253}
        />
      </div>
    </section>
  );
};
