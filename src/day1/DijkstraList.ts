// Similar to BFSGraphMatrix
export default function dijkstra_list(source: number, needle: number, graph: WeightedAdjacencyList): number[] {
    const seen: boolean[] = Array(graph.length).fill(false)
    const prev: number[] = Array(graph.length).fill(-1)

    // the distance of each node from the source node
    const dists: number[] = Array(graph.length).fill(-1)
    dists[source] = 0

    // [?] Why don't we use a queue like in BFS?
    while (hasUnvisited(seen, dists)) {
        const currentNode = getLowestUnvisited(seen, dists)
        seen[currentNode] = true;

        const edges = graph[currentNode]
        for (const e of edges) {
            if (seen[e.to]) {
                continue
            }
            const dist = dists[currentNode] + e.weight;
            if (dists[e.to] === -1 || dist < dists[e.to]) {
                dists[e.to] = dist
                prev[e.to] = currentNode;
            }
        }
    }

    return walkBackwards(prev, needle)
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] !== -1)
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let i = -1
    let lowest = Infinity;
    for (let node = 0; node < seen.length; node++) {
        if (seen[node]) {
            continue;
        }

        if (dists[node] === -1) {
            continue;
        }

        if (dists[node] < lowest) {
            lowest = dists[node]
            i = node
        }
    }
    return i
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
