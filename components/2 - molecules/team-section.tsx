import { PreSectionText } from "../1 - atoms/pre-section-text";
import { SectionText } from "../1 - atoms/section-text";
import { SectionTitle } from "../1 - atoms/section-title";
import { Balancer } from "react-wrap-balancer";
import { AvatarSize } from "./avatar-with-tooltip";
import { getCachedProfile } from "@/data/ensProfiles";
import { UltimateENSAvatar } from ".";
import { getNameHashLabsAvatarCallbacks } from "@/lib/client/nh-labs-avatar";
import Link from "next/link";

const namehashLabsTeam = {
  profiles: [
    getCachedProfile("lightwalker.eth"),
    getCachedProfile("caldonia.eth"),
    getCachedProfile("kwrobel.eth"),
    getCachedProfile("notrab.eth"),
    getCachedProfile("theloner.eth"),
    getCachedProfile("frankind.eth"),
    getCachedProfile("karbowski.eth"),
    getCachedProfile("goader.eth"),
    getCachedProfile("apohllo.eth"),
    getCachedProfile("byczong.eth"),
    getCachedProfile("edulennert.eth"),
    getCachedProfile("y3drk.eth"),
    getCachedProfile("sebban.eth"),
    getCachedProfile("ilfurioso.eth"),
    getCachedProfile("santapolukord.eth"),
  ],
};

export const TeamSection = () => {
  return (
    <section
      id="meetOurTeamSection"
      className="py-10 border-b border-gray-200 xl:flex px-5 md:px-20 lg:px-[112px] xl:w-full xl:justify-between lg:border-none"
    >
      <div className="flex flex-col max-[635px] items-center justify-center mb-[60px] xl:max-w-[448px] xl:justify-start xl:items-start">
        <PreSectionText>WHO WE ARE</PreSectionText>
        <SectionTitle className="my-3">Our team</SectionTitle>
        <SectionText className="w-full flex items-center justify-center text-center mb-5 xl:text-left">
          <Balancer>
            NameHash Labs is a team of builders dedicated to the growth of ENS.
            Wanna be here? We&apos;re actively searching for special talents and
            would be happy to hear from you.
          </Balancer>
        </SectionText>
        <a
          href="#joinOurTeam"
          className="bg-black text-white text-base font-medium rounded-lg px-[17px] py-[9px] hover:bg-gray-800 transition"
        >
          Join our team
        </a>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-3 md:grid-cols-5 sm:grid-cols-3 place-items-center lg:gap-x-auto gap-6 lg:gap-8 lg:max-w-[800px] lg:ml-auto xl:max-w-[1280px]">
        {namehashLabsTeam.profiles.map((member) => {
          return (
            <UltimateENSAvatar
              avatarQueries={getNameHashLabsAvatarCallbacks(member)}
              size={AvatarSize.MEDIUM}
              key={member.ensName}
              profile={member}
            />
          );
        })}
        <div
          className="px-2 text-center w-full border lg:max-w-[212px] rounded-[12px] border-dashed border-gray-300 flex flex-col items-center justify-center"
          style={{ aspectRatio: "1 / 1" }}
        >
          <p className="text-lg leading-6 font-semibold">Wanna be here?</p>
          <div
            role="text"
            className="text-sm text-center leading-5 font-normal text-gray-500 px-2"
          >
            Check out our{" "}
            <Link
              href="/#joinOurTeam"
              className="text-gray-500 underline hover:text-black transition-colors duration-200"
            >
              open roles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
