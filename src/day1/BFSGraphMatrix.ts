export default function bfs(graph: WeightedAdjacencyMatrix, sourceNode: number, needle: number): number[] | null {
    const seen: boolean[] = Array(graph.length).fill(false)

    // [#] the node from where we came to get to THIS node
    // This is where we store the information that would be equivalent to path.push and path.pop in DFS
    const prev: number[] = Array(graph.length).fill(-1)

    const queue: number[] = [sourceNode];
    seen[sourceNode] = true;

    while (queue.length) {
        // we'll ignore .shift's O(n) properties. We're assuming this is a real queue.
        const currentNode = queue.shift() as number;
        if (currentNode === needle) {
            break;
        }

        seen[currentNode] = true

        const edges = graph[currentNode]
        for (let node = 0; node < edges.length; node++) {
            const weight = edges[node];
            if (weight && !seen[node]) {
                queue.push(node)
                prev[node] = currentNode
            }
        }
    }

    if (prev[needle] === -1) {
        return null
    }
    return walkBackwards(prev, needle);
}

function walkBackwards(prev: number[], needle: number): number[] {
    const path = [needle];
    let curr = prev[needle]
    while (curr !== -1) {
        path.push(curr)
        curr = prev[curr]
    }
    path.reverse();
    return path;
}
