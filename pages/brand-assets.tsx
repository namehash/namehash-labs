import { SEO } from "@/components/1 - atoms/seo";
import { BrandAssets } from "@/components/2 - molecules/brand-assets";
import { Layout } from "@/components/4 - templates/layout";

export default function BrandAssetsPage() {
  return (
    <Layout>
      <SEO
        title="NameHash Labs - Brand Assets"
        description="Brand assets for NameHash Labs."
        keywords="ens, web3, eth, namehash, brand assets"
        ogImagePath="/images/brand-assets-og-image.png"
        ogImageAlt="NameHash Labs - Brand Assets"
        twitterImagePath="/images/brand-assets-og-image-twitter.png"
        ogImageWidth={1260}
        ogImageHeight={630}
        twitterImageWidth={4096}
        twitterImageHeight={2048}
      />
      <BrandAssets />
    </Layout>
  );
}
