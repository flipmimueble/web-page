// Deletes files under public/uploads/piezas/** that no pieza references.
//
// Runs in CI (see .github/workflows/deploy.yml) before `yarn build`. Decap
// CMS deletes the content/piezas/<slug>.md file when a pieza is deleted,
// but never touches the media files it referenced — those would otherwise
// pile up under public/uploads/piezas forever.
//
// Usage: node scripts/prune-orphaned-uploads.mjs
import { readdir, rm } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const PIEZAS_DIR = path.join(process.cwd(), "content", "piezas");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads", "piezas");

async function collectFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function collectReferencedPaths() {
  const referenced = new Set();
  let piezaFiles;
  try {
    piezaFiles = (await readdir(PIEZAS_DIR)).filter((f) => f.endsWith(".md"));
  } catch (error) {
    if (error.code === "ENOENT") return referenced;
    throw error;
  }

  for (const file of piezaFiles) {
    const { data } = matter.read(path.join(PIEZAS_DIR, file));
    const candidates = [
      data.fotoAntes,
      data.fotoDespues,
      ...(Array.isArray(data.fotos) ? data.fotos : []),
    ];

    for (const value of candidates) {
      if (typeof value === "string" && value.startsWith("/uploads/")) {
        // public_folder is "/uploads/...", public/uploads/... is the file path
        referenced.add(path.join(process.cwd(), "public", value));
      }
    }
  }

  return referenced;
}

async function main() {
  const referenced = await collectReferencedPaths();
  const uploaded = await collectFiles(UPLOADS_DIR);

  if (uploaded.length === 0) {
    console.log("No files under public/uploads/piezas, nothing to prune.");
    return;
  }

  let prunedCount = 0;
  for (const filePath of uploaded) {
    if (!referenced.has(filePath)) {
      await rm(filePath);
      prunedCount += 1;
      console.log(`pruned ${path.relative(process.cwd(), filePath)}`);
    }
  }

  console.log(
    `Done. ${prunedCount}/${uploaded.length} orphaned upload(s) removed.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
