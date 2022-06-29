function minimumBribes(q) {
  // // Write your code here
  let bribe = 0;
  let dif = 0;
  let canBribe = [];
  for (let x = 0; x < q.length; x++) {
    let originalVal = x + 1;
    if (originalVal !== q[x]) {
      if (dif > 0 && q[x] - originalVal <= 0) {
        dif = dif - 1;
        continue;
      }
      dif = Math.abs(originalVal - q[x]);

      if (dif >= 3) {
        console.log("Too chaotic");
        return;
      }
      bribe += Math.abs(dif);
    }
  }
  console.log(bribe);
  return bribe;
}
