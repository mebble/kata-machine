export default class Stack<T> {
    public length: number = 0;
    private head?: Node<T>;

    constructor() {
    }

    push(item: T): void {
        this.length++;
        const newNode: Node<T> = { value: item }
        if (this.head === undefined) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (this.head === undefined) return;
        this.length--;
        const node = this.head;
        this.head = this.head.next;
        return node.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type Node<T> = {
    value: T;
    next?: Node<T>;
}
