import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="error"
      style={{ width: 364, height: 273, objectFit: "cover" }}
      fallback="https://via.placeholder.com/364x273.png?text=Fallback"
    />
  );
}

export default Example;
