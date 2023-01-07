import React from "react";
import { Dot, DotProps, Flexbox } from "@lilib/ui";

function PresetColors(props: DotProps) {
  return (
    <Flexbox gap="2x" align="center">
      <Dot {...props} color="red" />
      <Dot {...props} color="magenta" />
      <Dot {...props} color="purple" />
      <Dot {...props} color="indigo" />
      <Dot {...props} color="navy" />
      <Dot {...props} color="blue" />
      <Dot {...props} color="cyan" />
      <Dot {...props} color="teal" />
      <Dot {...props} color="green" />
      <Dot {...props} color="lime" />
      <Dot {...props} color="yellow" />
      <Dot {...props} color="orange" />
      <Dot {...props} color="brown" />
      <Dot {...props} color="gray" />
    </Flexbox>
  );
}

export default PresetColors;
