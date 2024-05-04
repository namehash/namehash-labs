import { Role, RolesData } from "../../../types";

import rolesData from "../../../data/rolesData";
import { CareerPage } from "@/components/3 - organisms/career-page";
import { RolePage } from "@/components/3 - organisms/role-page";

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  // Destructure slug from params
  const { slug } = params;

  // Find the role using the slug
  const role = rolesData.roles.find((role: Role) => role.slug === slug);

  if (!role) {
    return <div>Role not found!</div>; // Handle the case where no role matches the slug
  }

  return (
    <section className="w-full lg:pb-20 pb-5 px-5 lg:px-[112px]">
      <RolePage {...role} />
    </section>
  );
}
