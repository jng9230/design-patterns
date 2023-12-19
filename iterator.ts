/**
 *  for arrays, it's simply a `forEach` loop. For other
 *  objects, we'd need to define our own interators
 */

class ListNode {
    val: number;
    next?: ListNode;

    constructor(val: number) {
        this.val = val;
    }
}

class LinkedList implements Iterable<ListNode> {
    head: ListNode;
    curr?: ListNode;

    constructor(node: ListNode) {
        this.head = node;
        this.curr = node;
    }

    /** this is so hard for no reason lmao 
     * `*` creates a binding to a functtion that can be returned to later.
     * - use with `yield` to exit a function "temporarily"
    */
    *[Symbol.iterator](): IterableIterator<ListNode> {
        while (this.curr) {
            yield this.curr; // spit out the value and pause iteration
            this.curr = this.curr.next;
        }
    }
}


const head = new ListNode(1)
head.next = new ListNode(2);
head.next.next = new ListNode(3);
const ll = new LinkedList(head);

for (let val of ll) {
    console.log(val)
}