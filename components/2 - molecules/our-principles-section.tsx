import { CheckBadgeIcon, HeartIcon } from "@heroicons/react/24/solid";
import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";

export const OurPrinciplesSection = () => {
  return (
    <section className="lg:px-[112px] w-full flex flex-col items-center justify-center px-5 py-20 border-t border-b border-gray-200">
      <PreSectionText>What Guides us</PreSectionText>
      <SectionTitle>Our principles</SectionTitle>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-20 place-content-stretch max-w-[1216px]">
        {principles.map((item) => {
          return (
            <div key={item.title}>
              <div className="p-4 border border-gray-200 rounded-full inline-flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-2xl leading-8 font-semibold mt-5 mb-3">
                {item.title}
              </p>
              <SectionText>{item.description}</SectionText>
            </div>
          );
        })}
      </div>
    </section>
  );
};

interface PrinciplesProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const principles: PrinciplesProps[] = [
  {
    icon: <HeartIcon className="text-gray-400 w-5 h-5 shrink-0" />,
    title: "Open sourced",
    description:
      "Everything we create is open source, ensuring that our technology is accessible and adaptable.",
  },
  {
    icon: <CheckBadgeIcon className="text-gray-400 w-5 h-5 shrink-0" />,
    title: "Freely licensed",
    description:
      "All our work will be released freely under the MIT license. This license ensures the freedom to use, modify, and redistribute.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="10" fill="#AFAFAF" />
        <path
          d="M5.07325 6.03758C5.21136 5.77614 5.41176 5.55283 5.6582 5.38943L9.76098 2.5L5.558 9.51253C5.558 9.51253 5.1897 8.88617 5.04617 8.57026C4.86743 8.17266 4.77806 7.73965 4.78348 7.3012C4.78619 6.86274 4.88639 6.43246 5.07325 6.03758ZM3.38068 10.8769C3.42672 11.5468 3.61358 12.2004 3.93043 12.7914C4.24727 13.3824 4.68599 13.8998 5.21678 14.3056L9.75557 17.4973C9.75557 17.4973 6.91747 13.3687 4.5235 9.26198C4.28248 8.82898 4.11729 8.3524 4.04146 7.8622C4.00896 7.63889 4.00896 7.41285 4.04146 7.18954C3.97917 7.30665 3.85731 7.5463 3.85731 7.5463C3.61358 8.04739 3.44838 8.58115 3.36714 9.13126C3.31839 9.71133 3.32381 10.2968 3.38068 10.8769ZM14.9497 11.4325C14.8035 11.1166 14.4406 10.4902 14.4406 10.4902L10.243 17.5L14.3458 14.6106C14.5895 14.4472 14.7899 14.2239 14.9308 13.9624C15.1176 13.5675 15.2178 13.1373 15.2232 12.6988C15.2287 12.2631 15.1366 11.8273 14.9606 11.4297L14.9497 11.4325ZM16.6152 9.12309C16.5692 8.45316 16.3796 7.79956 16.0655 7.20861C15.7513 6.61765 15.3099 6.10022 14.7791 5.69444L10.2484 2.5C10.2484 2.5 13.0865 6.62854 15.4805 10.7353C15.7215 11.1683 15.884 11.6449 15.9598 12.1351C15.9923 12.3584 15.9923 12.5844 15.9598 12.8077C16.0221 12.6906 16.144 12.451 16.144 12.451C16.3877 11.9499 16.5529 11.4161 16.6342 10.866C16.6829 10.2832 16.6775 9.70044 16.6206 9.11765L16.6152 9.12309Z"
          fill="white"
        />
      </svg>
    ),
    title: "ENS exclusivity",
    description:
      "We are exclusively committed to the ENS namespace. We also agree to uphold all articles in the ENS DAO constitution.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="10" fill="#AFAFAF" />
        <path
          d="M5.07325 6.03758C5.21136 5.77614 5.41176 5.55283 5.6582 5.38943L9.76098 2.5L5.558 9.51253C5.558 9.51253 5.1897 8.88617 5.04617 8.57026C4.86743 8.17266 4.77806 7.73965 4.78348 7.3012C4.78619 6.86274 4.88639 6.43246 5.07325 6.03758ZM3.38068 10.8769C3.42672 11.5468 3.61358 12.2004 3.93043 12.7914C4.24727 13.3824 4.68599 13.8998 5.21678 14.3056L9.75557 17.4973C9.75557 17.4973 6.91747 13.3687 4.5235 9.26198C4.28248 8.82898 4.11729 8.3524 4.04146 7.8622C4.00896 7.63889 4.00896 7.41285 4.04146 7.18954C3.97917 7.30665 3.85731 7.5463 3.85731 7.5463C3.61358 8.04739 3.44838 8.58115 3.36714 9.13126C3.31839 9.71133 3.32381 10.2968 3.38068 10.8769ZM14.9497 11.4325C14.8035 11.1166 14.4406 10.4902 14.4406 10.4902L10.243 17.5L14.3458 14.6106C14.5895 14.4472 14.7899 14.2239 14.9308 13.9624C15.1176 13.5675 15.2178 13.1373 15.2232 12.6988C15.2287 12.2631 15.1366 11.8273 14.9606 11.4297L14.9497 11.4325ZM16.6152 9.12309C16.5692 8.45316 16.3796 7.79956 16.0655 7.20861C15.7513 6.61765 15.3099 6.10022 14.7791 5.69444L10.2484 2.5C10.2484 2.5 13.0865 6.62854 15.4805 10.7353C15.7215 11.1683 15.884 11.6449 15.9598 12.1351C15.9923 12.3584 15.9923 12.5844 15.9598 12.8077C16.0221 12.6906 16.144 12.451 16.144 12.451C16.3877 11.9499 16.5529 11.4161 16.6342 10.866C16.6829 10.2832 16.6775 9.70044 16.6206 9.11765L16.6152 9.12309Z"
          fill="white"
        />
      </svg>
    ),
    title: "ENS interoperability",
    description:
      "We support the ENSIP process and the goal of strong interoperable standards for the ENS protocol.",
  },
];
