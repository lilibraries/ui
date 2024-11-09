import React from "react";
import { Image } from "@lilib/ui";
import image1 from "./images/image1.jpeg";

function Example() {
  return <Image alt="Image" src={image1} style={{ width: 364, height: 273, objectFit: "cover" }} />;
}

export default Example;
