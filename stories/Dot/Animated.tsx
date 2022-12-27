import React from "react";
import { Dot, DotProps } from "@lilib/ui";

function Animated(props: DotProps) {
  return (
    <>
      <Dot {...props} animated color="#ff0000">
        Dot
      </Dot>
      <br />
      <Dot {...props} animated intent={null} />{" "}
      <Dot {...props} animated intent="major" />{" "}
      <Dot {...props} animated intent="minor" />{" "}
      <Dot {...props} animated intent="positive" />{" "}
      <Dot {...props} animated intent="alertive" />{" "}
      <Dot {...props} animated intent="negative" />
    </>
  );
}

export default Animated;
