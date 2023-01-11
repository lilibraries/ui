import React, { useState } from "react";
import { Flexbox, Tag, TagCommonProps, Switch } from "@lilib/ui";

function Colors(props: TagCommonProps) {
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

export default Colors;
