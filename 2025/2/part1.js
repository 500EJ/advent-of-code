import { readFileSync } from "node:fs";
const ids = readFileSync("./input.txt", "utf8").split(",");

let invalidSum = 0;
for (let i = 0; i < ids.length; i++) {
  const range = ids[i].split("-").map(id => Number(id));
  for (let n = range[0]; n <= range[1]; n++) {
    const length = Math.floor(Math.log10(n) + 1);
    if (length % 2 !== 0) continue;
    const halfDivisor = Math.pow(10, length / 2);
    if (Math.floor(n / halfDivisor) === n % halfDivisor) invalidSum += n;
  }
}

console.log(invalidSum);
