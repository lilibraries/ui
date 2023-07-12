import React, { CSSProperties } from "react";
import BasicPopper from "./Basic";

const triggerStyle: CSSProperties = {
  height: 100,
  lineHeight: "100px",
  borderRadius: 8,
  textAlign: "center",
  border: "1px dashed rgba(128, 128, 128, 0.4)",
};

function Example() {
  return (
    <BasicPopper
      on="hover"
      followPoint
      offset={[20, 20]}
      hoverEnterDelay={0}
      hoverLeaveDelay={0}
      placement="bottom-start"
    >
      <div style={triggerStyle}>Hover Move</div>
    </BasicPopper>
  );
}

export default Example;
