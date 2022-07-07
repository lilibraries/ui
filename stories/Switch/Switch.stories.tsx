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
    disabled: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Labelled } from "./Labelled";
export { default as Sizes } from "./Sizes";
export { default as Loading } from "./Loading";
