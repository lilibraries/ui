import React from "react";
import { Icon, IconProps } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

function Spinning(props: IconProps) {
  return <Icon {...props} spinning icon={<FiStar />} />;
}

export default Spinning;
