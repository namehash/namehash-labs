import { SEO } from "@/components/1 - atoms/seo";
import { PartnersPage } from "@/components/3 - organisms/partners-section";
import { Layout } from "@/components/4 - templates/layout";

export default function Partners() {
  return (
    <Layout>
      <SEO
        title="NameHash Labs - Partners"
        description="NameHash Labs partners."
        keywords="ens, web3, eth, namehash, partners"
        ogImagePath="/images/partners-og-image.png"
        ogImageAlt="NameHash Labs - Partners"
        twitterImagePath="/images/partners-og-image-twitter.png"
      />
      <PartnersPage />
    </Layout>
  );
}
