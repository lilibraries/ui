import React from "react";
import { Card } from "@lilib/ui";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Example() {
  return (
    <Card<"a">
      as="a"
      rel="noreferrer"
      href="https://github.com/lilibraries/ui"
      target="_blank"
      icon={<FaGithub />}
      title="Github"
      headmark={<FiArrowRight />}
      hoverable
      style={{ maxWidth: 400 }}
    />
  );
}

export default Example;
