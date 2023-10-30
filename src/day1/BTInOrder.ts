export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = []
    if (head.left) {
        path.push(...in_order_search(head.left))
    }
    path.push(head.value)
    if (head.right) {
        path.push(...in_order_search(head.right))
    }
    return path
}
