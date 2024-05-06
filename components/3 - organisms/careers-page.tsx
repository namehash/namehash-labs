/* eslint-disable @next/next/no-img-element */
import { ColorfulBg } from "../1 - atoms/colorful-bg";
import { JoinOurTeamSection } from "../1 - atoms/join-our-team-section";
import { RoleCard } from "../2 - molecules/role-card";
import rolesData from "@/data/rolesData";

export const CareersPage = () => {
  return (
    <section className="w-full pt-20 lg:pb-20 pb-5 px-5 lg:px-[112px]">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1]" />
      <div className="flex flex-col items-start lg:gap-3 gap-2 lg:mt-[100px] lg:pb-[120px] py-[60px] m-auto max-w-[1216px] border-b">
        <p className="text-xs leading-4 font-medium tracking-wide uppercase text-gray-500">
          We are hiring
        </p>
        <h1 className="font-bold text-[52px] leading-[52px]">Careers</h1>
      </div>

      <JoinOurTeamSection />

      <div className="w-full flex lg:pt-20 pt-10 flex-col m-auto gap-10 max-w-[1216px]">
        <h3 className="text-4xl leading-10 font-bold">Open Roles</h3>

        <div className="grid grid-cols-3 w-full gap-5">
          {rolesData.roles.map((role) => {
            return (
              <RoleCard
                key={role.title}
                icon={role.category.icon}
                title={role.title}
                href={role.slug}
                categoryName={role.category.name}
                location={role.location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
