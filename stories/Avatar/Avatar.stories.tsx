export default {
  title: "Examples/Avatar",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    image: {
      control: { type: "text" },
    },
    round: {
      control: { type: "boolean" },
    },
    color: {
      control: { type: "select" },
      options: [
        null,
        "red",
        "magenta",
        "purple",
        "indigo",
        "navy",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
        "brown",
        "gray",
      ],
    },
    outlined: {
      control: { type: "boolean" },
    },
    clickable: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Icon } from "./Icon";
export { default as Text } from "./Text";
export { default as Sizes } from "./Sizes";
export { default as CustomSize } from "./CustomSize";
export { default as Round } from "./Round";
export { default as Clickable } from "./Clickable";
export { default as Colors } from "./Colors";
