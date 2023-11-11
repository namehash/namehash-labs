import Image from "next/image";
import { PreSectionText } from "../1 - atoms/pre-section-text";
import { SectionText } from "../1 - atoms/section-text";
import { SectionTitle } from "../1 - atoms/section-title";
import { EnsIcon } from "../1 - atoms/icons/ens-icon";

export const TeamSection = () => {
  return (
    <section className="my-20 px-5">
      <div className="flex flex-col max-[635px] items-center justify-center mb-[60px]">
        <PreSectionText>WHO WE ARE</PreSectionText>
        <SectionTitle className="my-3">Meet our team</SectionTitle>
        <SectionText className="">
          NameHash Labs is a technology organization founded by a team of
          committed contributors from the ENS ecosystem.
        </SectionText>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-auto gap-6 ">
        {team.map((member) => {
          return (
            <div className="flex flex-col gap-3" key={member.name}>
              <div
                className="relative w-[212px]"
                style={{
                  borderRadius: "12.31px",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat, linear-gradient(332deg, #44BCF0 2.57%, #628BF3 65.63%, #A099FF 149.86%)",

                  boxShadow:
                    " 0px -1.36782px 17.78168px 0px rgba(255, 255, 255, 0.20) inset, 0px 13.67822px 21.88514px -4.10346px rgba(87, 142, 231, 0.20), 0px 5.88889px 0px 0px #4D6482",
                }}
              >
                <Image
                  src={`https://metadata.ens.domains/mainnet/avatar/${member.name}`}
                  alt={member.name}
                  width={212}
                  height={212}
                  className="border rounded-[12px] w-full"
                />
                <EnsIcon
                  className="absolute top-5 left-5"
                  style={{
                    textShadow:
                      "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 6px rgba(0, 0, 0, 0.5)",
                  }}
                />
                <p
                  className="text-[19px] font-bold text-white absolute bottom-3 left-5"
                  style={{
                    textShadow:
                      "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 4px 6px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {member.name}
                </p>
              </div>
              <p className="text-lg leading-7 font-semibold">{member.role}</p>
            </div>
          );
        })}

        <div
          className="w-full  border rounded-[12px] border-dashed border-gray-300 flex flex-col items-center justify-center"
          style={{ aspectRatio: "1 / 1" }}
        >
          <p className="text-lg leading-6 font-semibold">Wanna be here?</p>
          <p className="text-sm leading-5 font-normal text-gray-500">
            Check out our{" "}
            <span className="text-black underline">open roles</span>
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
    name: "alextnetto.eth",
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
    name: "jedrzej",
    role: "Engineering",
  },
  {
    name: "santapolukord.eth",
    role: "Outreach",
  },
];
