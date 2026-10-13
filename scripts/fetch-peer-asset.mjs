#!/usr/bin/env node
// Usage (in a client project): node scripts/fetch-peer-asset.mjs <https-url> <outPath>
// Downloads one peer visual comp (image/video) into brief/refs/<slug>/assets/ or public/_peer/.
// Comp only — log the source URL in brief/assets.md; never peer logo or text; replace before ship.
//
// Hardened 2026-10-12 (PR #1 review): https only · output limited to the two comp folders ·
// image/video content types only · 25 MB cap · no overwrite. An agent runs this after reading
// third-party pages, so every input is treated as untrusted.
import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";

const MAX_BYTES = 25 * 1024 * 1024;
const ALLOWED_DIRS = ["brief/refs", "public/_peer"];
const [, , url, outPath] = process.argv;
const fail = (m) => { console.error(m); process.exit(1); };

if (!url || !outPath) fail("Usage: node scripts/fetch-peer-asset.mjs <https-url> <outPath>");

let target;
try { target = new URL(url); } catch { fail(`Not a URL: ${url}`); }
if (target.protocol !== "https:") fail(`Only https URLs are allowed, got ${target.protocol}`);
if (/^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.0\.0\.0|\[::1\])/.test(target.hostname)) fail("Local and private hosts are not allowed");

const root = process.cwd();
const dest = resolve(root, outPath);
const inside = ALLOWED_DIRS.some((d) => dest.startsWith(resolve(root, d) + sep));
if (!inside) fail(`outPath must be inside ${ALLOWED_DIRS.join(" or ")} (got ${outPath})`);
if (!/\.(png|jpe?g|webp|avif|gif|svg|mp4|webm)$/i.test(dest)) fail("outPath needs an image or video extension");
if (await access(dest).then(() => true, () => false)) fail(`Refusing to overwrite ${outPath}`);

const res = await fetch(target, { redirect: "follow", signal: AbortSignal.timeout(30000) });
if (!res.ok) fail(`Fetch failed: ${res.status} ${res.statusText}`);
const type = res.headers.get("content-type") || "";
if (!/^(image|video)\//.test(type)) fail(`Not an image or video (content-type: ${type || "none"})`);
const len = Number(res.headers.get("content-length") || 0);
if (len > MAX_BYTES) fail(`Too large: ${len} bytes (max ${MAX_BYTES})`);

const buf = Buffer.from(await res.arrayBuffer());
if (buf.length > MAX_BYTES) fail(`Too large: ${buf.length} bytes (max ${MAX_BYTES})`);
await mkdir(dirname(dest), { recursive: true });
await writeFile(dest, buf);
console.log(`Saved ${url} -> ${outPath} (${buf.length} bytes, ${type})`);
console.log("Comp only — log the URL in brief/assets.md; replace before ship.");
