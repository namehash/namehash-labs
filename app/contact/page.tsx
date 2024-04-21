import { type Metadata } from "next";

import { ContactSection } from "@/components/2 - molecules/contact-us-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact NameHash Labs.",
  keywords: ["ens", "web3", "eth", "namehash", "contact"],
};

export default function Page() {
  return <ContactSection />;
}
