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
 * @param allOpenRoles The array of all open roles available, which the function will filter and shuffle
 * to generate the subset of related roles. This array should contain Role objects.
 * @param maxRelatedRoles The maximum number of related roles to return, which determines the size of the resulting array.
 * If maxRelatedRoles > allOpenRoles length then the actual max returned is allOpenRoles.length.
 * @returns An array of Role objects that are related to the input role, randomly selected and limited to 'maxRelatedRoles' elements,
 * it might return an array containing 0 elements.
 */

export const getRelatedRoles = (
  role: Role,
  allOpenRoles: Role[],
  maxRelatedRoles: number
) => {
  const filteredRoles = allOpenRoles.filter((item) => {
    return item.title !== role.title;
  });
  const shuffledRoles = shuffleArray(filteredRoles);

  return shuffledRoles.slice(0, maxRelatedRoles);
};

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
