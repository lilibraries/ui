import { create } from "@storybook/theming";

const common = {
  brandTitle: "UI",
  appBorderRadius: 8,
  inputBorderRadius: 8,
  fontBase:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Open Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: 'Menlo, Monaco, Consolas, "Courier New", Courier, monospace',
};

export const light = create({
  ...common,
  base: "light",
  colorPrimary: "#0b62da",
  colorSecondary: "#0b62da",
  appBg: "#f2f2f3",
  appContentBg: "#fff",
  appBorderColor: "#c9cbcf",
  textColor: "#303236",
  textInverseColor: "#fff",
  barTextColor: "#797e86",
  barSelectedColor: "#0b62da",
  barBg: "#fff",
  inputBg: "transparent",
  inputBorder: "#c9cbcf",
  inputTextColor: "#303236",
});

export const dark = create({
  ...common,
  base: "dark",
  colorPrimary: "#3c81e1",
  colorSecondary: "#3c81e1",
  appBg: "#18191b",
  appContentBg: "#242628",
  appBorderColor: "#494c50",
  textColor: "#d7d8db",
  textInverseColor: "#000",
  barTextColor: "#797e86",
  barSelectedColor: "#3c81e1",
  barBg: "#242628",
  inputBg: "transparent",
  inputBorder: "#494c50",
  inputTextColor: "#d7d8db",
});
