/**
 * One-off script: removes effect config keys in playlist that match effectDefaultsByType.
 * Run: npx tsx scripts/strip-default-effect-configs.ts
 *
 * Only removes keys when the value strictly equals the default (so "black" is not
 * removed when default is "#000000").
 */

import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { effectDefaultsByType } from "../src/ledfx/types/effectDefaults";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

function findEffectCalls(content: string) {
  const results: {
    type: string;
    start: number;
    end: number;
    configStr: string;
  }[] = [];
  const re = /effect\s*\(\s*["']([^"']+)["']\s*,\s*\{/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const start = m.index;
    const lineStart = content.lastIndexOf("\n", start) + 1;
    const lineBefore = content.slice(lineStart, start);
    if (lineBefore.includes("//")) continue; // skip commented-out effect calls
    const type = m[1];
    const braceStart = content.indexOf("{", m.index + m[0].length - 1);
    let depth = 1;
    let i = braceStart + 1;
    while (i < content.length && depth > 0) {
      const c = content[i];
      if (c === "{") depth++;
      else if (c === "}") depth--;
      i++;
    }
    const end = i;
    const configStr = content.slice(braceStart, end);
    results.push({ type, start, end, configStr });
  }
  return results;
}

function parseConfigObject(configStr: string) {
  const entries: { key: string; valueStr: string; raw: string }[] = [];
  const inner = configStr.slice(1, -1).trim();
  if (!inner) return entries;
  let i = 0;
  while (i < inner.length) {
    const keyStart = i;
    while (i < inner.length && /\w/.test(inner[i])) i++;
    const key = inner.slice(keyStart, i).trim();
    if (!key) break;
    while (i < inner.length && /[\s:]/.test(inner[i])) i++;
    if (inner[i] === ":") i++;
    while (i < inner.length && /\s/.test(inner[i])) i++;
    let valueStr = "";
    const start = i;
    if (inner[i] === '"' || inner[i] === "'") {
      const q = inner[i++];
      while (i < inner.length && inner[i] !== q) {
        if (inner[i] === "\\") i++;
        i++;
      }
      if (i < inner.length) i++;
      valueStr = inner.slice(start, i);
    } else if (inner[i] === "#") {
      while (i < inner.length && /[#a-fA-F0-9]/.test(inner[i])) i++;
      valueStr = inner.slice(start, i);
    } else if (/\d/.test(inner[i])) {
      while (i < inner.length && /[\d.eE+-]/.test(inner[i])) i++;
      valueStr = inner.slice(start, i);
    } else if (inner.slice(i).startsWith("true")) {
      i += 4;
      valueStr = "true";
    } else if (inner.slice(i).startsWith("false")) {
      i += 5;
      valueStr = "false";
    } else {
      while (i < inner.length && inner[i] !== "," && inner[i] !== "}") i++;
      valueStr = inner.slice(start, i).trim();
    }
    entries.push({ key, valueStr, raw: key + ": " + valueStr });
    while (i < inner.length && (inner[i] === "," || /\s/.test(inner[i]))) i++;
  }
  return entries;
}

function parseValue(valueStr: string): string | number | boolean {
  const s = valueStr.trim();
  if (s.startsWith('"') || s.startsWith("'")) return s.slice(1, -1);
  if (s.startsWith("#")) return s;
  if (s === "true") return true;
  if (s === "false") return false;
  const n = Number(s);
  if (!Number.isNaN(n)) return n;
  return s;
}

function serializeEntries(entries: { raw: string }[]) {
  if (entries.length === 0) return "";
  return " {\n" + entries.map((e) => "      " + e.raw).join(",\n") + "\n    }";
}

// Replaced span is effect("type", { ... } [and when empty, the closing ")" too].
// So when config is non-empty we must not end newCall with ")" (it's in content.slice(end)).
function buildNewCall(
  type: string,
  newConfig: string,
  keptLength: number,
): string {
  if (keptLength === 0) {
    return `effect("${type}")`;
  }
  return `effect("${type}",${newConfig}`;
}

function findEndIncludingClosingParen(content: string, end: number): number {
  let i = end;
  while (i < content.length && /[\s\n]/.test(content[i])) i++;
  if (content[i] === ")") return i + 1;
  return end;
}

function main() {
  const playlistPath = path.join(
    projectRoot,
    "src/playlists/restrictedGroupChatNew.ts",
  );
  let content = readFileSync(playlistPath, "utf8");
  const calls = findEffectCalls(content);
  let replacements = 0;
  const replacementsList: string[] = [];
  const edits: { start: number; end: number; newText: string }[] = [];
  for (const { type, start, end, configStr } of calls) {
    const defaults =
      effectDefaultsByType[type as keyof typeof effectDefaultsByType];
    if (!defaults) continue;
    const entries = parseConfigObject(configStr);
    const kept: typeof entries = [];
    for (const e of entries) {
      const parsed = parseValue(e.valueStr);
      const def = (defaults as Record<string, unknown>)[e.key];
      if (def === undefined) {
        kept.push(e);
        continue;
      }
      if (parsed === def) {
        replacements++;
        replacementsList.push(`${type}.${e.key}=${e.valueStr}`);
      } else {
        kept.push(e);
      }
    }
    const newConfig = serializeEntries(kept);
    const newCall = buildNewCall(type, newConfig, kept.length);
    const replaceEnd =
      kept.length === 0 ? findEndIncludingClosingParen(content, end) : end;
    edits.push({ start, end: replaceEnd, newText: newCall });
  }
  edits.sort((a, b) => b.start - a.start);
  for (const { start, end, newText } of edits) {
    content = content.slice(0, start) + newText + content.slice(end);
  }
  writeFileSync(playlistPath, content);
  console.log("Removed", replacements, "default-matching config keys.");
  if (replacementsList.length <= 50) {
    replacementsList.forEach((r) => console.log("  ", r));
  } else {
    console.log("  (first 30)", replacementsList.slice(0, 30).join(", "));
  }
}

main();
