import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { OpenSourceIcon } from "../1 - atoms/icons/open-source-icon";
import { LockIcon } from "../1 - atoms/icons/lock-icon";
import { EnsIcon } from "../1 - atoms/icons/ens-icon-gray";

export const OurPrinciplesSection = () => {
  return (
    <section
      id="ourPrinciplesSection"
      className="lg:px-[112px] w-full flex flex-col items-center justify-center px-5 py-20 border-t border-b border-gray-200"
    >
      <PreSectionText>What Guides us</PreSectionText>
      <SectionTitle>Our principles</SectionTitle>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-20 place-content-stretch max-w-[1216px]">
        {principles.map((item) => {
          return (
            <div key={item.title}>
              <div className="p-4 border border-gray-200 rounded-full inline-flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-2xl leading-8 font-semibold mt-5 mb-3">
                {item.title}
              </p>
              <SectionText>{item.description}</SectionText>
            </div>
          );
        })}
      </div>
    </section>
  );
};

interface PrinciplesProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const principles: PrinciplesProps[] = [
  {
    icon: <OpenSourceIcon className="text-gray-400 w-5 h-5 shrink-0" />,
    title: "Open sourced",
    description:
      "Everything we create will be open source, ensuring that our technology is accessible and adaptable.",
  },
  {
    icon: <LockIcon className="text-gray-400 w-5 h-5 shrink-0" />,
    title: "Freely licensed",
    description:
      "All our work will be released freely under the MIT license. This license ensures the freedom to use, modify, and redistribute.",
  },
  {
    icon: <EnsIcon className="text-gray-400 w-5 h-5 shrink-0" />,
    title: "ENS exclusivity",
    description:
      "We are exclusively committed to the ENS namespace. We also agree to uphold all articles in the ENS DAO constitution.",
  },
  {
    icon: <EnsIcon className="text-gray-400 w-5 h-5 shrink-0" />,
    title: "ENS interoperability",
    description:
      "We support the ENSIP process and the goal of strong interoperable standards for the ENS protocol.",
  },
];
