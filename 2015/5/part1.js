import { readFileSync } from "node:fs";
const words = readFileSync("./input.txt", "utf8").split("\n");

const vowels = new Set(["a", "e", "i", "o", "u"]);
const naughtyList = new Set(["ab", "cd", "pq", "xy"]);
let nice = 0;
for (let i = 0; i < words.length; i++) {
  let [vowelCount, twice, naughty] = [0, false, false];
  for (let j = 0; j < words[i].length - 1; j++) {
    if (vowels.has(words[i][j])) vowelCount++;
    if (words[i][j] === words[i][j + 1]) twice = true;
    if (naughtyList.has(words[i][j] + words[i][j + 1])) {
      naughty = true;
      break;
    }
  }
  if (vowels.has(words[i][words[i].length - 1])) vowelCount++;
  if (vowelCount >= 3 && twice && !naughty) nice++;
}

console.log(nice);
