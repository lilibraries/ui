import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup content="This is a popup message." on="hover" hoverEnterDelay={500} hoverLeaveDelay={500}>
      <Button>Hover to show or hide after 500ms</Button>
    </Popup>
  );
}

export default Example;
