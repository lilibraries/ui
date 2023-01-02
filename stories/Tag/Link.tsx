import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Link(props: TagProps) {
  return (
    <Tag
      {...props}
      as="a"
      rel="noreferrer"
      href="https://github.com/lilibraries/ui"
      target="_blank"
      clickable
    >
      Github
    </Tag>
  );
}

export default Link;
