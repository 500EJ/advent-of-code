import { readFileSync } from "node:fs";
const words = readFileSync("./input.txt", "utf8").split("\n");

let nice = 0;
for (let i = 0; i < words.length; i++) {
  let [pairs, paired, rep] = [{}, false, false];
  for (let j = 0; j < words[i].length - 1; j++) {
    if (words[i][j] === words[i][j + 2]) rep = true;
    const pair = words[i][j] + words[i][j + 1];
    if (pairs[pair] === j - 1) continue;
    if (pair in pairs) {
      paired = true;
    } else {
      pairs[pair] = j;
    }
  }
  if (paired && rep) nice++;
}

console.log(nice);
