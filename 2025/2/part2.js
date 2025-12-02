import { readFileSync } from "node:fs";
const ids = readFileSync("./input.txt", "utf8").split(",");

let invalidSum = 0;
for (let i = 0; i < ids.length; i++) {
  const range = ids[i].split("-").map(id => Number(id));
  for (let num = range[0]; num <= range[1]; num++) {
    const length = Math.floor(Math.log10(num) + 1);
    for (let blockSize = Math.floor(length / 2); blockSize >= 1; blockSize--) {
      if (length % blockSize !== 0) continue;
      const divisor = Math.pow(10, blockSize);
      const compare = num % divisor;
      let match = true;
      for (let n = Math.floor(num / divisor); n; n = Math.floor(n / divisor)) {
        if (n % divisor !== compare) {
          match = false;
          break;
        }
      }
      if (match) {
        invalidSum += num;
        break;
      }
    }
  }
}

console.log(invalidSum);
