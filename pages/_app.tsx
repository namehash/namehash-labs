import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps}></Component>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
