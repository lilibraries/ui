export default {
  title: "Examples/Spinner",
  argTypes: {
    icon: { control: { type: "text" } },
    delay: { control: { type: "number" } },
    spinning: { control: { type: "boolean" } },
    contained: { control: { type: "boolean" } },
    startSpace: { control: { type: "boolean" } },
    endSpace: { control: { type: "boolean" } },
  },
};

export { default as Basic } from "./Basic";
export { default as Contained } from "./Contained";
export { default as CustomIcon } from "./CustomIcon";
export { default as Delay } from "./Delay";
export { default as Config } from "./Config";
