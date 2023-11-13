import DoublyLinkedList from "./DoublyLinkedList";

// This uses the built-in JS Map impl, not a custom one
export default class LRU<K, V> {
    private length: number;
    private capacity: number;
    private map: Map<K, V>;
    private reverseMap: Map<V, K>;
    private list: DoublyLinkedList<V>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.list = new DoublyLinkedList();
        this.map = new Map();
        this.reverseMap = new Map();
    }

    // [#] Do the bookkeeping in this order:
    // 1. add/remove to list
    // 2. add/remove to map
    // 3. add/remove to reverse-map
    // 4. add/remove length
    update(key: K, value: V): void {
        const val = this.map.get(key)
        if (val) {
            this.list.remove(val)
            this.list.prepend(value)
        } else {
            this.list.prepend(value)
            this.map.set(key, value)
            this.reverseMap.set(value, key)
            this.length = this.length + 1;
        }

        // evict
        if (this.length > this.capacity) {
            // remove from list
            const v = this.list.removeAt(this.list.length - 1) // Assume the list uses a tail pointer, making this O(1)

            // remove from maps
            if (v) {
                const k = this.reverseMap.get(v) as K // the key should always exist
                this.map.delete(k)
                this.reverseMap.delete(v)
            }

            this.length--;
        }
    }

    get(key: K): V | undefined {
        const val = this.map.get(key)
        if (!val) {
            return val
        }

        this.list.remove(val)
        this.list.prepend(val)

        return val;
    }
}
