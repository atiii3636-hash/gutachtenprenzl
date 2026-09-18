// Erzeugt lib/lastmod.json: URL-Pfad -> Datum des letzten Commits der zugehoerigen
// page.tsx. Bewusst vorab erzeugt und eingecheckt, nicht zur Build-Zeit ermittelt:
// Vercel klont flach, dort liefert `git log` je Datei kein verlaessliches Datum.
// Nach inhaltlichen Aenderungen erneut laufen lassen: node scripts/gen-lastmod.mjs
import { execFileSync } from "node:child_process";
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const APP = "app";

function findPages(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...findPages(p));
    else if (e === "page.tsx") out.push(p);
  }
  return out;
}

function routeOf(file) {
  const r = "/" + relative(APP, file).replace(/\/?page\.tsx$/, "");
  return r === "/" ? "/" : r.replace(/\/$/, "");
}

function lastCommit(file) {
  const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
    encoding: "utf8",
  }).trim();
  // Leer = Datei noch nie committet. Dann lieber kein lastmod als ein falsches.
  return iso ? iso.slice(0, 10) : null;
}

const map = {};
for (const f of findPages(APP).sort()) {
  const d = lastCommit(f);
  if (d) map[routeOf(f)] = d;
}

writeFileSync("lib/lastmod.json", JSON.stringify(map, null, 2) + "\n");
console.log(`lib/lastmod.json: ${Object.keys(map).length} Routen`);
