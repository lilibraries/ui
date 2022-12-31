import React from "react";
import { Dot, DotProps, Flexbox } from "@lilib/ui";

function Animated(props: DotProps) {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <Dot {...props} animated color="#de2910">
        Dot
      </Dot>

      <Flexbox gap="2x" align="center">
        <Dot {...props} animated intent={null} />
        <Dot {...props} animated intent="major" />
        <Dot {...props} animated intent="minor" />
        <Dot {...props} animated intent="positive" />
        <Dot {...props} animated intent="alertive" />
        <Dot {...props} animated intent="negative" />
      </Flexbox>
    </Flexbox>
  );
}

export default Animated;
