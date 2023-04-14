import React from "react";
import { Duration, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Duration scoped slow={3000}>
      <Spinner spinning />
    </Duration>
  );
}

export default Example;
