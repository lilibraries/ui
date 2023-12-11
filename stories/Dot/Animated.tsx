import React from "react";
import { Dot, Flexbox } from "@lilib/ui";

function Example() {
  return (
    <Flexbox direction="column" gap="2x" align="flex-start">
      <div>
        <Dot animated color="#de2910" /> Dot
      </div>

      <Flexbox gap="2x" align="center">
        <Dot animated color="red" />
        <Dot animated color="magenta" />
        <Dot animated color="purple" />
        <Dot animated color="indigo" />
        <Dot animated color="navy" />
        <Dot animated color="blue" />
        <Dot animated color="cyan" />
        <Dot animated color="teal" />
        <Dot animated color="green" />
        <Dot animated color="lime" />
        <Dot animated color="yellow" />
        <Dot animated color="orange" />
        <Dot animated color="brown" />
        <Dot animated color="gray" />
        <Dot animated color={null} />
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
