import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Description } from "@lilib/ui";

function Example() {
  return <Description mark={<AiOutlineClose />}>This is a descriptive message.</Description>;
}

export default Example;
