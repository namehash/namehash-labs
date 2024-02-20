import { NameHashLabsLogo, ServiceProviderBadge } from "../1 - atoms";

const FooterProducts = [
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
    href: "https://namehashlabs.org/ens-referral-program",
  },
];

export const Footer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className="lg:px-[112px] px-5 flex items-center justify-center w-full border-t border-gray-200"
      {...props}
    >
      <div className="pt-8 pb-5 flex flex-col gap-10 items-start justify-between w-full max-w-[1280px]">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-5">
            <NameHashLabsLogo />

            <p className="text-sm font-light text-gray-500 max-w-[339px]">
              Founded in 2022, Namehash Labs is a technology organization
              dedicated to infrastructure-level solutions that helps the
              Ethereum Name Service (ENS) Protocol grow.
            </p>

            <ServiceProviderBadge />
          </div>

          <ul className="flex flex-col ">
            <h4 className="mt-8 mb-2 text-sm font-semibold">Products</h4>
            {FooterProducts.map((product) => {
              return (
                <li
                  key={product.name}
                  className="my-2 text-sm font-light text-gray-500 hover:underline transition"
                >
                  <a href={product.href}>{product.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:border-t lg:border-gray-200 w-full flex flex-col lg:flex-row lg:justify-between gap-5 pt-5">
          <p className="text-gray-500 text-sm leading-5 font-normal">
            © NameHash Labs. All Rights Reserved
          </p>

          <div className="flex gap-3">
            <a href="https://twitter.com/NamehashLabs" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M13.5222 10.7749L19.4785 4H18.0671L12.8952 9.88256L8.76437 4H4L10.2466 12.8955L4 20H5.41155L10.8732 13.7878L15.2356 20H20L13.5218 10.7749H13.5222ZM11.5889 12.9738L10.956 12.0881L5.92015 5.03974H8.0882L12.1522 10.728L12.7851 11.6137L18.0677 19.0075H15.8997L11.5889 12.9742V12.9738Z"
                  fill="#AFAFAF"
                  className="group-hover:fill-black transition-all duration-200"
                />
              </svg>
            </a>

            <a href="https://github.com/namehash" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0413 2.25928C6.51859 2.25928 2 6.77787 2 12.3006C2 16.7355 4.84504 20.501 8.86156 21.8398C9.36363 21.9235 9.53099 21.5888 9.53099 21.3378C9.53099 21.0867 9.53099 20.501 9.53099 19.6642C6.76962 20.25 6.18388 18.3254 6.18388 18.3254C5.76549 17.1539 5.09607 16.8192 5.09607 16.8192C4.09194 16.2334 5.09607 16.2334 5.09607 16.2334C6.1002 16.3171 6.60227 17.2376 6.60227 17.2376C7.52272 18.7438 8.94524 18.3254 9.53099 18.0743C9.61466 17.4049 9.8657 16.9865 10.2004 16.7355C7.94111 16.4845 5.59814 15.6477 5.59814 11.7985C5.59814 10.7107 6.01653 9.79026 6.60227 9.12084C6.60227 8.78613 6.18388 7.782 6.76962 6.44316C6.76962 6.44316 7.6064 6.19212 9.53099 7.44729C10.3678 7.19626 11.2045 7.11258 12.0413 7.11258C12.8781 7.11258 13.7149 7.19626 14.5516 7.44729C16.4762 6.10845 17.313 6.44316 17.313 6.44316C17.8987 7.86568 17.4804 8.86981 17.3967 9.12084C18.0661 9.79026 18.4008 10.7107 18.4008 11.7985C18.4008 15.6477 16.0578 16.4845 13.7985 16.7355C14.1333 17.0702 14.468 17.656 14.468 18.5764C14.468 19.9153 14.468 21.0031 14.468 21.3378C14.468 21.5888 14.6353 21.9235 15.1374 21.8398C19.1539 20.501 21.9989 16.7355 21.9989 12.3006C22.0826 6.77787 17.564 2.25928 12.0413 2.25928Z"
                  fill="#AFAFAF"
                  className="group-hover:fill-black transition-all duration-200"
                />
              </svg>
            </a>

            <a href="https://t.me/namehash" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M21.9597 4.33581C21.9435 4.26415 21.9081 4.19792 21.857 4.14382C21.806 4.08972 21.7411 4.04967 21.6689 4.02773C21.4062 3.97723 21.1343 3.99594 20.8815 4.08191C20.8815 4.08191 3.35842 10.1941 2.35765 10.8709C2.14267 11.0165 2.07017 11.1014 2.03434 11.2008C1.86102 11.686 2.40015 11.8946 2.40015 11.8946L6.91653 13.3226C6.9929 13.3359 7.07142 13.3315 7.14568 13.3097C8.17228 12.6798 17.4784 6.97509 18.0192 6.78345C18.1025 6.75919 18.1666 6.78345 18.15 6.84409C17.935 7.57588 9.89301 14.508 9.84884 14.5501C9.82733 14.5672 9.81057 14.5892 9.80009 14.6142C9.78961 14.6392 9.78575 14.6664 9.78885 14.6932L9.36721 18.9723C9.36721 18.9723 9.19055 20.3041 10.563 18.9723C11.5362 18.0271 12.4703 17.2443 12.937 16.8635C14.4902 17.9042 16.1609 19.0548 16.8817 19.6572C17.003 19.7711 17.1466 19.8601 17.3041 19.9189C17.4616 19.9776 17.6297 20.005 17.7983 19.9993C18.006 19.9747 18.201 19.8894 18.3575 19.7546C18.5139 19.6198 18.6244 19.442 18.6741 19.2448C18.6741 19.2448 21.8656 6.77375 21.9722 5.10317C21.9831 4.94145 21.9972 4.83472 21.9989 4.72232C22.0041 4.59235 21.9909 4.46231 21.9597 4.33581Z"
                  fill="#AFAFAF"
                  className="group-hover:fill-black transition-all duration-200"
                />
              </svg>
            </a>

            <a href="mailto:hello@namehashlabs.org">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z"
                  fill="#AFAFAF"
                  className="group-hover:fill-black transition-all duration-200"
                />
                <path
                  d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z"
                  fill="#AFAFAF"
                  className="group-hover:fill-black transition-all duration-200"
                />
              </svg>
            </a>
          </div>

          <div className="flex space-x-1 not-italic font-normal text-gray-500 text-sm xSmall:font-light">
            Made with
            <p className="text-[#EF4444] mx-1">{"❤️"}</p>
            by
            <a
              className="text-black underline xSmall:underline-offset-[4px] xSmall:transition-all xSmall:duration-200 xSmall:hover:underline-offset-[2px]"
              href={"https://namehashlabs.org"}
            >
              NameHash Labs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
