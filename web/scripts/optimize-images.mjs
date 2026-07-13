import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public/images");
const input = path.join(root, "zhou-jinxin-executive.png");
await mkdir(root, { recursive: true });
const portrait = sharp(input).resize({ width: 1200, height: 1500, fit: "cover", position: "attention", withoutEnlargement: true });
await Promise.all([
  portrait.clone().avif({ quality: 68, effort: 6 }).toFile(path.join(root, "zhou-jinxin-executive.avif")),
  portrait.clone().webp({ quality: 84, effort: 6 }).toFile(path.join(root, "zhou-jinxin-executive.webp")),
  portrait.clone().jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(root, "zhou-jinxin-executive.jpg")),
]);
