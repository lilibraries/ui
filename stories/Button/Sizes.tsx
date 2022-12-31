import React from "react";
import { Button, ButtonProps, Flexbox } from "@lilib/ui";

function Sizes(props: ButtonProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Button {...props} size="small">
        Button
      </Button>
      <Button {...props} size={null}>
        Button
      </Button>
      <Button {...props} size="large">
        Button
      </Button>
    </Flexbox>
  );
}

export default Sizes;
