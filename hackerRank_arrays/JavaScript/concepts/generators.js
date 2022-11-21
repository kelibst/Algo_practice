https://github.com/Narahari-Sundaragopalan/JavaScript-Interview-Questions/blob/master/concepts/Iterators.md


// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//   let iterationCount = 0;
//   for (let i = start; i < end; i += step) {
//     iterationCount++;
//     yield i;
//   }
//   return iterationCount;
// }

// let generator = makeRangeIterator(1, 10, 2);

// for (let num of generator) {
//   console.log(num); // 1 3 5 7 9
// }

// Create a for loop that iterates through an array and returns the sum of the elements of the array.

const sumFunc = (array) => {
  let res = 0;
  for (let num of array) {
    res = res += num;
  }
  return res;
};

const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

// Create a functional iterator for an array that returns each value of the array when called, one element at a time.

function* iterator(array) {
  for (let num of array) {
    yield num;
  }
}
// const returnIterator = (it) => it.next().value;
// let iter = iterator(array);

// console.log(returnIterator(iter));

// console.log(returnIterator(iter));

// console.log(returnIterator(iter));
// console.log(returnIterator(iter));

// Write code to iterate through an entire array using your nextIterator and sum the values.

function* iterArr(array) {
  for (let num of array) {
    yield num;
  }
}

function nextIterator(array) {
  let res = 0;
  let myIt = iterArr(array);
  let myItVal = myIt.next().value;
  console.log((res += myItVal));
}

const array3 = [1, 2, 3];
const iteratorWithNext = iterArr(array3);
console.log(iteratorWithNext.next());

// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3
