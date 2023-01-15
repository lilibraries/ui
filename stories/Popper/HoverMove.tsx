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

function HoverMove(props: PopperProps) {
  return (
    <BasicPopper
      {...props}
      on="hover"
      followPoint
      offset={[20, 20]}
      hoverEnterDelay={0}
      hoverLeaveDelay={0}
      placement="bottom-start"
    >
      <div style={contentStyle}>Hover Move</div>
    </BasicPopper>
  );
}

export default HoverMove;
