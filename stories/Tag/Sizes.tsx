import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Sizes(props: TagProps) {
  return (
    <>
      <Tag {...props} size="small">
        Tag
      </Tag>{" "}
      <Tag {...props} size={null}>
        Tag
      </Tag>{" "}
      <Tag {...props} size="large">
        Tag
      </Tag>
    </>
  );
}

export default Sizes;
