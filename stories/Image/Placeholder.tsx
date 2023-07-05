import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="https://images.unsplash.com/photo-1688168293343-e1c824a4ace5"
      style={{ width: 200, height: 200, objectFit: "cover" }}
      placeholder="https://via.placeholder.com/200x200.png?text=Placeholder"
    />
  );
}

export default Example;
