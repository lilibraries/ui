import React from "react";
import { Checkbox, CheckboxProps, Flexbox } from "@lilib/ui";

function Sizes(props: CheckboxProps) {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <Checkbox {...props} size="small">
        Small
      </Checkbox>
      <Checkbox {...props} size={null}>
        Normal
      </Checkbox>
      <Checkbox {...props} size="large">
        Large
      </Checkbox>
    </Flexbox>
  );
}

export default Sizes;
