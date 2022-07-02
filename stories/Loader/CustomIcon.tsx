import React from "react";
import { Loader, LoaderProps } from "@lilib/ui";
import { FiLoader } from "react-icons/fi";

function CustomIcon(props: LoaderProps) {
  return <Loader {...props} loading icon={<FiLoader />} />;
}

export default CustomIcon;
