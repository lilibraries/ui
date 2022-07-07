import React from "react";
import { Switch, SwitchProps } from "@lilib/ui";

function Loading(props: SwitchProps) {
  return <Switch {...props} loading />;
}

export default Loading;
