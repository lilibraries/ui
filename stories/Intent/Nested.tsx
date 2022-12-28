import React from "react";
import { Intent, Button } from "@lilib/ui";

function Nested() {
  return (
    <Intent value="positive">
      <Button>Positive</Button>{" "}
      <Intent value="alertive">
        <Button>Alertive</Button>{" "}
        <Intent value="negative">
          <Button>Negative</Button>
        </Intent>
      </Intent>
    </Intent>
  );
}

export default Nested;