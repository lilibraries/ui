import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7"
      placeholder="https://via.placeholder.com/400x300.png?text=Placeholder"
      style={{ width: 400, height: 300, objectFit: "cover" }}
    />
  );
}

export default Example;
