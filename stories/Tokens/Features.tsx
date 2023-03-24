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
          "Enable CSS variables",
        ],
        [
          <Usage type="scss" name="enable-fallbacks" />,
          <Monospace>true</Monospace>,
          "Enable CSS variable fallbacks",
        ],
      ]}
    />
  );
};

export default Features;
