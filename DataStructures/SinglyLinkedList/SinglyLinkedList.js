class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
       let newNode = new Node(val);
       if (!this.head) {
           this.head = newNode;
           this.tail = this.head;
       } else {
           this.tail.next = newNode;
           this.tail = newNode;
       }
       
       this.length++;
       return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newNode = current;
        while (current.next) {
            newNode = current;
            current = current.next;
        }
        this.tail = newNode;
        this.tail.next = null;
        this.length--;
        
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }
    
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        let newHead = current.next;
        this.head = newHead;
        current.next = null;
        this.length--;
        
        if (this.length === 0) {
            this.tail = null;
        }
        
        
        return current;
    }
    
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) return this.push(val);
        else if (index === 0) return this.unshift(val);
        
        let newNode = new Node(val);
        let prev = this.get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        
        this.length++;
        return true;
    }
    
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        else if (index === 0) return this.shift();
        else if (index === this.length-1) return this.pop();
        
        let prev = this.get(index-1);
        let temp = prev.next;
        prev.next = temp.next;
        this.length--;
        
        return true;
    }
    
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let n = new SinglyLinkedList();
n.push(10);
n.push(11);
n.push(12);
// console.log(n.pop());
// console.log(n.shift());
// console.log(n.unshift(5));
// console.log(n.get(2));
// console.log(n.set(2, 5));
// console.log(n.insert(1,13));
// console.log(n.remove(2));
console.log(n);
console.log(n.reverse());


