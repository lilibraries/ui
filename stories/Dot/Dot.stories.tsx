export default {
  title: "Examples/Dot",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    intent: {
      control: { type: "select" },
      options: [null, "major", "minor", "positive", "alertive", "negative"],
    },
    color: {
      control: { type: "text" },
    },
    animated: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Sizes } from "./Sizes";
export { default as Intents } from "./Intents";
export { default as CustomColor } from "./CustomColor";
export { default as Animated } from "./Animated";
