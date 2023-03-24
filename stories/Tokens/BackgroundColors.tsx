import React, { FC } from "react";
import { IntentValue, Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Color from "../components/Color";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface BackgroundColorsProps {
  variant?: "deep" | "solid";
  intent?: IntentValue;
  statuses?: string[];
}

const BackgroundColors: FC<BackgroundColorsProps> = (props) => {
  const {
    variant,
    intent,
    statuses = ["base", "hover", "active", "inactive", "disabled"],
  } = props;
  const { var: prefix } = Prefix.useConfig();

  const rows = statuses.map((status) => {
    let name = "background-color-";
    if (variant) {
      name += variant + "-";
    }
    if (intent) {
      name += intent + "-";
    }
    name += status;

    return [
      <Color name={name} />,
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
      style={{ marginBottom: `var(--${prefix}space-8x)` }}
    />
  );
};

export default BackgroundColors;
