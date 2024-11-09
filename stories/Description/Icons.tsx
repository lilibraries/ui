import React from "react";
import { Avatar, Checkbox, Flexbox, Description, Radio, Spinner, Switch } from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Flexbox direction="column" gap="8x" fluid>
      <Description icon={<FiInfo />}>
        <Description.Title>Icon</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>

      <Description icon={<img alt="Avatar" src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_1.png" />}>
        <Description.Title>Image</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>

      <Description icon={<Spinner spinning />}>
        <Description.Title>Spinner</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>

      <Description icon={<Radio />}>
        <Description.Title>Radio</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>

      <Description icon={<Checkbox />}>
        <Description.Title>Checkbox</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>

      <Description icon={<Switch size="small" />}>
        <Description.Title>Switch</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>

      <Description icon={<Avatar size="small" image="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_1.png" />}>
        <Description.Title>Avatar</Description.Title>
        <Description.Detail>This is a descriptive message.</Description.Detail>
      </Description>
    </Flexbox>
  );
}

export default Example;
