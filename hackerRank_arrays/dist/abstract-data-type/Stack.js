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
var _Stack_list, _Stack_maxSize;
class Stack {
    constructor(maxSize = 0) {
        _Stack_list.set(this, new Map());
        _Stack_maxSize.set(this, 0);
        __classPrivateFieldSet(this, _Stack_maxSize, Number(maxSize), "f");
    }
    get size() {
        return __classPrivateFieldGet(this, _Stack_list, "f").size;
    }
    push(item) {
        if (!__classPrivateFieldGet(this, _Stack_maxSize, "f") || this.size < __classPrivateFieldGet(this, _Stack_maxSize, "f")) {
            __classPrivateFieldGet(this, _Stack_list, "f").set(this.size, item);
        }
        return this.size;
    }
    pop() {
        if (this.size) {
            const lastItem = __classPrivateFieldGet(this, _Stack_list, "f").get(this.size - 1);
            __classPrivateFieldGet(this, _Stack_list, "f").delete(this.size - 1);
            return lastItem;
        }
        return null;
    }
    peek() {
        return __classPrivateFieldGet(this, _Stack_list, "f").get(this.size - 1) || null;
    }
    clear() {
        __classPrivateFieldSet(this, _Stack_list, new Map(), "f");
    }
    print() {
        console.log(Array.from(__classPrivateFieldGet(this, _Stack_list, "f").values()));
    }
}
_Stack_list = new WeakMap(), _Stack_maxSize = new WeakMap();
let plate = new Stack();
plate.push("first");
plate.push("firsts");
plate.push("firstss");
plate.push("firsteeee");
plate.print();
plate.pop();
plate.print();
