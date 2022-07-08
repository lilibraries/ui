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
      <br />
      <Dot {...props} animated color={null} />{" "}
      <Dot {...props} animated color="red" />{" "}
      <Dot {...props} animated color="magenta" />{" "}
      <Dot {...props} animated color="purple" />{" "}
      <Dot {...props} animated color="indigo" />{" "}
      <Dot {...props} animated color="navy" />{" "}
      <Dot {...props} animated color="blue" />{" "}
      <Dot {...props} animated color="cyan" />{" "}
      <Dot {...props} animated color="teal" />{" "}
      <Dot {...props} animated color="green" />{" "}
      <Dot {...props} animated color="lime" />{" "}
      <Dot {...props} animated color="yellow" />{" "}
      <Dot {...props} animated color="orange" />{" "}
      <Dot {...props} animated color="brown" />{" "}
      <Dot {...props} animated color="gray" />
    </>
  );
}

export default Animated;
