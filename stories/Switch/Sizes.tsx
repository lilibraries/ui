import React from "react";
import { Flexbox, Switch, SwitchProps } from "@lilib/ui";
import { FiCheck, FiX } from "react-icons/fi";

function Sizes(props: SwitchProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Switch checkedLabel="🌛" uncheckedLabel="☀️" {...props} size="small" />
      <Switch
        checkedLabel={<FiCheck />}
        uncheckedLabel={<FiX />}
        {...props}
        size={null}
      />
      <Switch checkedLabel="On" uncheckedLabel="Off" {...props} size="large" />
    </Flexbox>
  );
}

export default Sizes;
