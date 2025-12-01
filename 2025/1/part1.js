import { readFileSync } from "node:fs";
const turns = readFileSync("./input.txt", "utf8").split("\n");

let pos = 50;
let password = 0;
for (let i = 0; i < turns.length; i++) {
  const turn = turns[i];
  const amount = Number(turn.slice(1));
  pos += turn[0] === "R" ? amount : -amount;
  if (pos % 100 === 0) password++;
}

console.log(password);
