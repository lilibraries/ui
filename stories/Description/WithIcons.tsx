import React from "react";
import { Avatar, Checkbox, Flexbox, Description, Radio, Spinner, Switch } from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Flexbox direction="column" gap="8x" fluid>
      <Description icon={<FiInfo />} title="Icon">
        This is descriptive message.
      </Description>

      <Description
        icon={<img alt="Avatar" src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_4.png" />}
        title="Image"
      >
        This is a descriptive message.
      </Description>

      <Description icon={<Spinner spinning />} title="Spinner">
        This is a descriptive message.
      </Description>

      <Description icon={<Radio />} title="Radio">
        This is a descriptive message.
      </Description>

      <Description icon={<Checkbox />} title="Checkbox">
        This is a descriptive message.
      </Description>

      <Description icon={<Switch size="small" />} title="Switch">
        This is a descriptive message.
      </Description>

      <Description
        icon={<Avatar size="small" image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_4.png" />}
        title="Avatar"
      >
        This is a descriptive message.
      </Description>
    </Flexbox>
  );
}

export default Example;
