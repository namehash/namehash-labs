import { SVGProps } from "react";

export interface Category {
  name: string;
  avatar: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export interface Role {
  slug: string;
  category: Category;
  title: string;
  details: [string, string];
  team: string;
  location: string;
  description: JSX.Element;
}

export interface RolesData {
  roles: Role[];
}
