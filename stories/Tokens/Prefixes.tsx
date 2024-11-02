import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Monospace from "../components/Monospace";

const Prefixes: FC = () => {
  return (
    <Table
      head={["SCSS", "Value", "Description"]}
      body={[
        [<Usage type="scss" name="cls-prefix" />, <Monospace>""</Monospace>, "CSS class name prefix."],
        [<Usage type="scss" name="var-prefix" />, <Monospace>""</Monospace>, "CSS variable name prefix."],
      ]}
    />
  );
};

export default Prefixes;
