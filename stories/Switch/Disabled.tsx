import React from "react";
import { Flexbox, Switch, SwitchProps } from "@lilib/ui";

function Disabled(props: SwitchProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Switch checkedLabel="On" uncheckedLabel="Off" {...props} disabled />
      <Switch
        defaultChecked
        checkedLabel="On"
        uncheckedLabel="Off"
        {...props}
        disabled
      />
    </Flexbox>
  );
}

export default Disabled;
