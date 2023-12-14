import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

export const IntroducingNamekit = () => {
  return (
    <section
      id="introducingNamekit"
      className="px-5 py-20 w-full flex flex-col relative items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-3 mb-[60px] max-w-[650px]">
        <PreSectionText>WHAT WE&apos;RE BUILDING</PreSectionText>
        <a href="#introducingNamekit">
          <SectionTitle>Introducing NameKit</SectionTitle>
        </a>
        <SectionText className="text-center">
          <Balancer>
            Dedicated 100% to the growth of ENS. NameKit includes sub-modules
            such as ENSNode or NameGuard that can also be used independently.
          </Balancer>
        </SectionText>
      </div>
      <Image
        className="relative max-w-[1216px] w-full h-auto"
        src={"/images/building-image.png"}
        alt="the vision"
        width={1216}
        height={520}
      />
    </section>
  );
};
