import React from "react";
import { Duration, Spinner } from "@lilib/ui";

function Nested() {
  return (
    <Duration scoped slow={3000}>
      <div>
        <Spinner spinning />{" "}
        <Duration scoped slow={1000}>
          <Spinner spinning />
        </Duration>
      </div>
    </Duration>
  );
}

export default Nested;
