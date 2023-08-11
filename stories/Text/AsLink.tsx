import React from "react";
import { Text } from "@lilib/ui";

function Example() {
  return (
    <Text
      as="a"
      rel="noreferrer noopener"
      href="https://github.com/lilibraries/ui"
      target="_blank"
      intent="major"
      hoverable
    >
      Github
    </Text>
  );
}

export default Example;
