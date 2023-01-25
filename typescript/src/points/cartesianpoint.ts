import { Point } from "./point";

function cartesianPoint (x: number, y: number): Point {
    return {
        x,
        y
    }
}

export { cartesianPoint }