import React, { CSSProperties } from "react";
import { PopperProps } from "@lilib/ui";
import BasicPopper from "./Basic";

const contentStyle: CSSProperties = {
  height: 100,
  lineHeight: "100px",
  borderRadius: 8,
  textAlign: "center",
  border: "1px solid rgba(128, 128, 128, 0.3)",
};

function RightClick(props: PopperProps) {
  return (
    <BasicPopper
      {...props}
      on="contextmenu"
      followPoint
      placement="bottom-start"
    >
      <div style={contentStyle}>Right Click</div>
    </BasicPopper>
  );
}

export default RightClick;
