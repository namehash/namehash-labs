import { Balancer } from "react-wrap-balancer";
import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import Lottie from "lottie-react";
import appsAnimation from "./../../public/animation/apps-animation.json";

export const TheVisionSection = () => {
  return (
    <section
      id="targetDiv"
      className="px-5 py-20 w-full flex flex-col relative items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-3 mb-[60px]">
        <PreSectionText>THE VISION</PreSectionText>
        <SectionTitle>
          <Balancer>
            Bring ENS to millions of people where they already are
          </Balancer>
        </SectionTitle>
        <SectionText className="text-center">
          <Balancer>
            Directly embed ENS onboarding into every wallet, app, and game.
          </Balancer>
        </SectionText>
      </div>
      <Lottie className="h-auto" animationData={appsAnimation} loop={true} />
    </section>
  );
};
