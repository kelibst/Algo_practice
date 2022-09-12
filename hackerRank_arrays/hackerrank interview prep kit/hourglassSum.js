function hourglassSum(arr) {
  // Write your code here
  console.log(arr);
  let maxNum = -1011110000;
  let add = 0;
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      add =
        parseInt(arr[x][y]) +
        parseInt(arr[x][y + 1]) +
        parseInt(arr[x][y + 2]) +
        parseInt(arr[x + 1][y + 1]) +
        parseInt(arr[x + 2][y]) +
        parseInt(arr[x + 2][y + 1]) +
        parseInt(arr[x + 2][y + 2]);

      if (maxNum <= add) {
        maxNum = add;
      }
    }
  }
  return maxNum;
}

let arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];
hourglassSum(arr);
