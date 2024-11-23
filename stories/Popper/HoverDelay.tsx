import React from "react";
import { Button } from "@lilib/ui";
import ArrowPopper from "./ArrowPopper";

function Example() {
  return (
    <ArrowPopper on="hover" openDelay={500} closeDelay={500} hoverEnterDelay={500} hoverLeaveDelay={500}>
      <Button>Hover to show or hide after 500ms</Button>
    </ArrowPopper>
  );
}

export default Example;
