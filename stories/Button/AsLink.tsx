import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function AsLink(props: ButtonProps) {
  return (
    <Button
      {...props}
      as="a"
      target="_blank"
      href="https://github.com/lilibraries/ui"
    >
      Github
    </Button>
  );
}

export default AsLink;
