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
        <Tag color="red" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="magenta" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="purple" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="indigo" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="navy" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="blue" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="cyan" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="teal" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="green" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="lime" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="yellow" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="orange" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="brown" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="gray" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag color={null} hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
