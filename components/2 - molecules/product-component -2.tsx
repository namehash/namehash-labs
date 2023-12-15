import { Balancer } from "react-wrap-balancer";
import { ExternalLinkIcon, SectionText } from "../1 - atoms";
import cc from "classcat";

export interface ProductProps {
  label?: {
    icon: React.ReactElement;
    title: string;
  };
  title: string;
  subtitle: string;
  illustration: React.ReactElement;
  gradient?: React.ReactElement;
  isInverted?: boolean;
  buttonUrl?: string;
  greenLabelText?: string;
}

export const Product2 = ({
  label,
  title,
  subtitle,
  illustration,
  gradient,
  isInverted,
  buttonUrl,
  greenLabelText,
}: ProductProps) => {
  return (
    <section
      className={cc([
        "lg:py-5 lg:px-[120px] pt-10 pb-5 px-5 w-full flex items-center justify-center",
      ])}
    >
      <div
        className={cc([
          "w-full flex flex-col items-center lg:flex-row max-w-[1300px]",
          {
            "lg:flex-row-reverse": isInverted,
          },
        ])}
      >
        <div className="lg:w-1/2 w-full flex items-start justify-center ">
          <div className="flex-col inline-flex gap-5 lg:max-w-[568px]">
            {greenLabelText && (
              <div className="flex items-center justify-center lg:justify-start">
                <div
                  className="px-4 py-2 bg-green-100 border border-green-100 rounded-full"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <p className="text-sm leading-[18px] font-medium text-green-800 font-variant-normal">
                    {greenLabelText}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <h2
                className="text-2xl leading-8 lg:text-4xl lg:leading-10 font-bold lg:text-start text-center"
                style={{ whiteSpace: "nowrap" }}
              >
                {title}
              </h2>
            </div>
            <SectionText className="lg:text-start text-center w-full font-thin	">
              <Balancer>{subtitle}</Balancer>
            </SectionText>
            {buttonUrl && (
              <div className="flex lg:justify-start justify-center">
                <a
                  href={buttonUrl}
                  target="_blank"
                  className="border rounded-[8px] bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-gray-800 inline-flex items-center justify-center"
                >
                  Join the discussion
                  <div className="ml-3 w-5 h-5">
                    <ExternalLinkIcon />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 w-full  lg:mt-0 mt-5 relative flex items-center justify-center">
          {gradient}
          {illustration}
        </div>
      </div>
    </section>
  );
};
