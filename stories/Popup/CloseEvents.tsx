import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup arrowed content="This is a popup message" off="escape" placement="top">
        <Button>escape</Button>
      </Popup>
      <Popup arrowed content="This is a popup message" off="page-hide">
        <Button>page-hide</Button>
      </Popup>
      <Popup arrowed content="This is a popup message" off="window-blur" placement="top">
        <Button>window-blur</Button>
      </Popup>
      <Popup arrowed content="This is a popup message" off="document-click">
        <Button>document-click</Button>
      </Popup>
      <Popup
        arrowed
        content="This is a popup message"
        off={["escape", "page-hide", "window-blur", "document-click"]}
        placement="top"
      >
        <Button>all</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
