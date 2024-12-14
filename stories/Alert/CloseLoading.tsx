import React from "react";
import { Alert } from "@lilib/ui";

function Example() {
  return (
    <Alert open closable closeProps={{ loading: true }}>
      This is an example alert.
    </Alert>
  );
}

export default Example;
