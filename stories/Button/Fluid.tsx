import React from "react";
import { Button, ButtonProps, Flexbox } from "@lilib/ui";
import { FiFileText, FiArrowRight } from "react-icons/fi";

function Fluid(props: ButtonProps) {
  return (
    <Flexbox direction="column" gap="4x" fluid align="flex-start">
      <Button {...props} fluid>
        Button
      </Button>
      <Button
        {...props}
        fluid
        startIcon={<FiFileText />}
        endIcon={<FiArrowRight />}
      >
        Next page
      </Button>
    </Flexbox>
  );
}

export default Fluid;
