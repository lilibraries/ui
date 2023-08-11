import React from "react";
import { Flexbox, Text } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" align="baseline" wrap>
      <Text size="small">Small</Text>
      <Text size="smaller">Smaller</Text>
      <Text size="larger">Larger</Text>
      <Text size="large">Large</Text>
    </Flexbox>
  );
}

export default Example;
