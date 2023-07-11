import React from "react";
import { Alert } from "@lilib/ui";
import { FiAlertCircle } from "react-icons/fi";

function Example() {
  return <Alert icon={<FiAlertCircle />}>This is an example alert.</Alert>;
}

export default Example;
