import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup on="click" content="This is a popup message." placement="top">
        <Button>Click</Button>
      </Popup>
      <Popup on="hover" content="This is a popup message.">
        <Button>Hover</Button>
      </Popup>
      <Popup on="focus" content="This is a popup message." placement="top">
        <Button>Focus</Button>
      </Popup>
      <Popup on="contextmenu" content="This is a popup message.">
        <Button>ContextMenu</Button>
      </Popup>
      <Popup
        on={["click", "hover", "focus", "contextmenu"]}
        content="This is a popup message."
        placement="top"
      >
        <Button>All</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
