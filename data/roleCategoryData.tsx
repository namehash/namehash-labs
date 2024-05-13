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
    banner: "/images/careers/frontend",
  },
  backend: {
    icon: Cog6ToothIcon,
    name: "Backend",
    banner: "/images/careers/backend",
  },
  design: {
    icon: PaintBrushIcon,
    name: "Design",
    banner: "/images/careers/design",
  },
  qualityassurance: {
    icon: BugAntIcon,
    name: "Quality Assurance",
    banner: "/images/careers/quality-assurance",
  },
  contracts: {
    icon: EtherIcon,
    name: "Contracts",
    banner: "/images/careers/contracts",
  },
  marketing: {
    icon: MegaphoneIcon,
    name: "Marketing",
    banner: "/images/careers/marketing",
  },
  general: {
    icon: StarIcon,
    name: "General",
    banner: "/images/careers/general",
  },
};

export default CategoriesData;
