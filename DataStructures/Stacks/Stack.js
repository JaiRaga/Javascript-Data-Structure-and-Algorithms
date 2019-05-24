class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;        
    }

    pop() {
        if (!this.first) return undefined;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return temp.value;
    }
}

let s = new Stack();
console.log(s.push(5));
console.log(s.push(6));
console.log(s.push(7));
console.log(s.push(8));
console.log(s.pop());
console.log(s.pop());
console.log(s);