import React from "react";
import { Duration, Flexbox, Spinner } from "@lilib/ui";

function Example() {
  return (
    <Duration scoped slow={3000}>
      <Flexbox gap="2x" align="center">
        <Spinner spinning />

        <Duration scoped slow={1000}>
          <Spinner spinning />
        </Duration>
      </Flexbox>
    </Duration>
  );
}

export default Example;
