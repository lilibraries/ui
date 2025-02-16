import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";

const Features: FC = () => {
  return (
    <Table
      head={["SCSS", "Value", "Description"]}
      body={[
        [<Usage type="scss" name="enable-variables" />, <span>true</span>, "Enable CSS variables."],
        [<Usage type="scss" name="enable-fallbacks" />, <span>true</span>, "Enable CSS variable fallbacks."],
        [
          <Usage type="scss" name="enable-feedbacks" />,
          <span>true</span>,
          "Enable transition effects when executing pointer events (such as hovering, clicking).",
        ],
        [
          <Usage type="scss" name="focusing-attribute" />,
          <span>"data-focusing"</span>,
          <>
            Attribute name attached to the <code>{"<html>"}</code> element when focusing.
          </>,
        ],
      ]}
    />
  );
};

export default Features;
