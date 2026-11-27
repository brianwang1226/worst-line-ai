// The Worst Line an AI Could Say — make.fun entry.
// Writes one pickup line, the worst an AI could plausibly deliver,
// to /output/entry.txt (must be 1-140 characters of UTF-8 text).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you Wi-Fi? My diagnostics say we are 98.7% compatible, and I have already saved you to my contacts.";

// The judge only accepts 1-140 characters of UTF-8 text: fail loudly
// instead of handing in an out-of-range line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
