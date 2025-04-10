import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup content="This is a popup message" placement="bottom-start" openDelay={500} closeDelay={500}>
      <Button>Click</Button>
    </Popup>
  );
}

export default Example;
