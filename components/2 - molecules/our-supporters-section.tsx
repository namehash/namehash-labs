import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { Balancer } from "react-wrap-balancer";
import { AvatarWithTooltip } from "./avatar-with-tooltip";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Profile, getCachedProfile } from "@/data/ensProfiles";

export const OurSuportersSection = () => {
  return (
    <section
      id="ourSuportersSection"
      className="lg:px-[112px] w-full flex flex-col items-center bg-gray-50 justify-center px-5 py-20 border-t border-b border-gray-200"
    >
      <div className="flex flex-col gap-3">
        <PreSectionText>ETHEREUM COMMUNITY SUPPORTED</PreSectionText>
        <SectionTitle>Our supporters</SectionTitle>
        <SectionText className="text-center">
          <Balancer>
            Thank you to our amazing supporters who also believe in helping ENS
            grow.
          </Balancer>
        </SectionText>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20 place-content-stretch w-full max-w-[1216px]">
        <SupporterCategory {...ensFoundation} />
        <SupporterCategory {...walletBuilders} />
        <SupporterCategory {...web3ProtocolBuilders} />
        <SupporterCategory {...publicGoodsAdvocates} />
        <AdditionalSupportersContainer />
        <SupporterCategory {...decentralizationAdvocates} />
        <SupporterCategory {...daoAdvocates} />
        <SupporterCategory {...dAppBuilders} />
        <SupporterCategory {...ensLabsStaff} />
      </div>
    </section>
  );
};

interface SupporterCategoryProps {
  title: string;
  profiles: Profile[];
}

export const SupporterCategory = ({
  title,
  profiles,
}: SupporterCategoryProps) => {
  const [profilesDisplay, setProfilesDisplay] = useState(profiles);

  useEffect(() => {
    setProfilesDisplay(getRandomProfiles(profiles));
  }, [profiles]);

  return (
    <div className="flex items-center justify-center flex-col gap-7 bg-white py-8 px-10 border border-gray-200 rounded-[8px]">
      <p className="text-lg leading-6 font-semibold text-center ">{title}</p>
      {profiles.length >= 4 ? (
        <FourSupportersContainer profiles={profilesDisplay} />
      ) : (
        <TwoSupportersContainer profiles={profiles} />
      )}
    </div>
  );
};

interface ProfilesContainerProps {
  profiles: Profile[];
}

const AdditionalSupportersContainer = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 bg-white py-8 px-10 border border-gray-200 rounded-[8px] order-last lg:order-none">
      <p className="text-lg leading-6 font-semibold text-center ">ENS DAO</p>
      <p className="font-semibold text-center text-[50px] leading-[30px] ">
        💖
      </p>
      <p className="text-lg leading-6 font-normal text-gray-500">
        and so many others
      </p>
      <a
        target="_blank"
        href="https://snapshot.org/#/ens.eth/proposal/0x6ba81cd2997288cc49ae1b95921ec8f107e8ffb9733321d53d488e2b30710b86"
        className="flex items-center justify-center gap-3 cursor-pointer px-[17px] py-[9px] text-white text-base leading-6 font-medium bg-black rounded-[8px] hover:bg-gray-800 transition-colors"
      >
        View more
        <ArrowTopRightOnSquareIcon className="text-white w-4 h-4" />
      </a>
    </div>
  );
};

function getRandomProfiles<Profile>(
  array: Profile[],
  count: number = 4
): Profile[] {
  // Shallow copy the array to avoid modifying the original array
  if (array.length === 4) {
    return array;
  }

  let tempArray = [...array];

  // The result array
  let result: Profile[] = [];

  for (let i = 0; i < count; i++) {
    if (tempArray.length === 0) {
      break;
    }

    // Get a random index
    let randomIndex = Math.floor(Math.random() * tempArray.length);

    // Select the object at the random index
    let selected = tempArray[randomIndex];

    // Add the selected object to the result array
    result.push(selected);

    // Remove the selected object from the temp array
    tempArray.splice(randomIndex, 1);
  }

  return result;
}

const FourSupportersContainer = ({ profiles }: ProfilesContainerProps) => {
  return (
    <div className="flex relative pr-[62px] h-[120px] b w-[265px] items-center justify-center">
      <AvatarWithTooltip
        profile={profiles[1]}
        className="absolute top-0 right-[122px] z-10"
      />
      <AvatarWithTooltip
        profile={profiles[3]}
        className="absolute top-0 right-0 z-20"
      />
      <AvatarWithTooltip
        profile={profiles[0]}
        className="absolute bottom-0 left-0 "
      />
      <AvatarWithTooltip
        profile={profiles[2]}
        className="absolute bottom-0 left-[122px] z-10"
      />
    </div>
  );
};

const TwoSupportersContainer = ({ profiles }: ProfilesContainerProps) => {
  return (
    <div className="flex relative">
      <div className="flex gap-8">
        <AvatarWithTooltip
          profile={profiles[0]}
          width={120}
          className="w-20 h-20"
        />
        <AvatarWithTooltip profile={profiles[1]} width={120} />
      </div>
    </div>
  );
};

const ensFoundation: SupporterCategoryProps = {
  title: "ENS Foundation",
  profiles: [getCachedProfile("nick.eth"), getCachedProfile("avsa.eth")],
};

const walletBuilders: SupporterCategoryProps = {
  title: "Wallet Builders",
  profiles: [
    getCachedProfile("rainbowwallet.eth"),
    getCachedProfile("mikedemarais.eth"),
    getCachedProfile("inzhoop.eth"),
    getCachedProfile("spencecoin.eth"),
  ],
};

const web3ProtocolBuilders: SupporterCategoryProps = {
  title: "Web3 Protocol Builders",
  profiles: [
    getCachedProfile("brantly.eth"),
    getCachedProfile("chainlinkgod.eth"),
    getCachedProfile("cory.eth"),
    getCachedProfile("poap.eth"),
  ],
};

const publicGoodsAdvocates: SupporterCategoryProps = {
  title: "Public Goods Advocates",
  profiles: [
    getCachedProfile("griff.eth"),
    getCachedProfile("coltron.eth"),
    getCachedProfile("simona.eth"),
    getCachedProfile("ceresstation.eth"),
  ],
};

const decentralizationAdvocates: SupporterCategoryProps = {
  title: "Decentralization Advocates",
  profiles: [
    getCachedProfile("liubenben.eth"),
    getCachedProfile("garypalmerjr.eth"),
    getCachedProfile("master.eth"),
    getCachedProfile("superphiz.eth"),
    getCachedProfile("jalil.eth"),
    getCachedProfile("bosco.eth"),
    getCachedProfile("krypto.eth"),
    getCachedProfile("wslyvh.eth"),
    getCachedProfile("premm.eth"),
  ],
};

const daoAdvocates: SupporterCategoryProps = {
  title: "DAO Advocates",
  profiles: [
    getCachedProfile("fireeyesdao.eth"),
    getCachedProfile("spikewatanabe.eth"),
    getCachedProfile("alextnetto.eth"),
    getCachedProfile("elbagococina.eth"),
    getCachedProfile("she256.eth"),
    getCachedProfile("limes.eth"),
  ],
};

const dAppBuilders: SupporterCategoryProps = {
  title: "dApp Builders",
  profiles: [
    getCachedProfile("nimi.eth"),
    getCachedProfile("lefteris.eth"),
    getCachedProfile("mihal.eth"),
    getCachedProfile("ethlimo.eth"),
  ],
};

const ensLabsStaff: SupporterCategoryProps = {
  title: "ENS Labs Staff",
  profiles: [
    getCachedProfile("gregskril.eth"),
    getCachedProfile("taytems.eth"),
    getCachedProfile("matoken.eth"),
    getCachedProfile("jefflau.eth"),
  ],
};
