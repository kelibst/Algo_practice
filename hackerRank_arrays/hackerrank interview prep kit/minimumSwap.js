function minimumSwaps(arr) {
  let x = 0;
  let count = 0;
  let currentVal = 0;
  let originalInd = 0;
  let alienVal = 0;
  for (let x = 0; x < arr.length; x++) {
    while (arr[x] !== x + 1) {
      //while the current element value is not at the right position, keep swaping position until it does
      currentVal = arr[x];
      originalInd = currentVal - 1;
      alienVal = arr[originalInd];
      arr[x] = alienVal;
      arr[originalInd] = currentVal;
      count += 1;
    }
  }
  return count;
}
