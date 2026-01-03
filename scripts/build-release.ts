#!/usr/bin/env bun
/**
 * Build release binaries for all platforms
 * Version comes from the git tag / GitHub release
 */
import { $ } from "bun";
import { mkdirSync, rmSync, existsSync } from "node:fs";

const pkg = await Bun.file("package.json").json();
const version = pkg.version;

const targets = [
  { name: "darwin-arm64", target: "bun-darwin-arm64" },
  { name: "darwin-x64", target: "bun-darwin-x64" },
  { name: "linux-x64", target: "bun-linux-x64" },
];

// Clean and create dist
if (existsSync("dist")) {
  rmSync("dist", { recursive: true });
}
mkdirSync("dist");

console.log(`Building bulk-summarize v${version}\n`);

for (const { name, target } of targets) {
  const outfile = `dist/bulk-summarize-${name}`;
  console.log(`Building ${name}...`);

  try {
    await $`bun build --compile --target=${target} bulk-summarize.ts --outfile ${outfile}`.quiet();
    console.log(`  ✓ ${outfile}`);
  } catch (error: any) {
    console.error(`  ✗ Failed: ${error.message}`);
  }
}

console.log("\nDone!");
