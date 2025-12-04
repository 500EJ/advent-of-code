import { readFileSync } from "node:fs";
const banks = readFileSync("./input.txt", "utf8")
  .split("\n")
  .map(bank => bank.split("").map(cell => Number(cell)));

let sum = 0n;
for (let i = 0; i < banks.length; i++) {
  let bank = banks[i];
  let joltage = 0;
  for (let j = 11, start = 0; j >= 0; j--) {
    let maxI = start;
    for (let k = start; k < bank.length - j; k++) {
      if (bank[k] > bank[maxI]) maxI = k;
    }
    joltage += bank[maxI] * Math.pow(10, j);
    start = maxI + 1;
  }
  sum += BigInt(joltage);
}

console.log(sum);
