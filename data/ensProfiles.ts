export interface Profile {
  title: string;
  ensName: string;
  displayName?: string;
  twitterProfile: string;
}

type EnsProfilesType = Record<`0x${string}`, Profile>;

export const nick_address = "0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5";
export const avsa_address = "0x809FA673fe2ab515FaA168259cB14E2BeDeBF68e";
export const rainbowwallet_address =
  "0x7a3d05c70581bD345fe117c06e45f9669205384f";
export const mikedemarais_address =
  "0x5D25E3Ebb10f4DEbF1D7b76Eb94302d2D74C7035";
export const inzhoop_address = "0xd1324aDA7e026211D0CacD90CAe5777E340dE948";
export const spencecoin_address = "0xB94B57A92aB7c6406519A48C0dd1e26FD6D45D88";
export const brantly_address = "0x983110309620D911731Ac0932219af06091b6744";
export const chainlinkgod_address =
  "0x190473B3071946df65306989972706A4c006A561";
export const cory_address = "0xBdB41BfF7E828E2DC2d15EB67257455db818F1DC";
export const poap_address = "0xf6B6F07862A02C85628B3A9688beae07fEA9C863";
export const griff_address = "0x839395e20bbb182fa440d08f850e6c7a8f6f0780";
export const coltron_address = "0x1D5460F896521aD685Ea4c3F2c679Ec0b6806359";
export const simona_address = "0x54BeCc7560a7Be76d72ED76a1f5fee6C5a2A7Ab6";
export const ceresstation_address =
  "0x48A63097E1Ac123b1f5A8bbfFafA4afa8192FaB0";
export const liubenben_address = "0xd5D171a9AA125AF13216C3213B5A9Fc793FcCF2c";
export const garypalmerjr_address =
  "0x4D982788c01402C4E0f657E1192d7736084AE5a8";
export const master_address = "0x7265a60acAeaf3A5E18E10BC1128e72F27B2e176";
export const superphiz_address = "0x399e0Ae23663F27181Ebb4e66Ec504b3AAB25541";
export const jalil_address = "0xe11da9560b51f8918295edc5ab9c0a90e9ada20b";
export const bosco_address = "0x30C7F4F7504D6366916f669cd8E731ED4dF6C702";
export const krypto_address = "0xC6058667a57374cd350280Fcf06a5f0517682BEB";
export const wslyvh_address = "0x8289432ACD5EB0214B1C2526A5EDB480Aa06A9ab";
export const premm_address = "0x8b1f85a93Ac6E4F62695Ea8EF2410d248605FEff";
export const fireeyesdao_address = "0x5BFCB4BE4d7B43437d5A0c57E908c048a4418390";
export const spikewatanabe_address =
  "0x7Ae94d7712b7EDB9BB2C0Ee6D71081a6D8710c0b";
export const alextnetto_address = "0x76A6D08b82034b397E7e09dAe4377C18F132BbB8";
export const elbagococina_address =
  "0xBcE35d5A3e89995730B3C979a01319D06E41776f";
export const she256_address = "0xed11e5eA95a5A3440fbAadc4CC404C56D0a5bb04";
export const limes_address = "0xA7860E99e3ce0752D1ac53b974E309fFf80277C6";
export const nimi_address = "0x4e675ceB415fC41700fb821fF3B43cE5C8B9a83B";
export const lefteris_address = "0x2B888954421b424C5D3D9Ce9bB67c9bD47537d12";
export const mihal_address = "0x8F73bE66CA8c79382f72139be03746343Bf5Faa0";
export const ethlimo_address = "0x029183bd9A47CDD7f5df8Fb64382022C4b681b63";
export const gregskril_address = "0x179A862703a4adfb29896552DF9e307980D19285";
export const taytems_address = "0x8e8Db5CcEF88cca9d624701Db544989C996E3216";
export const oneEightFour_address =
  "0xc28de09AD1a20737B92834943558DdfcC88d020D";
export const matoken_address = "0x5A384227B65FA093DEC03Ec34e111Db80A040615";
export const jefflau_address = "0x866B3c4994e1416B7C738B9818b31dC246b95eEE";
export const james_address = "0x6Dc43be93a8b5Fd37dC16f24872BaBc6dA5E5e3E";

export const EnsProfiles: EnsProfilesType = {
  [nick_address]: {
    ensName: "nick.eth",
    displayName: "Nick Johnson",
    title: "Lead developer of ENS & Ethereum Foundation alum",
    twitterProfile: "https://twitter.com/nicksdjohnson",
  },
  [avsa_address]: {
    ensName: "avsa.eth",
    displayName: "Alex Van de Sande",
    title: "Ethereum Foundation Alumni & Co-founder of ENS",
    twitterProfile: "https://twitter.com/avsa",
  },
  [rainbowwallet_address]: {
    ensName: "rainbowwallet.eth",
    displayName: "Rainbow",
    title: "The fun, simple, & secure way to explore Web3, NFTs, & Ethereum 🌈",
    twitterProfile: "https://twitter.com/rainbowdotme",
  },
  [mikedemarais_address]: {
    ensName: "mikedemarais.eth",
    displayName: "Mike Demarais",
    title: "Co-founder of Rainbow Wallet",
    twitterProfile: "https://twitter.com/mikedemarais",
  },
  [inzhoop_address]: {
    ensName: "inzhoop.eth",
    title: "Independent startup working on smart mobile wallet for Ethereum",
    twitterProfile: "https://twitter.com/inzhoop",
  },
  [spencecoin_address]: {
    ensName: "spencecoin.eth",
    displayName: "Jordan Spence",
    title:
      "Director of Marketing and Strategic Initiatives at Metamask and Consensys",
    twitterProfile: "https://twitter.com/spencecoin",
  },
  [brantly_address]: {
    ensName: "brantly.eth",
    displayName: "Brantly Millegan",
    title: "Building Ethereum Follow Protocol & Creator of Sign-In w/ Ethereum",
    twitterProfile: "https://twitter.com/BrantlyMillegan",
  },
  [chainlinkgod_address]: {
    ensName: "chainlinkgod.eth",
    title: "Chainlink Community Ambassador",
    twitterProfile: "https://twitter.com/ChainLinkGod",
  },
  [cory_address]: {
    ensName: "cory.eth",
    displayName: "Cory Gabrielsen",
    title: "Founder OpenAvatar & Co-founder of Ethereum Follow Protocol",
    twitterProfile: "https://twitter.com/cory_eth",
  },
  [poap_address]: {
    ensName: "poap.eth",
    displayName: "Proof of Attendance Protocol",
    title: "Bookmarks for your life",
    twitterProfile: "https://twitter.com/poapxyz",
  },
  [griff_address]: {
    ensName: "griff.eth",
    displayName: "Griff Green",
    title: "Cofounder Giveth, CommonsStack, GeneralMagic, Dappnode & DECENTRAL",
    twitterProfile: "https://twitter.com/thegrifft",
  },
  [coltron_address]: {
    ensName: "coltron.eth",
    title: "ENS Public Goods Steward",
    twitterProfile: "https://twitter.com/Coltron_eth",
  },
  [simona_address]: {
    ensName: "simona.eth",
    title: "ENS Public Goods Steward, Governance at DELV & Optimism",
    twitterProfile: "https://twitter.com/Sim_Pop",
  },
  [ceresstation_address]: {
    ensName: "ceresstation.eth",
    displayName: "Scott Moore",
    title: "Co-founder Gitcoin & Kernel",
    twitterProfile: "https://twitter.com/notscottmoore",
  },
  [liubenben_address]: {
    ensName: "liubenben.eth",
    title: "Building ensuser.com for the Chinese ENS Community",
    twitterProfile: "https://twitter.com/forlbb",
  },
  [garypalmerjr_address]: {
    ensName: "garypalmerjr.eth",
    title: "ENS Advocate and Founder of Web3Domains",
    twitterProfile: "https://twitter.com/garypalmerjr",
  },
  [master_address]: {
    ensName: "master.eth",
    title: "ENS Advocate",
    twitterProfile: "https://twitter.com/seekmine",
  },
  [superphiz_address]: {
    ensName: "superphiz.eth",
    title: "Ethereum Decentralized Staking Advocate",
    twitterProfile: "https://twitter.com/superphiz",
  },
  [jalil_address]: {
    ensName: "jalil.eth",
    displayName: "Jalil Wahdatehagh",
    title: "Intangible things at Visualize Value.",
    twitterProfile: "https://twitter.com/jalil_eth",
  },
  [bosco_address]: {
    ensName: "bosco.eth",
    title: "Love Freedom and Public Goods 💚",
    twitterProfile: "https://twitter.com/amboscoboinik",
  },
  [krypto_address]: {
    ensName: "krypto.eth",
    title: "Poland ENS Master",
    twitterProfile: "https://twitter.com/CryptoDodoPL",
  },
  [wslyvh_address]: {
    ensName: "wslyvh.eth",
    displayName: "Wesley",
    title: "Events at Ethereum Foundation",
    twitterProfile: "https://twitter.com/wslyvh",
  },
  [premm_address]: {
    ensName: "premm.eth",
    displayName: "Prem Makeig",
    title: "Founder at Unruggable Labs, ENS Fellow",
    twitterProfile: "https://twitter.com/nxt3d",
  },
  [fireeyesdao_address]: {
    ensName: "fireeyesdao.eth",
    displayName: "Fire Eyes DAO",
    title: "Delegate for Optimism, ENS, GitCoin, Rocket Pool, & Safe",
    twitterProfile: "https://twitter.com/fireeyesgov",
  },
  [spikewatanabe_address]: {
    ensName: "spikewatanabe.eth",
    title: "ENS Delegate & experienced investment banker",
    twitterProfile: "https://twitter.com/spikewatanabe",
  },
  [alextnetto_address]: {
    ensName: "alextnetto.eth",
    displayName: "Alex Netto",
    title: "Co-founder of Blockful, building public goods for DAOs",
    twitterProfile: "https://twitter.com/alextnetto",
  },
  [elbagococina_address]: {
    ensName: "elbagococina.eth",
    title:
      "Co-founder Karpatkey, Core Treasury for GnosisDAO, Balancer, ENS, CoWSwap, and Lido",
    twitterProfile: "https://twitter.com/elbagococina",
  },
  [she256_address]: {
    ensName: "she256.eth",
    title:
      "Nonprofit dedicated to increasing diversity in the blockchain space",
    twitterProfile: "https://twitter.com/she_256",
  },
  [limes_address]: {
    ensName: "limes.eth",
    title: "ENS DAO Steward & Secretary - Growth at Layer3",
    twitterProfile: "https://twitter.com/limes_eth",
  },
  [nimi_address]: {
    ensName: "nimi.eth",
    title: "Your personal web3 page",
    twitterProfile: "https://twitter.com/0xNimi",
  },
  [lefteris_address]: {
    ensName: "lefteris.eth",
    displayName: "Lefteris Karapetsas",
    title: "Founder of Rotki, the portfolio tracker that protects your privacy",
    twitterProfile: "https://twitter.com/LefterisJP",
  },
  [mihal_address]: {
    ensName: "mihal.eth",
    displayName: "David Mihal",
    title: "Blockchain Engineer",
    twitterProfile: "https://twitter.com/dmihal",
  },
  [ethlimo_address]: {
    ensName: "ethlimo.eth",
    title: "Privacy-preserving ENS gateway",
    twitterProfile: "https://twitter.com/eth_limo",
  },
  [gregskril_address]: {
    ensName: "gregskril.eth",
    displayName: "Greg Skriloff",
    title: "Developer at ENS Labs",
    twitterProfile: "https://twitter.com/gregskril",
  },
  [taytems_address]: {
    ensName: "taytems.eth",
    title: "Developer at ENS Labs",
    twitterProfile: "https://twitter.com/taytemss",
  },
  [oneEightFour_address]: {
    ensName: "184.eth",
    title: "Support at ENS Labs & ENS Ecosystem Steward",
    twitterProfile: "https://twitter.com/184eth",
  },
  [matoken_address]: {
    ensName: "matoken.eth",
    displayName: "Makoto Inoue",
    title: "Developer at ENS Labs",
    twitterProfile: "https://twitter.com/makoto_inoue",
  },
  [jefflau_address]: {
    ensName: "jefflau.eth",
    displayName: "Jeff Lau",
    title: "Core Team Leader - ENS Labs",
    twitterProfile: "https://twitter.com/_jefflau",
  },
  [james_address]: {
    title: "DAO Governance",
    ensName: "james.eth",
    twitterProfile: "https://twitter.com/blockchainjames",
  },
};
