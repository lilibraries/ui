import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Monospace from "../components/Monospace";

const Features: FC = () => {
  return (
    <Table
      head={["SCSS", "Value", "Description"]}
      body={[
        [
          <Usage type="scss" name="enable-variables" />,
          <Monospace>true</Monospace>,
          "Enable CSS variables.",
        ],
        [
          <Usage type="scss" name="enable-fallbacks" />,
          <Monospace>true</Monospace>,
          "Enable CSS variable fallbacks.",
        ],
        [
          <Usage type="scss" name="enable-feedbacks" />,
          <Monospace>true</Monospace>,
          "Enable transition effects when executing user events (such as hovering, clicking).",
        ],
        [
          <Usage type="scss" name="focusing-attribute" />,
          <Monospace>"data-focusing"</Monospace>,
          <>
            Attribute name attached to the <code>{"<html>"}</code> element when
            focusing.
          </>,
        ],
      ]}
    />
  );
};

export default Features;
