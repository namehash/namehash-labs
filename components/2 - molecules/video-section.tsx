import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";

import cc from "classcat";

interface VideoSectionProps {
  videoId?: string;
  className?: string;
}

export const VideoSection = ({
  className,
  videoId = "dQw4w9WgXcQ",
}: VideoSectionProps) => {
  return (
    <section className="w-full py-20 px-5">
      <div
        className={cc([
          "w-full flex max-w-7xl m-auto gap-10 flex-col lg:flex-row",
          className,
        ])}
      >
        <div className="lg:w-1/2 w-full flex flex-col items-start gap-3">
          <PreSectionText>testing</PreSectionText>
          <SectionTitle>Video</SectionTitle>
          <SectionText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </SectionText>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full border rounded-[8px]"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
