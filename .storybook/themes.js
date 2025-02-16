import { create } from "@storybook/theming";

const common = {
  brandTitle: "UI",
  appBorderRadius: 12,
  inputBorderRadius: 8,
  fontBase:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Open Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: 'Menlo, Monaco, Consolas, "Courier New", Courier, monospace',
};

export const light = create({
  ...common,
  base: "light",
  colorPrimary: "#1A6FE6",
  colorSecondary: "#1A6FE6",
  appBg: "#F6F7F8",
  appContentBg: "#FFF",
  appBorderColor: "#D7D8DB",
  textColor: "#303236",
  textInverseColor: "#FFF",
  barTextColor: "#676B72",
  barSelectedColor: "#1A6FE6",
  barBg: "#FFF",
  inputBg: "transparent",
  inputBorder: "#D7D8DB",
  inputTextColor: "#303236",
});

export const dark = create({
  ...common,
  base: "dark",
  colorPrimary: "#1A6FE6",
  colorSecondary: "#1A6FE6",
  appBg: "#242628",
  appContentBg: "#18191B",
  appBorderColor: "#55585E",
  textColor: "rgba(255, 255, 255, 0.9)",
  textInverseColor: "#000",
  barTextColor: "rgba(255, 255, 255, 0.6)",
  barSelectedColor: "#1A6FE6",
  barBg: "#18191B",
  inputBg: "transparent",
  inputBorder: "#55585E",
  inputTextColor: "rgba(255, 255, 255, 0.9)",
});
