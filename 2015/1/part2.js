import { readFileSync } from "node:fs";
const moves = readFileSync("./input.txt", "utf8");

let floor = 0;
for (let i = 0; i < moves.length; i++) {
  if (moves[i] === "(") {
    floor++;
  } else {
    floor--;
    if (floor === -1) {
      console.log(i + 1);
      break;
    }
  }
}
