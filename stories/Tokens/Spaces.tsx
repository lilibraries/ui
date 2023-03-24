import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const Spaces: FC = () => {
  const rows = [];

  for (let i = 1; i <= 9; i++) {
    rows.push([
      <Usage type="scss" name={`space-${i}x`} />,
      <Usage type="css" name={`space-${i}x`} />,
      <Value
        styleName="width"
        styleValue={(prefix) => `var(--${prefix}space-${i}x)`}
      />,
    ]);
  }

  return <Table head={["SCSS", "CSS", "Value"]} body={rows} />;
};

export default Spaces;
