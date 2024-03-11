/* eslint-disable @next/next/no-img-element */
import Balancer from "react-wrap-balancer";
import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { ColorfulBg } from "../1 - atoms/colorful-bg";
import { BlockfulLogo } from "../1 - atoms/icons/blockful-logo";
import { EnelpolLogo } from "../1 - atoms/icons/enelpol-logo";
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
        <p className="text-lg leading-7 font-normal text-gray-500 max-w-[635px] text-center">
          We seek collaborations with other skilled teams and individuals who
          are passionate about helping ENS grow
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {partners.map((partner) => (
          <PartnerCard key={partner.websiteUrl} {...partner} />
        ))}
      </div>

      <div className="w-full flex pt-20 flex-col lg:flex-row m-auto gap-10 max-w-7xl">
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

interface PartnerCardProps {
  title: React.ReactElement;
  text: React.ReactElement;
  websiteUrl: string;
}

const PartnerCard = ({ title, text, websiteUrl }: PartnerCardProps) => {
  return (
    <div className="flex flex-col items-start gap-6 justify-between py-8 px-10 border border-gray-300 rounded-[8px]">
      <div className="flex flex-col items-start gap-6">
        {title}
        <p className="text-lg leading-7 font-normal text-gray-500">{text}</p>
      </div>
      <a
        target="_blank"
        href={websiteUrl}
        className="py-2 px-4 rounded-[8px] border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors duration-200"
      >
        Visit website
      </a>
    </div>
  );
};

const partners: PartnerCardProps[] = [
  {
    title: <BlockfulLogo className="h-8" />,
    text: (
      <Balancer>
        When it came time to build smart contracts for NameKit we chose to
        collaborate with Blockful for their expertise in ENS. Together we{" "}
        <span className="underline whitespace-nowrap">designed a solution</span>{" "}
        that creates more financial incentives for wallets and dApps to
        encourage registrations and renewals of .eth names and help ENS grow.
      </Balancer>
    ),
    websiteUrl: "https://blockful.io/",
  },
  {
    title: <EnelpolLogo className="h-8" />,
    text: (
      <Balancer>
        We teamed up with Enelpol to create better name suggestions for NameKit
        and organize collections in NameGraph. Using their Natural Language
        Processing (NLP) skills and understanding of Unicode and fonts, Enelpol
        helped improve NameGuard&apos;s features.
      </Balancer>
    ),
    websiteUrl: "http://enelpol.com/",
  },
];
