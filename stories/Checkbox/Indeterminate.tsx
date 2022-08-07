import React from "react";
import { Checkbox, CheckboxProps } from "@lilib/ui";

function Indeterminate(props: CheckboxProps) {
  return <Checkbox {...props} indeterminate defaultChecked />;
}

export default Indeterminate;
