import React from "react";
import { Icon, IconProps } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Nested(props: IconProps) {
  return (
    <Icon {...props}>
      <Icon {...props} icon={<FiStar />} />
    </Icon>
  );
}

export default Nested;
