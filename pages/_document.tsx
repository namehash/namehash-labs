import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS."
        />
        <meta
          name="keywords"
          content="ens, web3, eth, nameguard, namegraph, namekit"
        />
        <meta property="og:title" content="NameHash Labs - Helping ENS Grow" />
        <meta
          property="og:description"
          content="Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS."
        />
        <meta property="og:url" content="https://namehashlabs.org" />
        <meta
          property="og:image"
          content="https://namehashlabs.org/images/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="NameHash Labs - Helping ENS Grow"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NamehashLabs" />
        <meta name="twitter:creator" content="@NamehashLabs" />
        <meta name="twitter:title" content="NameHash Labs - Helping ENS Grow" />
        <meta
          name="twitter:description"
          content="Our mission at NameHash Labs is building open source public goods that drive the global adoption of ENS."
        />
        <meta
          name="twitter:image"
          content="https://namehashlabs.org/images/og-image-twitter.png"
        />
        <meta
          name="twitter:image:alt"
          content="NameHash Labs - Helping ENS Grow"
        />
        <meta name="next-size-adjust" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
