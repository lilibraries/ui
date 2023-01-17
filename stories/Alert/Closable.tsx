import React from "react";
import { Alert, AlertProps } from "@lilib/ui";

function Closable(props: AlertProps) {
  return (
    <Alert {...props} closable>
      This is an example alert.
    </Alert>
  );
}

export default Closable;
