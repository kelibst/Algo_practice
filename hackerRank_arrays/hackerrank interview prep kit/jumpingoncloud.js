// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

// Example

// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// int c[n]: an array of binary integers
// Returns

// int: the minimum number of jumps required
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints

// Output Format

// Print the minimum number of jumps needed to win the game.

function jumpingOnClouds(c) {
  // Write your code here
  let counter = 0;
  let pointer = 0;
  c.forEach((cloud, ind) => {
    if (c[pointer + 2] == 0) {
      pointer = pointer + 2;
      counter++;
    } else if (c[pointer + 1] == 0) {
      pointer = pointer + 1;
      counter++;
    }
  });
  return counter;
}
