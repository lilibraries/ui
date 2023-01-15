import React from "react";
import { Button, Flexbox, PopperProps } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Events(props: PopperProps) {
  return (
    <Flexbox gap="2x">
      <ArrowPopper {...props} on="click">
        <Button>Click</Button>
      </ArrowPopper>
      <ArrowPopper {...props} on="hover">
        <Button>Hover</Button>
      </ArrowPopper>
      <ArrowPopper {...props} on="focus">
        <Button>Focus</Button>
      </ArrowPopper>
      <ArrowPopper {...props} on="contextmenu">
        <Button>ContextMenu</Button>
      </ArrowPopper>
      <ArrowPopper {...props} on={["click", "hover", "focus", "contextmenu"]}>
        <Button>All</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Events;
