import React from "react";
import { Button, Popper, PopperProps } from "@lilib/ui";

const popperStyle = {
  padding: "8px 16px",
  borderRadius: 8,
  color: "#fff",
  backgroundColor: "#808080",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
};

function Basic(props: PopperProps) {
  return (
    <Popper {...props} style={popperStyle} content="This is a tooltip message.">
      <Button>Click</Button>
    </Popper>
  );
}

export default Basic;
