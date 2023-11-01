export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    // [#] we're assuming this is a binary-search tree i.e. ordering is present
    return binarySearch(head, needle)
}

function binarySearch(node: BinaryNode<number> | null, needle: number): boolean {
    if (!node) {
        return false;
    }

    if (node.value === needle) {
        return true;
    }
    if (needle < node.value) {
        return binarySearch(node.left, needle)
    }
    return binarySearch(node.right, needle);
}
