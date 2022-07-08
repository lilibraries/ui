import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Outlined(props: TagProps) {
  return (
    <>
      <Tag {...props} variant="outlined" intent={null} clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="outlined" intent="major" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="outlined" intent="minor" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="outlined" intent="positive" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="outlined" intent="alertive" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} variant="outlined" intent="negative" clearable clickable>
        Tag
      </Tag>
    </>
  );
}

export default Outlined;
