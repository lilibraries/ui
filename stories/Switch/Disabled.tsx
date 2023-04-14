import React from "react";
import { Flexbox, Switch } from "@lilib/ui";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Switch checkedLabel="On" uncheckedLabel="Off" disabled />
      <Switch checkedLabel="On" uncheckedLabel="Off" disabled defaultChecked />
    </Flexbox>
  );
}

export default Example;
