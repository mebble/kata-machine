export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;

    constructor() {}

    prepend(item: T): void {
        this.length++;
        if (this.head === undefined) {
            this.head = {
                value: item,
            }
            return
        }
        const newNode: Node<T> = {
            value: item,
            next: this.head,
        }
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        let cursor: Node<T> | undefined = this.head;
        
        const newNode: Node<T> = { value: item }

        let i = 0;
        while (cursor !== undefined && i < idx) {
            cursor = cursor.next;
            i++;
        }

        cursor = cursor as Node<T>  // find a better way instead of casting

        newNode.prev = cursor.prev
        newNode.next = cursor
        cursor.prev = newNode
        if (cursor.prev) {
            cursor.prev.next = newNode
        }
        this.length++;
   }

    append(item: T): void {
        this.length++;
        if (this.head === undefined) {
            this.head = {
                value: item,
            }
            return;
        }

        let cursor = this.head;
        while (cursor.next !== undefined) {
            cursor = cursor.next;
        }
        cursor.next = { value: item, prev: cursor }
    }

    remove(item: T): T | undefined {
        if (this.head === undefined) return;

        let cursor = this.head;
        while (cursor.next !== undefined && cursor.value !== item) {
            cursor = cursor.next;
        }
        if (cursor.value !== item) {
            return;
        }

        if (cursor === this.head) {
            this.head = cursor.next
        } else {
            if (cursor.prev) {
                cursor.prev.next = cursor.next
            }
            if (cursor.next) {
                cursor.next.prev = cursor.prev
            }
        }

        this.length--;
        return cursor.value;
    }

    get(idx: number): T | undefined {
        let cursor = this.head;
        let i = 0;
        while (cursor && i < idx) {
            cursor = cursor.next;
            i++;
        }
        return cursor?.value;
    }

    removeAt(idx: number): T | undefined {
        if (this.head === undefined) return;

        let cursor = this.head;

        let i = 0;
        while (cursor.next !== undefined && i < idx) {
            cursor = cursor.next;
            i++;
        }

        if (cursor === this.head) {
            this.head = cursor.next
        } else {
            if (cursor.prev) {
                cursor.prev.next = cursor.next
            }
            if (cursor.next) {
                cursor.next.prev = cursor.prev
            }
        }

        this.length--;
        return cursor.value;
    }
}

export type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export const createNode = <T>(value: T): Node<T> => {
    return { value }
}
