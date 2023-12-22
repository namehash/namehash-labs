import { Balancer } from "react-wrap-balancer";
import { PreSectionText, SectionTitle } from "../1 - atoms";
import { QuoteIcon } from "../1 - atoms/icons/quote-icon";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const testimonials: Testimonial[] = [
  {
    text: (
      <>
        “<span className="font-semibold">Namehash Labs</span> have a track
        record of building{" "}
        <span className="font-semibold">useful infrastructure</span>, and
        furthermore of giving careful thought to what needs are not being served
        well by existing solutions.”
      </>
    ),
    author: {
      title: "Lead developer of ENS & EF Alumni",
      ensName: "nick.eth",
    },
  },
  {
    text: (
      <>
        &quot;I have been following{" "}
        <span className="font-semibold">NameHash development</span> closely for
        over a year and was lucky enough to have a demo of their ENS
        registration website last year and{" "}
        <span className="font-semibold">I was blown away</span>.&quot;
      </>
    ),
    author: {
      title: "Co-founder of ENS & EF Alumni",
      ensName: "avsa.eth",
    },
  },
  {
    text: (
      <>
        &quot;NameHash Labs have already shown themselves to be{" "}
        <span className="font-semibold">very capable</span> with the
        contributions they&apos;ve already made, with{" "}
        <span className="font-semibold">lots of great work planned</span> going
        into the future.&quot;
      </>
    ),
    author: {
      title: "Founder of EFP & Creator of SIWE",
      ensName: "brantly.eth",
    },
  },
  {
    text: (
      <>
        &quot;The NameHash team have{" "}
        <span className="font-semibold">
          already shipped a significant amount of impact
        </span>{" "}
        to ENS through different services & infrastructure and have a{" "}
        <span className="font-semibold">well-laid-out roadmap</span> ...&quot;
      </>
    ),
    author: {
      title: "DAO Governance",
      ensName: "james.eth",
    },
  },
  {
    text: (
      <>
        &quot;The team has made{" "}
        <span className="font-semibold">many contributions</span> on various ENS
        related toolsets ...&quot;
      </>
    ),
    author: {
      title: "Developer at ENS Labs",
      ensName: "matoken.eth",
    },
  },
  {
    text: (
      <>
        &quot;... notable of course are the modular tools like NameKit and
        NameGuard that create a broader application potential within the ENS
        ecosystem.{" "}
        <span className="font-semibold">Solid delivery track record</span>{" "}
        ...&quot;
      </>
    ),
    author: {
      title: "ENS DAO Steward",
      ensName: "simona.eth",
    },
  },
  {
    text: (
      <>
        &quot;... this is a{" "}
        <span className="font-semibold">strong support</span> because they are{" "}
        <span className="font-semibold">100% focused on improving ENS</span>. I
        would like to see them continue developing NameGuard ... and develop a
        method for ENS referrals.&quot;
      </>
    ),
    author: {
      title: "ENS DAO Steward",
      ensName: "coltron.eth",
    },
  },
];

interface Testimonial {
  author: {
    title: string;
    ensName: string;
  };
  text: React.ReactNode;
}

export const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = swiper.realIndex;
    setCurrentTestimonialIndex(nextIndex);
  };

  return (
    <section
      className="lg:px-[110px] px-5 py-[108px] border-b border-gray-200 w-full"
      id="ensOnboardingSection"
    >
      <div className="w-full flex flex-col items-center gap-20 max-w-[1216px] m-auto">
        <div className="flex flex-col items-center gap-3">
          <PreSectionText>WHAT PEOPLE ARE SAYING</PreSectionText>
          <SectionTitle>Testimonials</SectionTitle>
        </div>
        <div className="flex flex-col gap-10 items-center w-full relative">
          <div
            className="absolute w-full h-full"
            style={{
              opacity: "8%",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), linear-gradient(180deg, #FBA600 24.22%, #F112D9 48.69%, #4C3FA0 77.9%, #2ED3C6 96.84%)",
            }}
          ></div>

          <QuoteIcon />
          <Swiper
            navigation={true}
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            className="rewind w-full"
            loop
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex flex-col gap-10">
                    <div className="flex justify-between gap-10 items-center w-full relative lg:px-20">
                      <p
                        className={`text-[30px] font-light text-center leading-[44px] m-auto`}
                      >
                        <Balancer>{testimonial.text}</Balancer>
                      </p>
                    </div>

                    <div
                      className={`flex gap-5 w-full items-center justify-center`}
                    >
                      <Image
                        src={`https://metadata.ens.domains/mainnet/avatar/${testimonial.author.ensName}`}
                        alt={testimonial.author.ensName}
                        width={60}
                        height={60}
                        className="w-[60px] h-[60px] border-0"
                        priority={true}
                      />
                      <div className="flex flex-col">
                        <p className="text-2xl leading-8 font-semibold">
                          {testimonial.author.ensName}
                        </p>
                        <p className="text-lg leading-7 font-normal text-gray-500">
                          {testimonial.author.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            <div className="flex items-center justify-center mt-[64px] gap-1 m-auto w-full">
              {testimonials.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[77px] h-1 transition-all duration-200 ${
                      index === currentTestimonialIndex
                        ? "bg-black"
                        : "bg-gray-300"
                    }`}
                  ></div>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
