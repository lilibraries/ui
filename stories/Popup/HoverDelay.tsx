import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup
      on="hover"
      hoverEnterDelay={500}
      hoverLeaveDelay={500}
      content={<div style={{ padding: 16 }}>This is a popup message.</div>}
    >
      <Button style={{ borderStyle: "dashed" }}>
        Hover to show or hide after 500ms
      </Button>
    </Popup>
  );
}

export default Example;
