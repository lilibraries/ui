import React from "react";
import { Image, ImageProps } from "@lilib/ui";

function Basic(props: ImageProps) {
  return (
    <Image
      {...props}
      alt="Landscape"
      style={{ width: 200, height: 113, objectFit: "cover" }}
      src="https://images.unsplash.com/photo-1547534601-862c877b1923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=200&q=60"
    />
  );
}

export default Basic;
