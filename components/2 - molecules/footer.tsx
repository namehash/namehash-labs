import Link from "next/link";
import {
  EmailIcon,
  FarcasterIcon,
  GithubIcon,
  NameHashLabsLogo,
  ServiceProviderBadge,
  TelegramIcon,
  TwitterIcon,
} from "../1 - atoms";

const footerProducts = [
  {
    name: "NameKit",
    href: "https://namekit.io",
  },
  {
    name: "NameGuard",
    href: "https://nameguard.io",
  },
  {
    name: "ENS Referral Program",
    href: "/ens-referral-program",
  },
];

const footerResources = [
  {
    name: "Contact us",
    href: "/contact",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Partners",
    href: "/partners",
  },
  {
    name: "Brand assets",
    href: "/brand-assets",
  },
];

export const Footer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className="lg:px-[112px] px-5 flex items-center justify-center w-full border-t border-gray-200"
      {...props}
    >
      <div className="pt-8 pb-5 flex flex-col gap-10 items-start justify-between w-full max-w-[1216px]">
        <div className="w-full gap-5 flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-5">
            <NameHashLabsLogo />

            <p className="text-sm font-light text-gray-500 max-w-[339px] leading-6">
              Founded in 2022, Namehash Labs is a technology organization
              dedicated to infrastructure-level solutions that helps the
              Ethereum Name Service (ENS) Protocol grow.
            </p>

            <ServiceProviderBadge />
          </div>

          <div className="flex justify-start">
            <div className="flex flex-col w-[228px] pr-5">
              <span className="mb-2 text-sm font-semibold">Products</span>
              <ul className="flex flex-col">
                {footerProducts.map((product) => {
                  return (
                    <li
                      key={product.name}
                      className="my-2 text-sm font-light text-gray-500 hover:underline transition"
                    >
                      <a
                        target={
                          product.href.startsWith("/") ? "_self" : "_blank"
                        }
                        href={product.href}
                      >
                        {product.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col w-[228px]">
              <span className="mb-2 text-sm font-semibold">Resources</span>
              <ul className="flex flex-col">
                {footerResources.map((resource) => {
                  return (
                    <li
                      key={resource.name}
                      className="my-2 text-sm font-light text-gray-500 hover:underline transition"
                    >
                      <a
                        target={
                          resource.href.startsWith("/") ? "_self" : "_blank"
                        }
                        href={resource.href}
                      >
                        {resource.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:border-t lg:border-gray-200 w-full flex flex-col lg:flex-row lg:justify-between gap-5 pt-5">
          <p className="text-gray-500 text-sm leading-5 font-normal">
            © NameHash Labs. All Rights Reserved
          </p>

          <div className="flex gap-3">
            <a
              href="https://twitter.com/NamehashLabs"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterIcon className="hover:text-black text-[#AFAFAF] transition-all duration-200" />
            </a>

            <a
              href="https://github.com/namehash"
              target="_blank"
              aria-label="Github"
            >
              <GithubIcon className="hover:text-black text-[#AFAFAF] transition-all duration-200" />
            </a>

            <a
              href="https://warpcast.com/namehash"
              target="_blank"
              aria-label="Farcaster"
            >
              <FarcasterIcon className="hover:text-black text-[#AFAFAF] transition-all duration-200" />
            </a>

            <a
              href="https://t.me/namehash"
              target="_blank"
              aria-label="Telegram"
            >
              <TelegramIcon className="hover:text-black text-[#AFAFAF] transition-all duration-200" />
            </a>

            <a href="mailto:hello@namehashlabs.org" aria-label="Email">
              <EmailIcon className="hover:text-black text-[#AFAFAF] transition-all duration-200" />
            </a>
          </div>

          <div className="flex space-x-1 not-italic font-normal text-gray-500 text-sm xSmall:font-light">
            <span>
              Made with
              <span className="text-[#EF4444] mx-1">{"❤️"}</span>
              by
            </span>
            <Link
              className="text-black underline xSmall:underline-offset-[4px] xSmall:transition-all xSmall:duration-200 xSmall:hover:underline-offset-[2px]"
              href="/"
            >
              NameHash Labs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
