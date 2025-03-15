import React from "react";
import { Tag } from "@lilib/ui";

function Example() {
  return (
    <Tag<"a"> as="a" rel="noreferrer" href="https://github.com/lilibraries/ui" target="_blank" color="blue" hoverable>
      Github
    </Tag>
  );
}

export default Example;
