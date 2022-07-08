import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function AsLink(props: TagProps) {
  return (
    <Tag
      {...props}
      as="a"
      clickable
      target="_blank"
      href="https://github.com/lilibraries/ui"
    >
      Github
    </Tag>
  );
}

export default AsLink;
