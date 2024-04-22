import { type Metadata } from "next";

import { CareersPage } from "@/components/3 - organisms/careers-page";

export const metadata: Metadata = {
  title: "Careers",
  description: "NameHash Labs careers.",
  keywords: ["ens", "web3", "eth", "namehash", "partners"],
};

export default function Page() {
  return <CareersPage />;
}
