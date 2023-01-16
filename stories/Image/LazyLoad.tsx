import React from "react";
import { Image, ImageProps } from "@lilib/ui";

function LazyLoad(props: ImageProps) {
  return (
    <>
      <Image
        {...props}
        alt="Landscape"
        loading="lazy"
        style={{ width: 200, height: 297, objectFit: "cover" }}
        placeholder="https://via.placeholder.com/200x297.png?text=Placeholder"
        src="https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60"
      />
      <br />
      <Image
        {...props}
        alt="Landscape"
        loading="lazy"
        style={{ width: 200, height: 267, objectFit: "cover" }}
        placeholder="https://via.placeholder.com/200x267.png?text=Placeholder"
        src="https://images.unsplash.com/photo-1638218022343-3158d732f5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60"
      />
      <br />
      <Image
        {...props}
        alt="Landscape"
        loading="lazy"
        style={{ width: 200, height: 143, objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1638365448598-8fb987e93be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60"
      />
    </>
  );
}

export default LazyLoad;
