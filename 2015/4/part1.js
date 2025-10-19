const { createHash } = await import("node:crypto");
import { readFileSync } from "node:fs";
const key = readFileSync("./input.txt", "utf8");

for (let i = 1; ; i++) {
  const hash = createHash("md5");
  hash.update(key + i);
  if (hash.digest("hex").slice(0, 5) === "00000") {
    console.log(i);
    break;
  }
}
