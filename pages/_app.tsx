import "@/styles/globals.css";
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

  return <Component {...pageProps}></Component>;
}
