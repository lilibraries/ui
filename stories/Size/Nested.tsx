import React from "react";
import { Size, Button } from "@lilib/ui";

function Nested() {
  return (
    <Size value="small">
      <Button>Small</Button>{" "}
      <Size value={null}>
        <Button>Default</Button>{" "}
        <Size value="large">
          <Button>Large</Button>
        </Size>
      </Size>
    </Size>
  );
}

export default Nested;
