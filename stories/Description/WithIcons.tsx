import React from "react";
import { Description } from "@lilib/ui";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";

function Example() {
  return (
    <Description icon={<AiFillInfoCircle />} endIcon={<AiOutlineClose />}>
      This is a descriptive message.
    </Description>
  );
}

export default Example;
