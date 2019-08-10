class SLLNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor (){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new SLLNode(val);
        if (this.length === 0){
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
        if (this.length === 0) return undefined;
        var current = this.head;
        if (this.length === 1){
            this.head = this.tail = null;
        } else {
            var newTail = current;
            while (current.next !== null){
                newTail = current;
                current = current.next;
            }
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    shift(){
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1){
            this.head = this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new SLLNode(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else { //if the linked list already has at least one node
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;
    }
    get(index){
        if (index < 0 || index >= this.length) return undefined;
        var counter = 0;
        var current = this.head;
        while (counter !== index){
            current = current.next;
            counter++;
        } return current;
    }
    set(index, val){
        var findNode = this.get(index);
        if (findNode !== undefined){
            findNode.val = val;
            return true
        }
        return false
    }
    insert(index, val){
        if (index < 0|| index >= this.length) return undefined;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        
        var newNode = new SLLNode(val);
        var prevNode = this.get(index-1)
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return newNode;
    }
    remove (index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        
        var prevNode = this.get(index-1);
        var removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        removeNode.next = null;
        this.length--;
        return removeNode;
    }
    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = this.head;
        var prev = null;
        var next;
        
        for (i=0; i<this.length; i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}

class DLLNode {
    constructor (val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    
}

class StackNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    
    push(val){
        var newTop = new StackNode(val);
        if (this.size === 0){
            this.top = newTop;
            this.bottom = newTop;
        } else {
            newTop.next = this.top;
            this.top = newTop;
        } return ++this.size; // pre-increment the value since post incrementing size will show the user the size of the stack before the most recent addition
    }
    pop(){
        if (this.size === 0) return undefined;
        var oldTop = this.top;
        if (this.top === this.bottom){ // this.size === 1
            this.top = null;
            this.bottom = null;
        } else {
            this.top = oldTop.next;
            oldTop.next = null;
        } this.size--;
        return oldTop;
    }
}

class QueueNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    enqueue(val){
        var newEnd = new QueueNode(val);
        if (this.length === 0){
            this.last = newEnd;
            this.first = newEnd;
        } else {
            this.last.next = newEnd;
            this.last = newEnd;
        } return ++this.length; // pre-increment the value since post incrementing length will show the user the length of the queue before the most recent addition
    }
    dequeue(){
        if (this.length === 0) return undefined;
        var oldFront = this.first;
        if (this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFront.next;
            oldFront.next = null;
        } this.size--;
        return oldFront;
    }
}