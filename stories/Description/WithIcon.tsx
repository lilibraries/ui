import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Description } from "@lilib/ui";

function Example() {
  return <Description icon={<AiFillInfoCircle />}>This is a descriptive message.</Description>;
}

export default Example;
