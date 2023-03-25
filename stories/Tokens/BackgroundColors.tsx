import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Color from "../components/Color";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface BackgroundColorsProps {
  variant?: "deep" | "solid";
  statuses?: string[];
}

const BackgroundColors: FC<BackgroundColorsProps> = (props) => {
  const { variant, statuses: customStatuses } = props;
  const { var: prefix } = Prefix.useConfig();

  let statuses: string[] = [];
  if (customStatuses) {
    statuses = customStatuses;
  } else {
    statuses = ["base", "hover", "active", "inactive", "disabled"];
  }

  const rows = statuses.map((status) => {
    let name = "background-color-";
    if (variant) {
      name += variant + "-";
    }
    name += status;

    let borderName = "";
    if (!!customStatuses) {
      borderName = "border-color-base";
    } else {
      borderName = name.replace("background", "border");
    }

    return [
      <Color
        name={name}
        style={{
          border: `1px solid var(--${prefix}${borderName})`,
        }}
      />,
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value
        format="hex"
        styleName="color"
        styleValue={`var(--${prefix}${name})`}
      />,
    ];
  });

  return (
    <Table
      head={["Color", "SCSS", "CSS", "Value"]}
      body={rows}
      style={{ marginBottom: `var(--${prefix}space-8)` }}
    />
  );
};

export default BackgroundColors;
