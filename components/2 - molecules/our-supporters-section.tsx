import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { Balancer } from "react-wrap-balancer";
import { ImageWithFallback } from "./ImageWithFallback";

export const OurSuportersSection = () => {
  return (
    <section
      id="ourPrinciplesSection"
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
        <CardComponent {...ensFoundation} />
        <CardComponent {...walletBuilders} />
        <CardComponent {...web3ProtocolBuilders} />
        <CardComponent {...publicGoodsAdvocates} />
        <TextContainter />
        <CardComponent {...decentralizationAdvocates} />
        <CardComponent {...daoAdvocates} />
        <CardComponent {...dAppBuilders} />
        <CardComponent {...ensLabsStaff} />
      </div>
    </section>
  );
};

export interface Profile {
  ethName: string;
  role: string;
  twitterUrl: string;
}

interface CardComponentProps {
  title?: string;
  profiles: Profile[];
}

export const CardComponent = ({
  title = "Web3 Protocol Builders",
  profiles,
}: CardComponentProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-7 bg-white py-8 px-10 border border-gray-200 rounded-[8px]">
      <p className="text-lg leading-6 font-semibold text-center ">{title}</p>
      {profiles.length === 4 ? (
        <FourImagesContainer profiles={profiles} />
      ) : (
        <TwoImagesContainer profiles={profiles} />
      )}
    </div>
  );
};

interface ImagesContainerProps {
  profiles: Profile[];
}

const TextContainter = () => {
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
        className="cursor-pointer px-[17px] py-[9px] text-white text-base leading-6 font-medium bg-black rounded-[8px] hover:bg-gray-800 transition-colors"
      >
        View all
      </a>
    </div>
  );
};

const FourImagesContainer = ({ profiles }: ImagesContainerProps) => {
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
        <ImageWithFallback profile={profiles[0]}  className="absolute bottom-0 left-0 "/>
        <ImageWithFallback profile={profiles[2]}  className="absolute bottom-0 left-[122px] z-10"/>
    </div>
  );
};

const TwoImagesContainer = ({ profiles }: ImagesContainerProps) => {
  return (
    <div className="flex relative">
      <div className="flex gap-8">
        <ImageWithFallback profile={profiles[0]} width={120} className="w-20 h-20" />
        <ImageWithFallback profile={profiles[1]} width={120} />
      </div>
    </div>
  );
};

const ensFoundation: CardComponentProps = {
  title: "ENS Foundation",
  profiles: [
    {
      ethName: "nick.eth",
      role: "Lead developer of ENS & Ethereum Foundation alum",
      twitterUrl: "https://twitter.com/nicksdjohnson",
    },
    {
      ethName: "avsa.eth",
      role: "Ethereum Foundation Alumni & Co-founder of ENS",
      twitterUrl: "https://twitter.com/avsa",
    },
  ],
};

const walletBuilders: CardComponentProps = {
  title: "Wallet Builders",
  profiles: [
    {
      ethName: "rainbowwallet.eth",
      role: "The fun, simple, & secure way to explore Web3, NFTs, & Ethereum 🌈",
      twitterUrl: "https://twitter.com/rainbowdotme",
    },
    {
      ethName: "mikedemarais.eth",
      role: "Co-founder of Rainbow Wallet",
      twitterUrl: "https://twitter.com/mikedemarais",
    },
    {
      ethName: "inzhoop.eth",
      role: "Independent startup working on smart mobile wallet for Ethereum",
      twitterUrl: "https://twitter.com/inzhoop",
    },
    {
      ethName: "spencecoin.eth",
      role: "Director of Marketing and Strategic Initiatives at Metamask and Consensys",
      twitterUrl: "https://twitter.com/spencecoin",
    },
    
    
  ],
};

const web3ProtocolBuilders: CardComponentProps = {
  title: "Web3 Protocol Builders",
  profiles: [
    {
      ethName: "brantly.eth",
      role: "Building Ethereum Follow Protocol & Creator of Sign-In w/ Ethereum",
      twitterUrl: "https://twitter.com/BrantlyMillegan",
    },
    {
      ethName: "chainlinkgod.eth",
      role: "Chainlink Community Ambassador",
      twitterUrl: "https://twitter.com/ChainLinkGod",
    },
    {
      ethName: "cory.eth",
      role: "Founder OpenAvatar & Co-founder of Ethereum Follow Protocol",
      twitterUrl: "https://twitter.com/cory_eth",
    },
    {
      ethName: "poap.eth",
      role: "Proof of Attendance Protocol - bookmarks for your life",
      twitterUrl: "https://twitter.com/poapxyz",
    },
  ],
};

const publicGoodsAdvocates: CardComponentProps = {
  title: "Public Goods Advocates",
  profiles: [
    {
      ethName: "griff.eth",
      role: "Cofounder Giveth, CommonsStack, GeneralMagic, Dappnode, & DECENTRAL",
      twitterUrl: "https://twitter.com/thegrifft",
    },
    {
      ethName: "coltron.eth",
      role: "ENS Public Goods Steward",
      twitterUrl: "https://twitter.com/Coltron_eth",
    },
    {
      ethName: "simona.eth",
      role: "ENS Public Goods Steward, Governance at DELV & Optimism",
      twitterUrl: "https://twitter.com/Sim_Pop",
    },
    
    {
      ethName: "ceresstation.eth",
      role: "Co-founder Gitcoin & Kernel",
      twitterUrl: "https://twitter.com/notscottmoore",
    },
  ],
};

const decentralizationAdvocates: CardComponentProps = {
  title: "Decentralization Advocates",
  profiles: [
    {
      ethName: "liubenben.eth",
      role: "Building ensuser.com for the Chinese ENS Community",
      twitterUrl: "https://twitter.com/forlbb",
    },
    
    {
      ethName: "garypalmerjr.eth",
      role: "ENS Advocate and Founder of Web3Domains",
      twitterUrl: "https://twitter.com/garypalmerjr",
    },
    
    {
      ethName: "master.eth",
      role: "ENS Advocate",
      twitterUrl: "https://twitter.com/seekmine",
    },
    {
      ethName: "superphiz.eth",
      role: "Ethereum Decentralized Staking Advocate  ",
      twitterUrl: "https://twitter.com/superphiz",
    },
  ],
};

const daoAdvocates: CardComponentProps = {
  title: "DAO Advocates",
  profiles: [
    {
      ethName: "fireeyesdao.eth",
      role: "Delegate for Optimism, ENS, GitCoin, Rocket Pool, & Safe",
      twitterUrl: "https://twitter.com/fireeyesgov",
    },
    {
      ethName: "spikewatanabe.eth",
      role: "ENS Delegate & experienced investment banker",
      twitterUrl: "https://twitter.com/spikewatanabe",
    },
    {
      ethName: "alextnetto.eth",
      role: "Co-founder of Blockful, building public goods for DAOs",
      twitterUrl: "https://twitter.com/alextnetto",
    },
   
    {
      ethName: "elbagococina.eth",
      role: "Co-founder Karpatkey, Core Treasury for GnosisDAO, Balancer, ENS, CoWSwap, and Lido",
      twitterUrl: "https://twitter.com/elbagococina",
    },
  ],
};

const dAppBuilders: CardComponentProps = {
  title: "dApp Builders",
  profiles: [
    {
      ethName: "nimi.eth",
      role: "Your personal web3 page",
      twitterUrl: "https://twitter.com/0xNimi",
    },
    {
      ethName: "lefteris.eth",
      role: "Founder of Rotki, the portfolio tracker that protects your privacy",
      twitterUrl: "https://twitter.com/LefterisJP",
    },
    {
      ethName: "mihal.eth",
      role: "Blockchain Engineer",
      twitterUrl: "https://twitter.com/dmihal",
    },
    {
      ethName: "ethlimo.eth",
      role: "Privacy-preserving ENS gateway",
      twitterUrl: "https://twitter.com/eth_limo",
    },
  ],
};

const ensLabsStaff: CardComponentProps = {
  title: "ENS Labs Staff",
  profiles: [
    {
      ethName: "gregskril.eth",
      role: "Developer at ENS Labs",
      twitterUrl: "https://twitter.com/gregskril",
    },
    
    
    {
      ethName: "taytems.eth",
      role: "Developer at ENS Labs",
      twitterUrl: "https://twitter.com/taytemss",
    },
    {
      ethName: "184.eth",
      role: "Support at ENS Labs & ENS Ecosystem Steward",
      twitterUrl: "https://twitter.com/184eth",
    },
    {
      ethName: "matoken.eth",
      role: "Developer at ENS Labs",
      twitterUrl: "https://twitter.com/makoto_inoue",
    },
  ],
};
