import React from "react";
import { Duration, Spinner } from "@lilib/ui";

function Scoped() {
  return (
    <Duration scoped slow={3000}>
      <Spinner spinning />
    </Duration>
  );
}

export default Scoped;
