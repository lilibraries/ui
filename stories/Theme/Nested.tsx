import React from "react";
import { Button, Flexbox, Theme } from "@lilib/ui";

function Nested() {
  return (
    <Theme value="dark" scoped>
      <Flexbox gap="2x" align="center">
        <Button>Dark</Button>

        <Theme value="light" scoped>
          <Button>Light</Button>
        </Theme>
      </Flexbox>
    </Theme>
  );
}

export default Nested;
