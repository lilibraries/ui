import React from "react";
import { Image, ImageProps } from "@lilib/ui";

function Placeholder(props: ImageProps) {
  return (
    <Image
      {...props}
      alt="Landscape"
      style={{ width: 200, height: 113, objectFit: "cover" }}
      placeholder="https://via.placeholder.com/200x113.png?text=Placeholder"
      src="https://images.unsplash.com/photo-1547534601-862c877b1923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80"
    />
  );
}

export default Placeholder;
