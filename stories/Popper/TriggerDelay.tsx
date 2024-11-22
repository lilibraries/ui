import React from "react";
import { Button } from "@lilib/ui";
import ArrowPopper from "./ArrowPopper";

function Example() {
  return (
    <ArrowPopper openDelay={500} closeDelay={500}>
      <Button>Click to show and hide after 500ms</Button>
    </ArrowPopper>
  );
}

export default Example;
