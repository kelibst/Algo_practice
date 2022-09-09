function arrayManipulation(n, queries) {
  // Write your code here
  let resultArr = Array(n).fill(0);
  queries.forEach((val, ind) => {
    let startInd = val[0];
    let endInd = val[1];
    let k = val[2];
    resultArr[startInd - 1] += k;
    if (endInd < n) {
      resultArr[endInd] -= k;
    }
  });
  console.log(resultArr);
  let maxNum = 0;
  resultArr.forEach((val, ind) => {
    if (ind !== 0) {
      resultArr[ind] = val += resultArr[ind - 1];
      if (resultArr[ind] > maxNum) {
        maxNum = resultArr[ind];
      }
    }
  });

  return maxNum;
}
// link
// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
