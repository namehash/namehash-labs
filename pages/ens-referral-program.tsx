import { Footer } from "@/components/2 - molecules";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Header } from "@/components/2 - molecules/header";

export default function Home() {
  useEffect(() => {
    console.log("open calendar");
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

  useEffect(() => {
    window.location.href =
      "https://docs.google.com/document/d/1srqcho7PFyMBUDQTxxlH_eZqrt5x_EEB-PF2LfpYvIg/edit?usp=sharing";
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <section className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl text-center font-bold">Redirecting ↗</h1>
        </div>
      </section>
      <Footer className="lg:px-[112px] px-5 flex items-center justify-center w-full border-t border-gray-200 absolute bottom-0 left-0" />
    </main>
  );
}
