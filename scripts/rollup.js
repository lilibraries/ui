const path = require("path");
const rollup = require("rollup");
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel").babel;
const terser = require("rollup-plugin-terser").terser;

const cwd = process.cwd();
const entryArg = process.argv[2];
const outputArg = process.argv[3];
const exportName = process.argv[4];

if (!entryArg) {
  throw new TypeError("Please enter entry file.");
}
if (!outputArg) {
  throw new TypeError("Please enter output directory.");
}
if (!exportName) {
  throw new TypeError("Please enter export name.");
}
if (path.isAbsolute(entryArg)) {
  throw new TypeError("The entry file can't be an absolute path.");
}
if (path.isAbsolute(outputArg)) {
  throw new TypeError("The output directory can't be an absolute path.");
}

const entryFile = path.resolve(cwd, entryArg);
const outputDir = path.resolve(cwd, outputArg);

async function bundle(minified) {
  const inputOptions = {
    input: entryFile,
    external: ["react", "react-dom", "@lilib/hooks"],
    plugins: [
      resolve({
        extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"],
      }),
      commonjs(),
      babel({
        presets: [
          [path.resolve(__dirname, "../babel.preset.js"), { module: "esm" }],
        ],
        babelHelpers: "runtime",
        extensions: [".ts", ".tsx"],
      }),
    ],
  };

  const result = await rollup.rollup(inputOptions);
  await result.write(createOutputOptions("development"));
  await result.write(createOutputOptions("production"));
}

function createOutputOptions(type) {
  const isProduction = type === "production";

  return {
    file: path.resolve(outputDir, isProduction ? "index.min.js" : "index.js"),
    format: "umd",
    name: exportName,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "@lilib/hooks": "@lilib/hooks",
    },
    plugins: [isProduction && terser()].filter(Boolean),
  };
}

bundle();
