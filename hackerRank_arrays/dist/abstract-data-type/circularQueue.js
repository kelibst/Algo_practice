var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CircularQueue_capacity, _CircularQueue_items, _CircularQueue_currentLength, _CircularQueue_rear, _CircularQueue_front;
class CircularQueue {
    constructor(capacity) {
        _CircularQueue_capacity.set(this, void 0);
        _CircularQueue_items.set(this, void 0);
        _CircularQueue_currentLength.set(this, void 0);
        _CircularQueue_rear.set(this, void 0);
        _CircularQueue_front.set(this, void 0);
        __classPrivateFieldSet(this, _CircularQueue_capacity, capacity, "f");
        __classPrivateFieldSet(this, _CircularQueue_items, [], "f");
        __classPrivateFieldSet(this, _CircularQueue_currentLength, 0, "f");
        __classPrivateFieldSet(this, _CircularQueue_rear, -1, "f");
        __classPrivateFieldSet(this, _CircularQueue_front, -1, "f");
    }
    isFull() {
        return __classPrivateFieldGet(this, _CircularQueue_currentLength, "f") === __classPrivateFieldGet(this, _CircularQueue_capacity, "f");
    }
    isEmpty() {
        return __classPrivateFieldGet(this, _CircularQueue_currentLength, "f") === 0;
    }
    enqueue(element) {
        if (!this.isFull()) {
            __classPrivateFieldSet(this, _CircularQueue_rear, (__classPrivateFieldGet(this, _CircularQueue_rear, "f") + 1) % __classPrivateFieldGet(this, _CircularQueue_capacity, "f"), "f");
            __classPrivateFieldGet(this, _CircularQueue_items, "f")[__classPrivateFieldGet(this, _CircularQueue_rear, "f")] = element;
            __classPrivateFieldSet(this, _CircularQueue_currentLength, __classPrivateFieldGet(this, _CircularQueue_currentLength, "f") + 1, "f");
            if (__classPrivateFieldGet(this, _CircularQueue_front, "f") === -1) {
                __classPrivateFieldSet(this, _CircularQueue_front, __classPrivateFieldGet(this, _CircularQueue_rear, "f"), "f");
            }
            console.log(__classPrivateFieldGet(this, _CircularQueue_items, "f"));
        }
        else {
            console.log("queue is full");
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = __classPrivateFieldGet(this, _CircularQueue_items, "f")[__classPrivateFieldGet(this, _CircularQueue_front, "f")];
        __classPrivateFieldGet(this, _CircularQueue_items, "f")[__classPrivateFieldGet(this, _CircularQueue_front, "f")] = null;
        __classPrivateFieldSet(this, _CircularQueue_front, (__classPrivateFieldGet(this, _CircularQueue_front, "f") + 1) % __classPrivateFieldGet(this, _CircularQueue_capacity, "f"), "f");
        __classPrivateFieldSet(this, _CircularQueue_currentLength, __classPrivateFieldGet(this, _CircularQueue_currentLength, "f") - 1, "f");
        if (this.isEmpty()) {
            __classPrivateFieldSet(this, _CircularQueue_front, -1, "f");
            __classPrivateFieldSet(this, _CircularQueue_rear, -1, "f");
        }
        return item;
    }
    peek() {
        if (!this.isEmpty()) {
            __classPrivateFieldGet(this, _CircularQueue_items, "f")[__classPrivateFieldGet(this, _CircularQueue_front, "f")];
        }
        return null;
    }
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            let i;
            let str = "";
            console.log(__classPrivateFieldGet(this, _CircularQueue_items, "f"));
            for (i = __classPrivateFieldGet(this, _CircularQueue_front, "f"); i !== __classPrivateFieldGet(this, _CircularQueue_rear, "f"); i = (i + 1) % __classPrivateFieldGet(this, _CircularQueue_capacity, "f")) {
                str += __classPrivateFieldGet(this, _CircularQueue_items, "f")[i] + " ";
            }
            str += __classPrivateFieldGet(this, _CircularQueue_items, "f")[i];
            console.log(str);
        }
    }
}
_CircularQueue_capacity = new WeakMap(), _CircularQueue_items = new WeakMap(), _CircularQueue_currentLength = new WeakMap(), _CircularQueue_rear = new WeakMap(), _CircularQueue_front = new WeakMap();
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
