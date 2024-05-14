import rolesData from "@/data/rolesData";
import { Role } from "@/types";

/**
 * Retrieves a random subset of roles that are related to a specified role from a predefined dataset.
 *
 * @param role The role object to exclude from the returned list. This ensures that the specified role is not included in the results.
 * @param allOpenRoles An array of Role objects representing all available roles. This array should not contain duplicates.
 * @param maxRelatedRoles The maximum number of related roles to return. If this number is greater than the length of allOpenRoles
 * minus one (to account for the excluded role), the actual number of returned roles will be the length of allOpenRoles minus one.
 * @returns An array of Role objects that are related to the input role, randomly selected and limited to 'maxRelatedRoles' elements.
 * The returned array may contain fewer than 'maxRelatedRoles' elements if there are not enough roles in allOpenRoles.
 */

export const getRelatedRoles = (
  role: Role,
  allOpenRoles: Role[],
  maxRelatedRoles: number
): Role[] => {
  // Filter out the specified role
  const filteredRoles = allOpenRoles.filter(
    (item) => item.title !== role.title
  );

  // Shuffle the remaining roles
  const shuffledRoles = shuffleArray(filteredRoles);

  // Return the first 'maxRelatedRoles' elements from the shuffled list
  return shuffledRoles.slice(0, maxRelatedRoles);
};

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param array The array to shuffle. This array will be modified in place.
 * @returns The shuffled array.
 */
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
