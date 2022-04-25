// https://github.com/harshmangalam/handymanservice_server.git

//  denoting respectively calling the increment(), decrement(), and getValue() methods on the objected returned by stepCounter.

// Sample Case 0
// Sample Input

// STDIN    Function
// -----    --------
// 1     →  parameter k = 1
// 4     →  number of operations, n = 1
// +     →  increment()
// ?     →  getValue()
// -     →  decrement()
// ?     →  getValue()
// Sample Output

// 1
// 0
// Explanation

// In this test, the k parameter for stepCounter is 1, so each increment must increment the value by 1 and each decrement must decrement the value by 1. Initially, the counter has the value 0. There are 4 operations to be performed. The first of them increments the counter, so it has the value 1 now. The second prints the current value of the counter. The third decrements the counter, so it has the value 0 now. The fourth prints the current value of the counter.

// Sample Case 1
// Sample Input

// STDIN    Function
// -----    --------
// 2     →  parameter k = 2
// 5     →  number of operations, n = 5
// -     →  decrement()
// ?     →  getValue()
// +     →  increment()
// +     →  increment()
// ?     →  getValue()
// Sample Output

// -2
// 2
// Explanation

// In this test, the k parameter for stepCounter is 2, so each increment must increment the value by 2 and each decrement must decrement the value by 2. Initially, the counter has the value 0. There are 5 operations to be performed. The first of them decrements the counter, so it has the value -2 now. The second prints the current value of the counter. The third increments the counter, so it has the value 0 now. The fourth increments the counter, so it has the value 2 now. The fifth prints the current value of the counter.

function getFixedCounter(k) {
  // write your code here
  let curCounter = counter;
  return {
    increment: () => {
      return curCounter.changeBy(k);
    },
    decrement: () => {
      return curCounter.changeBy(-k);
    },
    getValue: () => {
      return curCounter.getValue();
    },
  };
}
