import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowPopper from "./ArrowPopper";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <ArrowPopper off="escape">
        <Button>escape</Button>
      </ArrowPopper>
      <ArrowPopper off="page-hide">
        <Button>page-hide</Button>
      </ArrowPopper>
      <ArrowPopper off="window-blur">
        <Button>window-blur</Button>
      </ArrowPopper>
      <ArrowPopper off="document-click">
        <Button>document-click</Button>
      </ArrowPopper>
      <ArrowPopper off={["escape", "page-hide", "window-blur", "document-click"]}>
        <Button>all</Button>
      </ArrowPopper>
    </Flexbox>
  );
}

export default Example;
