import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "@lilib/ui";

function Basic(props: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    >
      Checkbox
    </Checkbox>
  );
}

export default Basic;
