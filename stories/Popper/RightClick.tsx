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
    <BasicPopper on="context-menu" placement="bottom-start" followPointer>
      <div style={triggerStyle}>Right Click</div>
    </BasicPopper>
  );
}

export default Example;
