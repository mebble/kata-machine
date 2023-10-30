export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [head.value]
    if (head.left) {
        path.push(...pre_order_search(head.left))
    }
    if (head.right) {
        path.push(...pre_order_search(head.right))
    }
    return path
}
