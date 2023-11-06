// Similar problem to MazeSolver
export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    return dfs_recur(graph, source, needle, [])
}

// [#] recursive DFS is easier because I don't have to maintain my own stack
function dfs_recur(graph: WeightedAdjacencyList, currentNode: number, needle: number, path: number[]): number[] | null {
    if (path.includes(currentNode)) {
        return null;
    }

    // [#] Alternatively, we could return a boolean to signal a "success, unwind the stack"
    if (currentNode === needle) {
        return path.concat(needle);
    }

    // [#] Alternatively, we could decide to mutate the path. We would .push() here, and we .pop() after the recursive call
    const pathToCurrent = path.concat(currentNode)

    const edges = graph[currentNode]
    for (const e of edges) {
        const node = e.to
        const newPath = dfs_recur(graph, node, needle, pathToCurrent)
        if (newPath === null) {
            continue;
        }
        if (newPath.includes(needle)) {
            return newPath;
        }
        // [#] At this point, the next recursive call to dfs_recur in the loop will ignore all the deeply created path within prior recursive calls. Hence, this is equivalent to .pop()
    }

    // [#] If we had mutated the path, this is where we would .pop()

    return null;
}
