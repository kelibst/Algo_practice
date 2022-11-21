// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// allbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.
const arr = [1, 2, 3];
const print = (val, func) => {
  return setTimeout(() => {
    console.log(val);
    func();
  }, 4000);
};

const printAll = () => {
  print(arr[0], () => {
    print(arr[2], () => {
      print(arr[1], () => {
        console.log("done");
      });
    });
  });
};
// printAll();

const printPromise = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(val);
      resolve();
    }, 3000);
  });
};

const printAllPromise = () => {
  return printPromise(arr[0]).then(() => {
    return printPromise(arr[2]).then(() => {
      return printPromise(arr[1]);
    });
  });
};

printAllPromise();

var nums = [1, 5, 16];

for (
  // initialisation
  var iter = nums[Symbol.iterator](), next = iter.next(), num = next.value;
  // iterative check
  !next.done;
  // iterative expressions
  next = iter.next(), num = next.value
) {
  console.log(num);
}

function* generatePrime(max) {
  let i = 3;
  while (i < max) {
    yield i;
    i += 50;
  }
}

const prime = generatePrime(100);
console.log(prime.next());
console.log(prime.next());

console.log(prime.next());
