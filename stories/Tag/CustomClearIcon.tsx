import React from "react";
import { Tag } from "@lilib/ui";
import { FiTrash2 } from "react-icons/fi";

function Example() {
  return (
    <Tag clearable clearProps={{ icon: <FiTrash2 />, intent: "negative" }}>
      Tag
    </Tag>
  );
}

export default Example;
