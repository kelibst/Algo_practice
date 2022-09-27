class CircularQueue {
  #capacity: number;
  #items: any[];
  #currentLength: number;
  #rear: number;
  #front: number;

  constructor(capacity) {
    this.#capacity = capacity;
    this.#items = [];
    this.#currentLength = 0;
    this.#rear = -1;
    this.#front = -1;
  }

  isFull() {
    return this.#currentLength === this.#capacity;
  }

  isEmpty() {
    return this.#currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.#rear = (this.#rear + 1) % this.#capacity;
      this.#items[this.#rear] = element;
      this.#currentLength += 1;
      if (this.#front === -1) {
        this.#front = this.#rear;
      }
    } else {
      console.log("queue is full");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.#items[this.#front];
    this.#items[this.#front] = null;
    this.#front = (this.#front + 1) % this.#capacity;
    this.#currentLength -= 1;
    if (this.isEmpty()) {
      this.#front = -1;
      this.#rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      this.#items[this.#front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.#front; i !== this.#rear; i = (i + 1) % this.#capacity) {
        str += this.#items[i] + " ";
      }
      str += this.#items[i];
      console.log(str);
    }
  }
}

let cirQue = new CircularQueue(5);
cirQue.isEmpty();
cirQue.enqueue(10);
cirQue.enqueue(20);
cirQue.enqueue(30);
cirQue.enqueue(40);

cirQue.enqueue(50);

cirQue.print();
cirQue.peek();
console.log("got here");
cirQue.dequeue();

cirQue.print();
console.log("start enque");
console.log(cirQue.isFull());
cirQue.enqueue(60);
console.log("done iwht deque");
cirQue.print();
