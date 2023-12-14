import { Balancer } from "react-wrap-balancer";
import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import Image from "next/image";

export const TheVisionSection = () => {
  return (
    <section className="px-5 py-20 w-full flex flex-col relative items-center justify-center overflow-hidden">
      <div
        id="theVisionSection"
        className="flex flex-col items-center justify-center gap-3 mb-[60px]"
      >
        <PreSectionText>THE VISION</PreSectionText>
        <a href="#theVisionSection">
          <SectionTitle>
            <Balancer>
              Bring ENS to millions of people where they already are
            </Balancer>
          </SectionTitle>
        </a>
        <SectionText className="text-center">
          <Balancer>
            Directly embed ENS onboarding into every wallet, app, and game.
          </Balancer>
        </SectionText>
      </div>
      <Image
        src={"/images/the-vision-image.png"}
        className="h-auto"
        alt="the vision"
        width={1440}
        height={630}
      />
    </section>
  );
};
