import { SVGProps } from "react";

export interface RoleCategory {
  name: string;
  banner: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export interface Role {
  slug: string;
  category: RoleCategory;
  title: string;
  team: string;
  location: string;
  description: JSX.Element;
}

export interface OpenRoles {
  roles: Role[];
}
