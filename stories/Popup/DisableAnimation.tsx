import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup content="This is a popup message" animeless>
      <Button>Click</Button>
    </Popup>
  );
}

export default Example;
