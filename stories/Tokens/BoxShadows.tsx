import React, { FC, ReactNode } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const BoxShadows: FC = () => {
  const { var: prefix } = Prefix.useConfig();
  const rows: ReactNode[][] = [];

  for (let i = 1; i <= 5; i++) {
    const name = `shadow-${i}`;

    rows.push([
      <div
        style={{
          width: 50,
          height: 50,
          boxShadow: `var(--${prefix}${name})`,
          border: `1px solid var(--${prefix}border-color-base)`,
          borderRadius: `var(--${prefix}border-radius-base)`,
          backgroundColor: `var(--${prefix}background-color-overlay)`,
        }}
      />,
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value styleName="boxShadow" styleValue={`var(--${prefix}${name})`} />,
    ]);
  }

  return <Table head={["Preview", "SCSS", "CSS", "Value"]} body={rows} />;
};

export default BoxShadows;
