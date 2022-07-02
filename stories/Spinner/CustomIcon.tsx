import React from "react";
import { Spinner, SpinnerProps } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function CustomIcon(props: SpinnerProps) {
  return <Spinner {...props} spinning icon={<FiLoader />} />;
}

export default CustomIcon;
