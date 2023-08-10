import { create } from "@storybook/theming";

const common = {
  brandTitle: "UI",
  appBorderRadius: 8,
  inputBorderRadius: 8,
  fontBase:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Open Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: 'Monaco, Menlo, Consolas, "Courier New", Courier, monospace',
};

export const light = create({
  ...common,
  base: "light",
  colorPrimary: "#1A6FE6",
  colorSecondary: "#1A6FE6",
  appBg: "#f2f2f3",
  appContentBg: "#fff",
  appBorderColor: "#c9cbcf",
  textColor: "rgba(0, 0, 0, 0.8)",
  textInverseColor: "#fff",
  barTextColor: "rgba(0, 0, 0, 0.6)",
  barSelectedColor: "#1A6FE6",
  barBg: "#fff",
  inputBg: "transparent",
  inputBorder: "#c9cbcf",
  inputTextColor: "rgba(0, 0, 0, 0.8)",
});

export const dark = create({
  ...common,
  base: "dark",
  colorPrimary: "#488CEB",
  colorSecondary: "#488CEB",
  appBg: "#242628",
  appContentBg: "#18191b",
  appBorderColor: "#494c50",
  textColor: "rgba(255, 255, 255, 0.8)",
  textInverseColor: "#000",
  barTextColor: "#797e86",
  barSelectedColor: "#488CEB",
  barBg: "#18191b",
  inputBg: "transparent",
  inputBorder: "#494c50",
  inputTextColor: "rgba(255, 255, 255, 0.8)",
});
