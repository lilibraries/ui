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
            iconOnly
            variant="hollow"
            intent="major"
            borderless
            startIcon={<FiThumbsUp />}
          />
          <Button
            iconOnly
            variant="hollow"
            intent="alertive"
            borderless
            startIcon={<FiStar />}
          />
          <Button
            iconOnly
            variant="hollow"
            intent="negative"
            borderless
            startIcon={<FiHeart />}
          />
        </Flexbox>
      }
    >
      <Button
        style={{ borderStyle: "dashed" }}
        iconOnly
        startIcon={<FiMoreVertical />}
      />
    </Tooltip>
  );
}

export default Example;
