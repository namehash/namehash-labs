import { ColorfulBg } from "../1 - atoms/colorful-bg";

import Image from "next/image";
import { RoleCard } from "../2 - molecules/role-card";
import { ExternalLinkIcon } from "../1 - atoms";
import { Role } from "@/types";
import rolesData from "@/data/rolesData";

function getRandomItems(arr: Role[], numItems: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

export const RolePage = ({
  category,
  title,
  team,
  location,
  description,
}: Role) => {
  const filteredRoles = rolesData.roles.filter((item) => {
    return item.title != title;
  });

  const shuffledRoles = getRandomItems(filteredRoles, 3);

  return (
    <section className="w-full pt-20 lg:pb-20 pb-5">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1]" />
      <div className="flex lg:flex-row flex-col items-start lg:items-center gap-[60px] lg:gap-4 justify-between w-full max-w-[1216px] border-b m-auto lg:mt-[100px] lg:pb-[120px] py-[60px]">
        <div className="flex flex-col items-start lg:gap-3 gap-2">
          <p className="text-xs leading-4 font-medium tracking-wide uppercase text-gray-500">
            Join the team
          </p>
          <h1 className="font-bold text-[52px] leading-[52px]">{title}</h1>
        </div>
        <div>
          <Image
            src={`${category.avatar}.png`}
            width={642}
            height={205}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="justify-between w-full flex lg:flex-row flex-col lg:pt-20 pt-10 m-auto gap-10 max-w-[1216px]">
        {description}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl leading-8 font-bold">More roles</h3>
          {shuffledRoles.map((role) => {
            return (
              <RoleCard
                key={role.title}
                icon={role.category.icon}
                title={role.title}
                additionalStyle="lg:min-w-[440px]"
                href={role.slug}
                categoryName={role.category.name}
                location={role.location}
              />
            );
          })}
        </div>
      </div>
      <div className="flex lg:pt-20 pt-10 m-auto gap-10 max-w-[1216px]">
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-between items-center px-10 py-8 bg-gradient-to-l from-black to-gray-800 rounded-[12px]">
          <div className="max-w-[840px]">
            <h3 className="text-2xl leading-8 font-semibold text-white">
              Join our team
            </h3>
            <p className="text-lg leading-7 font-normal text-gray-500">
              Interested? Send an email with your CV and a few sentences about
              why you wanna join NameHash Labs to hello@namehashlabs.org
            </p>
          </div>
          <a
            href="mailto:hello@namehashlabs.org"
            className="px-[25px] cursor-pointer flex items-center gap-3 py-[13px] rounded-[8px] bg-white flex-nowrap hover:bg-gray-100 transition-colors duration-200 w-full justify-center lg:w-auto"
          >
            <p className="text-base leading-6 font-medium whitespace-nowrap">
              Email Us
            </p>
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
