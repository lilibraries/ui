import React, { useState } from "react";
import { Flexbox, Tag, TagProps, Switch } from "@lilib/ui";

function Solid(props: TagProps) {
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
        <Tag
          {...props}
          variant="solid"
          intent={null}
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="solid"
          intent="major"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="solid"
          intent="minor"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="solid"
          intent="positive"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="solid"
          intent="alertive"
          clickable
          clearable
          disabled={disabled}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          {...props}
          variant="solid"
          intent="negative"
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

export default Solid;
