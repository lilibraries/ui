import React from "react";
import { Switch, SwitchProps } from "@lilib/ui";
import { FiCheck, FiSettings, FiX } from "react-icons/fi";

function Labelled(props: SwitchProps) {
  return (
    <>
      <Switch {...props} icon={<FiSettings />} />{" "}
      <Switch {...props} checkedLabel="🌛" uncheckedLabel="☀️" />{" "}
      <Switch {...props} checkedLabel={<FiCheck />} uncheckedLabel={<FiX />} />{" "}
      <Switch {...props} checkedLabel="On" uncheckedLabel="Off" />
    </>
  );
}

export default Labelled;
