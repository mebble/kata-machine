export default function bubble_sort(arr: number[]): void {
    for (let x = 0; x < arr.length; x++) {
        for (let i = 0; i < arr.length - 1 - x; i++) {
            const a = arr[i]
            const b = arr[i + 1]
            if (a > b) {
                arr[i] = b
                arr[i + 1] = a
            }
        }
    }
}
