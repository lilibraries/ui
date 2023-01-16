import React from "react";
import { Image, ImageProps } from "@lilib/ui";

function Fallback(props: ImageProps) {
  return (
    <Image
      {...props}
      alt="Landscape"
      style={{ width: 200, height: 113, objectFit: "cover" }}
      src="error"
      fallback="https://via.placeholder.com/200x113.png?text=Fallback"
    />
  );
}

export default Fallback;
