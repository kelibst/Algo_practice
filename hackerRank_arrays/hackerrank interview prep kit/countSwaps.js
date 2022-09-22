function countSwaps(a) {
  // Write your code here
  // console.log(a)
  let count = 0;
  for (let x = 0; x < a.length; x++) {
    for (let j = 0; j < a.length - 1; j++) {
      let currentVal = a[j];
      let nextVal = a[j + 1];
      if (a[j] > a[j + 1]) {
        a[j] = nextVal;
        a[j + 1] = currentVal;
        count += 1;
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
  return;
}
// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
