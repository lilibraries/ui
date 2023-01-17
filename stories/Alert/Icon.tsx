import React from "react";
import { Alert, AlertProps } from "@lilib/ui";
import { FiSmile } from "react-icons/fi";

function Icon(props: AlertProps) {
  return (
    <Alert {...props} icon={<FiSmile />}>
      This is an example alert.
    </Alert>
  );
}

export default Icon;
