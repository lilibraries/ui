import React from "react";
import { Tag, TagCommonProps } from "@lilib/ui";

function Link(props: TagCommonProps) {
  return (
    <Tag<"a">
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
