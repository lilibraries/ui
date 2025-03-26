import React, { CSSProperties } from "react";
import BasicPopper from "./BasicPopper";

const triggerStyle: CSSProperties = {
  height: 100,
  lineHeight: "100px",
  borderRadius: 8,
  border: "1px dashed rgba(128, 128, 128, 0.4)",
  textAlign: "center",
};

function Example() {
  return (
    <BasicPopper on="hover" offset={20} placement="bottom-start" followPointer hoverEnterDelay={0} hoverLeaveDelay={0}>
      <div style={triggerStyle}>Hover Move</div>
    </BasicPopper>
  );
}

export default Example;
