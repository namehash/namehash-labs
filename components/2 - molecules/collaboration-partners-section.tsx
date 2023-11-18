import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { BlockfulLogo } from "../1 - atoms/icons/blockful-logo";

export const CollaborationPartnersSection = () => {
  return (
    <section
      className="lg:px-[110px] px-5 py-[122px] w-full bg-gray-50"
      id="targetDiv"
    >
      <div className="m-auto flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 items-center max-w-[635px]">
          <PreSectionText>OUR PARTNERS</PreSectionText>
          <SectionTitle>Collaboration partners</SectionTitle>
          <SectionText className="text-center">
            We seek collaborations with other skilled teams and individuals who
            are passionate about helping ENS grow
          </SectionText>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-content-center	 gap-[120px] pt-[50px] mt-10">
          {partners.map((partner) => {
            return (
              <Item
                key={partner.buttonText}
                title={partner.title}
                description={partner.description}
                buttonText={partner.buttonText}
                buttonUrl={partner.buttonUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  buttonUrl: string;
}

const Item = ({ title, description, buttonText, buttonUrl }: ItemProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-[548px]">
      {title}
      <SectionText>{description}</SectionText>
      <div>
        <a
          target="_blank"
          className="px-[17px] py-[9px] text-base leading-6 font-medium border border-gray-300 rounded-[8px] bg-white hover:bg-gray-200 transition-colors duration-200"
          href={buttonUrl}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const partners: ItemProps[] = [
  {
    title: <BlockfulLogo className="mt-3" />,
    description: `When it came time to build smart contracts for NameKit we chose to collaborate with Blockful for their expertise in ENS. Together we designed a solution that creates more financial incentives for wallets and dApps to encourage registrations and renewals of .eth names and help ENS grow.`,
    buttonText: "Visit website",
    buttonUrl: "https://blockful.io/",
  },
  {
    title: (
      <SectionTitle className="text-start">Supporting Other frENS</SectionTitle>
    ),
    description:
      "NameHash Labs works in close collaboration with frens across the ENS community. In keeping with this ethos, we delegate a portion of our annual budget to subcontract the delivery of some goals to other talented builders and storytellers contributing to the expansion of ENS.",
    buttonText: "Apply to partner program",
    buttonUrl: "https://blockful.io/",
  },
];
