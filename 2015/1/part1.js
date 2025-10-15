import { readFileSync } from "node:fs";
const moves = readFileSync("./input.txt", "utf8").split("");
console.log(moves.reduce((floor, m) => (m === "(" ? floor + 1 : floor - 1), 0));
