import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <Flexbox gap="2x">
      <ArrowPopper on="click" placement="top">
        <Button>Click</Button>
      </ArrowPopper>
      <ArrowPopper on="hover">
        <Button>Hover</Button>
      </ArrowPopper>
      <ArrowPopper on="focus" placement="top">
        <Button>Focus</Button>
      </ArrowPopper>
      <ArrowPopper on="contextmenu">
        <Button>ContextMenu</Button>
      </ArrowPopper>
      <ArrowPopper on={["click", "hover", "focus", "contextmenu"]} placement="top">
        <Button>All</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
