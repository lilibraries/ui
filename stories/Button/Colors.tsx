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

      <Flexbox gap="2x" align="center" wrap>
        <Button
          variant="solid"
          color="red"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="magenta"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="purple"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="indigo"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="navy"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="blue"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="cyan"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="teal"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="green"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="lime"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="yellow"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="orange"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="brown"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="solid"
          color="gray"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
      </Flexbox>

      <Flexbox gap="2x" align="center" wrap>
        <Button
          variant="hollow"
          color="red"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="magenta"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="purple"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="indigo"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="navy"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="blue"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="cyan"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="teal"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="green"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="lime"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="yellow"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="orange"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="brown"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
        <Button
          variant="hollow"
          color="gray"
          disabled={disabled}
          borderless={borderless}
        >
          Button
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
