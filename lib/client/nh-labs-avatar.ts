import { Profile } from "@/data/ensProfiles";
import { AvatarQueryModel, getDynamicENSAvatarCallback } from "./avatar";

const getCachedAvatarCallback: AvatarQueryModel = async (
  addressOrEnsName: string
) => {
  return fetch(`/images/avatars/${addressOrEnsName}.png`, {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw new Error(
          `Failed to fetch cached avatar for ${addressOrEnsName}`
        );
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const getFallbackAvatarCallback: AvatarQueryModel = async (
  addressOrEnsName: string
) => {
  return fetch("/images/no-avatar.png", {
    method: "GET",
    mode: "no-cors",
  })
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw new Error(
          `Failed to fetch fallback avatar for ${addressOrEnsName}`
        );
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getNameHashLabsAvatarCallbacks = (
  profile: Profile
): AvatarQueryModel[] => {
  return [
    async () => await getCachedAvatarCallback(profile.ensName),
    async () => await getDynamicENSAvatarCallback(profile.ensName),
    async () => await getFallbackAvatarCallback(),
  ];
};
