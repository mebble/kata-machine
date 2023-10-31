export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: BinaryNode<number>[] = [head]

    while (queue.length) {
        // dequeue to visit the node
        const node = queue.shift() // [#] JS arraylist shifting is O(n). As a result, the entire algorithm becomes O(n^2)
        if (!node) continue;

        // console.log(node.value)
        if (node.value === needle) {
            return true
        }

        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }

    return false
}
