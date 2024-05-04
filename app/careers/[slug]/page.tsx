import { Role, RolesData } from "../../../types";

import rolesData from "../../../data/careers.json";
import { CareerPage } from "@/components/3 - organisms/career-page";

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
    <section className="w-full pt-20 lg:pb-20 pb-5 px-5 lg:px-[112px]">
      <div className="m-auto w-full max-w-[1216px] mt-20">
        <h1>{role.title}</h1>
        <p>{role.description}</p>
        <p>{`Category: ${role.category}`}</p>
        <p>{`Team: ${role.team}`}</p>
        <p>{`Location: ${role.location}`}</p>
      </div>
      <CareerPage />
    </section>
  );
}
