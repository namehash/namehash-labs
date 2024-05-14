import { EtherIcon } from "@/components/1 - atoms/icons/ether-icon";
import { RoleCategory } from "../types";
import {
  BugAntIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  BackendBanner,
  ContractsBanner,
  DesignBanner,
  FrontendBanner,
  MarketingBanner,
  QualityAssuranceBanner,
  TalentBanner,
} from "@/components/1 - atoms";

type RoleCategories =
  | "frontend"
  | "backend"
  | "design"
  | "qualityassurance"
  | "contracts"
  | "marketing"
  | "general";

const CategoriesData: Record<RoleCategories, RoleCategory> = {
  frontend: {
    icon: CodeBracketSquareIcon,
    name: "Frontend",
    banner: <FrontendBanner />,
  },
  backend: {
    icon: Cog6ToothIcon,
    name: "Backend",
    banner: <BackendBanner />,
  },
  design: {
    icon: PaintBrushIcon,
    name: "Design",
    banner: <DesignBanner />,
  },
  qualityassurance: {
    icon: BugAntIcon,
    name: "Quality Assurance",
    banner: <QualityAssuranceBanner />,
  },
  contracts: {
    icon: EtherIcon,
    name: "Contracts",
    banner: <ContractsBanner />,
  },
  marketing: {
    icon: MegaphoneIcon,
    name: "Marketing",
    banner: <MarketingBanner />,
  },
  general: {
    icon: StarIcon,
    name: "General",
    banner: <TalentBanner />,
  },
};

export default CategoriesData;
