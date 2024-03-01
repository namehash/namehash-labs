import { Profile } from "@/data/ensProfiles";

const getCachedAvatarSrc = (profile: Profile): string =>
  `/images/avatars/${profile.ensName}.png`;
const FALLBACK_AVATAR_URL = "/images/no-avatar.png";

export const getNameKitAvatarSrcs = (profile: Profile) => [
  getCachedAvatarSrc(profile),
  getEnsAvatarSrc(profile.ensName),
  FALLBACK_AVATAR_URL,
];

// NameKit avatars util source
export const getEnsAvatarSrc = (ensName: string): string =>
  `https://metadata.ens.domains/mainnet/avatar/${ensName}`;
