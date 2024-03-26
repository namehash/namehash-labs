import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps}></Component>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
