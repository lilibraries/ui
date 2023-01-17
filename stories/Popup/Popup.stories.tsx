export default {
  title: "Examples/Popup",
  argTypes: {
    on: {
      control: { type: "select" },
      options: ["click", "hover", "focus", "contextmenu"],
    },
    offset: {
      control: { type: "number" },
    },
    strategy: {
      control: { type: "select" },
      options: ["fixed", "absolute"],
    },
    placement: {
      control: { type: "select" },
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
    },
    open: {
      control: { type: "boolean" },
    },
    defaultOpen: {
      control: { type: "boolean" },
    },
    hoverEnterDelay: {
      control: { type: "number" },
    },
    hoverLeaveDelay: {
      control: { type: "number" },
    },
    followPoint: {
      control: { type: "boolean" },
    },
    mountOnInit: {
      control: { type: "boolean" },
    },
    unmountOnClose: {
      control: { type: "boolean" },
    },
    closeOnEscape: {
      control: { type: "boolean" },
    },
    closeOnWindowBlur: {
      control: { type: "boolean" },
    },
    closeOnDocumentClick: {
      control: { type: "boolean" },
    },
  },
};

export { default as Basic } from "./Basic";
export { default as Placements } from "./Placements";
