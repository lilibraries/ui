import React, { useState } from "react";
import { Switch } from "@lilib/ui";
import { FiCheck, FiX } from "react-icons/fi";

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      icon={checked ? <FiCheck /> : <FiX />}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

export default Example;
