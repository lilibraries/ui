import React from "react";
import { Checkbox, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="4x" align="center">
      <Checkbox disabled>Checkbox</Checkbox>
      <Checkbox disabled defaultChecked>
        Checkbox
      </Checkbox>
    </Flexbox>
  );
}

export default Example;
