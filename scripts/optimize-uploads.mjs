// Resizes and compresses images under public/uploads/** in place.
//
// Runs in CI (see .github/workflows/deploy.yml) before `yarn build`, as a
// safety net for photos Mica uploads through the Decap CMS admin panel —
// a phone photo can be several MB, and GitHub Pages caps a published site
// at 1GB. It never touches anything outside public/uploads/.
//
// Usage: node scripts/optimize-uploads.mjs
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MAX_DIMENSION = 1600;
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function collectImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImageFiles(fullPath)));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const before = (await stat(filePath)).size;
  const ext = path.extname(filePath).toLowerCase();
  const image = sharp(filePath);
  const metadata = await image.metadata();

  let pipeline = image.rotate(); // normalize orientation, strip EXIF as a side effect

  if (
    (metadata.width && metadata.width > MAX_DIMENSION) ||
    (metadata.height && metadata.height > MAX_DIMENSION)
  ) {
    pipeline = pipeline.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: 80 });
  }

  const buffer = await pipeline.toBuffer();

  if (buffer.length < before) {
    await sharp(buffer).toFile(filePath);
    return { filePath, before, after: buffer.length, changed: true };
  }

  return { filePath, before, after: before, changed: false };
}

async function main() {
  let files;
  try {
    files = await collectImageFiles(UPLOADS_DIR);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`No ${UPLOADS_DIR} directory found, nothing to optimize.`);
      return;
    }
    throw error;
  }

  if (files.length === 0) {
    console.log("No images found under public/uploads.");
    return;
  }

  let changedCount = 0;

  for (const filePath of files) {
    const result = await optimizeImage(filePath);
    const relPath = path.relative(process.cwd(), result.filePath);

    if (result.changed) {
      changedCount += 1;
      const savedKb = ((result.before - result.after) / 1024).toFixed(1);
      console.log(`optimized ${relPath}: -${savedKb}KB`);
    } else {
      console.log(`skipped ${relPath}: already optimal`);
    }
  }

  console.log(
    `Done. ${changedCount}/${files.length} image(s) optimized under public/uploads.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
