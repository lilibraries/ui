import React, { useState } from "react";
import { Flexbox, Tag, Switch } from "@lilib/ui";

function Example() {
  const [disabled, setDisabled] = useState(false);
  const [borderless, setBorderless] = useState(false);

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Flexbox gap="2x" align="center" wrap>
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
        <Tag
          variant="solid"
          color="red"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="magenta"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="purple"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="indigo"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="navy"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="blue"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="cyan"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="teal"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="green"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="lime"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="yellow"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="orange"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="brown"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color="gray"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="solid"
          color={undefined}
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
