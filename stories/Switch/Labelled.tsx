import React from "react";
import { Flexbox, Switch } from "@lilib/ui";
import { FiCheck, FiX } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Switch checkedLabel="🌛" uncheckedLabel="☀️" />
      <Switch checkedLabel={<FiCheck />} uncheckedLabel={<FiX />} />
      <Switch checkedLabel="On" uncheckedLabel="Off" />
    </Flexbox>
  );
}

export default Example;
