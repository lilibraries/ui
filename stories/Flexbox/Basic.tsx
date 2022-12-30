import React from "react";
import { Button, Flexbox, FlexboxProps } from "@lilib/ui";

function Basic(props: FlexboxProps) {
  return (
    <Flexbox gap="4x" {...props}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Flexbox>
  );
}

export default Basic;
