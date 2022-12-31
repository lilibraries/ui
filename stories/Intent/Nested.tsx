import React from "react";
import { Intent, Button, Flexbox } from "@lilib/ui";

function Nested() {
  return (
    <Flexbox gap="2x" align="center">
      <Intent value="positive">
        <Button>Positive</Button>

        <Intent value="alertive">
          <Button>Alertive</Button>

          <Intent value="negative">
            <Button>Negative</Button>
          </Intent>
        </Intent>
      </Intent>
    </Flexbox>
  );
}

export default Nested;
