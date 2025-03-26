import React from "react";
import { Button } from "@lilib/ui";
import ArrowedPopper from "./ArrowedPopper";

function Example() {
  return (
    <ArrowedPopper openDelay={500} closeDelay={500}>
      <Button>Click</Button>
    </ArrowedPopper>
  );
}

export default Example;
