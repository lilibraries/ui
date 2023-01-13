import React from "react";
import { Popper, PopperProps } from "@lilib/ui";

function RightClick(props: PopperProps) {
  const tooltip = (
    <div
      style={{
        padding: 16,
        borderRadius: 4,
        color: "#fff",
        backgroundColor: "#666",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      This is a tip message.
    </div>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <Popper
        {...props}
        on="contextmenu"
        followPoint
        placement="bottom-start"
        content={tooltip}
        style={{ zIndex: 1000 }}
      >
        <div
          style={{
            height: 100,
            lineHeight: "100px",
            borderRadius: 4,
            border: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          Right Click
        </div>
      </Popper>
    </div>
  );
}

export default RightClick;
