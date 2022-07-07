import React from "react";
import { Switch, SwitchProps } from "@lilib/ui";

function Sizes(props: SwitchProps) {
  return (
    <>
      <Switch {...props} size="small" /> <Switch {...props} size={null} />{" "}
      <Switch {...props} size="large" />
    </>
  );
}

export default Sizes;
