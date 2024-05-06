import { Role } from "../../../types";
import rolesData from "../../../data/rolesData";
import { RolePage } from "@/components/3 - organisms/role-page";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  // Destructure slug from params
  const { slug } = params;

  // Find the role using the slug
  const role = rolesData.roles.find((role: Role) => role.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <section className="w-full lg:pb-20 pb-5 px-5 lg:px-[112px]">
      <RolePage {...role} />
    </section>
  );
}
