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
    <BasicPopper on="contextmenu" followPoint placement="bottom-start">
      <div style={triggerStyle}>Right Click</div>
    </BasicPopper>
  );
}

export default Example;
