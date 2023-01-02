export default {
  title: "Examples/Tag",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [null, "solid", "hollow"],
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
    borderless: {
      control: { type: "boolean" },
    },
    clickable: {
      control: { type: "boolean" },
    },
    clearable: {
      control: { type: "boolean" },
    },
    clearIcon: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Link } from "./Link";
export { default as Clickable } from "./Clickable";
export { default as Clearable } from "./Clearable";
export { default as Round } from "./Round";
export { default as LongTag } from "./LongTag";
export { default as Sizes } from "./Sizes";
export { default as Intents } from "./Intents";
export { default as Solid } from "./Solid";
export { default as Hollow } from "./Hollow";
