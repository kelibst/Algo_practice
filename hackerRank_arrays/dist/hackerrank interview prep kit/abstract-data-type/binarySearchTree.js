"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new BinaryNode(value);
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        }
        else {
            if (root.value === value) {
                return true;
            }
            else if (value < root.value) {
                return this.search(root.left, value);
            }
            else {
                return this.search(root.right, value);
            }
        }
    }
    //dfs traversal of binary tree
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}
const best = new BinarySearchTree();
best.insert(10);
best.insert(5);
best.insert(15);
console.log(best);
best.insert(3);
best.insert(7);
// best.preOrder(best.root);
// console.log(best);
best.postOrder(best.root);
