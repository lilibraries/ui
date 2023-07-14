import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

const content = <div style={{ padding: 16 }}>This is a popup message.</div>;

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup on="click" content={content} placement="top">
        <Button style={{ borderStyle: "dashed" }}>Click</Button>
      </Popup>
      <Popup on="hover" content={content}>
        <Button style={{ borderStyle: "dashed" }}>Hover</Button>
      </Popup>
      <Popup on="focus" content={content} placement="top">
        <Button style={{ borderStyle: "dashed" }}>Focus</Button>
      </Popup>
      <Popup on="contextmenu" content={content}>
        <Button style={{ borderStyle: "dashed" }}>ContextMenu</Button>
      </Popup>
      <Popup
        on={["click", "hover", "focus", "contextmenu"]}
        content={content}
        placement="top"
      >
        <Button style={{ borderStyle: "dashed" }}>All</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
