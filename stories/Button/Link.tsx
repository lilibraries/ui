import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Link(props: ButtonProps) {
  return (
    <Button
      {...props}
      as="a"
      rel="noreferrer noopener"
      href="https://github.com/lilibraries/ui"
      target="_blank"
    >
      Github
    </Button>
  );
}

export default Link;
