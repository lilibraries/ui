import React from "react";
import { Button, Flexbox, Tooltip } from "@lilib/ui";
import { FiHeart, FiMoreVertical, FiStar, FiThumbsUp } from "react-icons/fi";

function Example() {
  return (
    <Tooltip
      placement="right"
      content={
        <Flexbox gap="1x">
          <Button
            color="blue"
            variant="hollow"
            startIcon={<FiThumbsUp />}
            iconOnly
            borderless
          />
          <Button
            color="orange"
            variant="hollow"
            startIcon={<FiStar />}
            iconOnly
            borderless
          />
          <Button
            color="red"
            variant="hollow"
            startIcon={<FiHeart />}
            iconOnly
            borderless
          />
        </Flexbox>
      }
    >
      <Button iconOnly startIcon={<FiMoreVertical />} />
    </Tooltip>
  );
}

export default Example;
