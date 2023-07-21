import React, { useState } from "react";
import { Checkbox, Flexbox, Text } from "@lilib/ui";

function Example() {
  const [muted, setMuted] = useState(false);
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hoverable, setHoverable] = useState(false);

  return (
    <Flexbox direction="column" fluid gap="4x">
      <Flexbox gap="4x" wrap>
        <Checkbox
          checked={muted}
          onChange={(event) => setMuted(event.target.checked)}
        >
          Muted
        </Checkbox>
        <Checkbox
          checked={active}
          onChange={(event) => setActive(event.target.checked)}
        >
          Active
        </Checkbox>
        <Checkbox
          checked={disabled}
          onChange={(event) => setDisabled(event.target.checked)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={hoverable}
          onChange={(event) => setHoverable(event.target.checked)}
        >
          Hoverable
        </Checkbox>
      </Flexbox>

      <Flexbox gap="4x" wrap>
        <Text
          color="red"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Red
        </Text>
        <Text
          color="magenta"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Magenta
        </Text>
        <Text
          color="purple"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Purple
        </Text>
        <Text
          color="indigo"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Indigo
        </Text>
        <Text
          color="navy"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Navy
        </Text>
        <Text
          color="blue"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Blue
        </Text>
        <Text
          color="cyan"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Cyan
        </Text>
        <Text
          color="teal"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Teal
        </Text>
        <Text
          color="green"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Green
        </Text>
        <Text
          color="lime"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Lime
        </Text>
        <Text
          color="yellow"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Yellow
        </Text>
        <Text
          color="orange"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Orange
        </Text>
        <Text
          color="brown"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Brown
        </Text>
        <Text
          color="gray"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Gray
        </Text>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
