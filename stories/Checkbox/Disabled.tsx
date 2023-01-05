import React from "react";
import { Checkbox, CheckboxProps, Flexbox } from "@lilib/ui";

function Disabled(props: CheckboxProps) {
  return (
    <Flexbox gap="4x" align="center">
      <Checkbox {...props} disabled>
        Checkbox
      </Checkbox>
      <Checkbox {...props} disabled defaultChecked>
        Checkbox
      </Checkbox>
    </Flexbox>
  );
}

export default Disabled;
