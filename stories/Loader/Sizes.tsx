import React from "react";
import { Loader } from "@lilib/ui";

function Example() {
  return (
    <>
      <Loader loading message="Loading..." size="small" />
      <Loader loading message="Loading..." size={null} />
      <Loader loading message="Loading..." size="large" />
    </>
  );
}

export default Example;
