import Image from "next/image";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { Profile } from "./our-supporters-section";

interface ImageWithGallbackProps {
  profile: Profile;
  className?: string;
  width?: number;
}

export const ImageWithGallback = ({
  profile,
  className = "",
  width = 80,
}: ImageWithGallbackProps) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [isHovered, setIshovered] = useState(false);

  const imgSrc = imageFailed
    ? "/images/no-avatar.png"
    : `https://metadata.ens.domains/mainnet/avatar/${profile.ethName}`;


  const imageSizeString = width === 80 ? "w-[80px] h-[80px]" : "w-[120px] h-auto "

  return (
    <div className="group">
      <a target="_blank" href={profile.twitterUrl}>
        <Image
          src={imgSrc}
          alt={profile.ethName}
          data-tip
          data-for={profile.ethName}
          data-tooltip-id={profile.ethName}
          width={width}
          height={width}
          className={`rounded-[12px] ${imageSizeString} bg-white ${className} tooltip-target border-gray-300 border`}
          onError={() => setImageFailed(true)}
        />
      </a>

      <Tooltip id={profile.ethName} place="top" className="z-50 group-hover:!opacity-100 bg-black !rounded-[8px] !p-4" >
        <div className="flex gap-4 max-w-[400px] ">
          <Image
            src={imgSrc}
            alt={profile.ethName}
            data-tip
            data-for={profile.ethName}
            data-tooltip-id={profile.ethName}
            width={width}
            height={width}
            className={`rounded-[12px] w-20 h-20`}
            onError={() => setImageFailed(true)}
          />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center ">
              <div className="font-bold">{profile.ethName}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.5222 10.7749L19.4785 4H18.0671L12.8952 9.88256L8.76437 4H4L10.2466 12.8955L4 20H5.41155L10.8732 13.7878L15.2356 20H20L13.5218 10.7749H13.5222ZM11.5889 12.9738L10.956 12.0881L5.92015 5.03974H8.0882L12.1522 10.728L12.7851 11.6137L18.0677 19.0075H15.8997L11.5889 12.9742V12.9738Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>

            <div className="">{profile.role}</div>
          </div>
        </div>
      </Tooltip>
    </ div>
  );
};
