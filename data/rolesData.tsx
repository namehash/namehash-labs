import React from "react";
import { RolesData } from "./../types";
import {
  BugAntIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const rolesData: RolesData = {
  roles: [
    {
      slug: "frontend",
      category: {
        icon: CodeBracketSquareIcon,
        name: "Frontend",
        avatar: "/images/careers/frontend",
      },
      title: "Frontend",
      details: ["Engineering", "Remote"],
      team: "Engineering",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Description</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
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
              <li className="text-lg leading-8 font-normal text-gray-500">
                Work closely with the design team, fellow engineers, and the
                product team to rapidly deliver new offerings and a great UX
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Develop and plan technical direction of new offerings
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Write readable, maintainable code that is built to scale.
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Stay up-to-date on technical options and help select the right
                technology for each task.
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Be fully data driven and inform decisions and analyze
                performance using data.
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Collaborate with other engineers and review code
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Qualifications</h3>
            <ul className="list-disc pl-4">
              <li className="text-lg leading-8 font-normal text-gray-500">
                5+ years of blockchain experience, 3+ years of experience with
                testing Elixir applications. Any experience with Rust and
                CosmWasm is a bonus;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Relevant experience in quality assurance including planning,
                design, implementation, deployment, and maintenance of manual
                and automated tests;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Deep understanding of blockchain technology, experience in smart
                contracts deployment and testing;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Detailed documentation skills, especially when reproducing bugs
                or describing new features;
              </li>
              <li className="text-lg leading-8 font-normal text-gray-500">
                Performance and security testing experience is a plus.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      slug: "backend",
      category: {
        icon: Cog6ToothIcon,
        name: "Frontend",
        avatar: "/images/careers/backend",
      },
      title: "Backend",
      details: ["Engineering", "Remote"],

      team: "Engineering",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Description</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
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
        </div>
      ),
    },
    {
      slug: "design",
      category: {
        icon: PaintBrushIcon,
        name: "Frontend",
        avatar: "/images/careers/design",
      },
      title: "Design",
      details: ["Engineering", "Remote"],

      team: "Creative",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Role Overview</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
              As a designer at NameHash Labs, you will be working closely with
              our development and marketing teams to create visually engaging
              designs that enhance user experience and communication. Your role
              will include designing user interfaces for our blockchain
              applications, creating graphic materials for digital marketing,
              and assisting in product branding efforts.
            </p>
          </div>
        </div>
      ),
    },
    {
      slug: "qualityassurance",
      category: {
        icon: BugAntIcon,
        name: "Frontend",
        avatar: "/images/careers/quality-assurance",
      },
      title: "Quality Assurance",
      details: ["Engineering", "Remote"],

      team: "Engineering",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Job Description</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
              Join our quality assurance team to ensure the highest standards of
              software reliability and user experience. Your work will involve
              rigorous testing of our blockchain applications, documenting
              software bugs, and collaborating closely with our engineers to
              resolve issues prior to product releases.
            </p>
          </div>
        </div>
      ),
    },
    {
      slug: "contracts",
      category: {
        icon: BugAntIcon,
        name: "Frontend",
        avatar: "/images/careers/contracts",
      },
      title: "Contracts Specialist",
      details: ["Engineering", "Remote"],
      team: "Legal",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Role Overview</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
              As a Contracts Specialist at NameHash Labs, you will manage and
              oversee all contract-related aspects of our projects. This role
              involves drafting, evaluating, negotiating, and executing a wide
              variety of company contracts covering a range of transactions.
              Your keen attention to detail and deep understanding of
              contractual obligations will be critical in minimizing risks and
              maximizing legal rights.
            </p>
          </div>
        </div>
      ),
    },
    {
      slug: "marketing",
      category: {
        icon: MegaphoneIcon,
        name: "Frontend",
        avatar: "/images/careers/marketing",
      },
      title: "Marketing Director",
      details: ["Growth", "Remote"],
      team: "Marketing",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Job Description</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
              The Marketing Director at NameHash Labs will lead our efforts to
              market our products globally. You will develop strategic marketing
              plans and oversee their implementation. Key responsibilities
              include market research, branding, campaign development, and
              public relations. Your creativity and innovative thinking will
              drive our brand to new heights and help solidify our position as
              leaders in the blockchain industry.
            </p>
          </div>
        </div>
      ),
    },
    {
      slug: "general",
      category: {
        icon: StarIcon,
        name: "Frontend",
        avatar: "/images/careers/general",
      },
      title: "General",
      details: ["Any team", "Remote"],
      team: "Operations",
      location: "Remote",
      description: (
        <div className="w-full lg:max-w-[676px] flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl leading-8 font-bold">Position Summary</h3>
            <p className="text-lg leading-8 font-normal text-gray-500">
              As the General at NameHash Labs, you will oversee various
              functions and ensure all operations run smoothly. Your role will
              require a blend of leadership and versatility as you manage staff,
              oversee projects, and ensure compliance with company policies.
              Your ability to adapt and manage multiple responsibilities
              simultaneously will be key to maintaining our efficiency and
              effectiveness as an organization.
            </p>
          </div>
        </div>
      ),
    },
  ],
};

export default rolesData;
