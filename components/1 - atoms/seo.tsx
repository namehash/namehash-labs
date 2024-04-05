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
  ogImageWidth?: number;
  ogImageHeight?: number;
  twitterImageWidth?: number;
  twitterImageHeight?: number;
};

export function SEO({
  title,
  ogImageWidth,
  ogImageHeight,
  twitterImageWidth,
  twitterImageHeight,
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
                width: ogImageWidth || 1260,
                height: ogImageHeight || 630,
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
            ...(twitterImageWidth && twitterImageHeight
              ? [
                  {
                    property: "twitter:image:width",
                    content: twitterImageWidth.toString(),
                  },
                  {
                    property: "twitter:image:height",
                    content: twitterImageHeight.toString(),
                  },
                ]
              : []),
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
