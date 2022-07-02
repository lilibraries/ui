export default {
  title: "Examples/Transition",
  argTypes: {
    enterDelay: {
      control: { type: "number" },
    },
    exitDelay: {
      control: { type: "number" },
    },
    appearOnEnter: {
      control: { type: "boolean" },
    },
    unmountOnExit: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as CSSTransition } from "./CSSTransition";
