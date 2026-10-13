#!/usr/bin/env node
/**
 * check-project.mjs — deterministic gates for a client site (run in the project).
 *
 *   node .cursor/brain/check-project.mjs
 *   node .cursor/brain/check-project.mjs --max-lock-days 14
 *
 * Exit 0 = OK. Exit 1 = failed checks. Synced from the brain as .cursor/brain/check-project.mjs.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const maxLockDays = (() => {
  const i = args.indexOf("--max-lock-days");
  return i >= 0 ? Number(args[i + 1]) : 14;
})();

const fails = [];
const warn = (m) => console.log("WARN: " + m);
const bad = (m) => fails.push(m);
const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

if (!exists("plan.md")) bad("plan.md missing");
if (!exists("brain.lock")) bad("brain.lock missing — run sync from a client project");

const plan = exists("plan.md") ? read("plan.md") : "";
const status = (plan.match(/^\|\s*Status\s*\|\s*`?([^`|]+)`?\s*\|/m) || [])[1]?.trim() || "";
const layer = (plan.match(/^\|\s*Layer\s*\|\s*`?([^`|]+)`?\s*\|/m) || [])[1]?.trim() || "";

const requiredLeft = [...plan.matchAll(/\[REQUIRED:[^\]]*\]/g)].map((m) => m[0]);
const planningOk = ["Draft"].includes(status);
if (requiredLeft.length && !planningOk) {
  bad(`[REQUIRED] still in plan.md (${requiredLeft.length}): e.g. ${requiredLeft.slice(0, 3).join(", ")}`);
}
if (status && !["Draft", "Planned", "Building", "Shipped"].includes(status.replace(/\s.*/, ""))) {
  // allow `Draft` or longer cells
  const s = status.replace(/`.*/g, "").trim().split(/\s+/)[0];
  if (!["Draft", "Planned", "Building", "Shipped"].includes(s)) bad(`unknown Status: ${status}`);
}

if (exists("brain.lock")) {
  const lock = read("brain.lock");
  const synced = (lock.match(/^synced:\s*(\d{4}-\d{2}-\d{2})/m) || [])[1];
  if (!synced) bad("brain.lock missing synced: date");
  else {
    const age = (Date.now() - new Date(synced + "T00:00:00Z").getTime()) / 86400000;
    if (age > maxLockDays) {
      warn(`brain.lock is ${Math.floor(age)} days old (over ${maxLockDays}) — run node .cursor/brain/brain.mjs sync before Gate 2`);  // age alone never fails
    }
  }
  if (exists("package.json") && ["Building", "Shipped", "Planned"].some((s) => status.includes(s))) {
    // soft: code exists
  }
}

const layerValue = layer.replace(/\[REQUIRED:[^\]]*\]/g, "").trim().toLowerCase();  // a Draft plan still shows the options placeholder
const isShop = layerValue === "ecommerce" || /^## Layer addendum — ecommerce/im.test(plan);
const addendum = (plan.split(/^## Layer addendum — ecommerce/mi)[1] || "").split(/^## /m)[0];
let backend = "", host = "", email = "";
if (isShop) {
  backend = (addendum.match(/\|\s*Backend\s*\|\s*`?(\w+)`?/i) || [])[1]?.toLowerCase() || "";
  host = (addendum.match(/\|\s*Host\s*\|\s*`?(\w+)`?/i) || [])[1]?.toLowerCase() || "";
  email = (addendum.match(/\|\s*Email\s*\|\s*`?(\w+)`?/i) || [])[1]?.toLowerCase() || "";
  if (!backend || !host || !email) {
    bad("shop providers missing — plan needs Backend, Host, Email (docs/adr/0008)");
  } else {
    const okCombo =
      (backend === "firebase" && (host === "apphosting" || host === "vercel") && (email === "resend" || email === "emailjs")) ||
      (backend === "supabase" && host === "vercel" && (email === "resend" || email === "emailjs"));
    if (!okCombo) bad(`invalid provider combo: ${backend} + ${host} + ${email} — see docs/providers-ecommerce.md`);
  }

  const ciPath = [".github/workflows/ci.yml", ".github/workflows/ci.yaml"].find(exists);
  if (exists("package.json") && !status.includes("Draft") && !status.includes("Planned")) {
    if (!ciPath) warn("no .github/workflows/ci.yml yet — add it at scaffold");
    else {
      const ci = read(ciPath);
      if (backend === "firebase") {
        if (!/test:rules|emulators|firebase/i.test(ci)) {
          bad("CI does not look like Firebase (expected test:rules / emulators) while Backend is firebase");
        }
        if (/supabase\s+test|supabase start/i.test(ci) && !/firebase/i.test(ci)) {
          bad("CI looks Supabase-only but Backend is firebase");
        }
      }
      if (backend === "supabase") {
        if (/test:rules|firebase emulators/i.test(ci) && !/supabase/i.test(ci)) {
          bad("CI still runs Firebase emulators/rules but Backend is supabase — cutover incomplete");
        }
        if (!/supabase/i.test(ci)) {
          bad("CI missing supabase checks while Backend is supabase");
        }
      }
      if (host === "vercel" && /apphosting/i.test(ci) && !/vercel/i.test(ci)) {
        warn("Host is vercel but CI mentions apphosting only — confirm deploy docs match");
      }
      if (!/gitleaks|secret.?scan/i.test(ci)) {
        warn("CI has no gitleaks/secret scan step — add from the ecommerce recipe");
      }
    }
  }

  if (backend === "firebase" && exists("package.json")) {
    if (!exists("firestore.rules") && !exists("firebase.json")) {
      warn("firebase backend but firebase.json / firestore.rules not found (ok before scaffold)");
    }
  }
  if (backend === "supabase" && exists("package.json")) {
    if (exists("firebase.json") && !exists("supabase/config.toml")) {
      bad("supabase backend but firebase.json present without supabase/ — cutover incomplete");
    }
  }
}

if (exists("package.json") && status.includes("Draft")) {
  bad("package.json exists while Status is Draft — no UI/code before Planned");
}

if (fails.length) {
  for (const f of fails) console.log("FAIL: " + f);
  console.error(`check-project: ${fails.length} failure(s)`);
  process.exit(1);
}
console.log("OK — check-project passed" + (isShop ? ` (${backend}/${host}/${email})` : ""));
