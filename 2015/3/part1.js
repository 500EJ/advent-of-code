import { readFileSync } from "node:fs";
const steps = readFileSync("./input.txt", "utf8");

const visited = new Set(["0,0"]);
const coord = [0, 0];
for (let i = 0; i < steps.length; i++) {
  if (steps[i] === "^") {
    coord[1]++;
  } else if (steps[i] === "v") {
    coord[1]--;
  } else if (steps[i] === ">") {
    coord[0]++;
  } else {
    coord[0]--;
  }
  visited.add(coord[0] + "," + coord[1]);
}
console.log(visited.size);
