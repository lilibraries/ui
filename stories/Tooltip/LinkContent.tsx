import React from "react";
import { Button, Tooltip } from "@lilib/ui";

function Example() {
  return (
    <Tooltip
      content={
        <a href="https://github.com/lilibraries/ui" target="_blank" rel="noreferrer">
          https://github.com/lilibraries/ui
        </a>
      }
    >
      <Button>Github</Button>
    </Tooltip>
  );
}

export default Example;
