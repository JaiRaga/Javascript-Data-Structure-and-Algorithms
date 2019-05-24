class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return undefined;
        let temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let n = new Queue();
n.enqueue(1);
n.enqueue(2);
n.enqueue(3);
console.log(n.enqueue(4));
console.log(n.enqueue(5));
console.log(n.dequeue());
console.log(n.dequeue());
console.log(n.dequeue());
console.log(n);