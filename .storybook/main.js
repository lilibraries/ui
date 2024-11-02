const path = require("path");

module.exports = {
  framework: "@storybook/react",
  features: { babelModeV7: true },
  stories: ["../stories/**/stories.*"],

  addons: [
    "storybook-dark-mode",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        measure: false,
        outline: false,
        viewport: false,
        backgrounds: false,
      },
    },
  ],

  babel: async () => {
    return {
      presets: [path.resolve(__dirname, "../babel.preset.js")],
      plugins: [
        [
          "import",
          {
            libraryName: "@lilib/ui",
            libraryDirectory: "",
            camel2DashComponentName: false,
            style: (name) => {
              name = name.replace("@lilib/ui/", "");
              return `@lilib/styles/${name}`;
            },
          },
        ],
      ],
    };
  },

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@lilib/ui": path.resolve(__dirname, "../packages/ui/src"),
      "@lilib/themes": path.resolve(__dirname, "../packages/themes"),
      "@lilib/styles": path.resolve(__dirname, "../packages/styles/src"),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            implementation: require("postcss"),
          },
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            additionalData: '$cls-prefix: "li-"; $var-prefix: "li-";',
          },
        },
      ],
    });
    return config;
  },
};
