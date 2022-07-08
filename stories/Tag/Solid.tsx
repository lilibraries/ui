import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Solid(props: TagProps) {
  return (
    <>
      <Tag {...props} variant="solid" intent={null} clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="solid" intent="major" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="solid" intent="minor" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="solid" intent="positive" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="solid" intent="alertive" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="solid" intent="negative" clearable clickable>
        Tag
      </Tag>
    </>
  );
}

export default Solid;
