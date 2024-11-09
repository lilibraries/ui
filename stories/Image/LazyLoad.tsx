import React from "react";
import { Image } from "@lilib/ui";

function Example() {
  return (
    <Image
      alt="Image"
      src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba"
      placeholder="https://via.placeholder.com/400x300.png?text=Placeholder"
      loading="lazy"
      style={{ width: 400, height: 300, objectFit: "cover" }}
    />
  );
}

export default Example;
