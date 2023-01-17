import React from "react";
import { Alert, AlertProps } from "@lilib/ui";

function Basic(props: AlertProps) {
  return <Alert {...props}>This is an example alert.</Alert>;
}

export default Basic;
