export default {
  title: "Examples/Switch",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    icon: {
      control: { type: "text" },
    },
    checkedLabel: {
      control: { type: "text" },
    },
    uncheckedLabel: {
      control: { type: "text" },
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
    disabled: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Icon } from "./Icon";
export { default as Labelled } from "./Labelled";
export { default as Sizes } from "./Sizes";
export { default as Loading } from "./Loading";
export { default as Disabled } from "./Disabled";
export { default as Borderless } from "./Borderless";
