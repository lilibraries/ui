import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Intents(props: ButtonProps) {
  return (
    <>
      <Button {...props} intent={null}>
        Button
      </Button>{" "}
      <Button {...props} intent="major">
        Button
      </Button>{" "}
      <Button {...props} intent="minor">
        Button
      </Button>{" "}
      <Button {...props} intent="positive">
        Button
      </Button>{" "}
      <Button {...props} intent="alertive">
        Button
      </Button>{" "}
      <Button {...props} intent="negative">
        Button
      </Button>
    </>
  );
}

export default Intents;
