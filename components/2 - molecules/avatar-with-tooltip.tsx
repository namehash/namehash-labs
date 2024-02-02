/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { FastAverageColor } from "fast-average-color";
import { EnsSolidIcon } from "../1 - atoms/icons/ens-solid-icon";
import { Profile } from "@/data/ensProfiles";

interface AvatarWithTooltipProps {
  profile: Profile;
  className?: string;
  width?: number;
}
const DEFAULT_AVATAR_SHADOW = "rgba(0, 0, 0, 0.4)";

export const AvatarWithTooltip = ({
  profile,
  className = "",
  width = 80,
}: AvatarWithTooltipProps) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shadowColor, setShadowColor] = useState(DEFAULT_AVATAR_SHADOW);
  const imageRef = useRef(null);
  const fac = new FastAverageColor();

  useEffect(() => {
    if (imageRef.current) {
      fac
        .getColorAsync(imageRef.current)
        .then((color) => {
          setShadowColor(color.rgba);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [imageRef]);

  /*
    Whenever we render more than one AvatarWithTooltip component, 
    we need to make sure that the randomIdIntegrator is unique for each component.
    Otherwise, the tooltips will confuse themselves because they will have the same ID.
  */
  const [randomIdIntegrator, setRandomIdGenerated] = useState("");
  useEffect(() => {
    const now = new Date();

    const veryUnlikeRandomId = now.getTime() * Math.random();

    setRandomIdGenerated(veryUnlikeRandomId.toString());
  }, [imageFailed]);

  const imgSrc = imageFailed
    ? "/images/no-avatar.png"
    : `/images/avatars/${profile.ensName}.png`;

  const imageSizeString =
    width === 80 ? "w-[80px] h-[80px]" : "w-[120px] h-auto ";

  return (
    <div>
      <Image
        src={imgSrc}
        alt={profile.ensName}
        data-tip
        data-for={profile.ensName}
        data-tooltip-id={`${profile.ensName}-${randomIdIntegrator}`}
        width={width}
        height={width}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`ml-[2.5%] rounded-[12px] ${imageSizeString} bg-white ${className} hover:scale-105 hover:z-50 tooltip-target border-gray-300 border transition-all duration-200`}
        onError={() => setImageFailed(true)}
        style={{
          borderRadius: "12.31px",
          boxShadow: `0 ${isHovered ? "6px 12px" : "0"} ${shadowColor}`,
        }}
        ref={imageRef}
      />
      <Tooltip
        clickable
        place="top"
        id={`${profile.ensName}-${randomIdIntegrator}`}
        delayShow={200}
        delayHide={0}
        opacity={1}
        className="z-50 bg-black !rounded-[8px] !p-0"
        openEvents={{ mouseenter: true, focus: true, click: true }}
        closeEvents={{ mouseleave: true, blur: true, click: true }}
      >
        <div className="flex gap-4 max-w-[375px] md:max-w-[400px] p-4 items-stretch">
          <div className="shrink-0 flex flex-grow transition-all duration-200">
            <Image
              src={imgSrc}
              width={width}
              height={width}
              alt={profile.ensName}
              className={`h-20 w-20 rounded-[8px]`}
              onError={() => setImageFailed(true)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center ">
              <p className="font-semibold text-lg transition-all duration-200 mr-1">
                {profile.ensName}
              </p>

              <a href={profile.twitterProfile} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group"
                >
                  <path
                    fill="#AFAFAF"
                    d="M13.5222 10.7749L19.4785 4H18.0671L12.8952 9.88256L8.76437 4H4L10.2466 12.8955L4 20H5.41155L10.8732 13.7878L15.2356 20H20L13.5218 10.7749H13.5222ZM11.5889 12.9738L10.956 12.0881L5.92015 5.03974H8.0882L12.1522 10.728L12.7851 11.6137L18.0677 19.0075H15.8997L11.5889 12.9742V12.9738Z"
                    className="fill-current text-gray-400 group-hover:text-white transition-color duration-200"
                  />
                </svg>
              </a>
              <a
                href={`https://app.ens.domains/${profile.ensName}`}
                target="_blank"
              >
                <EnsSolidIcon
                  className="hover:brightness-200 transition"
                  fill="#AFAFAF"
                  height={24}
                  width={24}
                />
              </a>
            </div>
            {profile.displayName && (
              <p className="text-sm font-normal">{profile.displayName}</p>
            )}
            <div className="max-w-[300px] text-gray-400 text-sm">
              {profile.title}
            </div>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};