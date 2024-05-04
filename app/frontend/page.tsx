import { type Metadata } from "next";
import { CareerPage } from "@/components/3 - organisms/career-page";

export const metadata: Metadata = {
  title: "Careers",
  description: "NameHash Labs careers.",
  keywords: ["ens", "web3", "eth", "namehash", "partners"],
};

export default function Page() {
  return <CareerPage />;
}
