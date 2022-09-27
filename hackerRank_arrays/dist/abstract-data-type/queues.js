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
var _Queue_container, _Queue_rear, _Queue_front;
class Queue {
    constructor() {
        _Queue_container.set(this, {});
        _Queue_rear.set(this, 0);
        _Queue_front.set(this, 0);
        this.enqueue = (element) => {
            __classPrivateFieldGet(this, _Queue_container, "f")[__classPrivateFieldGet(this, _Queue_rear, "f")] = element;
            __classPrivateFieldSet(this, _Queue_rear, __classPrivateFieldGet(this, _Queue_rear, "f") + 1, "f");
        };
        this.dequeue = () => {
            const item = __classPrivateFieldGet(this, _Queue_container, "f")[__classPrivateFieldGet(this, _Queue_front, "f")];
            delete __classPrivateFieldGet(this, _Queue_container, "f")[__classPrivateFieldGet(this, _Queue_front, "f")];
            __classPrivateFieldSet(this, _Queue_front, __classPrivateFieldGet(this, _Queue_front, "f") + 1, "f");
            return item;
        };
        this.isEmpty = () => {
            return __classPrivateFieldGet(this, _Queue_rear, "f") - __classPrivateFieldGet(this, _Queue_front, "f") === 0;
        };
        this.size = () => {
            return __classPrivateFieldGet(this, _Queue_rear, "f") - __classPrivateFieldGet(this, _Queue_front, "f");
        };
        this.peek = () => {
            return __classPrivateFieldGet(this, _Queue_container, "f")[__classPrivateFieldGet(this, _Queue_front, "f")];
        };
        this.print = () => {
            console.log(__classPrivateFieldGet(this, _Queue_container, "f"));
        };
        __classPrivateFieldSet(this, _Queue_container, {}, "f");
        __classPrivateFieldSet(this, _Queue_rear, 0, "f");
        __classPrivateFieldSet(this, _Queue_front, 0, "f");
    }
}
_Queue_container = new WeakMap(), _Queue_rear = new WeakMap(), _Queue_front = new WeakMap();
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
