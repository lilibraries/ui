import React from "react";
import { Button, Theme } from "@lilib/ui";

function Scoped() {
  return (
    <Theme scoped value="dark">
      <Button>Always dark</Button>
    </Theme>
  );
}

export default Scoped;
