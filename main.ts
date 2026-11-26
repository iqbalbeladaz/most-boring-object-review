import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of the most boring everyday object: the doorstop.
// The joke is the object's own dullness: it is kicked, stepped on and
// tripped over its whole life, only for a door to stay where it already was.
const ENTRY =
  "The doorstop spends its whole life being kicked, stepped on, and tripped over, just so a door can stay exactly where it already was.";

// The gate allows 1–200 characters; refuse to write an entry that cannot pass it.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
