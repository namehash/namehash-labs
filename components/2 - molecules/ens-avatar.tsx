import { Profile } from "@/data/ensProfiles";
import { AvatarSize, AvatarWithTooltip } from "./avatar-with-tooltip";
import { getEnsAvatarSrc } from "@/lib/client/avatar";

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
  return (
    <AvatarWithTooltip
      avatarUrlOptions={getNameKitAvatarSrcs(profile)}
      className={className}
      profile={profile}
      size={size}
    />
  );
};
