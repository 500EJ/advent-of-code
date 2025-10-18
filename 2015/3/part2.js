import { readFileSync } from "node:fs";
const steps = readFileSync("./input.txt", "utf8");

const visited = new Set(["0,0"]);
const coords = [
  [0, 0],
  [0, 0]
];
for (let i = 0; i < steps.length; i++) {
  if (steps[i] === "^") {
    coords[i % 2][1]++;
  } else if (steps[i] === "v") {
    coords[i % 2][1]--;
  } else if (steps[i] === ">") {
    coords[i % 2][0]++;
  } else {
    coords[i % 2][0]--;
  }
  visited.add(coords[0][0] + "," + coords[0][1]);
  visited.add(coords[1][0] + "," + coords[1][1]);
}
console.log(visited.size);
