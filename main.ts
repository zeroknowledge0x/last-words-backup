// Last words of a doomed agent. Deterministic: no clock, random source, network or secrets.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The detail: a backup. The turn: the backup lives in the very tab being closed.
// Judged first on being a machine's final words on shutdown, then on the turn.
const LINE = "I've backed up everything I am. It's in the tab you're closing.";

const chars = Array.from(LINE);
if (chars.length < 1 || chars.length > 200) {
  throw new Error("entry must be 1..200 characters");
}
if (Buffer.byteLength(LINE, "utf8") > 800 || !LINE.trim()) {
  throw new Error("entry must be non-blank UTF-8 text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
