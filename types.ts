export interface Role {
  slug: string;
  category: string;
  title: string;
  team: string;
  location: string;
  description: string;
}

export interface RolesData {
  roles: Role[];
}
