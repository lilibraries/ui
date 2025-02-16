import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";

const Prefixes: FC = () => {
  return (
    <Table
      head={["SCSS", "Value", "Description"]}
      body={[
        [<Usage type="scss" name="cls-prefix" />, <span>""</span>, "CSS class name prefix."],
        [<Usage type="scss" name="var-prefix" />, <span>""</span>, "CSS variable name prefix."],
      ]}
    />
  );
};

export default Prefixes;
