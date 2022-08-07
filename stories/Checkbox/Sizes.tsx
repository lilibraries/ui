import React from "react";
import { Checkbox, CheckboxProps } from "@lilib/ui";

function Sizes(props: CheckboxProps) {
  return (
    <>
      <Checkbox {...props} size="small">
        Small
      </Checkbox>
      <br />
      <Checkbox {...props} size={null}>
        Normal
      </Checkbox>
      <br />
      <Checkbox {...props} size="large">
        Large
      </Checkbox>
    </>
  );
}

export default Sizes;
