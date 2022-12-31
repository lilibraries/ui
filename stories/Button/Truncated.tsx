import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Truncated(props: ButtonProps) {
  return (
    <Button {...props} truncated style={{ width: 240 }}>
      This is a very long button which may be truncated
    </Button>
  );
}

export default Truncated;
