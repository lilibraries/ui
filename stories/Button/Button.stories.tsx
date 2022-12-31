export default {
  title: "Examples/Button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [null, "solid", "hollow"],
    },
    intent: {
      control: { type: "select" },
      options: [null, "major", "minor", "positive", "alertive", "negative"],
    },
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    fluid: {
      control: { type: "boolean" },
    },
    round: {
      control: { type: "boolean" },
    },
    truncated: {
      control: { type: "boolean" },
    },
    borderless: {
      control: { type: "boolean" },
    },
    active: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    iconOnly: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
    loadingDelay: {
      control: { type: "number" },
    },
    loadingPosition: {
      control: { type: "select" },
      options: [null, "start", "center", "end"],
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Link } from "./Link";
export { default as Icons } from "./Icons";
export { default as Fluid } from "./Fluid";
export { default as Round } from "./Round";
export { default as Truncated } from "./Truncated";
export { default as Loading } from "./Loading";
export { default as Sizes } from "./Sizes";
export { default as Intents } from "./Intents";
export { default as Solid } from "./Solid";
export { default as Hollow } from "./Hollow";
