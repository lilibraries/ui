import React from "react";
import { Loader, LoaderProps } from "@lilib/ui";

function Sizes(props: LoaderProps) {
  return (
    <>
      <Loader {...props} loading message="Loading..." size="small" />
      <Loader {...props} loading message="Loading..." size={null} />
      <Loader {...props} loading message="Loading..." size="large" />
    </>
  );
}

export default Sizes;
