import React from "react";
import { Flexbox, Switch, SwitchProps } from "@lilib/ui";

function Borderless(props: SwitchProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Switch checkedLabel="On" uncheckedLabel="Off" {...props} borderless />
      <Switch
        defaultChecked
        checkedLabel="On"
        uncheckedLabel="Off"
        {...props}
        borderless
      />
    </Flexbox>
  );
}

export default Borderless;
