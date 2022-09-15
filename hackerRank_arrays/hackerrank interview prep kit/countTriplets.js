function countTriplets(arr, r) {
  let sortedArr = arr.sort();
  console.log(sortedArr);
  let numTriplets = 0;
  let resArr = [];
  let curInd = 0;
  let triplets = { curInd: arr[curInd] };
  for (let x = 0; x < arr.length; ) {
    let nextNum = arr[curInd] * r;
    curInd = arr.indexOf(nextNum);
    triplets = { ...triplets, curInd: nextNum };
    x = curInd;
  }
  console.log(triplets);
}

//https://www.hackerrank.com/challenges/count-triplets-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
