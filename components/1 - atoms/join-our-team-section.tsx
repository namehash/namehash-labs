import Image from "next/image";

export const JoinOurTeamSection = () => {
  return (
    <section
      id="joinOurTeam"
      className="flex flex-col lg:flex-row items-center px-5 pb-5 pt-[60px] mx-auto lg:max-w-[1024px] xl:max-w-[1280px] max-w-[500px] md:max-w-[700px] lg:py-[86px]"
    >
      <div className="text-center lg:text-left">
        <h3 className="mb-3 text-xs font-medium text-gray-500">
          LOOKING FOR GROUP{" "}
        </h3>
        <a href="#joinOurTeam">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Join our team</h2>
        </a>
        <div className="mb-6 text-lg text-gray-500">
          <p>
            Work on leading open-source technologies for the ENS Protocol and
            make an impact on the future of identity.
          </p>
          <br />
          <div className="inline space-x-1">
            <p className="inline">
              We&apos; actively seeking talented people of all backgrounds to
              apply to join our team. Interested? Send an email with your
              details to
            </p>
            <a
              href="mailto:hello@namehashlabs.org"
              className="text-black animated-black-underline inline"
            >
              hello@namehashlabs.org
            </a>
          </div>
          <br />
          <br />
          <p>We look forward to hearing from you.</p>
        </div>
      </div>
      <div className="lg:ml-[85px] mt-6 mx-auto flex justify-center">
        <Image
          alt="Join our team image"
          src="/images/our-team.svg"
          className="md:min-w-[502px] xl:min-w-[588px]"
          height={231}
          width={335}
        />
      </div>
    </section>
  );
};
