/* eslint-disable react-hooks/exhaustive-deps */
import { Profile } from "@/data/ensProfiles";
import { AvatarSize, AvatarWithTooltip } from "./avatar-with-tooltip";
import { useEffect, useState } from "react";
import {
  AvatarQueryModel,
  LogLevel,
  queryMultipleEndpointsToGetAvatar,
} from "@/lib/client/avatar";
import { URL } from "url";

interface UltimateENSAvatarProps {
  profile: Profile;
  size?: AvatarSize;
  className?: string;
  avatarQueries?: AvatarQueryModel[];
  queriesLogLevel?: LogLevel;
}

export const UltimateENSAvatar = ({
  profile,
  className = "",
  size = AvatarSize.MEDIUM,
  queriesLogLevel = LogLevel.INFO_AND_ERROR,
  avatarQueries,
}: UltimateENSAvatarProps) => {
  if (!avatarQueries?.length)
    throw new Error(
      "At least one Avatar Query must be provided in order to fetch an Avatar image."
    );

  const [avatarSrc, setAvatarSrc] = useState<URL | null>(null);

  useEffect(() => {
    queryMultipleEndpointsToGetAvatar({
      avatarQueries,
      logLevel: queriesLogLevel,
    }).then((result) => {
      setAvatarSrc(result);
    });
  }, [avatarQueries]);

  return (
    <AvatarWithTooltip
      avatarSrc={avatarSrc}
      className={className}
      profile={profile}
      size={size}
    />
  );
};
