import React from "react";
import { Button, Popup } from "@lilib/ui";

function Example() {
  return (
    <Popup
      content="This is a popup message"
      on="hover"
      placement="bottom-start"
      openDelay={500}
      closeDelay={500}
      hoverEnterDelay={500}
      hoverLeaveDelay={500}
    >
      <Button>Hover to show or hide after 1s</Button>
    </Popup>
  );
}

export default Example;
