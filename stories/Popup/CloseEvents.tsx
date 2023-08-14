import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup
        content="This is a popup message."
        closeOnEscape
        closeOnClickOutside={false}
      >
        <Button>Escape Key</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        closeOnPageHide
        closeOnClickOutside={false}
      >
        <Button>Page Hide</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        closeOnWindowBlur
        closeOnClickOutside={false}
      >
        <Button>Window Blur</Button>
      </Popup>
      <Popup content="This is a popup message." closeOnClickOutside>
        <Button>Click Outside</Button>
      </Popup>
      <Popup
        content="This is a popup message."
        closeOnEscape
        closeOnPageHide
        closeOnWindowBlur
        closeOnClickOutside
      >
        <Button>All</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
