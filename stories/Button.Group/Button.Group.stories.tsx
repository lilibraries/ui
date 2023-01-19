export default {
  title: "Examples/Button.Group",
  argTypes: {
    vertical: {
      control: { type: "boolean" },
    },
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
    loadingPlacement: {
      control: { type: "select" },
      options: [null, "start", "center", "end"],
    },
  },
};

export { default as Example } from "./Example";
