class Link {
    constructor(value) {
        this.value = value;
        this.next = this.next;
    }
}
class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        else {
            let curr = this.head;
            let listVals = "";
            while (curr) {
                listVals += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listVals);
        }
    }
    prepend(value) {
        const node = new Link(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Link(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    rmFromFront() {
        if (this.isEmpty()) {
            console.log("the list is empty");
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size++;
        return value;
    }
    rmFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }
}
const List = new linkedlist();
console.log("list is empty?", List.isEmpty());
console.log("size", List.getSize());
List.print();
List.append(10);
List.append(20);
List.append(30);
List.append(40);
List.append(50);
List.prepend(5);
// console.log("size", list.getSize());
List.print();
List.rmFromEnd();
List.print();
List.rmFromFront();
List.print();
