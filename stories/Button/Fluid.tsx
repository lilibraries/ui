import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Fluid(props: ButtonProps) {
  return (
    <Button {...props} fluid>
      Button
    </Button>
  );
}

export default Fluid;
