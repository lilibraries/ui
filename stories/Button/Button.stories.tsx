export default {
  title: "Examples/Button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [null, "outlined", "flat"],
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
    loadingPosition: {
      control: { type: "select" },
      options: [null, "start", "center", "end"],
    },
  },
};

export { default as Basic } from "./Basic";
export { default as WithIcons } from "./WithIcons";
export { default as IconOnly } from "./IconOnly";
export { default as AsLink } from "./AsLink";
export { default as Intents } from "./Intents";
export { default as Outlined } from "./Outlined";
export { default as Flat } from "./Flat";
export { default as Sizes } from "./Sizes";
export { default as Fluid } from "./Fluid";
export { default as Round } from "./Round";
export { default as Truncated } from "./Truncated";
export { default as Loading } from "./Loading";
export { default as Disabled } from "./Disabled";
