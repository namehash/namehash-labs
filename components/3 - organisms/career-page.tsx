import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { ColorfulBg } from "../1 - atoms/colorful-bg";
import { JoinOurTeamSection } from "../1 - atoms/join-our-team-section";

import Image from "next/image";
import { RoleCard } from "../2 - molecules/role-card";
import { ExternalLinkIcon } from "../1 - atoms";

export const CareerPage = () => {
  return (
    <section className="w-full pt-20 lg:pb-20 pb-5 px-5 lg:px-[112px]">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1]" />
      <div className="flex items-center justify-between w-full max-w-[1216px] border-b m-auto lg:mt-[100px] lg:pb-[120px] py-[60px]">
        <div className="flex flex-col items-start lg:gap-3 gap-2">
          <p className="text-xs leading-4 font-medium tracking-wide uppercase text-gray-500">
            Join the team
          </p>
          <h1 className="font-bold text-[52px] leading-[52px]">Frontend</h1>
        </div>
        <Image
          src="/images/career-card-frontend.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="justify-between w-full flex lg:pt-20 pt-10 m-auto gap-10 max-w-[1216px]">
        <div className="w-full max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Description</h3>
            <p className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
              NameHash Labs is a technology organization specializing in
              crafting open-source, blockchain-driven software solutions for the
              ENS Protocol. We are dedicated to creating groundbreaking
              infrastructure solutions and tooling that will revolutionize web3,
              and bring the benefits of owning a decentralized identity to
              people across the world. Having cultivated a thriving diverse
              culture, our team is kind, welcoming and passionate about what we
              are building. We actively seek out and retain the most talented
              individuals from across the world with NameHash Labs team members
              located across three continents. We appreciate every moment we get
              to work and have fun together.
              <br />
              <br />
              The infrastructure and tooling that NameHash Labs brings to ENS
              will help the community accelerate towards mainstream adoption,
              and allow the core functionalities of Web3 names to then drive the
              next phase of growth including payments, identity, and social.
              When hiring candidates, we look for signals that a candidate will
              thrive in our culture, where work feels like play, feedback is
              embraced, and growth is a constant. If you’re excited to work at a
              company that is building and shaping the future of online
              identity, reach out by mailing us or via Twitter DMs.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">
              What You&apos;ll Do
            </h3>
            <ul className="list-disc pl-4">
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Work closely with the design team, fellow engineers, and the
                product team to rapidly deliver new offerings and a great UX
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Develop and plan technical direction of new offerings
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Write readable, maintainable code that is built to scale.
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Stay up-to-date on technical options and help select the right
                technology for each task.
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Be fully data driven and inform decisions and analyze
                performance using data.
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Collaborate with other engineers and review code
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Qualifications</h3>
            <ul className="list-disc pl-4">
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                5+ years of blockchain experience, 3+ years of experience with
                testing Elixir applications. Any experience with Rust and
                CosmWasm is a bonus;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Relevant experience in quality assurance including planning,
                design, implementation, deployment, and maintenance of manual
                and automated tests;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Deep understanding of blockchain technology, experience in smart
                contracts deployment and testing;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Detailed documentation skills, especially when reproducing bugs
                or describing new features;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500 max-w-[676px]">
                Performance and security testing experience is a plus.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl leading-8 font-bold">More roles</h3>
          <RoleCard
            icon={CodeBracketSquareIcon}
            title="Frontend"
            details={["Engineering", "Remote"]}
            additionalStyle="min-w-[440px]"
          />
          <RoleCard
            icon={CodeBracketSquareIcon}
            title="Frontend"
            details={["Engineering", "Remote"]}
            additionalStyle="min-w-[440px]"
          />
          <RoleCard
            icon={CodeBracketSquareIcon}
            title="Frontend"
            details={["Engineering", "Remote"]}
            additionalStyle="min-w-[440px]"
          />
        </div>
      </div>
      <div className="flex lg:pt-20 pt-10 m-auto gap-10 max-w-[1216px]">
        <div className="w-full flex justify-between items-center px-10 py-8 bg-gradient-to-l from-black to-gray-800 rounded-[12px]">
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
            <p className="text-base leading-6 font-medium">Email Us</p>
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
