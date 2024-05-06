import { type Metadata } from "next";

import { CareersPage } from "@/components/3 - organisms/careers-page";

export const metadata: Metadata = {
  title: "NameHash Labs - Careers",
  description: "NameHash Labs careers.",
  keywords: ["ens", "web3", "eth", "namehash", "careers"],
};

export default function Page() {
  return <CareersPage />;
}
