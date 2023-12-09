import Image from "next/image";
import { PreSectionText } from "../1 - atoms/pre-section-text";
import { SectionText } from "../1 - atoms/section-text";
import { SectionTitle } from "../1 - atoms/section-title";
import { Balancer } from "react-wrap-balancer";
import { TeamMemberComponent } from "./team-member-component";

export const TeamSection = () => {
  return (
    <section id="our-team" className="my-20 px-5">
      <div className="flex flex-col max-[635px] items-center justify-center mb-[60px]">
        <PreSectionText>WHO WE ARE</PreSectionText>
        <a href="#our-team">
          <SectionTitle className="my-3">Meet our team</SectionTitle>
        </a>
        <SectionText className="w-full flex items-center justify-center text-center">
          <Balancer>
            NameHash Labs is a team of builders dedicated to the growth of ENS.
          </Balancer>
        </SectionText>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-y-6 lg:gap-x-auto gap-x-6 xl:w-[1216px] ">
        {team.map((member) => {
          return (
            <TeamMemberComponent
              key={member.name}
              name={member.name}
              role={member.role}
            />
          );
        })}

        <div
          className="w-full border lg:max-w-[212px] rounded-[12px] border-dashed border-gray-300 flex flex-col items-center justify-center"
          style={{ aspectRatio: "1 / 1" }}
        >
          <p className="text-lg leading-6 font-semibold">Wanna be here?</p>
          <p className="text-sm leading-5 font-normal text-gray-500">
            Check out our{" "}
            <a
              href="mailto:hello@namehashlabs.org"
              className="text-gray-500 underline hover:text-black transition-colors duration-200"
            >
              open roles
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

interface MemberProps {
  name: string;
  role: string;
}

const team: MemberProps[] = [
  {
    name: "lightwalker.eth",
    role: "Founder",
  },
  {
    name: "caldonia.eth",
    role: "Founder",
  },
  {
    name: "kwrobel.eth",
    role: "Engineering",
  },
  {
    name: "notrab.eth",
    role: "Engineering",
  },
  {
    name: "theloner.eth",
    role: "UX/UI Design",
  },
  {
    name: "frankind.eth",
    role: "Engineering",
  },
  {
    name: "karbowski.eth",
    role: "Engineering",
  },
  {
    name: "goader.eth",
    role: "Engineering",
  },
  {
    name: "apohllo.eth",
    role: "Engineering",
  },
  {
    name: "byczong.eth",
    role: "Engineering",
  },

  {
    name: "edulennert.eth",
    role: "Engineering",
  },
  {
    name: "y3drk.eth",
    role: "Engineering",
  },
  {
    name: "sebban.eth",
    role: "Engineering",
  },
  {
    name: "ilfurioso.eth",
    role: "Engineering",
  },
  {
    name: "santapolukord.eth",
    role: "Outreach",
  },
];
