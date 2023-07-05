import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="https://images.unsplash.com/photo-1687704841026-f8fff04d0b8f"
      style={{ width: 200, height: 200, objectFit: "cover" }}
      loading="lazy"
      placeholder="https://via.placeholder.com/200x200.png?text=Placeholder"
    />
  );
}

export default Example;
