export default {
  title: "Examples/Checkbox",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    indeterminate: {
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
export { default as Indeterminate } from "./Indeterminate";
export { default as Sizes } from "./Sizes";
export { default as Loading } from "./Loading";
export { default as Disabled } from "./Disabled";
