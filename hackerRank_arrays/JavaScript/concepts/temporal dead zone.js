// //It is a memory allocated to a js let or const var until it is initialized with a value
// let person = {
//   talk: true,
//   Canfly() {
//     return "Sorry, Can't fly";
//   },
// };
// // Object GFGuser
// let GFGuser = {
//   CanCode: true,
//   CanCook() {
//     return "Can't say";
//   },

//   //  Inheriting the properties and methods of person
//   __proto__: person,
// };

// // Printing on console
// // Property of person
// console.log("Can a GFG User talk: " + GFGuser.talk);

// // Method of person
// console.log("Can a GFG User fly: " + GFGuser.Canfly());

// // Property of GFGuser
// console.log("Can a GFG User code: " + GFGuser.CanCode);

// // Method of GFGuser
// console.log("Can a GFG User cook: " + GFGuser.CanCook());

// console.log(person.CanCook);

// const user = {
//   id: 551,
//   name: "Tom",
//   getId() {
//     return this.id;
//   },

//   credentials: {
//     id: 120,
//     username: "tom",
//     getId() {
//       return this.id;
//     },
//   },
// };

// const getId = user.credentials.getId;
// console.log(getId());

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
// document.querySelector(".test").innerHTML = person.fullName.call(person1);
console.log(person.fullName.call(person1), "person");
