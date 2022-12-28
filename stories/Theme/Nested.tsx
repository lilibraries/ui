import React from "react";
import { Button, Theme } from "@lilib/ui";

function Nested() {
  return (
    <Theme value="dark" scoped>
      <div>
        <Button>Dark</Button>{" "}
        <Theme value="light" scoped>
          <Button>Light</Button>
        </Theme>
      </div>
    </Theme>
  );
}

export default Nested;
