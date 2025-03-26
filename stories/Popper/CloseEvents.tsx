import React from "react";
import { Button, Flexbox } from "@lilib/ui";
import ArrowedPopper from "./ArrowedPopper";

function Example() {
  return (
    <Flexbox gap="2x" wrap>
      <ArrowedPopper off="escape" placement="top">
        <Button>escape</Button>
      </ArrowedPopper>
      <ArrowedPopper off="page-hide">
        <Button>page-hide</Button>
      </ArrowedPopper>
      <ArrowedPopper off="window-blur" placement="top">
        <Button>window-blur</Button>
      </ArrowedPopper>
      <ArrowedPopper off="document-click">
        <Button>document-click</Button>
      </ArrowedPopper>
      <ArrowedPopper off={["escape", "page-hide", "window-blur", "document-click"]} placement="top">
        <Button>all</Button>
      </ArrowedPopper>
    </Flexbox>
  );
}

export default Example;
