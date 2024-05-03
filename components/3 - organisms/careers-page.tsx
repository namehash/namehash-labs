/* eslint-disable @next/next/no-img-element */
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { ColorfulBg } from "../1 - atoms/colorful-bg";
import { JoinOurTeamSection } from "../1 - atoms/join-our-team-section";
import { MapPinIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import {
  BugAntIcon,
  CodeBracketSquareIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { SVGProps } from "react";
import { RoleCard } from "../2 - molecules/role-card";

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
          {rolesList.map((role) => {
            return (
              <RoleCard
                key={role.title}
                icon={role.icon}
                title={role.title}
                details={role.details}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const rolesList: RoleCardProps[] = [
  {
    icon: CodeBracketSquareIcon,
    title: "Frontend",
    details: ["Engineering", "Remote"],
  },
  {
    icon: Cog6ToothIcon,
    title: "Backend",
    details: ["Engineering", "Remote"],
  },
  {
    icon: PaintBrushIcon,
    title: "Design",
    details: ["Engineering", "Remote"],
  },
  {
    icon: BugAntIcon,
    title: "Quality Assurance",
    details: ["Engineering", "Remote"],
  },
  {
    icon: BugAntIcon,
    title: "Contracts",
    details: ["Engineering", "Remote"],
  },
  {
    icon: MegaphoneIcon,
    title: "Marketing",
    details: ["Growth", "Remote"],
  },
  {
    icon: StarIcon,
    title: "General Application",
    details: ["Any team", "Remote"],
  },
];

export interface RoleCardProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  details: [string, string];
  additionalStyle?: string;
}
