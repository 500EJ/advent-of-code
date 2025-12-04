import { readFileSync } from "node:fs";
const banks = readFileSync("./input.txt", "utf8").split("\n");

let sum = 0;
for (let i = 0; i < banks.length; i++) {
  let bank = banks[i];
  const digits = [0, 0];
  for (let j = 0; j < bank.length; j++) {
    const joltage = Number(bank[j]);
    if (joltage > digits[0] && j !== bank.length - 1) {
      digits[0] = joltage;
      digits[1] = 0;
    } else if (joltage > digits[1]) {
      digits[1] = joltage;
    }
  }
  sum += 10 * digits[0] + digits[1];
}

console.log(sum);
