import { origin } from "../../lib/shared/origin";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImageAlt?: string;
  ogImagePath?: string;
  twitterImagePath?: string;
};

export function SEO({
  title,
  description,
  keywords,
  noindex = false,
  nofollow = false,
  ogImageAlt,
  ogImagePath,
  twitterImagePath,
  ...props
}: Props) {
  const router = useRouter();
  const ogImageUrl = `${origin}${ogImagePath}`;
  const twitterImageUrl = `${origin}${twitterImagePath}`;

  const SEO = {
    title,
    description,
    noindex,
    nofollow,
    openGraph: {
      url: origin && origin + router.asPath,
      title,
      description,
      images: [
        ...(ogImagePath
          ? [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: ogImageAlt,
                type: "image/png",
              },
            ]
          : []),
      ],
    },
    additionalMetaTags: [
      ...(twitterImagePath
        ? [
            {
              property: "twitter:image",
              content: twitterImageUrl,
            },
          ]
        : []),
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:site",
        content: "@NamehashLabs",
      },
      {
        property: "twitter:creator",
        content: "@NamehashLabs",
      },
      ...(description
        ? [
            {
              property: "twitter:description",
              content: description,
            },
          ]
        : []),
      ...(ogImageAlt
        ? [
            {
              property: "twitter:image:alt",
              content: ogImageAlt,
            },
          ]
        : []),
      ...(keywords
        ? [
            {
              property: `keywords`,
              content: keywords?.trim(),
            },
          ]
        : []),
      {
        property: `og:type`,
        content: "website",
      },
    ],
    ...props,
  };

  return <NextSeo {...SEO} />;
}
