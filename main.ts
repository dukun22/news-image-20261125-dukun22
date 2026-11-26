// Hand-in program for the News Image entry: copies the poster (entry.png)
// into the grader's output directory, checking it is a real PNG under 1 MiB.
// entry.png is read from the directory holding this script, so the program
// works no matter which directory the grader runs it from. The output
// directory comes from MAKEFUN_OUTPUT_DIR, or /output when unset.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ONE_MIB = 1024 * 1024;

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.png"); // poster sits next to this script

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const image = readFileSync(sourcePath);
if (image.length > ONE_MIB) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);
}
if (image.length < PNG_MAGIC.length || !image.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG signature");
}

copyFileSync(sourcePath, join(outputDir, "entry.png"));
console.log(`entry.png (${image.length} bytes) copied to ${outputDir}`);
