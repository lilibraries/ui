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
        <Tag variant="solid" color="red" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="magenta" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="purple" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="indigo" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="navy" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="blue" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="cyan" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="teal" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="green" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="lime" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="yellow" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="orange" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="brown" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color="gray" hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
        <Tag variant="solid" color={undefined} hoverable clearable disabled={disabled} borderless={borderless}>
          Tag
        </Tag>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
