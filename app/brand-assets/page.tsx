import { type Metadata } from "next";

import { BrandAssets } from "@/components/2 - molecules/brand-assets";

export const metadata: Metadata = {
  title: "Brand Assets",
  description: "Brand assets for NameHash Labs.",
  keywords: ["ens", "web3", "eth", "namehash", "brand assets"],
};

export default function Page() {
  return <BrandAssets />;
}
