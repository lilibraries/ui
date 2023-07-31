import React, { CSSProperties } from "react";
import { Popup } from "@lilib/ui";

const triggerStyle: CSSProperties = {
  height: 100,
  lineHeight: "100px",
  borderRadius: 8,
  textAlign: "center",
  border: "1px dashed rgba(128, 128, 128, 0.4)",
};

function Example() {
  return (
    <Popup
      content="This is a popup message."
      on="contextmenu"
      offset={0}
      arrowed={false}
      followPoint
      placement="bottom-start"
    >
      <div style={triggerStyle}>Right Click</div>
    </Popup>
  );
}

export default Example;
