import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup on="click" content="This is a popup message." placement="top">
        <Button style={{ borderStyle: "dashed" }}>Click</Button>
      </Popup>
      <Popup on="hover" content="This is a popup message.">
        <Button style={{ borderStyle: "dashed" }}>Hover</Button>
      </Popup>
      <Popup on="focus" content="This is a popup message." placement="top">
        <Button style={{ borderStyle: "dashed" }}>Focus</Button>
      </Popup>
      <Popup on="contextmenu" content="This is a popup message.">
        <Button style={{ borderStyle: "dashed" }}>ContextMenu</Button>
      </Popup>
      <Popup
        on={["click", "hover", "focus", "contextmenu"]}
        content="This is a popup message."
        placement="top"
      >
        <Button style={{ borderStyle: "dashed" }}>All</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
