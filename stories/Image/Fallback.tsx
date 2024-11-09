import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="error"
      fallback="https://via.placeholder.com/400x300.png?text=Fallback"
      style={{ width: 400, height: 300, objectFit: "cover" }}
    />
  );
}

export default Example;
