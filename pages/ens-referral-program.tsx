import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import cc from "classcat";
import { HeadlineBanner, ExternalLinkIcon } from "@/components/1 - atoms";
import { FigmaIcon } from "@/components/1 - atoms/icons/figma-icon";
import { Product2 } from "@/components/2 - molecules/product-component -2";
import Head from "next/head";
import { useRouter } from "next/router";
import { origin } from "@/lib/shared/origin";
import { Layout } from "@/components/4 - templates/layout";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "--brand-color": "#000000",
          },
          dark: {
            "--brand-color": "#000000",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="twitter:image"
          content="https://namehashlabs.org/images/ens-referral-program-og-image-twitter.png"
        />
        <meta
          property="og:image"
          content="https://namehashlabs.org/images/ens-referral-program-og-image.png"
        />
        <meta
          property="og:image:alt"
          content="NameHash Labs - ENS Referral Program Proposal"
        />

        <meta property="og:url" content={origin + router.pathname} />
      </Head>
      <main className="flex flex-col items-center justify-between">
        <Layout>
          <div className="mt-20">
            <section className="bg-gray-50 w-full">
              <Product2
                title="ENS Referral Program"
                subtitle="The power of a protocol lies not only in its technology, but in the strength of its community. Passionate about ENS? Become an ENS Referrer, help grow ENS, and start earning."
                illustration={
                  <Image
                    quality={100}
                    width={568}
                    height={360}
                    className="w-full h-auto"
                    src="/images/ens-incentive.png"
                    alt="hero"
                  />
                }
                greenLabelText="Proposal pending"
                buttonUrl="https://docs.google.com/document/d/1srqcho7PFyMBUDQTxxlH_eZqrt5x_EEB-PF2LfpYvIg/edit?usp=sharing"
              />
            </section>
            <section className="px-5 py-20 w-full flex flex-col relative items-center justify-center overflow-hidden">
              <div className="flex flex-col md:flex-row items-start justify-center max-w-[1216px]">
                {items.map((item, index) => {
                  return (
                    <Item
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      text={item.text}
                      buttonUrl={item.buttonUrl}
                      greenLabelText={item.greenLabelText}
                      isInverted={index % 2 === 1}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
}

export interface ItemProps {
  icon: React.ReactElement;
  title: string;
  text: string;
  isInverted?: boolean;
  buttonUrl?: string;
  greenLabelText?: string;
}

const Item = ({
  icon,
  title,
  text,
  isInverted,
  buttonUrl,
  greenLabelText,
}: ItemProps) => {
  return (
    <div
      className={cc([
        "flex flex-col gap-6 items-start justify-center w-full md:w-1/2 border-gray-200",
        isInverted
          ? "md:border-l md:pl-[60px] pt-10 md:pt-0 "
          : "md:border-r md:pr-[60px] pb-10 md:pb-0 border-b md:border-b-0",
      ])}
    >
      <div className="w-[52px] flex items-center justify-center h-[52px] border border-gray-200 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="flex flex-wrap gap-3 items-center justify-start lg:justify-start">
          <h3 className="text-3xl leading-9 font-bold text-start">{title}</h3>

          {greenLabelText && (
            <div
              className="px-3 py-0.5 bg-green-100 border border-green-100 rounded-full"
              style={{ whiteSpace: "nowrap" }}
            >
              <p className="text-sm leading-5 font-medium text-green-800 font-variant-normal">
                {greenLabelText}
              </p>
            </div>
          )}
        </div>
        <p className="text-lg leading-7 font-normal text-gray-500">{text}</p>
      </div>
      {!!buttonUrl && (
        <a
          className="px-4 py-2 flex items-center justify-center gap-3 border border-gray-200 rounded-[8px] hover:bg-gray-100 transition-colors duration-200"
          target="_blank"
          href={buttonUrl}
        >
          Review the temp check
          <ExternalLinkIcon className="text-black w-5 h-5" />
        </a>
      )}
    </div>
  );
};

const items: ItemProps[] = [
  {
    icon: <DocumentTextIcon className="h-6 w-6 text-gray-400 m-auto" />,
    title: "Abstract Proposal Document",
    text: "Review the design rationale for important decisions in how a proposed ENS Referral Program might function.",
    buttonUrl:
      "https://docs.google.com/document/d/1srqcho7PFyMBUDQTxxlH_eZqrt5x_EEB-PF2LfpYvIg/edit?usp=sharing",
  },
  {
    icon: <FigmaIcon className="h-6 w-6 text-gray-400 m-auto" />,
    title: "Interactive Design Prototype",
    text: "Navigate the proposed UI for an ENS Referral Program portal website. Designs include how to become a referrer, reviewing detailed referrer metrics, withdrawing rewards, and overall program administration.",
    greenLabelText: "Coming soon",
  },
];
