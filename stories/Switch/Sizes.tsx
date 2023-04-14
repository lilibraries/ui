import React from "react";
import { Flexbox, Switch } from "@lilib/ui";
import { FiCheck, FiX } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Switch checkedLabel="🌛" uncheckedLabel="☀️" size="small" />
      <Switch checkedLabel={<FiCheck />} uncheckedLabel={<FiX />} size={null} />
      <Switch checkedLabel="On" uncheckedLabel="Off" size="large" />
    </Flexbox>
  );
}

export default Example;
