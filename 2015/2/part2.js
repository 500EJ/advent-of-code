import { readFileSync } from "node:fs";
const boxes = readFileSync("./input.txt", "utf8")
  .split("\n")
  .map(box => box.split("x").map(dimension => Number(dimension)));

console.log(
  boxes.reduce((total, box) => {
    const [l, w, h] = [box[0], box[1], box[2]];
    return total + 2 * (l + w + h - Math.max(l, w, h)) + l * w * h;
  }, 0)
);
