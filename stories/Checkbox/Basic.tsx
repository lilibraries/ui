import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "@lilib/ui";

function Basic(props: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ fontSize: 16, lineHeight: 1.5 }}>
      <Checkbox
        {...props}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      >
        Checkbox
      </Checkbox>
    </div>
  );
}

export default Basic;
