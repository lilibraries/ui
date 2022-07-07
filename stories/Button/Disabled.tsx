import React from "react";
import { Button, ButtonProps } from "@lilib/ui";

function Disalbed(props: ButtonProps) {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button {...props} disabled variant="solid" intent={null}>
          Button
        </Button>{" "}
        <Button {...props} disabled variant="solid" intent="major">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="solid" intent="minor">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="solid" intent="positive">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="solid" intent="alertive">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="solid" intent="negative">
          Button
        </Button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Button {...props} disabled intent={null}>
          Button
        </Button>{" "}
        <Button {...props} disabled intent="major">
          Button
        </Button>{" "}
        <Button {...props} disabled intent="minor">
          Button
        </Button>{" "}
        <Button {...props} disabled intent="positive">
          Button
        </Button>{" "}
        <Button {...props} disabled intent="alertive">
          Button
        </Button>{" "}
        <Button {...props} disabled intent="negative">
          Button
        </Button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Button {...props} disabled variant="outlined" intent={null}>
          Button
        </Button>{" "}
        <Button {...props} disabled variant="outlined" intent="major">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="outlined" intent="minor">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="outlined" intent="positive">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="outlined" intent="alertive">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="outlined" intent="negative">
          Button
        </Button>
      </div>

      <div>
        <Button {...props} disabled variant="flat" intent={null}>
          Button
        </Button>{" "}
        <Button {...props} disabled variant="flat" intent="major">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="flat" intent="minor">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="flat" intent="positive">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="flat" intent="alertive">
          Button
        </Button>{" "}
        <Button {...props} disabled variant="flat" intent="negative">
          Button
        </Button>
      </div>
    </>
  );
}

export default Disalbed;
