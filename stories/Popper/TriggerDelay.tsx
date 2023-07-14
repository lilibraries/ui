import React from "react";
import { Button } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <ArrowPopper openDelay={500} closeDelay={500}>
      <Button style={{ borderStyle: "dashed" }}>
        Open after 500ms, and close after 500ms
      </Button>
    </ArrowPopper>
  );
}

export default Example;
