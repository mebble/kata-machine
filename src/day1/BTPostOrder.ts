export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = []
    if (head.left) {
        path.push(...post_order_search(head.left))
    }
    if (head.right) {
        path.push(...post_order_search(head.right))
    }
    path.push(head.value)
    return path
}
