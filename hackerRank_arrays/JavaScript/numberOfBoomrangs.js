function countBoomerangs(arr) {
  let count = 0;
  for (let x = 0; x < arr.length; x += 1) {
    if (arr[x] == arr[x + 2] && arr[x + 1] != arr[x]) {
      count += 1;
    }
  }
  return count;
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
