import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup
      disableAnimation
      content={<div style={{ padding: 16 }}>This is a popup message.</div>}
    >
      <Button style={{ borderStyle: "dashed" }}>Click</Button>
    </Popup>
  );
}

export default Example;
