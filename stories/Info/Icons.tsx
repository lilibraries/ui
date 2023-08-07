import React from "react";
import {
  Avatar,
  Checkbox,
  Flexbox,
  Info,
  Radio,
  Spinner,
  Switch,
} from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Flexbox direction="column" gap="8x" fluid>
      <Info icon={<FiInfo />}>
        <Info.Title>Icon</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>

      <Info
        icon={
          <img
            alt="Avatar"
            src="https://images.unsplash.com/photo-1684837955373-dd25d9e1c3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          />
        }
      >
        <Info.Title>Image</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>

      <Info icon={<Spinner spinning />}>
        <Info.Title>Spinner</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>

      <Info icon={<Radio />}>
        <Info.Title>Radio</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>

      <Info icon={<Checkbox />}>
        <Info.Title>Checkbox</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>

      <Info icon={<Switch size="small" />}>
        <Info.Title>Switch</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>

      <Info
        icon={
          <Avatar
            size="small"
            image="https://images.unsplash.com/photo-1684837955373-dd25d9e1c3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
          />
        }
      >
        <Info.Title>Avatar</Info.Title>
        <Info.Detail>This is a descriptive message.</Info.Detail>
      </Info>
    </Flexbox>
  );
}

export default Example;
