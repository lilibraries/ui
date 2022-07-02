export default {
  title: "Examples/Loader",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    icon: {
      control: { type: "text" },
    },
    message: {
      control: { type: "text" },
    },
    delay: {
      control: { type: "number" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Config } from "./Config";
export { default as CustomIcon } from "./CustomIcon";
export { default as Delay } from "./Delay";
export { default as Sizes } from "./Sizes";
export { default as Standalone } from "./Standalone";
