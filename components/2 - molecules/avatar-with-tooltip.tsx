/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { FastAverageColor } from "fast-average-color";
import { EnsSolidIcon, TwitterIcon } from "../1 - atoms/";
import { Profile } from "@/data/ensProfiles";
import { useId } from "react";
import cc from "classcat";

interface AvatarWithTooltipProps {
  /* 
    This param is set to "true" by default. In case no query should be 
    done to ENS API to fetch the avatar if it's not cached, set this to "false".
  */
  loadAvatarFromENSIfNotCached?: boolean;
  className?: string;
  profile: Profile;
  size?: AvatarSize;
}

export enum AvatarSize {
  SMALL = 80,
  MEDIUM = 120,
}

const AvatarSizeStyling = {
  [AvatarSize.SMALL]: "w-20 h-20",
  [AvatarSize.MEDIUM]: "w-[120px] h-auto",
};

const DEFAULT_AVATAR_SHADOW = "rgba(0, 0, 0, 0.4)";

export const AvatarWithTooltip = ({
  loadAvatarFromENSIfNotCached = true,
  size = AvatarSize.SMALL,
  className = "",
  profile,
}: AvatarWithTooltipProps) => {
  const [failedToLoadCachedAvatar, setFailedToLoadCachedAvatar] = useState<
    undefined | boolean
  >(undefined);
  const [avatarSrc, setAvatarSrc] = useState(
    `/images/avatars/${profile.ensName}.png`
  );
  const [shadowColor, setShadowColor] = useState(DEFAULT_AVATAR_SHADOW);
  const [isHovered, setIsHovered] = useState(false);
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
  }, [imageRef, fac]);

  const tooltipID = useId();

  useEffect(() => {
    if (loadAvatarFromENSIfNotCached) {
      if (
        typeof failedToLoadCachedAvatar !== "undefined" &&
        failedToLoadCachedAvatar
      ) {
        // Try to load the avatar from ENS if it's not cached
        setAvatarSrc(
          `https://metadata.ens.domains/mainnet/avatar/${profile.ensName}`
        );
      }
    } else if (typeof failedToLoadCachedAvatar !== "undefined") {
      setAvatarSrc("/images/no-avatar.png");
    }
  }, [failedToLoadCachedAvatar]);

  return (
    <div>
      <img
        data-tip
        src={avatarSrc}
        alt={profile.ensName}
        data-for={profile.ensName}
        data-tooltip-id={`${profile.ensName}-${tooltipID}`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`ml-[2.5%] rounded-[12px] ${AvatarSizeStyling[size]} bg-white ${className} hover:scale-105 hover:z-50 tooltip-target border-[rgba(0,0,0,0.1)] border transition-all duration-200`}
        onError={() => setFailedToLoadCachedAvatar(true)}
        style={{
          borderRadius: "12.31px",
          boxShadow: `0 ${isHovered ? "6px 12px" : "0"} ${shadowColor}`,
        }}
        ref={imageRef}
      />
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
              src={avatarSrc}
              alt={profile.ensName}
              className={cc([
                AvatarSizeStyling[AvatarSize.SMALL],
                "rounded-lg",
              ])}
              onError={() => setFailedToLoadCachedAvatar(true)}
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
    </div>
  );
};
