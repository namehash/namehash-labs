import { Profile } from "@/data/ensProfiles";

// Local Avatar utils
const getCachedAvatarCallback: AvatarQueryModel = async (
  addressOrEnsName: string
) => {
  return fetch(`/images/avatars/${addressOrEnsName}.png`)
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

const getFallbackAvatarCallback: AvatarQueryModel = async () => {
  return fetch("/images/no-avatar.png")
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw new Error(`Failed to fetch fallback avatar`);
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getNameKitAvatarCallbacks = (
  profile: Profile
): AvatarQueryModel[] => {
  return [
    async () => await getCachedAvatarCallback(profile.ensName),
    async () => await getENSAvatar(profile.ensName),
    async () => await getFallbackAvatarCallback(),
  ];
};

// NameKit's library Avatar utils
export const getENSAvatar: AvatarQueryModel = async (
  addressOrEnsName: string
) => {
  return fetch(
    `https://metadata.ens.domains/mainnet/avatar/${addressOrEnsName}`
  )
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw new Error(`Failed to fetch ENS avatar for ${addressOrEnsName}`);
      }
    })
    .catch((error) => {
      throw new Error(error);
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
}?: any) => Promise<any | null>;

export const queryMultipleEndpointsToGetAvatar = async ({
  avatarQueries,
  logLevel,
}: {
  avatarQueries: AvatarQueryModel[];
  logLevel?: LogLevel;
}): Promise<Response | null> => {
  let queryCallbackIndex = 0;
  let successfulQuerySRC: Response | null = null;
  while (
    successfulQuerySRC === null &&
    queryCallbackIndex < avatarQueries.length
  ) {
    if (logLevel === LogLevel.INFO || logLevel === LogLevel.INFO_AND_ERROR) {
      console.log("Fetching ", avatarQueries[queryCallbackIndex]);
    }

    try {
      successfulQuerySRC = await avatarQueries[queryCallbackIndex]();
    } catch (error) {
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
      console.error("Failed to query all of the provided avatar endpoints");
    }
  }

  return successfulQuerySRC;
};
