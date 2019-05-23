class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let removedNode = this.tail;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            removedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return removedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let removedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        else if (index === 0) return this.head;
        else if (index === this.length-1) return this.tail;

        if (index < this.length / 2) {
            let current = this.head.next;
            console.log("From Start!");
            for (let i = 1; i < this.length; i++) {
                if (i === index) {
                    // current.prev = null;
                    // current.next = null;
                    return current;
                }
                current = current.next;
            }
        } else {
            let current = this.tail.prev;
            console.log("From End!");
            for (let i = this.length-2; i >= 0; i--) {
                if (i === index) {
                    // current.prev = null;
                    // current.next = null;
                    return current;
                }
                current = current.prev;
            }
        }
    }

    set(index, val) {
        let current = this.get(index);
        if (current !== null) {
            current.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === 0) {
            return !!this.unshift(val);
        } else if (index === this.length) {
            return !!this.push(val);
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(index-1);
            let nextNode = prevNode.next;

            newNode.prev = prevNode, newNode.next = nextNode;
            prevNode.next = newNode, nextNode.prev = newNode; 

            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        else if (index === 0) return !!this.shift();
        else if (index === this.length - 1) return !!this.pop();
        else {
            let removedNode = this.get(index);
            let prevNode = removedNode.prev;
            let nextNode = removedNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.length--;
            return true;
        }
    }
}

let n = new DoublyLinkedList();
n.push(5);
n.push(6);
n.push(7);
n.push(8);
n.push(9);
n.push(10);
n.push(11);
// console.log(n.pop());
// console.log(n.shift());
// console.log(n.unshift(4));
// console.log(n.get(3));
// console.log(n.set(2, 15));
// console.log(n.insert(7, 15));
// console.log(n.remove(1));

console.log(n);