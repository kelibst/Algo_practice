function hourglassSum(arr) {
  // Write your code here
  //   console.log(arr);
  let resArr = [];
  let maxNum = 0;
  let add = 0;
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      add =
        parseInt(arr[y][x]) +
        parseInt(arr[y][x + 1]) +
        parseInt(arr[y][x + 2]) +
        parseInt(arr[x + 1][y + 1]) +
        parseInt(arr[x + 2][y]) +
        parseInt(arr[x + 2][y + 1]) +
        parseInt(arr[x + 2][y + 2]);
      if (maxNum < add) {
        maxNum = add;
      }
      resArr.push(add);
    }

    // console.log(arr[x][x]);
  }
  console.log(maxNum);
  console.log(resArr);
}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
hourglassSum(arr);
