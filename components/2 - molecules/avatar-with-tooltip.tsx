/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { FastAverageColor } from "fast-average-color";
import { EnsSolidIcon, TwitterIcon } from "../1 - atoms/";
import { Profile } from "@/data/ensProfiles";
import { useId } from "react";
import cc from "classcat";
import { URL } from "url";

interface AvatarWithTooltipProps {
  className?: string;
  profile: Profile;
  size?: AvatarSize;
  avatarQueryResponse: Response | null;
}

export enum AvatarSize {
  SMALL = 80,
  MEDIUM = 120,
}

const AvatarSizeStyling = {
  [AvatarSize.SMALL]: "min-w-[80px] w-20 h-20",
  [AvatarSize.MEDIUM]: "w-20 h-20 lg:w-[120px] lg:h-[120px]",
};

const DEFAULT_AVATAR_SHADOW = "rgba(0, 0, 0, 0.4)";

export const AvatarWithTooltip = ({
  size = AvatarSize.MEDIUM,
  className = "",
  profile,
  avatarQueryResponse,
}: AvatarWithTooltipProps) => {
  const [shadowColor, setShadowColor] = useState(DEFAULT_AVATAR_SHADOW);
  const [successfullyLoadedAvatar, setSuccessfullyLoadedAvatar] =
    useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fac = new FastAverageColor();

  useEffect(() => {
    updateShadowColor();
  }, [successfullyLoadedAvatar]);

  const updateShadowColor = () => {
    if (avatarQueryResponse && successfullyLoadedAvatar) {
      fac
        .getColorAsync(avatarQueryResponse.url)
        .then((color) => {
          setShadowColor(color.rgba);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const tooltipID = useId();

  const [avatarID, setAvatarID] = useState("");

  useEffect(() => {
    if (tooltipID) {
      setAvatarID("image-" + tooltipID);
    }
  }, [tooltipID]);

  useEffect(() => {
    if (successfullyLoadedAvatar) {
      updateShadowColor();
    }
  }, [successfullyLoadedAvatar]);

  useEffect(() => {
    if (avatarQueryResponse !== null) {
      updateAvatarImageSrcAttribute(avatarQueryResponse);
    }
  }, [avatarQueryResponse]);

  const updateAvatarImageSrcAttribute = (src: Response) => {
    const imgElm = document.getElementById(avatarID);
    (imgElm as HTMLImageElement).src = src.url;

    if (imgElm) {
      imgElm.addEventListener("load", () => {
        setSuccessfullyLoadedAvatar(true);
      });
    }
  };

  return (
    <>
      <img
        data-tip
        id={avatarID}
        alt={profile.ensName}
        data-for={profile.ensName}
        data-tooltip-id={`${profile.ensName}-${tooltipID}`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={cc([
          className,
          AvatarSizeStyling[size],
          {
            "opacity-0 bg-gray-200 invisible absolute animate-pulse":
              !successfullyLoadedAvatar,
          },
          "tooltip-target hover:scale-105 hover:z-50 transition duration-200 ml-[2.5%] rounded-xl",
        ])}
        style={{
          borderRadius: "12.31px",
          boxShadow: `0 ${isHovered ? "6px 12px" : "0"} ${shadowColor}`,
          outline: "1px solid rgba(0,0,0,0.1)",
          outlineOffset: "-1px",
        }}
      />

      <div
        className={cc([
          className,
          AvatarSizeStyling[size],
          "bg-gray-100 animate-pulse rounded-xl ml-[2.5%] border-[rgba(0,0,0,0.1)] border",
          {
            "opacity-0 invisible absolute": successfullyLoadedAvatar,
          },
        ])}
      ></div>

      <Tooltip
        clickable
        place="top"
        id={`${profile.ensName}-${tooltipID}`}
        delayShow={200}
        delayHide={0}
        opacity={1}
        className="z-50 bg-black !rounded-[8px] !p-0"
        openEvents={{ mouseenter: true, focus: true }}
        closeEvents={{ mouseleave: true, blur: true }}
        noArrow={true}
      >
        <div className="flex gap-4 max-w-[375px] md:max-w-[400px] p-4 items-stretch">
          <div className="shrink-0 flex flex-grow transition-all duration-200">
            <img
              src={avatarQueryResponse?.toString()}
              alt={profile.ensName}
              className={cc([
                AvatarSizeStyling[AvatarSize.SMALL],
                "rounded-lg",
              ])}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center ">
              <p className="font-semibold text-lg transition-all duration-200 mr-1">
                {profile.ensName}
              </p>

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

              {profile.twitterProfile && (
                <a href={profile.twitterProfile} target="_blank">
                  <TwitterIcon />
                </a>
              )}
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
    </>
  );
};
