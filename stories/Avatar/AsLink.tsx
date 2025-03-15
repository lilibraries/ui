import React from "react";
import { Avatar } from "@lilib/ui";
import { VscGithubInverted } from "react-icons/vsc";

function Example() {
  return (
    <Avatar<"a"> as="a" rel="noreferrer" href="https://github.com/lilibraries/ui" target="_blank">
      <VscGithubInverted />
    </Avatar>
  );
}

export default Example;
