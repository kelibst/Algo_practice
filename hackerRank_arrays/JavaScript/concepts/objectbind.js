// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);

// When a function is used as a callback, this is lost.

// This example will try to display the person name after 3 seconds, but it will display undefined instead:

const person1 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

setTimeout(person1.display, 3000);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

let display = person2.display.bind(person);
setTimeout(display, 3000);

// What is this?
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
