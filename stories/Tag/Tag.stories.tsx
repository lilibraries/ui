export default {
  title: "Examples/Tag",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
    },
    variant: {
      control: { type: "select" },
      options: [null, "solid", "hollow"],
    },
    color: {
      control: { type: "select" },
      options: [
        undefined,
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
    round: {
      control: { type: "boolean" },
    },
    square: {
      control: { type: "boolean" },
    },
    borderless: {
      control: { type: "boolean" },
    },
    clickable: {
      control: { type: "boolean" },
    },
    clearable: {
      control: { type: "boolean" },
    },
    clearIcon: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Link } from "./Link";
export { default as Clickable } from "./Clickable";
export { default as Clearable } from "./Clearable";
export { default as Round } from "./Round";
export { default as Square } from "./Square";
export { default as LongTag } from "./LongTag";
export { default as Sizes } from "./Sizes";
export { default as Colors } from "./Colors";
export { default as Solid } from "./Solid";
export { default as Hollow } from "./Hollow";
