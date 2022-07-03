import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Outlined(props: ButtonProps) {
  return (
    <>
      <Button {...props} variant="outlined" intent={null}>
        Button
      </Button>{" "}
      <Button {...props} variant="outlined" intent="major">
        Button
      </Button>{" "}
      <Button {...props} variant="outlined" intent="minor">
        Button
      </Button>{" "}
      <Button {...props} variant="outlined" intent="positive">
        Button
      </Button>{" "}
      <Button {...props} variant="outlined" intent="alertive">
        Button
      </Button>{" "}
      <Button {...props} variant="outlined" intent="negative">
        Button
      </Button>
    </>
  );
}

export default Outlined;
