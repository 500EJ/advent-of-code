import { readFileSync } from "node:fs";
const turns = readFileSync("./input.txt", "utf8").split("\n");

let pos = 50;
let password = 0;
for (let i = 0; i < turns.length; i++) {
  const turn = turns[i];
  const right = turn[0] === "R";
  let next = 100 * (right ? Math.ceil(pos / 100) : Math.floor(pos / 100));
  if (next === pos) next += right ? 100 : -100;
  const amount = Number(turn.slice(1));
  pos += right ? amount : -amount;

  if ((right && pos >= next) || (!right && pos <= next)) {
    password += Math.floor(Math.abs(pos - next) / 100) + 1;
  }
}

console.log(password);
