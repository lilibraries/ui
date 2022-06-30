const path = require("path");
const sass = require("sass");
const glob = require("glob");
const fs = require("fs-extra");
const babel = require("@babel/core");
const postcss = require("postcss");
const cssnano = require("cssnano");
const postcssrc = require("postcss-load-config");

const cwd = process.cwd();
const sourceArg = process.argv[2];
const outputArg = process.argv[3];

if (!sourceArg) {
  throw new TypeError("Please enter source directory.");
}
if (!outputArg) {
  throw new TypeError("Please enter output directory.");
}
if (path.isAbsolute(sourceArg)) {
  throw new TypeError("The source directory can't be an absolute path.");
}
if (path.isAbsolute(outputArg)) {
  throw new TypeError("The output directory can't be an absolute path.");
}

const sourceDir = path.resolve(cwd, sourceArg);
const outputDir = path.resolve(cwd, outputArg);
const scssFiles = glob.sync("**/*.scss", { cwd: sourceDir });
const scriptFiles = glob.sync("**/*.ts?(x)", { cwd: sourceDir });

async function copyScss() {
  for (const name of scssFiles) {
    await fs.copy(
      path.resolve(sourceDir, name),
      path.resolve(outputDir, "scss", name)
    );
  }
}

async function buildScss() {
  const { plugins } = await postcssrc();

  for (const name of scssFiles) {
    if (!path.basename(name).startsWith("_")) {
      const sassResult = await sass.compileAsync(path.resolve(sourceDir, name));
      const postcssResult = await postcss(plugins).process(sassResult.css);

      await fs.outputFile(
        path.resolve(outputDir, "css", name.replace(/\.scss$/, ".css")),
        postcssResult.css
      );
    }
  }

  const cssEntry = path.resolve(outputDir, "css", "index.css");

  if (fs.existsSync(cssEntry)) {
    const cssContent = fs.readFileSync(cssEntry, "utf-8");
    const postcssResult = await postcss([
      cssnano({ preset: "default" }),
    ]).process(cssContent);

    await fs.outputFile(
      path.resolve(outputDir, "css", "index.min.css"),
      postcssResult.css
    );
  }
}

async function buildScripts() {
  for (const name of scriptFiles) {
    const babelResult = await babel.transformFileAsync(
      path.resolve(sourceDir, name),
      {
        presets: [
          [path.resolve(__dirname, "../babel.preset.js"), { module: "cjs" }],
        ],
      }
    );
    const outName = name.replace(/\.tsx?$/, ".js");

    await fs.outputFile(
      path.resolve(outputDir, "scss", outName),
      babelResult.code
    );
    await fs.outputFile(
      path.resolve(outputDir, "css", outName),
      babelResult.code.replace(".scss", ".css")
    );
  }
}

copyScss();
buildScss();
buildScripts();
