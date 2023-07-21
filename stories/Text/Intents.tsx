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
          intent="major"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Major
        </Text>
        <Text
          intent="minor"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Minor
        </Text>
        <Text
          intent="positive"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Positive
        </Text>
        <Text
          intent="alertive"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Alertive
        </Text>
        <Text
          intent="negative"
          muted={muted}
          active={active}
          disabled={disabled}
          hoverable={hoverable}
        >
          Negative
        </Text>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
