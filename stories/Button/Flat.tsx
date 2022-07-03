import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Flat(props: ButtonProps) {
  return (
    <>
      <Button {...props} variant="flat" intent={null}>
        Button
      </Button>{" "}
      <Button {...props} variant="flat" intent="major">
        Button
      </Button>{" "}
      <Button {...props} variant="flat" intent="minor">
        Button
      </Button>{" "}
      <Button {...props} variant="flat" intent="positive">
        Button
      </Button>{" "}
      <Button {...props} variant="flat" intent="alertive">
        Button
      </Button>{" "}
      <Button {...props} variant="flat" intent="negative">
        Button
      </Button>
    </>
  );
}

export default Flat;
