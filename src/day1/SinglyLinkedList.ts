export default class SinglyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;

    constructor() {
    }

    prepend(item: T): void {
        if (this.head === undefined) {
            this.head = {
                value: item,
            }
        }
        const newNode: Node<T> = {
            value: item,
            next: this.head,
        }
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        let prev: Node<T> | undefined;
        let cursor: Node<T> | undefined = this.head;
        
        const newNode: Node<T> = { value: item }

        let i = 0;
        while (cursor !== undefined) {
            if (i === idx) {
                if (prev === undefined) {
                    this.head = newNode;
                    newNode.next = cursor
                } else {
                    prev.next = newNode
                    newNode.next = cursor
                }
                this.length++;
            }
            prev = cursor;
            cursor = cursor.next;
            i++;
        }
    }

    append(item: T): void {
        this.length++;
        if (this.head === undefined) {
            this.head = {
                value: item,
            }
            return;
        }

        let cursor: Node<T> | undefined = this.head;
        while (cursor.next !== undefined) {
            cursor = cursor.next;
        }
        cursor.next = { value: item }
    }

    remove(item: T): T | undefined {
        if (this.head === undefined) return;

        let prev: Node<T> | undefined;
        let cursor: Node<T> | undefined = this.head;

        while (cursor !== undefined) {
            if (cursor.value === item) {
                if (prev === undefined) {
                    this.head = cursor.next;
                } else {
                    prev.next = cursor.next;
                }
                this.length--;
                return cursor.value;
            }
            prev = cursor;
            cursor = cursor.next;
        }
        return;
    }

    get(idx: number): T | undefined {
        if (this.head === undefined) return;

        let cursor: Node<T> | undefined = this.head;
        let i = 0;
        while (cursor !== undefined) {
            if (i === idx) {
                return cursor.value;
            }
            cursor = cursor.next;
            i++;
        }
        return;

    }

    removeAt(idx: number): T | undefined {
        if (this.head === undefined) return;

        let prev: Node<T> | undefined;
        let cursor: Node<T> | undefined = this.head;

        let i = 0;
        while (cursor !== undefined) {
            if (i === idx) {
                if (prev === undefined) {
                    this.head = cursor.next;
                } else {
                    prev.next = cursor.next;
                }
                this.length--;
                return cursor.value;
            }
            prev = cursor;
            cursor = cursor.next;
            i++;
        }
        return;
    }
}

type Node<T> = {
    value: T;
    next?: Node<T>;
}
