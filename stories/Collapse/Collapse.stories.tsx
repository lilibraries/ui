export default {
  title: "Examples/Collapse",
  argTypes: {
    open: { control: { type: "boolean" } },
    openDelay: { control: { type: "number" } },
    closeDelay: { control: { type: "number" } },
    appearOnOpen: { control: { type: "boolean" } },
    unmountOnClose: { control: { type: "boolean" } },
  },
};

export { default as Basic } from "./Basic";
export { default as ScrollElement } from "./ScrollElement";
