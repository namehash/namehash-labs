import rolesData from "@/data/rolesData";
import { Role } from "@/types";

/**
 * Retrieves a random subset of roles that are related to a specified role from a predefined dataset.
 * This function first filters out the provided role from the roles dataset to ensure it is not included in the results.
 * It then shuffles the remaining roles using a sorting algorithm that randomly orders the elements.
 * Finally, it returns a new array containing only the first 'maxRelatedRoles' elements from the shuffled list.
 * This effectively provides a random selection of roles related to the given role, up to the specified limit.
 *
 * @param role The role object to exclude from the returned list, ensuring only related roles are considered.
 * @param maxRelatedRoles The maximum number of related roles to return, which determines the size of the resulting array, this
 * number should never be greater than the total of roles (rolesData.roles.length).
 * @returns An array of Role objects that are related to the input role, randomly selected and limited to 'maxRelatedRoles' elements.
 */

export const getRelatedRoles = (
  role: Role,
  allOpenRoles: Role[],
  maxRelatedRoles: number
) => {
  const filteredRoles = allOpenRoles.filter((item) => {
    return item.title !== role.title;
  });
  const sortedRoles = filteredRoles.sort(() => 0.5 - Math.random());
  return sortedRoles.slice(0, maxRelatedRoles);
};
