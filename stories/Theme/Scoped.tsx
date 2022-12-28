import React from "react";
import { Button, Theme } from "@lilib/ui";

function Scoped() {
  return (
    <Theme value="dark" scoped>
      <Button>Always dark</Button>
    </Theme>
  );
}

export default Scoped;
