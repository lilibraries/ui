import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Card } from "@lilib/ui";

function Example() {
  return (
    <Card<"a">
      as="a"
      rel="noreferrer"
      href="https://github.com/lilibraries/ui"
      target="_blank"
      hoverable
      icon={<FaGithub />}
      title="Github"
      headmark={<FiArrowRight />}
      style={{ maxWidth: 400 }}
    />
  );
}

export default Example;
