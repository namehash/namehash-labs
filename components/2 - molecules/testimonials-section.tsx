import { Balancer } from "react-wrap-balancer";
import { PreSectionText, SectionTitle } from "../1 - atoms";
import { QuoteIcon } from "../1 - atoms/icons/quote-icon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
      name: "Eduardo Lennert Ramme",
      ensName: "edulennert.eth",
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
  const [slideDirection, setSlideDirection] = useState("right");
  const [animate, setAnimate] = useState(false);

  const handlePrevClick = () => {
    setSlideDirection("left");
    setAnimate(true);
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 250);
  };

  const handleNextClick = () => {
    setSlideDirection("right");
    setAnimate(true);
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 250);
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

          <div className="flex justify-between gap-10 items-center w-full lg:px-20 relative">
            <div
              onClick={handlePrevClick}
              className="hidden lg:flex  items-center justify-center w-10 h-10 rounded-full border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-gray-50 absolute left-0"
            >
              <ChevronLeftIcon className="w-5 h-5 text-black" />
            </div>

            <p
              className={`text-[30px] font-light text-center leading-[44px] m-auto ${
                animate
                  ? slideDirection === "left"
                    ? "animate-slideIn"
                    : "animate-slideOut"
                  : ""
              }`}
              onAnimationEnd={() => setAnimate(false)}
            >
              <Balancer>{testimonials[currentTestimonialIndex].text}</Balancer>
            </p>

            <div
              onClick={handleNextClick}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-gray-50 absolute right-0"
            >
              <ChevronRightIcon className="w-5 h-5 text-black" />
            </div>
          </div>

          <div className="w-full px-20">
            <div
              className={`flex gap-5 w-full items-center justify-center ${
                animate
                  ? slideDirection === "left"
                    ? "animate-slideIn"
                    : "animate-slideOut"
                  : ""
              }`}
            >
              <div className="w-[60px] h-[60px] bg-yellow-500"></div>
              <div className="flex flex-col">
                <p className="text-2xl leading-8 font-semibold">
                  {testimonials[currentTestimonialIndex].author.ensName}
                </p>
                <p className="text-lg leading-7 font-normal text-gray-500">
                  {testimonials[currentTestimonialIndex].author.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {testimonials.map((_, index) => {
            return (
              <div
                key={index}
                className={`w-[77px] h-1 transition-all duration-200 ${
                  index === currentTestimonialIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
