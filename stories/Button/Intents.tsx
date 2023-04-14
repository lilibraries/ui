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

      <Flexbox gap="2x" align="center">
        <Button intent={null} disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button intent="major" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button intent="minor" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button intent="positive" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button intent="alertive" disabled={disabled} borderless={borderless}>
          Button
        </Button>
        <Button intent="negative" disabled={disabled} borderless={borderless}>
          Button
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
