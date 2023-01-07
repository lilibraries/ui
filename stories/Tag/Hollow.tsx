import React, { useState } from "react";
import { Flexbox, Tag, TagProps, Switch } from "@lilib/ui";

function Hollow(props: TagProps) {
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
          {...props}
          variant="hollow"
          color="red"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="magenta"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="purple"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="indigo"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="navy"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="blue"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="cyan"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="teal"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="green"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="lime"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="yellow"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="orange"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="brown"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
          color="gray"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="hollow"
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

export default Hollow;
