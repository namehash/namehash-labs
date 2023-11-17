import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";

export const ContactSection = () => {
  return (
    <section className="w-full py-20 px-5">
      <div className="w-full flex flex-col lg:flex-row m-auto gap-10 max-w-7xl">
        <div className="lg:w-1/2 w-full flex flex-col gap-3 items-start">
          <PreSectionText>Let’s talk</PreSectionText>
          <SectionTitle>Get in touch</SectionTitle>
          <SectionText>
            If you have questions, ideas, or share a passion for advancing ENS
            growth and would like to explore collaboration, please don&apos;t
            hesitate to get reach out.{" "}
          </SectionText>
        </div>
        <div className="lg:w-1/2 w-full bg-gray-50 py-8 px-10 border rounded-[8px] flex justify-center items-center">
          <form action="#" method="POST" className="w-full">
            <div className="mx-auto lg:mr-0 gap-x-8 gap-y-6 w-full gap-5 flex flex-col">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm leading-5 font-medium text-gray-500"
                >
                  Name
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm leading-5 font-medium text-gray-500"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="phone-number"
                  className="block text-sm leading-5 font-medium text-gray-500"
                >
                  Telegram (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm leading-5 font-medium text-gray-500"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800  transition-colors duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
