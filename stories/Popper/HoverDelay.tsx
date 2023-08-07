import React from "react";
import { Button } from "@lilib/ui";
import ArrowPopper from "./Arrow";

function Example() {
  return (
    <ArrowPopper on="hover" hoverEnterDelay={500} hoverLeaveDelay={500}>
      <Button>Hover to show or hide after 500ms</Button>
    </ArrowPopper>
  );
}

export default Example;
