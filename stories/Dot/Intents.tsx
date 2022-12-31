import React from "react";
import { Dot, DotProps, Flexbox } from "@lilib/ui";

function Intents(props: DotProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Dot {...props} intent={null} />
      <Dot {...props} intent="major" />
      <Dot {...props} intent="minor" />
      <Dot {...props} intent="positive" />
      <Dot {...props} intent="alertive" />
      <Dot {...props} intent="negative" />
    </Flexbox>
  );
}

export default Intents;
