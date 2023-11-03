export default class MinHeap {
    public length: number;
    private arrayList: number[];

    constructor() {
        this.length = 0;
        this.arrayList = [];
    }

    insert(value: number): void {
        if (this.length === 0) {
            this.arrayList.push(value);
            this.length++;
            return;
        }

        this.arrayList.push(value)
        // console.log('preheapify:', this.arrayList)
        this.heapifyUp();
        // console.log('postheapify:', this.arrayList)
        this.length++;
    }

    private heapifyUp(): void {
        let i = this.arrayList.length - 1;
        let pi = parentIdx(i)
        while (i > 0 && this.arrayList[i] < this.arrayList[pi]) {
            swap(this.arrayList, i, pi)
            i = pi
            pi = parentIdx(i)
        }
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        // console.log('preheapify:', this.arrayList)
        const i = this.heapifyDown()
        // console.log('postheapify:', this.arrayList)
        const [value] = this.arrayList.splice(i, 1)
        this.length--;
        return value;
    }

    // [#] This isn't the proper way to do it, but f it. I'll learn the proper way in time
    private heapifyDown(): number {
        const len = this.arrayList.length;
        let i = 0;
        let l = leftIdx(i);
        let r = rightIdx(i);
        while (i < len && (l < len || r < len)) {
            let ci: number;
            if (l < len && r < len) {
                ci = this.arrayList[l] < this.arrayList[r]
                    ? l
                    : r;
            } else if (l < len) {
                ci = l;
            } else {
                ci = r;
            }
            swap(this.arrayList, i, ci)
            i = ci
            l = leftIdx(i);
            r = rightIdx(i);
        }

        return i;
    }
}

function parentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
}
function leftIdx(idx: number): number {
    return 2 * idx + 1;
}
function rightIdx(idx: number): number {
    return 2 * idx + 2;
}

function swap(arr: number[], i: number, j: number): void {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
