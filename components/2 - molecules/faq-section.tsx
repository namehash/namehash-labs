import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { SectionText, SectionTitle } from "../1 - atoms";

const faqs = [
  {
    question: "What is NameHash Labs?",
    answer:
      "An innovation network that focuses on designing and developing open-source infrastructure and public goods centered around the Ethereum Name Service (ENS)",
  },
  {
    question: "What is Nameguard?",
    answer:
      "Nameguard aims to combat impersonation attempts using ENS names. It includes features like ENS health checks, smart auto-renewal of ENS names, and an ENS profile completion score, which encourages users to fully utilize their ENS names.",
  },
  {
    question: "What is NameKit?",
    answer:
      "NameKit aims to simplify the implementation of ENS on wallets and decentralized applications (dApps). It offers four distinct user journeys: finding, designing, interacting with, and managing ENS identities. NameKit is intended to be an open-source public good, making ENS functionalities accessible and manageable from one place",
  },
  {
    question: "What is ENS?",
    answer:
      "The Ethereum Name Service (ENS) is a decentralized domain name system built on the Ethereum blockchain. ENS transforms difficult-to-remember Ethereum blockchain addresses, which are long strings of numbers and letters, into human-readable names. This system is analogous to how domain names work on the internet, allowing users to convert complex addresses into simpler, memorable names ending in .eth.",
  },
];

export function Faq() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
          <SectionTitle className="">Frequently asked questions</SectionTitle>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className=" "
                style={{ marginTop: 0 }}
              >
                {({ open }) => (
                  <div>
                    <dt>
                      <Disclosure.Button className="flex p-6 w-full items-start justify-between text-left text-gray-900 hover:text-black group hover:bg-gray-100 transition-colors duration-500">
                        <span className="text-2xl leading-8 font-semibold ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 pb-6 px-6">
                      <SectionText className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </SectionText>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
