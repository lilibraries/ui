import React from "react";
import { FiHeart, FiMoreVertical, FiStar, FiThumbsUp } from "react-icons/fi";
import { Button, Flexbox, Tooltip } from "@lilib/ui";

function Example() {
  return (
    <Tooltip
      placement="right"
      content={
        <Flexbox gap="1x">
          <Button intent="major" variant="hollow" startIcon={<FiThumbsUp />} iconOnly borderless />
          <Button intent="alertive" variant="hollow" startIcon={<FiStar />} iconOnly borderless />
          <Button intent="negative" variant="hollow" startIcon={<FiHeart />} iconOnly borderless />
        </Flexbox>
      }
    >
      <Button iconOnly startIcon={<FiMoreVertical />} />
    </Tooltip>
  );
}

export default Example;
