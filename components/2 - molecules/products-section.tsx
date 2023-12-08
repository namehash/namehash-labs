import React from "react";
import {
  ChartBarSquareIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Product, ProductProps } from "./product-component";

export const ProductsSection = () => {
  return (
    <>
      {products.map((product, index) => (
        <Product
          key={product.title}
          label={product.label}
          title={product.title}
          subtitle={product.subtitle}
          illustration={product.illustration}
          gradient={product.gradient}
          isInverted={index % 2 === 1}
          buttonUrl={product.buttonUrl}
          greenLabelText={product.greenLabelText}
        />
      ))}
    </>
  );
};

const products: ProductProps[] = [
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
        className="w-full h-auto"
        src="/images/namekit-improved.png"
        alt="hero"
      />
    ),
    buttonUrl: "https://www.namekit.io/",
  },
  {
    title: "ENS Referral Program",
    subtitle:
      "The power of a protocol lies not only in its technology, but in the strength of its community. Passionate about ENS? Become an ENS Referrer, help grow ENS, and start earning.",
    label: {
      title: "Incentive program to help ENS grow",
      icon: <ChartBarSquareIcon className="h-5 w-5 text-gray-500" />,
    },
    illustration: (
      <Image
        quality={100}
        width={568}
        height={360}
        className="w-full h-auto"
        src="/images/ens-incentive.png"
        alt="hero"
      />
    ),
    greenLabelText: "PROPOSAL PENDING",
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
        className="w-full h-auto"
        src="/images/nameguard-protect.png"
        alt="hero"
      />
    ),

    buttonUrl: "https://www.nameguard.io/",
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
        className="w-full h-auto"
        src="/images/ensnode-developer.png"
        alt="hero"
      />
    ),
    greenLabelText: "COMING SOON",
  },
];
