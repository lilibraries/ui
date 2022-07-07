import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Solid(props: ButtonProps) {
  return (
    <>
      <Button {...props} variant="solid" intent={null}>
        Button
      </Button>{" "}
      <Button {...props} variant="solid" intent="major">
        Button
      </Button>{" "}
      <Button {...props} variant="solid" intent="minor">
        Button
      </Button>{" "}
      <Button {...props} variant="solid" intent="positive">
        Button
      </Button>{" "}
      <Button {...props} variant="solid" intent="alertive">
        Button
      </Button>{" "}
      <Button {...props} variant="solid" intent="negative">
        Button
      </Button>
    </>
  );
}

export default Solid;
