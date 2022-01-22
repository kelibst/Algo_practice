var obj = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};
var result = Object.entries(obj);

console.log(result);

console.log(Object.values(obj));

//reverse string

let str = "hello World";

const stringReverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(stringReverse(str));

const obj1 = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  },
};

obj1.getA().getB();

// [1,2].print()

// Array.prototype.print = () => {
//   console.log(this.values);
//   console.log(this.toString());
// };
// [1, 2].print();

const a = [1, 2, 3, 4, 5, 5];

const b = [11, 22, 33, 44, 55, 55];

const c = [...a, ...b].sort((a, b) => a > b);

console.log(c);
