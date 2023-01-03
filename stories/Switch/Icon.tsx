import React, { useState } from "react";
import { Switch, SwitchProps } from "@lilib/ui";
import { FiCheck, FiX } from "react-icons/fi";

function Icon(props: SwitchProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...props}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
      icon={checked ? <FiCheck /> : <FiX />}
    />
  );
}

export default Icon;
