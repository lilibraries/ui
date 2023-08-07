import React from "react";
import { Avatar } from "@lilib/ui";
import { FiGithub } from "react-icons/fi";

function Example() {
  return (
    <Avatar
      as="a"
      rel="noreferrer noopener"
      href="https://github.com/lilibraries/ui"
      target="_blank"
      hoverable
    >
      <FiGithub />
    </Avatar>
  );
}

export default Example;
