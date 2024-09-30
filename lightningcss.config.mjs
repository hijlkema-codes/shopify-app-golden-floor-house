import * as fs from "fs";
import { transform } from "lightningcss";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const assetDir = path.join(
  __dirname,
  "resources",
  "extensions",
  "theme-extension"
);
const files = fs.readdirSync(assetDir).filter((file) => file.endsWith(".css"));
const entryPoints = files.map((file) => path.join(assetDir, file));

const outputDir = path.join(__dirname, "extensions/theme-extension/assets/");

// Read the CSS files and transform them into Node Buffers
const cssFiles = entryPoints.map((file) => ({
  buffer: fs.readFileSync(file),
  file,
}));
// Transform the CSS files into a single CSS file

cssFiles.forEach(({ buffer, file }) => {
  const filename = path.basename(file);

  let { code } = transform({
    filename,
    code: buffer,
    minify: true,
    sourcemap: "true",
    targets: {
      chrome: 100,
      firefox: 100,
      safari: 17,
    },
  });

  fs.writeFileSync(path.join(outputDir, filename), code);
});
