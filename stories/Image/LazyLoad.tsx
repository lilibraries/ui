import React from "react";
import { Image } from "@lilib/ui";
import image3 from "./images/image3.jpeg";

function Example() {
  return (
    <Image
      alt="Image"
      src={image3}
      style={{ width: 364, height: 273, objectFit: "cover" }}
      loading="lazy"
      placeholder="https://via.placeholder.com/364x273.png?text=Placeholder"
    />
  );
}

export default Example;
