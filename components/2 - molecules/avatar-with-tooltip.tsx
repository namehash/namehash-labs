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
  [AvatarSize.MEDIUM]: "w-20 h-20 lg:w-[120px] lg:h-[120px]",
};

const DEFAULT_AVATAR_SHADOW = "rgba(0, 0, 0, 0.4)";
const FALLBACK_AVATAR_URL = "/images/no-avatar.png";

export const AvatarWithTooltip = ({
  loadAvatarFromENSIfNotCached = true,
  size = AvatarSize.MEDIUM,
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
  const [successfullyLoadedAvatar, setSuccessfullyLoadedAvatar] =
    useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const fac = new FastAverageColor();

  useEffect(() => {
    updateShadowColor();
  }, [successfullyLoadedAvatar, failedToLoadCachedAvatar]);

  const updateShadowColor = () => {
    if (avatarSrc && successfullyLoadedAvatar) {
      fac
        .getColorAsync(avatarSrc)
        .then((color) => {
          setShadowColor(color.rgba);
        })
        .catch((e) => {
          console.error(e);
        });
    } else if (avatarSrc === FALLBACK_AVATAR_URL) {
      setShadowColor(DEFAULT_AVATAR_SHADOW);
    }
  };

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
      setAvatarSrc(FALLBACK_AVATAR_URL);
    }
  }, [failedToLoadCachedAvatar]);

  useEffect(() => {
    if (successfullyLoadedAvatar) {
      updateShadowColor();
    }
  }, [successfullyLoadedAvatar]);

  return (
    <>
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
        className={cc([
          className,
          AvatarSizeStyling[size],
          {
            "opacity-0 invisible absolute left-[-9999px] top-[-9999px]":
              !successfullyLoadedAvatar,
          },
          "tooltip-target hover:scale-105 hover:z-50 transition-all duration-200 ml-[2.5%] rounded-xl border-[rgba(0,0,0,0.1)] border",
        ])}
        onError={() => {
          if (!failedToLoadCachedAvatar) {
            setFailedToLoadCachedAvatar(true);
          }

          setSuccessfullyLoadedAvatar(false);
        }}
        onLoad={() => {
          setTimeout(() => {
            setSuccessfullyLoadedAvatar(true);
          }, 0);
        }}
        style={{
          borderRadius: "12.31px",
          boxShadow: `0 ${isHovered ? "6px 12px" : "0"} ${shadowColor}`,
        }}
        ref={imageRef}
      />

      <div
        className={cc([
          className,
          AvatarSizeStyling[size],
          "bg-gray-100 animate-pulse rounded-xl ml-[2.5%] border-[rgba(0,0,0,0.1)] border",
          {
            "opacity-0 invisible absolute left-[-9999px] top-[-9999px]":
              successfullyLoadedAvatar,
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
              src={avatarSrc}
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
