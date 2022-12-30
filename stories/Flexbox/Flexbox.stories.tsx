export default {
  title: "Examples/Flexbox",
  argTypes: {
    fluid: {
      control: { type: "boolean" },
    },
    direction: {
      control: { type: "select" },
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    gap: {
      control: { type: "select" },
      options: ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x"],
    },
    wrap: {
      control: { type: "select" },
      options: [true, false, "wrap", "nowrap", "wrap-reverse"],
    },
    align: {
      control: { type: "select" },
      options: ["center", "stretch", "baseline", "flex-end", "flex-start"],
    },
    justify: {
      control: { type: "select" },
      options: [
        "center",
        "flex-end",
        "flex-start",
        "space-around",
        "space-evenly",
        "space-between",
      ],
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Fluid } from "./Fluid";
export { default as Directions } from "./Directions";
export { default as Gaps } from "./Gaps";
export { default as Wrap } from "./Wrap";
export { default as Align } from "./Align";
export { default as Justify } from "./Justify";
