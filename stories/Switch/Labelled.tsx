import React from "react";
import { Flexbox, Switch, SwitchProps } from "@lilib/ui";
import { FiCheck, FiX } from "react-icons/fi";

function Labelled(props: SwitchProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Switch {...props} checkedLabel="🌛" uncheckedLabel="☀️" />
      <Switch {...props} checkedLabel={<FiCheck />} uncheckedLabel={<FiX />} />
      <Switch {...props} checkedLabel="On" uncheckedLabel="Off" />
    </Flexbox>
  );
}

export default Labelled;
