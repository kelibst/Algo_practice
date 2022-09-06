function minimumSwaps(arr) {
  let x = 0;
  let count = 0;
  let currentVal = 0;
  let originalInd = 0;
  let alienVal = 0;
  while (x < arr.length) {
    currentVal = arr[x];
    originalInd = currentVal - 1;
    alienVal = arr[originalInd];
    // console.log(currentVal)
    if (currentVal !== x + 1) {
      arr[x] = alienVal;
      arr[originalInd] = currentVal;
      console.log("arr", arr);
      count += 1;

      if (arr[x] !== x + 1) {
        currentVal = arr[x];
        originalInd = currentVal - 1;
        alienVal = arr[originalInd];
        arr[x] = alienVal;
        arr[originalInd] = currentVal;
        console.log("arr", arr);
        count += 1;
      }
    }
    x += 1;
  }

  console.log(count);
  return count;
}
