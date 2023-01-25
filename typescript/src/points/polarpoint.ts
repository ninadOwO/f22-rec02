import { Point } from "./point";

function polarPoint (len: number, angle: number): Point {
    return {
        x: Math.round(len * Math.cos(angle)),
        y: Math.round(len * Math.sin(angle))
    }
}

export { polarPoint }