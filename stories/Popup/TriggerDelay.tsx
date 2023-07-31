import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup content="This is a popup message." openDelay={500} closeDelay={500}>
      <Button style={{ borderStyle: "dashed" }}>
        Open after 500ms, and close after 500ms
      </Button>
    </Popup>
  );
}

export default Example;
