import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <Flexbox gap="2x">
      <ArrowPopper on="click" placement="top">
        <Button style={{ borderStyle: "dashed" }}>Click</Button>
      </ArrowPopper>
      <ArrowPopper on="hover">
        <Button style={{ borderStyle: "dashed" }}>Hover</Button>
      </ArrowPopper>
      <ArrowPopper on="focus" placement="top">
        <Button style={{ borderStyle: "dashed" }}>Focus</Button>
      </ArrowPopper>
      <ArrowPopper on="contextmenu">
        <Button style={{ borderStyle: "dashed" }}>ContextMenu</Button>
      </ArrowPopper>
      <ArrowPopper
        on={["click", "hover", "focus", "contextmenu"]}
        placement="top"
      >
        <Button style={{ borderStyle: "dashed" }}>All</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
