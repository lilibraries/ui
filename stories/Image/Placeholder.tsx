import React from "react";
import { Image } from "@lilib/ui";
import image2 from "./images/image2.jpeg";

function Example() {
  return (
    <Image
      alt="Image"
      src={image2}
      style={{ width: 364, height: 273, objectFit: "cover" }}
      placeholder="https://via.placeholder.com/364x273.png?text=Placeholder"
    />
  );
}

export default Example;
