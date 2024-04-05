import { SEO } from "@/components/1 - atoms/seo";
import { ContactSection } from "@/components/2 - molecules/contact-us-section";
import { Layout } from "@/components/4 - templates/layout";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="NameHash Labs - Contact Us"
        description="Contact NameHash Labs."
        keywords="ens, web3, eth, namehash, contact"
        ogImagePath="/images/contact-og-image.png"
        ogImageAlt="NameHash Labs - Contact Us"
        twitterImagePath="/images/contact-og-image-twitter.png"
        ogImageWidth={1260}
        ogImageHeight={630}
        twitterImageWidth={4096}
        twitterImageHeight={2048}
      />
      <ContactSection />
    </Layout>
  );
}
