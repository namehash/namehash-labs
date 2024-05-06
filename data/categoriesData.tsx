import { Category } from "./../types";
import {
  BugAntIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

type RoleCategory =
  | "frontend"
  | "backend"
  | "design"
  | "qualityassurance"
  | "contracts"
  | "marketing"
  | "general";

const CategoriesData: Record<RoleCategory, Category> = {
  frontend: {
    icon: CodeBracketSquareIcon,
    name: "Frontend",
    avatar: "/images/careers/frontend",
  },
  backend: {
    icon: Cog6ToothIcon,
    name: "Backend",
    avatar: "/images/careers/backend",
  },
  design: {
    icon: PaintBrushIcon,
    name: "Design",
    avatar: "/images/careers/design",
  },
  qualityassurance: {
    icon: BugAntIcon,
    name: "Quality Assurance",
    avatar: "/images/careers/quality-assurance",
  },
  contracts: {
    icon: BugAntIcon,
    name: "Contracts",
    avatar: "/images/careers/contracts",
  },
  marketing: {
    icon: MegaphoneIcon,
    name: "Marketing",
    avatar: "/images/careers/marketing",
  },
  general: {
    icon: StarIcon,
    name: "General",
    avatar: "/images/careers/general",
  },
};

export default CategoriesData;
