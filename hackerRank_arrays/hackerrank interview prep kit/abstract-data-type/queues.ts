class Queue {
  #container = {};
  #rear = 0;
  #front = 0;

  constructor() {
    this.#container = {};
    this.#rear = 0;
    this.#front = 0;
  }

  enqueue = (element) => {
    this.#container[this.#rear] = element;
    this.#rear += 1;
  };

  dequeue = () => {
    const item = this.#container[this.#front];
    delete this.#container[this.#front];
    this.#front += 1;
    return item;
  };

  isEmpty = () => {
    return this.#rear - this.#front === 0;
  };

  size = () => {
    return this.#rear - this.#front;
  };

  peek = () => {
    return this.#container[this.#front];
  };

  print = () => {
    console.log(this.#container);
  };
}

// class Queue {
//   #container = [];
//   constructor() {
//     this.#container = [];
//   }

//   enqueue = (val) => {
//     this.#container.push(val);
//   };

//   dequeue = () => {
//     return this.#container.shift();
//   };

//   peek = () => {
//     return this.#container[0] || null;
//   };

//   isEmpty = () => {
//     return this.#container.length === 0;
//   };

//   size = () => {
//     return this.#container.length;
//   };

//   print = () => {
//     console.log(this.#container);
//   };
// }

let wue = new Queue();
console.log(wue.isEmpty());
wue.enqueue("hello");
wue.enqueue("love");
wue.enqueue("of");

wue.dequeue();
wue.print();
console.log(wue.size());
console.log(wue.isEmpty());
console.log(wue.peek());
