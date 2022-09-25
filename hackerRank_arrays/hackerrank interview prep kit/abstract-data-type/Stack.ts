class Stack {
  #list = new Map();
  #maxSize = 0;

  constructor(maxSize = 0) {
    this.#maxSize = Number(maxSize);
  }

  get size() {
    return this.#list.size;
  }

  push(item) {
    if (!this.#maxSize || this.size < this.#maxSize) {
      this.#list.set(this.size, item);
    }

    return this.size;
  }

  pop() {
    if (this.size) {
      const lastItem = this.#list.get(this.size - 1);
      this.#list.delete(this.size - 1);
      return lastItem;
    }
    return null;
  }

  peek() {
    return this.#list.get(this.size - 1) || null;
  }

  clear() {
    this.#list = new Map();
  }

  print() {
    console.log(Array.from(this.#list.values()));
  }
}

let plate = new Stack();
plate.push("first");

plate.push("firsts");
plate.push("firstss");
plate.push("firsteeee");
plate.print();
plate.pop();

plate.print();
