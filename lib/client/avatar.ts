import { Profile } from "@/data/ensProfiles";
import { URL } from "url";

// Local Avatar utils
const getCachedAvatarCallback: AvatarQueryModel = async (
  addressOrEnsName: string
) => {
  return fetch(`/images/avatars/${addressOrEnsName}.png`)
    .then((res) => {
      if (res.ok) {
        return new URL(res.url);
      } else {
        console.error(res);
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

const getFallbackAvatarCallback: AvatarQueryModel = async () => {
  return fetch("/images/no-avatar.png")
    .then((res) => {
      if (res.ok) {
        return new URL(res.url);
      } else {
        console.error(res);
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export const getNameKitAvatarCallbacks = (
  profile: Profile
): AvatarQueryModel[] => {
  return [
    async () => await getCachedAvatarCallback(profile.ensName),
    async () => await getUltimateENSAvatarCallback(profile.ensName),
    async () => await getFallbackAvatarCallback(),
  ];
};

// NameKit's library Avatar utils
export const getUltimateENSAvatarCallback: AvatarQueryModel = async (
  addressOrEnsName: string
) => {
  return fetch(
    `https://metadata.ens.domains/mainnet/avatar/${addressOrEnsName}`
  )
    .then((res) => {
      if (res.ok) {
        return new URL(res.url);
      } else {
        console.error(res);
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export enum LogLevel {
  INFO = "info",
  ERROR = "error",
  INFO_AND_ERROR = "info_and_error",
}

export type AvatarQueryModel = ({
  logLevel,
  props,
}?: any) => Promise<URL | null>;

export const queryMultipleEndpointsToGetAvatar = async ({
  avatarQueries,
  logLevel,
}: {
  avatarQueries: AvatarQueryModel[];
  logLevel?: LogLevel;
}): Promise<URL | null> => {
  let queryCallbackIndex = 0;
  let successfulQuerySRC: URL | null = null;

  while (
    successfulQuerySRC === null &&
    queryCallbackIndex < avatarQueries.length
  ) {
    if (logLevel === LogLevel.INFO || logLevel === LogLevel.INFO_AND_ERROR) {
      console.log("Fetching ", avatarQueries[queryCallbackIndex]);
    }

    successfulQuerySRC = await avatarQueries[queryCallbackIndex]();

    if (!successfulQuerySRC) {
      if (logLevel === LogLevel.ERROR || logLevel === LogLevel.INFO_AND_ERROR) {
        console.error(
          "Failed to query ",
          avatarQueries[queryCallbackIndex],
          ", trying next one"
        );
      }
    }

    queryCallbackIndex++;
  }

  if (successfulQuerySRC) {
    if (logLevel === LogLevel.INFO || logLevel === LogLevel.INFO_AND_ERROR) {
      console.log(
        "Successfully queried ",
        avatarQueries[queryCallbackIndex],
        ", response: ",
        successfulQuerySRC
      );
    }
  } else {
    if (logLevel === LogLevel.INFO || logLevel === LogLevel.INFO_AND_ERROR) {
      console.error("Failed to query any of the provided avatar endpoints");
    }
  }

  return successfulQuerySRC;
};
