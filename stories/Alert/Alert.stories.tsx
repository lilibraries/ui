export default {
  title: "Examples/Alert",
  argTypes: {
    intent: {
      control: { type: "select" },
      options: [null, "major", "minor", "positive", "alertive", "negative"],
    },
    icon: {
      control: { type: "text" },
    },
    open: {
      control: { type: "boolean" },
    },
    closable: {
      control: { type: "boolean" },
    },
    closeIcon: {
      control: { type: "text" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Icon } from "./Icon";
export { default as Closable } from "./Closable";
export { default as Controlled } from "./Controlled";
export { default as Intents } from "./Intents";
