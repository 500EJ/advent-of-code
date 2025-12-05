import { readFileSync } from "node:fs";
const grid = readFileSync("./input.txt", "utf8")
  .split("\n")
  .map(row => row.split(""));

let count = 0;
let done = false;
while (!done) {
  done = true;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] !== "@") continue;
      let num = -1;
      const maxRow = Math.min(grid.length, row + 2);
      const maxCol = Math.min(grid[row].length, col + 2);
      for (let i = Math.max(0, row - 1); i < maxRow; i++) {
        for (let j = Math.max(0, col - 1); j < maxCol; j++) {
          if (grid[i][j] === "@") num++;
        }
      }
      if (num < 4) {
        count++;
        grid[row][col] = ".";
        done = false;
      }
    }
  }
}

console.log(count);
