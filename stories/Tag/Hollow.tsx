import React, { useState } from "react";
import { Flexbox, Tag, Checkbox } from "@lilib/ui";

function Example() {
  const [disabled, setDisabled] = useState(false);
  const [hoverable, setHoverable] = useState(false);
  const [clearable, setClearable] = useState(false);
  const [borderless, setBorderless] = useState(false);

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Flexbox gap="2x" align="center" wrap>
        <Checkbox checked={disabled} onChange={(event) => setDisabled(event.target.checked)}>
          Disabled
        </Checkbox>
        <Checkbox checked={hoverable} onChange={(event) => setHoverable(event.target.checked)}>
          Hoverable
        </Checkbox>
        <Checkbox checked={clearable} onChange={(event) => setClearable(event.target.checked)}>
          Clearable
        </Checkbox>
        <Checkbox checked={borderless} onChange={(event) => setBorderless(event.target.checked)}>
          Borderless
        </Checkbox>
      </Flexbox>

      <Flexbox gap="2x" align="center" wrap>
        <Tag
          variant="hollow"
          color="red"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="magenta"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="purple"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="indigo"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="navy"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="blue"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="cyan"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="teal"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="green"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="lime"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="yellow"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="orange"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="brown"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color="gray"
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
        <Tag
          variant="hollow"
          color={undefined}
          disabled={disabled}
          hoverable={hoverable}
          clearable={clearable}
          borderless={borderless}
        >
          Tag
        </Tag>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
