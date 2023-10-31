export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) {
        return true
    }
    if (a === null || b === null) {
        return false
    }

    // [#] because we're doing node-first, then children, this is a pre-order comparison. We could just rearrange this expression to get in-order and post-order comparisons
    return (a.value === b.value) &&
        compare(a.left, b.left) &&
        compare(a.right, b.right);
}
