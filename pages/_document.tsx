import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "NameHash Labs - Helping ENS Grow",
  description:
    "Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS.",
  keywords: ["namehashlabs", "ens", "web3", "eth"],
  icons: [
    { rel: "icon", url: "favicon.ico" },
    { rel: "apple-touch-icon", url: "favicon.ico" },
  ],
  openGraph: {
    type: "website",
    title: "NameHash Labs - Helping ENS Grow",
    description:
      "Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS.",
    url: "https://namehashlabs.org/",
    images: {
      url: "https://namehashlabs.org/images/og-image.png",
      alt: "NameHash Labs - Helping ENS Grow",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@NamehashLabs",
    creator: "@NamehashLabs",
    description:
      "Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS.",
    images: {
      url: "https://namehashlabs.org/images/og-image-twitter.png",
      alt: "NameHash Labs - Helping ENS Grow",
    },
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
