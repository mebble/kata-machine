export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    return solve_recurse(maze, wall, start, end, []);
}

function solve_recurse(maze: string[], wall: string, current: Point, end: Point, travelled: Point[]): Point[] {
    // the base cases will return a non-concatenated list to signal to the caller that this is not the path to take
    // alternatively, from the base cases, instead of returning non-concatenated list, we could return a boolean = false to do this signalling

    // if out of map
    // this will also protect the other cases from outofbounds exceptions
    if (!maze[current.y] || !maze[current.y][current.x]) {
        return travelled
    }

    // if wall
    if (maze[current.y][current.x] === wall) {
        return travelled
    }

    // if seen
    if (travelled.some(p => p.x === current.x && p.y === current.y)) {
        return travelled
    }

    // if end
    if (current.x === end.x && current.y === end.y) {
        return travelled.concat(current)
    }

    // alternatively, mutate the travelled array using travelled.push() and then later
    // in the post step, do travelled.pop()
    // then this shared state will be returned as the final result to the public API
    const travellingOn = travelled.concat(current)

    const directions: Point[] = [
        { x: current.x + 1, y: current.y },
        { x: current.x - 1, y: current.y },
        { x: current.x, y: current.y + 1 },
        { x: current.x, y: current.y - 1 },
    ]
    for (const dir of directions) {
        const toTravel = solve_recurse(maze, wall, dir, end, travellingOn)
        if (toTravel.some(p => p.x === end.x && p.y === end.y)) {
            // unwind the entire recursion stack
            return toTravel
        }
    }

    // because this travelled was not mutated, it's equivalent to doing .pop() right here, in the post step
    return travelled
}
