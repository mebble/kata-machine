export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        const x = haystack[mid]
        if (x === needle) {
            return true
        } else if (needle < x) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return false
}

function _bs_recur(haystack: number[], low: number, high: number, needle: number): boolean {
    // [#] Note that we need to check when low eq to high as well, or we'll get infinite recursion/loop
    if (low >= high) return false;

    const mid = Math.floor((low + high) / 2)
    const x = haystack[mid]

    if (needle === x) {
        return true;
    } else if (needle > x) {
        return _bs_recur(haystack, mid + 1, high, needle)
    }
    return _bs_recur(haystack, low, mid, needle)
}
