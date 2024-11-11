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
        <Tag color="red" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="magenta" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="purple" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="indigo" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="navy" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="blue" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="cyan" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="teal" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="green" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="lime" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="yellow" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="orange" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="brown" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color="gray" disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
        <Tag color={null} disabled={disabled} hoverable={hoverable} clearable={clearable} borderless={borderless}>
          Tag
        </Tag>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
