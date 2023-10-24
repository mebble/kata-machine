export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {}

    enqueue(item: T): void {
        // Run yarn debug queue
        debugger;

        this.length++;
        const newNode: Node<T> = { value: item }
        if (this.head === undefined || this.tail === undefined) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (this.head === undefined) return;
        this.length--;

        const toRemove = this.head;
        this.head = this.head.next
        return toRemove.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type Node<T> = {
    value: T;
    next?: Node<T>;
}
