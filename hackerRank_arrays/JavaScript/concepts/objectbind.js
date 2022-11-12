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

// 1. What is the difference between call, apply and bind functions?
// The main difference between the call, apply and bind functions is that the call function immediately invokes the function it is called on, whereas the apply and bind functions return a new function that can be invoked at a later time. The apply function is similar to the call function, but it expects the arguments to be passed in as an array. The bind function is used to create a new function with the same this value as the function it is called on.

// call is invoke immediately while apply and bind can be invoked later

// apply expects the number of arguments you can past as an array

// 2. How do you use a call function to change the context of an object reference inside a function?

function myFunction() {
  console.log(this); // outputs the global object
}

myFunction.call(null); // outputs the global object

// 3. Can you explain what partial functions are in JavaScript?

// A partial function is a function that takes one or more arguments, but not all of the arguments that it could take. This allows you to create a new function that is based on an existing function, but with different arguments. This can be useful when you want to reuse a function but with different data.
// 9. How would you simulate currying using the call() method?
// Currying is a process of creating a new function by binding some arguments to an existing function. The call() method can be used to bind arguments to a function, and thus can be used to simulate currying. For example, if you have a function that takes two arguments, you can use call() to bind the first argument to the function and create a new function that only takes the second argument. This new function can then be invoked with the second argument to get the same result as if the original function had been invoked with both arguments.

// 10. Can you give me some examples of how the bind() method can be used?
// The bind() method can be used in a number of ways, but one of the most common is to bind a function to a specific object. This can be useful if you want to ensure that a function always uses a specific object as its this value. For example, you could use bind() to make sure that a function always used a certain DOM element as its this value.
