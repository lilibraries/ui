import React, { FC } from "react";
import Table from "../components/Table";
import Color from "../components/Color";
import Usage from "../components/Usage";
import Value from "../components/Value";

const Scales: FC<{ name: string }> = ({ name }) => {
  let rows = [];

  for (let i = 0; i <= 9; i++) {
    rows.push([
      <Color name={`${name}-${i}`} />,
      <Usage name={`${name}-${i}`} type="scss" darkable />,
      <Usage name={`${name}-${i}`} type="css" />,
      <Value
        format="hex"
        styleName="color"
        styleValue={(prefix) => `var(--${prefix}${name}-${i})`}
      />,
    ]);
  }

  return <Table head={["Color", "SCSS", "CSS", "Value"]} body={rows} />;
};

export default Scales;
