import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { Balancer } from "react-wrap-balancer";
import { AvatarWithFallback } from "./avatar-with-fallback";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20 place-content-stretch w-full max-w-[1216px]">
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

export interface Profile {
  ensName: string;
  displayName?: string;
  title: string;
  twitterProfile: string;
}

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
    setProfilesDisplay(getRandomProfiles(profiles))
  }, [profiles])

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
      <p className="text-lg leading-6 font-normal text-gray-500">and so many others</p>
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

function getRandomProfiles<Profile>(array: Profile[], count: number = 4): Profile[] {
  // Shallow copy the array to avoid modifying the original array
  if (array.length === 4) {
    return array
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
      <AvatarWithFallback
        profile={profiles[1]}
        className="absolute top-0 right-[122px] z-10"
      />
      <AvatarWithFallback
        profile={profiles[3]}
        className="absolute top-0 right-0 z-20"
      />
      <AvatarWithFallback profile={profiles[0]} className="absolute bottom-0 left-0 " />
      <AvatarWithFallback profile={profiles[2]} className="absolute bottom-0 left-[122px] z-10" />
    </div>
  );
};

const TwoSupportersContainer = ({ profiles }: ProfilesContainerProps) => {
  return (
    <div className="flex relative">
      <div className="flex gap-8">
        <AvatarWithFallback profile={profiles[0]} width={120} className="w-20 h-20" />
        <AvatarWithFallback profile={profiles[1]} width={120} />
      </div>
    </div>
  );
};

const ensFoundation: SupporterCategoryProps = {
  title: "ENS Foundation",
  profiles: [
    {
      ensName: "nick.eth",
      displayName: "Nick Johnson",
      title: "Lead developer of ENS & Ethereum Foundation alum",
      twitterProfile: "https://twitter.com/nicksdjohnson",
    },
    {
      ensName: "avsa.eth",
      displayName: "Alex Van de Sande",
      title: "Ethereum Foundation Alumni & Co-founder of ENS",
      twitterProfile: "https://twitter.com/avsa",
    },
  ],
};

const walletBuilders: SupporterCategoryProps = {
  title: "Wallet Builders",
  profiles: [
    {
      ensName: "rainbowwallet.eth",
      displayName: "Rainbow",
      title: "The fun, simple, & secure way to explore Web3, NFTs, & Ethereum 🌈",
      twitterProfile: "https://twitter.com/rainbowdotme",
    },
    {
      ensName: "mikedemarais.eth",
      displayName: "Mike Demarais",
      title: "Co-founder of Rainbow Wallet",
      twitterProfile: "https://twitter.com/mikedemarais",
    },
    {
      ensName: "inzhoop.eth",
      title: "Independent startup working on smart mobile wallet for Ethereum",
      twitterProfile: "https://twitter.com/inzhoop",
    },
    {
      ensName: "spencecoin.eth",
      displayName: "Jordan Spence",
      title: "Director of Marketing and Strategic Initiatives at Metamask and Consensys",
      twitterProfile: "https://twitter.com/spencecoin",
    },
  ],
};

const web3ProtocolBuilders: SupporterCategoryProps = {
  title: "Web3 Protocol Builders",
  profiles: [
    {
      ensName: "brantly.eth",
      displayName: "Brantly Millegan",
      title: "Building Ethereum Follow Protocol & Creator of Sign-In w/ Ethereum",
      twitterProfile: "https://twitter.com/BrantlyMillegan",
    },
    {
      ensName: "chainlinkgod.eth",
      title: "Chainlink Community Ambassador",
      twitterProfile: "https://twitter.com/ChainLinkGod",
    },
    {
      ensName: "cory.eth",
      displayName: "Cory Gabrielsen",
      title: "Founder OpenAvatar & Co-founder of Ethereum Follow Protocol",
      twitterProfile: "https://twitter.com/cory_eth",
    },
    {
      ensName: "poap.eth",
      displayName: "Proof of Attendance Protocol",
      title: "Bookmarks for your life",
      twitterProfile: "https://twitter.com/poapxyz",
    },
  ],
};

const publicGoodsAdvocates: SupporterCategoryProps = {
  title: "Public Goods Advocates",
  profiles: [
    {
      ensName: "griff.eth",
      displayName: "Griff Green",
      title: "Cofounder Giveth, CommonsStack, GeneralMagic, Dappnode & DECENTRAL",
      twitterProfile: "https://twitter.com/thegrifft",
    },
    {
      ensName: "coltron.eth",
      title: "ENS Public Goods Steward",
      twitterProfile: "https://twitter.com/Coltron_eth",
    },
    {
      ensName: "simona.eth",
      title: "ENS Public Goods Steward, Governance at DELV & Optimism",
      twitterProfile: "https://twitter.com/Sim_Pop",
    },

    {
      ensName: "ceresstation.eth",
      displayName: "Scott Moore",
      title: "Co-founder Gitcoin & Kernel",
      twitterProfile: "https://twitter.com/notscottmoore",
    },
  ],
};

const decentralizationAdvocates: SupporterCategoryProps = {
  title: "Decentralization Advocates",
  profiles: [
    {
      ensName: "liubenben.eth",
      title: "Building ensuser.com for the Chinese ENS Community",
      twitterProfile: "https://twitter.com/forlbb",
    },

    {
      ensName: "garypalmerjr.eth",
      title: "ENS Advocate and Founder of Web3Domains",
      twitterProfile: "https://twitter.com/garypalmerjr",
    },
    {
      ensName: "master.eth",
      title: "ENS Advocate",
      twitterProfile: "https://twitter.com/seekmine",
    },
    {
      ensName: "superphiz.eth",
      title: "Ethereum Decentralized Staking Advocate",
      twitterProfile: "https://twitter.com/superphiz",
    },
    {
      ensName: "jalil.eth",
      displayName: "Jalil Wahdatehagh",
      title: "Intangible things at Visualize Value.",
      twitterProfile: "https://twitter.com/jalil_eth",
    },
    {
      ensName: "bosco.eth",
      title: "Love Freedom and Public Goods 💚",
      twitterProfile: "https://twitter.com/amboscoboinik",
    },
    {
      ensName: "krypto.eth",
      title: "Poland ENS Master",
      twitterProfile: "https://twitter.com/CryptoDodoPL",
    },
    {
      ensName: "wslyvh.eth",
      displayName: "Wesley",
      title: "Events at Ethereum Foundation",
      twitterProfile: "https://twitter.com/wslyvh",
    },
    {
      ensName: "premm.eth",
      displayName: "Prem Makeig",
      title: "Founder at Unruggable Labs, ENS Fellow",
      twitterProfile: "https://twitter.com/nxt3d",
    },
  ],
};

const daoAdvocates: SupporterCategoryProps = {
  title: "DAO Advocates",
  profiles: [
    {
      ensName: "fireeyesdao.eth",
      displayName: "Fire Eyes DAO", 
      title: "Delegate for Optimism, ENS, GitCoin, Rocket Pool, & Safe",
      twitterProfile: "https://twitter.com/fireeyesgov",
    },
    {
      ensName: "spikewatanabe.eth",
      title: "ENS Delegate & experienced investment banker",
      twitterProfile: "https://twitter.com/spikewatanabe",
    },
    {
      ensName: "alextnetto.eth",
      displayName: "Alex Netto",
      title: "Co-founder of Blockful, building public goods for DAOs",
      twitterProfile: "https://twitter.com/alextnetto",
    },
    {
      ensName: "elbagococina.eth",
      title: "Co-founder Karpatkey, Core Treasury for GnosisDAO, Balancer, ENS, CoWSwap, and Lido",
      twitterProfile: "https://twitter.com/elbagococina",
    },
    {
      ensName: "she256.eth",
      title: "Nonprofit dedicated to increasing diversity in the blockchain space",
      twitterProfile: "https://twitter.com/she_256",
    },

    {
      ensName: "limes.eth",
      title: "ENS DAO Steward & Secretary - Growth at Layer3",
      twitterProfile: "https://twitter.com/limes_eth",
    },
  ],
};

const dAppBuilders: SupporterCategoryProps = {
  title: "dApp Builders",
  profiles: [
    {
      ensName: "nimi.eth",
      title: "Your personal web3 page",
      twitterProfile: "https://twitter.com/0xNimi",
    },
    {
      ensName: "lefteris.eth",
      displayName: "Lefteris Karapetsas",
      title: "Founder of Rotki, the portfolio tracker that protects your privacy",
      twitterProfile: "https://twitter.com/LefterisJP",
    },
    {
      ensName: "mihal.eth",
      displayName: "David Mihal",
      title: "Blockchain Engineer",
      twitterProfile: "https://twitter.com/dmihal",
    },
    {
      ensName: "ethlimo.eth",
      title: "Privacy-preserving ENS gateway",
      twitterProfile: "https://twitter.com/eth_limo",
    },
  ],
};

const ensLabsStaff: SupporterCategoryProps = {
  title: "ENS Labs Staff",
  profiles: [
    {
      ensName: "gregskril.eth",
      displayName: "Greg Skriloff",
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/gregskril",
    },
    {
      ensName: "taytems.eth",
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/taytemss",
    },
    {
      ensName: "184.eth",
      title: "Support at ENS Labs & ENS Ecosystem Steward",
      twitterProfile: "https://twitter.com/184eth",
    },
    {
      ensName: "matoken.eth",
      displayName: "Makoto Inoue",
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/makoto_inoue",
    },
    {
      ensName: "jefflau.eth",
      displayName: "Jeff Lau",
      title: "Core Team Leader - ENS Labs",
      twitterProfile: "https://twitter.com/_jefflau",
    },
  ],
};
