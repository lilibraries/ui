import React from "react";
import { Flexbox, Switch, SwitchProps } from "@lilib/ui";

function Sizes(props: SwitchProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Switch {...props} size="small" />
      <Switch {...props} size={null} />
      <Switch {...props} size="large" />
    </Flexbox>
  );
}

export default Sizes;
