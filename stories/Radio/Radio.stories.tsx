export default {
  title: "Examples/Radio",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    value: {
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
    defaultChecked: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Sizes } from "./Sizes";
export { default as Loading } from "./Loading";
export { default as Disabled } from "./Disabled";
