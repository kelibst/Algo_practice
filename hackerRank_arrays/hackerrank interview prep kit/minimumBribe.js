function minimumBribes(q) {
  // // Write your code here
  // To solve it perform minimum swap on 2 steps
  let swap = 0;
  for (let x = q.length - 1; x >= 0; x--) {
    if (q[x] !== x + 1) {
      if (x + 1 - q[x - 1] == 0) {
        // check if the original value is one postion away if it is swap the positons
        let curVal = q[x];
        q[x] = q[x - 1];
        q[x - 1] = curVal;
        swap += 1;
      } else if (x + 1 - q[x - 2] == 0) {
        // if it is two posions away swap the postions
        let curVal = q[x];
        let preVal1 = q[x - 1];
        let preVal2 = q[x - 2];
        q[x] = preVal2;
        q[x - 1] = curVal;
        q[x - 2] = preVal1;
        swap += 2;
      } else {
        console.log("Too chaotic");
        return "Too chaotic";
      }
    }
  }
  console.log(swap);
  return swap;
}
