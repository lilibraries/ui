import React, { useState } from "react";
import { Checkbox } from "@lilib/ui";

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)}>
      Checkbox
    </Checkbox>
  );
}

export default Example;
