export const Footer = () => {
  return (
    <section className="lg:px-[112px] px-5 flex items-center justify-center w-full border-t border-gray-200">
      <div className="py-5 flex flex-col lg:flex-row gap-3 items-center justify-between w-full max-w-[1216px]">
        <div>
          <p className="text-gray-500 text-xs leading-5 font-normal">
            © NameHash Labs. All Rights Reserved
          </p>
        </div>

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

        <div>
          <p className="text-gray-500 text-xs leading-5 font-normal">
            Made with <span className="text-red-500">❤</span> by{" "}
            <a
              href="https://namehashlabs.org/"
              className="underline text-black"
            >
              NameHash Labs
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
