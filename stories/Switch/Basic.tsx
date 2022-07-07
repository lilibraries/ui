import React, { useState } from "react";
import { Switch, SwitchProps } from "@lilib/ui";

function Basic(props: SwitchProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...props}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

export default Basic;
