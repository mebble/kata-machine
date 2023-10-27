export default function quick_sort(arr: number[]): void {
    qs_recur(arr, 0, arr.length - 1)
}

// high is inclusive
function qs_recur(arr: number[], low: number, high: number): void {
    if (low >= high) return;

    // [Q] why does it not work when i set these pivots?
    // const pivotIdxInit = Math.floor((low + high) / 2)
    // const pivotIdxInit = low
    const pivotIdxInit = high
    const pivot = arr[pivotIdxInit]
    
    let pivotIdxFinal = low - 1;
    for (let i = low; i <= high; i++) {
        if (i === pivotIdxInit) continue;

        if (arr[i] < pivot) {
            pivotIdxFinal++
            swap(arr, i, pivotIdxFinal)
        }
    }
    pivotIdxFinal++
    swap(arr, pivotIdxInit, pivotIdxFinal)

    qs_recur(arr, low, pivotIdxFinal - 1)
    qs_recur(arr, pivotIdxFinal + 1, high)
}

function swap(arr: number[], i: number, j: number): void {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
