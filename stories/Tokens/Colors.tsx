import React, { FC } from "react";
import Table from "../components/Table";
import Color from "../components/Color";
import Usage from "../components/Usage";
import Value from "../components/Value";

export const COLORS = [
  "red",
  "magenta",
  "purple",
  "indigo",
  "navy",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange",
  "brown",
  "gray",
] as const;

const Colors: FC<{ names?: string[] }> = (props) => {
  const { names = COLORS } = props;

  return (
    <Table
      head={["Color", "SCSS", "CSS", "Value"]}
      body={names.map((name) => [
        <Color name={name} />,
        <Usage name={name} type="scss" darkable />,
        <Usage name={name} type="css" />,
        <Value format="hex" styleName="color" styleValue={(prefix) => `var(--${prefix}${name})`} />,
      ])}
    />
  );
};

export default Colors;
