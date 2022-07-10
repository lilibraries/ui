export default {
  title: "Examples/Badge",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [null, "solid", "dotted"],
    },
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    intent: {
      control: { type: "select" },
      options: [null, "major", "minor", "positive", "alertive", "negative"],
    },
    round: {
      control: { type: "boolean" },
    },
    outlined: {
      control: { type: "boolean" },
    },
    animated: {
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
      options: [null, "top-start", "top-end", "bottom-start", "bottom-end"],
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Standalone } from "./Standalone";
export { default as CustomTag } from "./CustomTag";
export { default as Outlined } from "./Outlined";
export { default as Intents } from "./Intents";
export { default as Solid } from "./Solid";
export { default as Dotted } from "./Dotted";
export { default as Sizes } from "./Sizes";
export { default as Placements } from "./Placements";
export { default as Offset } from "./Offset";
