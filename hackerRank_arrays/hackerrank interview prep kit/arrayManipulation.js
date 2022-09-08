function arrayManipulation(n, queries) {
  // Write your code here
  let resultArr = Array(n).fill(0);
  queries.forEach((val, ind) => {
    let startInd = val[0];
    let endInd = val[1];
    let k = val[2];
    resultArr[startInd - 1] += k;
    if (endInd + 1 < n) {
      resultArr[endInd] -= k;
    }
  });
  console.log(resultArr);
  return resultArr.reduce((accumulator, curValue) => accumulator + curValue, 0);
}
