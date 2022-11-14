// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// allbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.

const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, 1000);
  });
};

function printAll() {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
}

printAll();

const printAlls = (arr) => {
  arr.forEach(async (ar) => {
    await printString(ar);
  });
};

printAlls(["D", "E", "F"]);
