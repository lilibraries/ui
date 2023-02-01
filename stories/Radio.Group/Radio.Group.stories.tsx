export default {
  title: "Examples/Radio.Group",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    defaultValue: {
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
  },
};

export { default as Example } from "./Example";
