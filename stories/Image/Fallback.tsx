import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="error"
      style={{ width: 200, height: 200, objectFit: "cover" }}
      fallback="https://via.placeholder.com/200x200.png?text=Fallback"
    />
  );
}

export default Example;
