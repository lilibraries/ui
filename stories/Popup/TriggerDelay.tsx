import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup
      openDelay={500}
      closeDelay={500}
      content={<div style={{ padding: 16 }}>This is a popup message.</div>}
    >
      <Button style={{ borderStyle: "dashed" }}>
        Open after 500ms, and close after 500ms
      </Button>
    </Popup>
  );
}

export default Example;