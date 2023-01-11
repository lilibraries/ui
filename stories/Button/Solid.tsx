import React, { useState } from "react";
import { Button, ButtonCommonProps, Flexbox, Switch } from "@lilib/ui";

function Solid(props: ButtonCommonProps) {
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
        <Button
          {...props}
          variant="solid"
          intent={null}
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          {...props}
          variant="solid"
          intent="major"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          {...props}
          variant="solid"
          intent="minor"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          {...props}
          variant="solid"
          intent="positive"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          {...props}
          variant="solid"
          intent="alertive"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          {...props}
          variant="solid"
          intent="negative"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Solid;
