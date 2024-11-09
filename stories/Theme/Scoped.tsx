import React from "react";
import { Button, Theme } from "@lilib/ui";

function Example() {
  return (
    <Theme scoped value="dark">
      <Button>Always Dark</Button>
    </Theme>
  );
}

export default Example;
