import React from "react";
import { Avatar } from "@lilib/ui";
import { VscGithubInverted } from "react-icons/vsc";

function Example() {
  return (
    <Avatar as="a" href="https://github.com/lilibraries/ui" target="_blank">
      <VscGithubInverted />
    </Avatar>
  );
}

export default Example;
