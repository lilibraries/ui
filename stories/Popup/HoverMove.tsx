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
      on="hover"
      hideArrow
      followPoint
      disableAnimation
      offset={[20, 20]}
      hoverEnterDelay={0}
      hoverLeaveDelay={0}
      placement="bottom-start"
      content={<div style={{ padding: 16 }}>This is a popup content.</div>}
    >
      <div style={triggerStyle}>Hover Move</div>
    </Popup>
  );
}

export default Example;
