import React from "react";
import { Dot, DotProps, Flexbox } from "@lilib/ui";

function Animated(props: DotProps) {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <Dot {...props} animated color="#de2910">
        Dot
      </Dot>

      <Flexbox gap="2x" align="center">
        <Dot {...props} animated color="red" />
        <Dot {...props} animated color="magenta" />
        <Dot {...props} animated color="purple" />
        <Dot {...props} animated color="indigo" />
        <Dot {...props} animated color="navy" />
        <Dot {...props} animated color="blue" />
        <Dot {...props} animated color="cyan" />
        <Dot {...props} animated color="teal" />
        <Dot {...props} animated color="green" />
        <Dot {...props} animated color="lime" />
        <Dot {...props} animated color="yellow" />
        <Dot {...props} animated color="orange" />
        <Dot {...props} animated color="brown" />
        <Dot {...props} animated color="gray" />
        <Dot {...props} animated color={null} />
      </Flexbox>
    </Flexbox>
  );
}

export default Animated;
