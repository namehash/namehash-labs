/* eslint-disable react-hooks/exhaustive-deps */
import { Profile } from "@/data/ensProfiles";
import { AvatarSize, AvatarWithTooltip } from "./avatar-with-tooltip";
import { getEnsAvatarSrc } from "@/lib/client/avatar";
import { useEffect, useState } from "react";

interface EnsAvatarProps {
  profile: Profile;
  size?: AvatarSize;
  className?: string;
}

const getCachedAvatarSrc = (addressOrEnsName: string): string =>
  `/images/avatars/${addressOrEnsName}.png`;
const FALLBACK_AVATAR_URL = "/images/no-avatar.png";

const getNameKitAvatarSrcs = (profile: Profile) => [
  getCachedAvatarSrc(profile.ensName),
  getEnsAvatarSrc(profile.ensName),
  FALLBACK_AVATAR_URL,
];

export const EnsAvatar = ({
  profile,
  className = "",
  size = AvatarSize.MEDIUM,
}: EnsAvatarProps) => {
  const urls = getNameKitAvatarSrcs(profile);
  const [avatarUrlUsed, setAvatarUrlUsed] = useState(0);

  const [avatarSrc, setAvatarSrc] = useState<string>("");

  const queryAvatarFromNewSource = () => {
    fetch(urls[avatarUrlUsed])
      .then(async (response) => {
        if (response.ok) {
          setAvatarSrc(urls[avatarUrlUsed]);
        } else {
          console.error(response);

          setAvatarUrlUsed(avatarUrlUsed + 1);
        }
      })
      .catch((e) => {
        console.error(e);

        setAvatarUrlUsed(avatarUrlUsed + 1);
      });
  };

  useEffect(() => {
    queryAvatarFromNewSource();
  }, [avatarUrlUsed]);

  return (
    <AvatarWithTooltip
      avatarSrc={avatarSrc}
      avatarUrlOptions={getNameKitAvatarSrcs(profile)}
      className={className}
      profile={profile}
      size={size}
    />
  );
};
