export default {
  title: "Examples/Button.Group",
  argTypes: {
    vertical: {
      control: { type: "boolean" },
    },
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
export { default as IconOnly } from "./IconOnly";
export { default as Mixed } from "./Mixed";
export { default as Vertical } from "./Vertical";
export { default as Round } from "./Round";
export { default as Fluid } from "./Fluid";
