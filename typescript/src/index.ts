import { newLine } from "./line";
import { Point } from "./points/point";
import { polarPoint } from "./points/polarpoint";

const point1: Point = polarPoint(2, 0);
const point2: Point = polarPoint(4, Math.PI);

const line = newLine(point1, point2);

line.draw();
