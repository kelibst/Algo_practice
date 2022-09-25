function activityNotifications(expenditure: number[], d: number): number {
  // Write your code here
  let count = 0;
  let mdi = 0;
  //create an array of valid days from which you can calculate the median and sort it
  let mdArr = expenditure.slice(0, d).sort((a, b) => a - b);

  //loop through all the elements
  for (let x = 0; x + d < expenditure.length; x++) {
    if (d % 2 !== 0) {
      mdi = mdArr[Math.round(d / 2) - 1];
    } else {
      mdi = (mdArr[d / 2 - 1] + mdArr[d / 2]) / 2;
    }
    if (mdi * 2 <= expenditure[d + x]) {
      count += 1;
    }
    if (expenditure[x + d]) {
      for (let y = mdArr.length - 1; y > -1; y -= 1) {
        if (mdArr[y] <= expenditure[d + x]) {
          mdArr.splice(y + 1, 0, expenditure[d + x]);
          mdArr.shift();
          break;
        } else if (y == 0 && !(mdArr[y] <= expenditure[d + x])) {
          mdArr[0] = expenditure[d + x];
          break;
        }
      }
    }
    console.log(mdArr);
  }
  return count;
}
