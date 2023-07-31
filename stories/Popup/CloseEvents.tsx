import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup
        content="This is a popup message."
        placement="top"
        closeOnEscape
        closeOnClickOutside={false}
      >
        <Button style={{ borderStyle: "dashed" }}>Escape Key</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        placement="top"
        closeOnPageHide
        closeOnClickOutside={false}
      >
        <Button style={{ borderStyle: "dashed" }}>Page Hide</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        closeOnWindowBlur
        closeOnClickOutside={false}
      >
        <Button style={{ borderStyle: "dashed" }}>Window Blur</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        placement="top"
        closeOnClickOutside
      >
        <Button style={{ borderStyle: "dashed" }}>Document Click</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        closeOnEscape
        closeOnPageHide
        closeOnWindowBlur
        closeOnClickOutside
      >
        <Button style={{ borderStyle: "dashed" }}>All</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
