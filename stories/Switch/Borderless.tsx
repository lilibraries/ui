import React from "react";
import { Flexbox, Switch, SwitchProps } from "@lilib/ui";

function Borderless(props: SwitchProps) {
  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
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
      <Flexbox gap="2x" align="center">
        <Switch
          checkedLabel="On"
          uncheckedLabel="Off"
          {...props}
          disabled
          borderless
        />
        <Switch
          defaultChecked
          checkedLabel="On"
          uncheckedLabel="Off"
          {...props}
          disabled
          borderless
        />
      </Flexbox>
    </Flexbox>
  );
}

export default Borderless;
