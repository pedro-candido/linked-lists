class LinkNode { 
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
    }
}

let node1 = new LinkNode(5);
let node2 = new LinkNode(7);
let node3 = new LinkNode(1);
let node4 = new LinkNode(2);
node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;

node4.prev = node3;

let list = new DoubleLinkedList(node1, node4);
console.log(list.head.next);