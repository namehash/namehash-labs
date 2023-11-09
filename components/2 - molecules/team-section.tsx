import { PreSectionText } from "../1 - atoms/pre-section-text";
import { SectionText } from "../1 - atoms/section-text";
import { SectionTitle } from "../1 - atoms/section-title";

export const TeamSection = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col max-[635px] items-center justify-center mb-[60px]">
        <PreSectionText>WHO WE ARE</PreSectionText>
        <SectionTitle className="my-3">Meet our team</SectionTitle>
        <SectionText className="">
          NameHash Labs is a technology organization founded by a team of
          committed contributors from the ENS ecosystem.
        </SectionText>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-auto gap-6">
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
        <div className="w-[212px] h-[212px] bg-slate-400" />
      </div>
    </section>
  );
};
