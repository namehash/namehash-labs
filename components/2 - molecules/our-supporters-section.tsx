import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { Balancer } from "react-wrap-balancer";
import { ImageWithFallback } from "./image-with-fallback";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="flex items-center justify-center flex-col gap-7 bg-white py-8 px-10 border border-gray-200 rounded-[8px]">
      <p className="text-lg leading-6 font-semibold text-center ">{title}</p>
      {profiles.length === 4 ? (
        <FourSupportersContainer profiles={profiles} />
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

const FourSupportersContainer = ({ profiles }: ProfilesContainerProps) => {
  return (
    <div className="flex relative pr-[62px] h-[120px] b w-[265px] items-center justify-center">
      <ImageWithFallback
        profile={profiles[1]}
        className="absolute top-0 right-[122px] z-10"
      />
      <ImageWithFallback
        profile={profiles[3]}
        className="absolute top-0 right-0 z-20"
      />
      <ImageWithFallback profile={profiles[0]} className="absolute bottom-0 left-0 " />
      <ImageWithFallback profile={profiles[2]} className="absolute bottom-0 left-[122px] z-10" />
    </div>
  );
};

const TwoSupportersContainer = ({ profiles }: ProfilesContainerProps) => {
  return (
    <div className="flex relative">
      <div className="flex gap-8">
        <ImageWithFallback profile={profiles[0]} width={120} className="w-20 h-20" />
        <ImageWithFallback profile={profiles[1]} width={120} />
      </div>
    </div>
  );
};

const ensFoundation: SupporterCategoryProps = {
  title: "ENS Foundation",
  profiles: [
    {
      ensName: "nick.eth",
      title: "Lead developer of ENS & Ethereum Foundation alum",
      twitterProfile: "https://twitter.com/nicksdjohnson",
    },
    {
      ensName: "avsa.eth",
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
      title: "The fun, simple, & secure way to explore Web3, NFTs, & Ethereum 🌈",
      twitterProfile: "https://twitter.com/rainbowdotme",
    },
    {
      ensName: "mikedemarais.eth",
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
      title: "Founder OpenAvatar & Co-founder of Ethereum Follow Protocol",
      twitterProfile: "https://twitter.com/cory_eth",
    },
    {
      ensName: "poap.eth",
      title: "Proof of Attendance Protocol - bookmarks for your life",
      twitterProfile: "https://twitter.com/poapxyz",
    },
  ],
};

const publicGoodsAdvocates: SupporterCategoryProps = {
  title: "Public Goods Advocates",
  profiles: [
    {
      ensName: "griff.eth",
      title: "Cofounder Giveth, CommonsStack, GeneralMagic, Dappnode, & DECENTRAL",
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
      title: "Ethereum Decentralized Staking Advocate  ",
      twitterProfile: "https://twitter.com/superphiz",
    },
  ],
};

const daoAdvocates: SupporterCategoryProps = {
  title: "DAO Advocates",
  profiles: [
    {
      ensName: "fireeyesdao.eth",
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
      title: "Co-founder of Blockful, building public goods for DAOs",
      twitterProfile: "https://twitter.com/alextnetto",
    },

    {
      ensName: "elbagococina.eth",
      title: "Co-founder Karpatkey, Core Treasury for GnosisDAO, Balancer, ENS, CoWSwap, and Lido",
      twitterProfile: "https://twitter.com/elbagococina",
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
      title: "Founder of Rotki, the portfolio tracker that protects your privacy",
      twitterProfile: "https://twitter.com/LefterisJP",
    },
    {
      ensName: "mihal.eth",
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
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/makoto_inoue",
    },
  ],
};
