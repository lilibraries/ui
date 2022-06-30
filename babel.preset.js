module.exports = function (api, options = {}) {
  const isTest = api.env("test");
  const isProduction = api.env("production");
  const isDevelopment = api.env("development");

  const { module } = options;
  const isCJS = module === "cjs";
  const isESM = module === "esm";

  return {
    presets: [
      [
        "@babel/preset-env",
        isTest
          ? {
              bugfixes: true,
              targets: { node: "current" },
            }
          : {
              bugfixes: true,
              modules: isCJS ? "cjs" : isESM ? false : "auto",
            },
      ],
      [
        "@babel/preset-react",
        {
          development: isCJS || isESM ? false : isTest || isDevelopment,
        },
      ],
      [
        "@babel/preset-typescript",
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      require("@babel/plugin-proposal-class-static-block").default,
      [
        require("@babel/plugin-proposal-private-methods").default,
        {
          loose: true,
        },
      ],
      [
        require("@babel/plugin-proposal-private-property-in-object").default,
        {
          loose: true,
        },
      ],
      [
        require("@babel/plugin-proposal-class-properties").default,
        {
          loose: true,
        },
      ],
      require("@babel/plugin-proposal-export-default-from").default,
      require("@babel/plugin-proposal-export-namespace-from").default,
      !isCJS &&
        !isESM &&
        isProduction && [
          require("babel-plugin-transform-react-remove-prop-types").default,
          {
            removeImport: true,
          },
        ],
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3,
          version: require("@babel/runtime-corejs3/package.json").version,
        },
      ],
    ].filter(Boolean),
  };
};
