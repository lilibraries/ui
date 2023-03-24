import React, { FC } from "react";
import { colors } from "./Colors";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const RGBs: FC<{ names?: string[] }> = (props) => {
  const { names = colors } = props;

  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={names.map((name) => [
        <Usage name={name + "-rgb"} type="scss" darkable />,
        <Usage name={name + "-rgb"} type="css" />,
        <Value
          format="rgb"
          styleName="color"
          styleValue={(prefix) => `rgb(var(--${prefix}${name}-rgb))`}
        />,
      ])}
    />
  );
};

export default RGBs;
