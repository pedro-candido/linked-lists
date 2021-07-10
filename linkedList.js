class LinkedNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count += 1;
            node = node.next;
        }

        return count
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode;
        let node = this.head;
        while(node){
            if(node.next === null) {
                lastNode = node;
            }
            node = node.next
        }

        return lastNode
    }

    getValues() {
        let node = this.head;
        let values = [];
        while(node) {
            values.push(node.value);
            node = node.next;
        }

        return values
    }

    removeFirst() {
        return this.head = this.head.next;
    }

    pushNode(newNode){
        return this.head = newNode
    }

    addNode(newNode) {
        let node = this.head;
        while(node) {
            if(node.next === null){
                node.next = newNode;
            }
            node = node.next;
        }

        return newNode;
    }

    findValue(value) {
        let node = this.head;
        let foundNode = null;

        while(node) {
            if(node.value === value) {
                foundNode = node
            };
            node = node.next;
        }

        return foundNode
    }
}

let node1 = new LinkedNode(4);
let node2 = new LinkedNode(2);
let node3 = new LinkedNode(5);
let node4 = new LinkedNode(3);
let node5 = new LinkedNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let list = new LinkedList(node1);

list.removeFirst();

console.log(list)
