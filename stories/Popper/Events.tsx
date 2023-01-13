import React from "react";
import { Button, Popper, PopperProps } from "@lilib/ui";

function Events(props: PopperProps) {
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
      <Popper {...props} on="click" content={tooltip} style={{ zIndex: 1000 }}>
        <Button>click</Button>
      </Popper>{" "}
      <Popper {...props} on="hover" content={tooltip} style={{ zIndex: 1000 }}>
        <Button>hover</Button>
      </Popper>{" "}
      <Popper {...props} on="focus" content={tooltip} style={{ zIndex: 1000 }}>
        <Button>focus</Button>
      </Popper>{" "}
      <Popper
        {...props}
        on="contextmenu"
        content={tooltip}
        style={{ zIndex: 1000 }}
      >
        <Button>contextmenu</Button>
      </Popper>
    </div>
  );
}

export default Events;
