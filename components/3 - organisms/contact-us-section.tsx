/* eslint-disable @next/next/no-img-element */
import {
  CalButton,
  PreSectionText,
  SectionText,
  SectionTitle,
} from "../1 - atoms";
import { ColorfulBg } from "../1 - atoms/colorful-bg";
import { ContactUsForm } from "../2 - molecules/contact-us-form";

export const PartnersPage = () => {
  return (
    <section className="w-full max-w-[1216px] py-20 px-5">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1]" />
      <div className="lg:mt-[100px] lg:mb-[120px] mt-[60px] mb-[60px]">
        <PreSectionText className="text-start ">
          Let’s work together
        </PreSectionText>
        <h1 className="font-bold text-[52px] ">Partners</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 py-20 border-t">
        <h3 className="text-4xl leading-10 font-bold">
          Let&apos;s work together
        </h3>
        <p className="text-lg leading-7 font-normal">
          We seek collaborations with other skilled teams and individuals who
          are passionate about helping ENS grow
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row m-auto gap-10 max-w-7xl">
        <div className="lg:w-1/2 w-full flex flex-col gap-3 items-start">
          <SectionTitle className="text-3xl lg:text-4xl font-bold">
            Become our partner
          </SectionTitle>
          <SectionText className="text-gray-500 text-lg">
            NameHash Labs works in close collaboration with frENS across the ENS
            community. In keeping with this ethos, we coordinate the delivery of
            some goals with other talented builders and storytellers
            contributing to the expansion of ENS.
          </SectionText>
        </div>
        <div className="lg:w-1/2 w-full bg-gray-50 py-8 px-10 border rounded-[8px] flex justify-center items-center">
          <ContactUsForm title="Discuss a partnership" />
        </div>
      </div>
    </section>
  );
};
