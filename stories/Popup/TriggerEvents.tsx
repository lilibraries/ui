import React from "react";
import { Button, Flexbox, Popup } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x">
      <Popup arrowed on="click" content="This is a popup message" placement="top">
        <Button>click</Button>
      </Popup>
      <Popup arrowed on="hover" content="This is a popup message">
        <Button>hover</Button>
      </Popup>
      <Popup arrowed on="focus" content="This is a popup message" placement="top">
        <Button>focus</Button>
      </Popup>
      <Popup arrowed on="context-menu" content="This is a popup message">
        <Button>context-menu</Button>
      </Popup>
      <Popup arrowed on={["click", "hover", "focus", "context-menu"]} content="This is a popup message" placement="top">
        <Button>all</Button>
      </Popup>
    </Flexbox>
  );
}

export default Example;
