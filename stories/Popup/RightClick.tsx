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
      on="contextmenu"
      hideArrow
      followPoint
      placement="bottom-start"
      content={<div style={{ padding: 16 }}>This is a popup message.</div>}
    >
      <div style={triggerStyle}>Right Click</div>
    </Popup>
  );
}

export default Example;
