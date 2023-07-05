import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="https://images.unsplash.com/photo-1682687218608-5e2522b04673"
      style={{ width: 200, height: 200, objectFit: "cover" }}
    />
  );
}

export default Example;
