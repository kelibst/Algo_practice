class LinkNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new LinkNode(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new LinkNode(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("the index you specified is outside the allowed area!");
            return;
        }
        if (index === 0) {
            this.prepend(value);
        }
        else {
            const node = new LinkNode(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log("The item you specify does not exist");
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size -= 1;
        return removeNode.value;
    }
    removeValue(value) {
        if (this.isEmpty()) {
            console.log("The item you specify does not exist");
            return null;
        }
        let removeNode;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size -= 1;
                return value;
            }
            return null;
        }
    }
    search(value) {
        if (this.isEmpty()) {
            console.log("List is empty");
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    //reverse the elements in the linkedlist
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
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
            //   console.log("this", this);
        }
    }
}
const list = new LinkedList();
console.log("list is empty?", list.isEmpty());
console.log("size", list.getSize());
list.print();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(5);
// console.log("size", list.getSize());
list.print();
list.insert(15, 3);
list.print();
console.log(list.search(40));
list.print();
console.log(list.search(80));
list.print();
list.reverse();
list.print();
