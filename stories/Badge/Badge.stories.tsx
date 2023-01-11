export default {
  title: "Examples/Badge",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    variant: {
      control: { type: "select" },
      options: [null, "solid", "dotted"],
    },
    color: {
      control: { type: "select" },
      options: [
        null,
        "red",
        "magenta",
        "purple",
        "indigo",
        "navy",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
        "brown",
        "gray",
      ],
    },
    round: {
      control: { type: "boolean" },
    },
    borderless: {
      control: { type: "boolean" },
    },
    animated: {
      control: { type: "boolean" },
    },
    outlined: {
      control: { type: "boolean" },
    },
    count: {
      control: { type: "number" },
    },
    maxCount: {
      control: { type: "number" },
    },
    showZero: {
      control: { type: "boolean" },
    },
    invisible: {
      control: { type: "boolean" },
    },
    placement: {
      control: { type: "select" },
      options: ["top-start", "top-end", "bottom-start", "bottom-end"],
    },
    offset: {
      control: { type: "text" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Standalone } from "./Standalone";
export { default as CustomTag } from "./CustomTag";
export { default as Placements } from "./Placements";
export { default as Offset } from "./Offset";
export { default as Outlined } from "./Outlined";
export { default as Sizes } from "./Sizes";
export { default as Colors } from "./Colors";
export { default as Solid } from "./Solid";
export { default as Dotted } from "./Dotted";
