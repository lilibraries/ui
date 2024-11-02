import React, { useState } from "react";
import { Switch } from "@lilib/ui";

function Example() {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onChange={(event) => setChecked(event.target.checked)} />;
}

export default Example;
