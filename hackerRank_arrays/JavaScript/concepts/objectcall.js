// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// the object call method just allows another object to become the this context

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
person.fullName.call(person1);

// It can take up extra arguments

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.fullName.call(person1, "Oslo", "Norway");

// The apply method

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// // This will return "Mary Doe":
// person.fullName.apply(person1);

// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// The apply() method accepts arguments in an array:

// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.fullName.apply(person1, ["Oslo", "Norway"]);

// bind method

// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

// const pers = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = pers.fullName.bind(member);

const person4 = {
  firstName: "John",
  lastName: "Doe",
  display: () => {
    console.log(this.firstName + " " + this.lastName);
  },
};

setTimeout(person4.display, 3000);
