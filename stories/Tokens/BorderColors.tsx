import React, { FC } from "react";
import { IntentValue, Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface BorderColorsProps {
  variant?: "deep" | "solid";
  intent?: IntentValue;
  statuses?: string[];
}

const BorderColors: FC<BorderColorsProps> = (props) => {
  const {
    variant,
    intent,
    statuses = ["base", "hover", "active", "inactive", "disabled"],
  } = props;
  const { var: prefix } = Prefix.useConfig();

  const rows = statuses.map((status) => {
    let name = "border-color-";
    if (variant) {
      name += variant + "-";
    }
    if (intent) {
      name += intent + "-";
    }
    name += status;

    return [
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value
        format="hex"
        styleName="color"
        styleValue={`var(--${prefix}${name})`}
      />,
      <div
        style={{
          width: 32,
          height: 32,
          border: `1px solid var(--${prefix}${name})`,
          borderRadius: `var(--${prefix}border-radius-fixed-small)`,
        }}
      />,
    ];
  });

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={rows}
      style={{ marginBottom: `var(--${prefix}space-8x)` }}
    />
  );
};

export default BorderColors;
