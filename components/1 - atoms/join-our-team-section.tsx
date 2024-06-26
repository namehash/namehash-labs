"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const JoinOurTeamSection = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the URL contains the specific hash
    if (pathname?.includes("#joinOurTeam")) {
      // Use setTimeout to wait for the page to load fully.
      // This delay ensures that all elements are rendered and positioned.
      setTimeout(() => {
        // Find the element by its ID or other selectors.
        const section = document.getElementById("joinOurTeam");

        if (section) {
          // Scrolls the `#joinOurTeam` section into view
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 1000);
    }
  }, [pathname]);

  return (
    <section
      id="joinOurTeam"
      className="px-5 lg:px-[112px] pb-5 pt-[60px] mx-auto lg:py-[86px]"
    >
      <div className="m-auto max-w-[1216px] flex flex-col lg:flex-row items-center ">
        <div className="text-center lg:text-left">
          <h3 className="mb-3 text-xs font-medium text-gray-500">
            LOOKING FOR GROUP
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Join our team</h2>
          <div className="mb-6 text-lg text-gray-500 font-light">
            <p>
              Work on leading open-source technologies for the ENS Protocol and
              make an impact on the future of identity.
            </p>
            <br />
            <div className="inline space-x-1">
              <p className="inline">
                We&apos;re actively seeking talented people of all backgrounds
                to apply to join our team. Interested? Send an email with your
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
      </div>
    </section>
  );
};
