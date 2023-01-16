export default {
  title: "Examples/Avatar.Group",
  argTypes: {
    size: {
      control: { type: "select" },
      options: [null, "small", "large"],
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

export { default as Example } from "./Example";
