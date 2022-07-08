import React from "react";
import { Dot, DotProps } from "@lilib/ui";

function Intents(props: DotProps) {
  return (
    <>
      <Dot {...props} intent={null} /> <Dot {...props} intent="major" />{" "}
      <Dot {...props} intent="minor" /> <Dot {...props} intent="positive" />{" "}
      <Dot {...props} intent="alertive" /> <Dot {...props} intent="negative" />
    </>
  );
}

export default Intents;
