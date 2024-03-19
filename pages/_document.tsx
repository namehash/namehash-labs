import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="NameHash Labs builds open source public goods that drive the global adoption of ENS."
        />
        <meta
          name="keywords"
          content="ens, web3, eth, nameguard, namegraph, namekit"
        />
        <meta property="og:title" content="NameHash Labs - Helping ENS Grow" />
        <meta
          property="og:description"
          content="NameHash Labs builds open source public goods that drive the global adoption of ENS."
        />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NamehashLabs" />
        <meta name="twitter:creator" content="@NamehashLabs" />
        <meta name="twitter:title" content="NameHash Labs - Helping ENS Grow" />
        <meta
          name="twitter:description"
          content="NameHash Labs builds open source public goods that drive the global adoption of ENS."
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
