import React from "react";
import { Tag } from "@lilib/ui";
import { FiCheck } from "react-icons/fi";

function Example() {
  return (
    <Tag clearable clearProps={{ icon: <FiCheck />, intent: "positive" }}>
      Check
    </Tag>
  );
}

export default Example;
