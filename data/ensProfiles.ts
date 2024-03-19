export interface Profile {
  title: string;
  ensName: string;
  displayName?: string;
  twitterProfile: string;
}

export const getCachedProfile = (ensName: string): Profile => {
  let ensNameProfile: Profile | undefined;

  for (let value of EnsProfiles.values()) {
    if (value.ensName === ensName) ensNameProfile = value;
  }

  if (!ensNameProfile)
    throw new Error("ENS Profile not already cached for name: " + ensName);

  return ensNameProfile;
};

const EnsProfiles = new Map<`0x${string}`, Profile>([
  [
    "0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5",
    {
      ensName: "nick.eth",
      displayName: "Nick Johnson",
      title: "Lead developer of ENS & Ethereum Foundation alum",
      twitterProfile: "https://twitter.com/nicksdjohnson",
    },
  ],
  [
    "0x809FA673fe2ab515FaA168259cB14E2BeDeBF68e",
    {
      ensName: "avsa.eth",
      displayName: "Alex Van de Sande",
      title: "Ethereum Foundation Alumni & Co-founder of ENS",
      twitterProfile: "https://twitter.com/avsa",
    },
  ],
  [
    "0x82eB45562F991329ED2867F43fc60F0Ba52C3Dab",
    {
      ensName: "validator.eth",
      displayName: "Kevin Gaspar",
      title: "Community and Ecosystem Lead at ENS",
      twitterProfile: "https://twitter.com/ValidatorEth",
    },
  ],
  [
    "0x7a3d05c70581bD345fe117c06e45f9669205384f",
    {
      ensName: "rainbowwallet.eth",
      displayName: "Rainbow",
      title:
        "The fun, simple, & secure way to explore Web3, NFTs, & Ethereum 🌈",
      twitterProfile: "https://twitter.com/rainbowdotme",
    },
  ],
  [
    "0x5D25E3Ebb10f4DEbF1D7b76Eb94302d2D74C7035",
    {
      ensName: "mikedemarais.eth",
      displayName: "Mike Demarais",
      title: "Co-founder of Rainbow Wallet",
      twitterProfile: "https://twitter.com/mikedemarais",
    },
  ],
  [
    "0xd1324aDA7e026211D0CacD90CAe5777E340dE948",
    {
      ensName: "inzhoop.eth",
      title: "Independent startup working on smart mobile wallet for Ethereum",
      twitterProfile: "https://twitter.com/inzhoop",
    },
  ],
  [
    "0xB94B57A92aB7c6406519A48C0dd1e26FD6D45D88",
    {
      ensName: "spencecoin.eth",
      displayName: "Jordan Spence",
      title:
        "Director of Marketing and Strategic Initiatives at Metamask and Consensys",
      twitterProfile: "https://twitter.com/spencecoin",
    },
  ],
  [
    "0x983110309620D911731Ac0932219af06091b6744",
    {
      ensName: "brantly.eth",
      displayName: "Brantly Millegan",
      title:
        "Building Ethereum Follow Protocol & Creator of Sign-In w/ Ethereum",
      twitterProfile: "https://twitter.com/BrantlyMillegan",
    },
  ],
  [
    "0x190473B3071946df65306989972706A4c006A561",
    {
      ensName: "chainlinkgod.eth",
      title: "Chainlink Community Ambassador",
      twitterProfile: "https://twitter.com/ChainLinkGod",
    },
  ],
  [
    "0xBdB41BfF7E828E2DC2d15EB67257455db818F1DC",
    {
      ensName: "cory.eth",
      displayName: "Cory Gabrielsen",
      title: "Founder OpenAvatar & Co-founder of Ethereum Follow Protocol",
      twitterProfile: "https://twitter.com/cory_eth",
    },
  ],
  [
    "0xf6B6F07862A02C85628B3A9688beae07fEA9C863",
    {
      ensName: "poap.eth",
      displayName: "Proof of Attendance Protocol",
      title: "Bookmarks for your life",
      twitterProfile: "https://twitter.com/poapxyz",
    },
  ],
  [
    "0x839395e20bbb182fa440d08f850e6c7a8f6f0780",
    {
      ensName: "griff.eth",
      displayName: "Griff Green",
      title:
        "Cofounder Giveth, CommonsStack, GeneralMagic, Dappnode & DECENTRAL",
      twitterProfile: "https://twitter.com/thegrifft",
    },
  ],
  [
    "0x1D5460F896521aD685Ea4c3F2c679Ec0b6806359",
    {
      ensName: "coltron.eth",
      title: "ENS Public Goods Steward",
      twitterProfile: "https://twitter.com/Coltron_eth",
    },
  ],
  [
    "0x54BeCc7560a7Be76d72ED76a1f5fee6C5a2A7Ab6",
    {
      ensName: "simona.eth",
      title: "ENS Public Goods Steward, Governance at DELV & Optimism",
      twitterProfile: "https://twitter.com/Sim_Pop",
    },
  ],
  [
    "0x48A63097E1Ac123b1f5A8bbfFafA4afa8192FaB0",
    {
      ensName: "ceresstation.eth",
      displayName: "Scott Moore",
      title: "Co-founder Gitcoin & Kernel",
      twitterProfile: "https://twitter.com/notscottmoore",
    },
  ],
  [
    "0xd5D171a9AA125AF13216C3213B5A9Fc793FcCF2c",
    {
      ensName: "liubenben.eth",
      title: "Building ensuser.com for the Chinese ENS Community",
      twitterProfile: "https://twitter.com/forlbb",
    },
  ],
  [
    "0x4D982788c01402C4E0f657E1192d7736084AE5a8",
    {
      ensName: "garypalmerjr.eth",
      title: "ENS Advocate and Founder of Web3Domains",
      twitterProfile: "https://twitter.com/garypalmerjr",
    },
  ],
  [
    "0x7265a60acAeaf3A5E18E10BC1128e72F27B2e176",
    {
      ensName: "master.eth",
      title: "ENS Advocate",
      twitterProfile: "https://twitter.com/seekmine",
    },
  ],
  [
    "0x399e0ae23663f27181ebb4e66ec504b3aab25541",
    {
      ensName: "superphiz.eth",
      title: "Ethereum Decentralized Staking Advocate",
      twitterProfile: "https://twitter.com/superphiz",
    },
  ],
  [
    "0xe11da9560b51f8918295edc5ab9c0a90e9ada20b",
    {
      ensName: "jalil.eth",
      displayName: "Jalil Wahdatehagh",
      title: "Intangible things at Visualize Value.",
      twitterProfile: "https://twitter.com/jalil_eth",
    },
  ],
  [
    "0x30C7F4F7504D6366916f669cd8E731ED4dF6C702",
    {
      ensName: "bosco.eth",
      title: "Love Freedom and Public Goods 💚",
      twitterProfile: "https://twitter.com/amboscoboinik",
    },
  ],
  [
    "0xC6058667a57374cd350280Fcf06a5f0517682BEB",
    {
      ensName: "krypto.eth",
      title: "Poland ENS Master",
      twitterProfile: "https://twitter.com/CryptoDodoPL",
    },
  ],
  [
    "0x8289432ACD5EB0214B1C2526A5EDB480Aa06A9ab",
    {
      ensName: "wslyvh.eth",
      displayName: "Wesley",
      title: "Events at Ethereum Foundation",
      twitterProfile: "https://twitter.com/wslyvh",
    },
  ],
  [
    "0x8b1f85a93Ac6E4F62695Ea8EF2410d248605FEff",
    {
      ensName: "premm.eth",
      displayName: "Prem Makeig",
      title: "Founder at Unruggable Labs, ENS Fellow",
      twitterProfile: "https://twitter.com/nxt3d",
    },
  ],
  [
    "0x5BFCB4BE4d7B43437d5A0c57E908c048a4418390",
    {
      ensName: "fireeyesdao.eth",
      displayName: "Fire Eyes DAO",
      title: "Delegate for Optimism, ENS, GitCoin, Rocket Pool, & Safe",
      twitterProfile: "https://twitter.com/fireeyesgov",
    },
  ],
  [
    "0x7Ae94d7712b7EDB9BB2C0Ee6D71081a6D8710c0b",
    {
      ensName: "spikewatanabe.eth",
      title: "ENS Delegate & experienced investment banker",
      twitterProfile: "https://twitter.com/spikewatanabe",
    },
  ],
  [
    "0x76A6D08b82034b397E7e09dAe4377C18F132BbB8",
    {
      ensName: "alextnetto.eth",
      displayName: "Alex Netto",
      title: "Co-founder of Blockful, building public goods for DAOs",
      twitterProfile: "https://twitter.com/alextnetto",
    },
  ],
  [
    "0xBcE35d5A3e89995730B3C979a01319D06E41776f",
    {
      ensName: "elbagococina.eth",
      title:
        "Co-founder Karpatkey, Core Treasury for GnosisDAO, Balancer, ENS, CoWSwap, and Lido",
      twitterProfile: "https://twitter.com/elbagococina",
    },
  ],
  [
    "0xed11e5eA95a5A3440fbAadc4CC404C56D0a5bb04",
    {
      ensName: "she256.eth",
      title:
        "Nonprofit dedicated to increasing diversity in the blockchain space",
      twitterProfile: "https://twitter.com/she_256",
    },
  ],
  [
    "0xA7860E99e3ce0752D1ac53b974E309fFf80277C6",
    {
      ensName: "limes.eth",
      title: "ENS DAO Steward & Secretary - Growth at Layer3",
      twitterProfile: "https://twitter.com/limes_eth",
    },
  ],
  [
    "0x4e675ceB415fC41700fb821fF3B43cE5C8B9a83B",
    {
      ensName: "nimi.eth",
      title: "Your personal web3 page",
      twitterProfile: "https://twitter.com/0xNimi",
    },
  ],
  [
    "0x2B888954421b424C5D3D9Ce9bB67c9bD47537d12",
    {
      ensName: "lefteris.eth",
      displayName: "Lefteris Karapetsas",
      title:
        "Founder of Rotki, the portfolio tracker that protects your privacy",
      twitterProfile: "https://twitter.com/LefterisJP",
    },
  ],
  [
    "0x8F73bE66CA8c79382f72139be03746343Bf5Faa0",
    {
      ensName: "mihal.eth",
      displayName: "David Mihal",
      title: "Blockchain Engineer",
      twitterProfile: "https://twitter.com/dmihal",
    },
  ],
  [
    "0x029183bd9A47CDD7f5df8Fb64382022C4b681b63",
    {
      ensName: "ethlimo.eth",
      title: "Privacy-preserving ENS gateway",
      twitterProfile: "https://twitter.com/eth_limo",
    },
  ],
  [
    "0x179A862703a4adfb29896552DF9e307980D19285",
    {
      ensName: "gregskril.eth",
      displayName: "Greg Skriloff",
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/gregskril",
    },
  ],
  [
    "0x8e8Db5CcEF88cca9d624701Db544989C996E3216",
    {
      ensName: "taytems.eth",
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/taytemss",
    },
  ],
  [
    "0xc28de09AD1a20737B92834943558DdfcC88d020D",
    {
      ensName: "184.eth",
      title: "Support at ENS Labs & ENS Ecosystem Steward",
      twitterProfile: "https://twitter.com/184eth",
    },
  ],
  [
    "0x5A384227B65FA093DEC03Ec34e111Db80A040615",
    {
      ensName: "matoken.eth",
      displayName: "Makoto Inoue",
      title: "Developer at ENS Labs",
      twitterProfile: "https://twitter.com/makoto_inoue",
    },
  ],
  [
    "0x866B3c4994e1416B7C738B9818b31dC246b95eEE",
    {
      ensName: "jefflau.eth",
      displayName: "Jeff Lau",
      title: "Core Team Leader - ENS Labs",
      twitterProfile: "https://twitter.com/_jefflau",
    },
  ],
  [
    "0x6Dc43be93a8b5Fd37dC16f24872BaBc6dA5E5e3E",
    {
      title: "DAO Governance",
      ensName: "james.eth",
      twitterProfile: "https://twitter.com/blockchainjames",
    },
  ],
]);
