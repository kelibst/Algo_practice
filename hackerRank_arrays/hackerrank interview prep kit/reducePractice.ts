// let animals: string[];

let animals = [
  "horse",
  "goat",
  "sheep",
  "goat",
  "horse",
  "sheep",
  "cow",
  "goat",
  "sheep",
  "horse",
  "cow",
  "goat",
];

console.log(
  animals.reduce((acc, animal) => {
    if (acc[animal]) {
      acc[animal] += 1;
    } else {
      acc[animal] = 1;
    }
    return acc;
  }, {})
);

// { horse: 3, goat: 4, sheep: 3, cow: 2 }

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits);
