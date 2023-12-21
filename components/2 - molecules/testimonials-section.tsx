import { Balancer } from "react-wrap-balancer";
import { PreSectionText, SectionTitle } from "../1 - atoms";
import { QuoteIcon } from "../1 - atoms/icons/quote-icon";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials: Testimonial[] = [
  {
    text: (
      <>
        “<span className="font-semibold">Namehash Labs</span> have a track
        record of building useful infrastructure, and furthermore of giving
        careful thought to what needs are not being served well by existing
        solutions.”
      </>
    ),
    author: {
      name: "Nick Johnson",
      ensName: "nick.eth",
    },
  },

  {
    text: (
      <>
        “<span className="font-semibold">Super Cool</span> have a track record
        of building useful infrastructure, and furthermore of giving careful
        thought to what needs are not being served well by existing solutions.”
      </>
    ),
    author: {
      name: "Vitalik",
      ensName: "vitalik.eth",
    },
  },
];

interface Testimonial {
  author: {
    name: String;
    ensName: String;
  };
  text: React.ReactNode;
}

export const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentTestimonialIndex(swiper.activeIndex);
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
                      <div className="w-[60px] h-[60px] bg-yellow-500"></div>
                      <div className="flex flex-col">
                        <p className="text-2xl leading-8 font-semibold">
                          {testimonial.author.ensName}
                        </p>
                        <p className="text-lg leading-7 font-normal text-gray-500">
                          {testimonial.author.name}
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
