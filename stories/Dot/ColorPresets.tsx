import React from "react";
import { Dot, DotProps } from "@lilib/ui";

function Colors(props: DotProps) {
  return (
    <>
      <Dot {...props} color={null} /> <Dot {...props} color="red" />{" "}
      <Dot {...props} color="magenta" /> <Dot {...props} color="purple" />{" "}
      <Dot {...props} color="indigo" /> <Dot {...props} color="navy" />{" "}
      <Dot {...props} color="blue" /> <Dot {...props} color="cyan" />{" "}
      <Dot {...props} color="teal" /> <Dot {...props} color="green" />{" "}
      <Dot {...props} color="lime" /> <Dot {...props} color="yellow" />{" "}
      <Dot {...props} color="orange" /> <Dot {...props} color="brown" />{" "}
      <Dot {...props} color="gray" />
    </>
  );
}

export default Colors;
