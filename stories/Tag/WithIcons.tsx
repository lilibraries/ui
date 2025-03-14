import React from "react";
import { Flexbox, Icon, Spinner, Tag } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Example() {
  return (
    <Flexbox gap="2x" align="center">
      <Tag>
        <Icon icon={<FiStar />} /> Star
      </Tag>
      <Tag>
        <Spinner spinning endSpaced />
        Spinner
      </Tag>
    </Flexbox>
  );
}

export default Example;
