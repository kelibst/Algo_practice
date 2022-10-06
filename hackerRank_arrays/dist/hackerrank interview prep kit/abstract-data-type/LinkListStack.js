const LinkedLists = require("./LinkListWithTail");
class LinkedListStack {
    constructor() {
        this.list = new LinkedLists();
    }
    push(value) {
        this.list.prepend(value);
    }
    pop() {
        return this.list.rmFromFront();
    }
    peek() {
        return this.list.head.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}
const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
console.log(stack.getSize(), "size");
stack.print();
console.log(stack.peek(), "peek");
console.log(stack.pop());
stack.print();
