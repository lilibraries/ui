import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Sizes(props: ButtonProps) {
  return (
    <>
      <Button {...props} size="small">
        Button
      </Button>{" "}
      <Button {...props} size={null}>
        Button
      </Button>{" "}
      <Button {...props} size="large">
        Button
      </Button>
    </>
  );
}

export default Sizes;
