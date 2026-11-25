// The World Today — News Image 25 Nov entry.
// Copies the poster image (entry.png) to the output directory.
// The image is the deliverable; this program only moves it, checks it,
// and prints its size so both runs can be compared byte for byte.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
const source = new URL("./entry.png", import.meta.url);

const bytes = readFileSync(source);
const pngSignature = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
if (!bytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error("entry.png is not a PNG file");
}
if (bytes.length > 1048576) {
  throw new Error("entry.png is larger than 1 MiB");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${bytes.length} bytes)`);
