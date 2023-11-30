import React, { useState } from "react";
import { Button, Flexbox, Switch } from "@lilib/ui";

function Example() {
  const [disabled, setDisabled] = useState(false);
  const [borderless, setBorderless] = useState(false);

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Flexbox gap="2x" align="center">
        <Switch
          checkedLabel="Disabled"
          uncheckedLabel="Enabled"
          checked={disabled}
          onChange={(event) => setDisabled(event.target.checked)}
        />
        <Switch
          checkedLabel="Borderless"
          uncheckedLabel="Bordered"
          checked={borderless}
          onChange={(event) => setBorderless(event.target.checked)}
        />
      </Flexbox>

      <Flexbox gap="2x" align="center" wrap>
        <Button color="red" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="magenta" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="purple" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="indigo" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="navy" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="blue" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="cyan" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="teal" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="green" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="lime" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="yellow" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="orange" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="brown" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button color="gray" disabled={disabled} borderless={borderless}>
          Button
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
