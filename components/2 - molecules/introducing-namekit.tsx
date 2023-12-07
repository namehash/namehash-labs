import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { Balancer } from "react-wrap-balancer";
import Lottie from "lottie-react";
import waveAnimation from "./../../public/animation/wave-animation.json";

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
      <Lottie
        className="relative max-w-[1216px] w-full h-auto"
        animationData={waveAnimation}
        loop={true}
      />
    </section>
  );
};
