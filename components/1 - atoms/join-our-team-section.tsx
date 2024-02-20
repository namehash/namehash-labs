/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";

export const JoinOurTeamSection = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#joinOurTeam")) {
      window.scrollTo(0, Number.MAX_SAFE_INTEGER);

      // The need of this timeout is due to
      // the fact the first scrollTo is not
      // actually working to the bottom of the
      // page on page load. It might be related
      // to the fact that the page is not fully
      // loaded yet. This second scrollTo is
      // here to fix this issue.
      setTimeout(() => {
        window.scrollTo(0, Number.MAX_SAFE_INTEGER);
      }, 1000);
    }
  }, [router]);

  return (
    <section
      id="joinOurTeam"
      className="flex flex-col lg:flex-row items-center px-5 pb-5 pt-[60px] mx-auto lg:max-w-[1024px] xl:max-w-[1280px] max-w-[500px] md:max-w-[700px] lg:py-[86px]"
    >
      <div className="text-center lg:text-left">
        <h3 className="mb-3 text-xs font-medium text-gray-500">
          LOOKING FOR GROUP{" "}
        </h3>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Join our team</h2>
        <div className="mb-6 text-lg text-gray-500">
          <p>
            Work on leading open-source technologies for the ENS Protocol and
            make an impact on the future of identity.
          </p>
          <br />
          <div className="inline space-x-1">
            <p className="inline">
              We&apos;re actively seeking talented people of all backgrounds to
              apply to join our team. Interested? Send an email with your
              details to
            </p>
            <a
              href="mailto:hello@namehashlabs.org"
              className="underline hover:text-black transition-colors duration-200"
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
        <img
          src="/images/join-our-team.svg"
          alt="Join our team image"
          className="w-[335px] h-[231px] md:!min-w-[368px] md:!h-[254px] xl:!min-w-[588px] xl:!h-[400px]"
          height={800}
          width={1166}
        />
      </div>
    </section>
  );
};
