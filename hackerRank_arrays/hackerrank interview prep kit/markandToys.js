function maximumToys(prices, k) {
  // Write your code here
  let totalItem = 0;
  let sorted = prices.sort((x, y) => x - y);
  let total = 0;
  for (let x = 0; x < prices.length; x++) {
    if (total + sorted[x] < k) {
      total += sorted[x];
      //  console.log(total)
      totalItem += 1;
    } else {
      break;
    }
  }
  console.log(totalItem);
  return totalItem;
}

// https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen
