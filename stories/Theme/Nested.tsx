import React from "react";
import { Button, Flexbox, Theme } from "@lilib/ui";

function Example() {
  return (
    <Theme scoped value="dark">
      <Flexbox gap="2x">
        <Button>Dark</Button>

        <Theme scoped value="light">
          <Button>Light</Button>
        </Theme>
      </Flexbox>
    </Theme>
  );
}

export default Example;
