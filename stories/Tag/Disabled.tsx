import React from "react";
import { Tag, TagProps } from "@lilib/ui";

function Disabled(props: TagProps) {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Tag
          {...props}
          disabled
          variant="solid"
          intent={null}
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="solid"
          intent="major"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="solid"
          intent="minor"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="solid"
          intent="positive"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="solid"
          intent="alertive"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="solid"
          intent="negative"
          clearable
          clickable
        >
          Tag
        </Tag>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Tag {...props} disabled intent={null} clearable clickable>
          Tag
        </Tag>{" "}
        <Tag {...props} disabled intent="major" clearable clickable>
          Tag
        </Tag>{" "}
        <Tag {...props} disabled intent="minor" clearable clickable>
          Tag
        </Tag>{" "}
        <Tag {...props} disabled intent="positive" clearable clickable>
          Tag
        </Tag>{" "}
        <Tag {...props} disabled intent="alertive" clearable clickable>
          Tag
        </Tag>{" "}
        <Tag {...props} disabled intent="negative" clearable clickable>
          Tag
        </Tag>
      </div>

      <div>
        <Tag
          {...props}
          disabled
          variant="outlined"
          intent={null}
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="outlined"
          intent="major"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="outlined"
          intent="minor"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="outlined"
          intent="positive"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="outlined"
          intent="alertive"
          clearable
          clickable
        >
          Tag
        </Tag>{" "}
        <Tag
          {...props}
          disabled
          variant="outlined"
          intent="negative"
          clearable
          clickable
        >
          Tag
        </Tag>
      </div>
    </>
  );
}

export default Disabled;
