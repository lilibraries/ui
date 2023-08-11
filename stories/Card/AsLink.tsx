import React from "react";
import { Card } from "@lilib/ui";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Example() {
  return (
    <Card
      style={{ width: 400 }}
      as="a"
      rel="noreferrer"
      href="https://github.com/lilibraries/ui"
      target="_blank"
      hoverable
      icon={<FaGithub />}
      title="Github"
      headmark={<FiArrowRight />}
    />
  );
}

export default Example;
