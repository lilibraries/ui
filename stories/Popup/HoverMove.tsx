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
      content="This is a popup content."
      on="hover"
      placement="bottom-start"
      offset={[20, 20]}
      animeless
      followPointer
      hoverEnterDelay={0}
      hoverLeaveDelay={0}
    >
      <div style={triggerStyle}>Hover Move</div>
    </Popup>
  );
}

export default Example;
