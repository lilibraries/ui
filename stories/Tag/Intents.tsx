import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Intents(props: TagProps) {
  return (
    <>
      <Tag {...props} intent={null} clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} intent="major" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} intent="minor" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} intent="positive" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} intent="alertive" clearable clickable>
        Tag
      </Tag>{" "}
      <Tag {...props} intent="negative" clearable clickable>
        Tag
      </Tag>
    </>
  );
}

export default Intents;
