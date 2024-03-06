/* eslint-disable @next/next/no-img-element */
import { PreSectionText } from "../1 - atoms";
import { ColorfulBg } from "../1 - atoms/colorful-bg";

export const BrandAssets = () => {
  return (
    <section className="w-full max-w-[1216px] py-20 px-5 h-full">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1]" />
      <div className="lg:mt-[100px] lg:mb-[120px] mt-[60px] mb-[60px]">
        <PreSectionText className="text-start ">Logos & MORE</PreSectionText>
        <h1 className="font-bold text-[52px] ">Brand assets</h1>
      </div>
    </section>
  );
};
