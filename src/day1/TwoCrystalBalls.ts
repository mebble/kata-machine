export default function two_crystal_balls(breaks: boolean[]): number {
    const n = breaks.length;
    const sq = Math.sqrt(n);

    let j = 0;
    let i = 0;
    for (; i < n; i += sq) {
        const breaksNow = breaks[i]
        if (breaksNow) {
            j = i
            i -= sq
            break
        }
    }

    for (; i <= j; i++) {
        const breaksNow = breaks[i]
        if (breaksNow) {
            return i
        }
    }

    return -1;
}
