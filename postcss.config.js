module.exports = (ctx) => {
  return {
    plugins: {
      "postcss-flexbugs-fixes": {},
      "postcss-preset-env": {
        features: {
          "custom-properties": false,
          "system-ui-font-family": false,
          "logical-properties-and-values": false,
        },
        autoprefixer: {
          flexbox: "no-2009",
        },
      },
    },
  };
};
