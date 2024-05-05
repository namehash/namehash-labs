import { Role } from "../../../types";

import rolesData from "../../../data/rolesData";
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
    return (
      <section className="w-full lg:py-20 pb-5 px-5 lg:px-[112px]">
        <div className="max-w-[1216px] w-full m-auto pt-20 h-[calc(100% -20)]">
          <h1 className="font-bold text-4xl text-center">Role not found</h1>
        </div>
      </section>
    ); // Handle the case where no role matches the slug
  }

  return (
    <section className="w-full lg:pb-20 pb-5 px-5 lg:px-[112px]">
      <RolePage {...role} />
    </section>
  );
}
