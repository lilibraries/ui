import React from "react";
import { Button, ButtonCommonProps } from "@lilib/ui";

function Link(props: ButtonCommonProps) {
  return (
    <Button<"a">
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
