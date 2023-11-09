import React from "react";
import cc from "classcat";
import {
  ChartBarSquareIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  ChartBarIcon,
  ClockIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { ExternalLinkIcon } from "../1 - atoms/icons/external-link-icon";

interface ServiceProps {
  label: {
    icon: React.ReactElement;
    title: string;
  };
  title: string;
  subtitle: string;
  illustration: React.ReactElement;
  gradient?: React.ReactElement;
  isInverted?: boolean;
  buttonUrl?: string;
}

export const Service = ({
  label,
  title,
  subtitle,
  illustration,
  gradient,
  isInverted,
  buttonUrl,
}: ServiceProps) => {
  return (
    <section
      className={cc([
        "lg:py-20 lg:px-[120px] pt-10 pb-5 px-5 w-full flex flex-col items-center lg:flex-row",
        {
          "lg:flex-row-reverse": isInverted,
        },
      ])}
    >
      <div className="lg:w-1/2 w-full flex items-start justify-center">
        <div className="flex-col inline-flex gap-5 lg:max-w-[568px]">
          <div className="justify-center lg:justify-start flex">
            <div className="gap-2 bg-black inline-flex items-center bg-opacity-5 px-4 py-2 rounded-[20px]">
              {label.icon}
              <p>{label.title}</p>
            </div>
          </div>

          <h2 className="text-2xl leading-8 lg:text-4xl lg:leading-10 font-bold lg:text-start text-center">
            {title}
          </h2>
          <p className="text-gray-500 text-lg leading-7 font-normal lg:text-start text-center">
            {subtitle}
          </p>
          {buttonUrl && (
            <div className="flex lg:justify-start justify-center">
              <a
                href={buttonUrl}
                target="_blank"
                className="border rounded-[8px] bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-gray-800 inline-flex items-center justify-center"
              >
                Learn more
                <ExternalLinkIcon className="ml-3" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:mt-0 mt-5 relative flex items-center justify-center">
        {gradient}
        {illustration}
      </div>
    </section>
  );
};

export const ServicesSection = () => {
  return (
    <>
      <div>
        <p className="text-xs font-medium leading-4 uppercase tracking-tight text-gray-500 text-center">
          What we{"’"}re building
        </p>
        <h3 className="text-4xl leading-10 font-bold text-center mt-3">
          Our products
        </h3>
      </div>
      {services.map((service, index) => (
        <Service
          key={service.title}
          label={service.label}
          title={service.title}
          subtitle={service.subtitle}
          illustration={service.illustration}
          gradient={service.gradient}
          isInverted={index % 2 === 1}
          buttonUrl={service.buttonUrl}
        />
      ))}
    </>
  );
};

const services: ServiceProps[] = [
  {
    title: "NameKit",
    subtitle:
      "A fast, easy and highly customizable way for developers to add engaging ENS user journeys to their application.",
    label: {
      title: "Improved economics for building on ENS",
      icon: <ChartBarSquareIcon className="h-5 w-5 text-gray-500" />,
    },
    illustration: (
      <Image
        quality={100}
        width={568}
        height={360}
        src="/images/namekit-improved.png"
        alt="hero"
      />
    ),
  },
  {
    title: "ENS Ambassador Program",
    subtitle:
      "The power of a protocol lies not only in its technology,  but in the strength of its community. Passionate about ENS? Become an ambassador, help grow ENS, and start earning.",
    label: {
      title: "Incentive program to help ENS grow",
      icon: <ChartBarSquareIcon className="h-5 w-5 text-gray-500" />,
    },
    illustration: (
      <Image
        quality={100}
        width={568}
        height={360}
        src="/images/ens-incentive.png"
        alt="hero"
      />
    ),
  },
  {
    title: "NameGuard",
    subtitle:
      "Provide a fully secure environment for ENS names in your Web3 app, eliminate hidden risks for your users, and encourage optimal use of ENS. ",
    label: {
      title: "Protect the ENS community",
      icon: <ShieldCheckIcon className="h-5 w-5 text-gray-500" />,
    },
    illustration: (
      <Image
        quality={100}
        width={568}
        height={360}
        src="/images/nameguard-protect.png"
        alt="hero"
      />
    ),
  },
  {
    title: "ENSNode",
    subtitle:
      "Unlock new opportunities for ENS support in your web3 app with ENS Node, your gateway to a seamless fusion of richest on-chain and off-chain data from across the ENS ecosystem.",
    label: {
      title: "Developer API tooling",
      icon: <ChartBarSquareIcon className="h-5 w-5 text-gray-500" />,
    },
    illustration: (
      <Image
        quality={100}
        width={568}
        height={360}
        src="/images/ensnode-developer.png"
        alt="hero"
      />
    ),
  },
];
