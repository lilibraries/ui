import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922"
      style={{ width: 400, height: 300, objectFit: "cover" }}
    />
  );
}

export default Example;
