import * as esbuild from "esbuild";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const assetDir = path.join(
  __dirname,
  "resources",
  "extensions",
  "theme-extension"
);
const files = fs.readdirSync(assetDir).filter((file) => file.endsWith(".mjs"));
const entryPoints = files.map((file) => path.join(assetDir, file));

const outputDir = path.join(__dirname, "extensions/theme-extension/assets/");

await esbuild.build({
  entryPoints: [...entryPoints],
  bundle: true,
  outdir: outputDir,
  minify: true,
  sourcemap: "inline",
});
